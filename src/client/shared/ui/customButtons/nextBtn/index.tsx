import React from 'react'
import { IconBtn } from '@client-ui/buttons/iconBtn'

export const NextBtn = ({
                                 onClick,
                                 className,
                             }: {
    onClick?: () => void
    className?: string
}) => {
    return (
        <IconBtn
            onClick={onClick}
            className={className}
        >
            <img
                alt={'next-slide'}
                src={'/images/next-slide-icon.svg'}
                loading="lazy"
            />
        </IconBtn>
    )
}

