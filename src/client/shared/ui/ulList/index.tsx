import React from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'

export const UlList = ({
                           title,
                           list,
                           className,
                           color = 'white',
                           textVariant = 'primary',
                           listClassName,
                       }: {
    title?: string
    list: string[]
    className?: string
    color?: 'black' | 'white'
    textVariant?: 'primary' | 'secondary'
    listClassName?: string
}) => {
    
    return (
        <div
            className={className}
        >
            {title && <p
                className={classNames(
                    styles.title,
                    color === 'white' ? styles.white : styles.black,
                    textVariant === 'secondary' && styles.secondary,
                )}
            >
                {title}
            </p>}
            
            <ul
                className={classNames(
                    styles.list,
                    title && styles.padding,
                    listClassName,
                )}
            >
                {list.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={classNames(
                                styles.item,
                                color === 'white' ? styles.white : styles.black,
                                textVariant === 'secondary' && styles.secondary,
                            )}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

