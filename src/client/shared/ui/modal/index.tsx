import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.css'

export const Modal = ({
                          children,
                          open,
                          onClose,
                          className,
                      }: {
    children: ReactNode
    open: boolean
    onClose: () => void
    className?: string
}) => {
    
    if (!open) {
        return null
    }
    
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }
    return (
        <>
            {createPortal(<div
                    className={styles.overlay}
                    onClick={handleOverlayClick}
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            onClose && onClose()
                        }}
                        className={styles.closeBtn}
                    >
                        <img
                            alt={'close'}
                            src={'/images/close-icon.svg'}
                            className={styles.closeImg}
                        />
                    </button>
                    
                    <div
                        onMouseDown={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                        className={className}
                    >
                        {children}
                    </div>
                </div>,
                document.body as unknown as Element)
            }
        </>
    )
}

