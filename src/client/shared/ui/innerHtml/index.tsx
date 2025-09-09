import React from 'react'
import { classNames } from '@client-utils/classNames'
import styles from './styles.module.css'
export const InnerHtml = ({
                              html,
                              className,
                              
                          }: {
    html: string
    className?: string
}) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: html,
            }}
            className={classNames(className,styles.root)}
        />
    )
}

