import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { PrimaryInput } from '@client-ui/inputs/primaryInput'
import { Modal } from '@client-ui/modal'
import { useTranslation } from '@client-shared/translations/useTranslation'

export const SearchModalPanel = ({
                                     onChangeSearchValue,
                                     children,
                                     open,
                                     onClose,
                                 }: {
    onChangeSearchValue: (value: string) => void
    open: boolean
    onClose: () => void
    children: ReactNode
}) => {
    
    const t = useTranslation()
    return (
        <Modal
            open={open}
            onClose={onClose}
            className={styles.modal}
        >
            <div
                className={styles.root}
            >
                <div
                    className={styles.header}
                >
                    <PrimaryInput
                        onChange={onChangeSearchValue}
                        placeholder={t('search')}
                    />
                </div>
                
                <div
                    className={styles.results}
                >
                    {children}
                </div>
            </div>
        </Modal>
    )
}

