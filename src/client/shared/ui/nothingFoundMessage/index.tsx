import React from 'react'
import { useTranslation } from '@client-shared/translations/useTranslation'
import styles from './styles.module.css'

export const NothingFoundMessage = () => {
    const t = useTranslation()
    return (
        <p className={styles.root}>
            {t('nothingFound')}...
        </p>
    )
}

