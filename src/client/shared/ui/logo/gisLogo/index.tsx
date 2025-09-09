import React from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'

export const GisLogo = ({
                         className,
                     }: {
    className?: string
}) => {
    return (
        <img
            className={classNames(styles.root, className)}
            src={'/images/gis-logo.png'}
            alt={'gis-logo'}
            loading="lazy"
        />
    )
}
