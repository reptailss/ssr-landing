import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'


export const IconBtn = ({
                            onClick,
                            children,
                            className,
                            disabled,
                        }: {
    onClick?: () => void
    children?: ReactNode
    className?: string
    disabled?: boolean
}) => {
    
    const handleClick: MouseEventHandler = (e) => {
        e.preventDefault()
        onClick && onClick()
    }
    return (
        <button
            className={classNames(styles.iconBtn, className)}
            onClick={onClick ? handleClick : undefined}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
