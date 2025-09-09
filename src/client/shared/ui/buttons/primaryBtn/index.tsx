import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'


export const PrimaryBtn = ({
                               onClick,
                               children,
                               className,
                               disabled,
    type
                           }: {
    onClick?: () => void
    children: ReactNode
    className?: string
    disabled?: boolean
    type?:'submit' | 'button' | 'reset'
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
