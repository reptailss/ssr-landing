import styles from './styles.module.css'
import React from 'react'
import { CircleSpinner } from '@client-ui/spinners/cirlceSpinner/CircleSpinner'

export const OverlaySpinner = () => {
    return (
        <div
            className={styles.root}
        >
            <CircleSpinner />
        </div>
    )
}
