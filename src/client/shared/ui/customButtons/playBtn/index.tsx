import React from 'react'
import { IconBtn } from '@client-ui/buttons/iconBtn'
import styles from './styles.module.css'

export const PlayBtn = ({
                            className,
                        }: {
    className?: string,
}) => {
    return (
        <IconBtn
            className={className}
        >
            <div className={styles.playBtn} />
        </IconBtn>
    
    )
}

