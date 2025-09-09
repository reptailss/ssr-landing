import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'


export const SecondaryBtn = ({
                                 onClick,
                                 children,
                                 className,
                                 type,
                                 disabled,
                             }: {
    onClick?: () => void
    children: ReactNode
    className?: string
    type?: 'submit'
    disabled?: boolean
}) => {
    
    const handleClick: MouseEventHandler = (e) => {
        e.preventDefault()
        onClick && onClick()
    }
    return (
        <button
            className={classNames(
                styles.root,
                disabled && styles.disabled,
                className,
            )}
            onClick={onClick ? handleClick : undefined}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
