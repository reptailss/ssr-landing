import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { classNames } from '@client-utils/classNames'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { PaginationLinkHrefBuilderFn } from '@client-ui/pagination/types/build'

type PageItem = number | '...';

function getPageNumbers(currentPage: number, totalPages: number): PageItem[] {
    const delta = 1
    const pages: number[] = []
    for (let i = 1; i <= totalPages; i++) {
        const isFirstOrLast = i === 1 || i === totalPages
        const isNearCurrent = i >= currentPage - delta && i <= currentPage + delta
        
        if (isFirstOrLast || isNearCurrent) {
            pages.push(i)
        }
    }
    const pagesWithDots: PageItem[] = []
    let prevPage: number | null = null
    
    for (const page of pages) {
        if (prevPage !== null) {
            if (page - prevPage === 2) {
                pagesWithDots.push(prevPage + 1)
            } else if (page - prevPage > 2) {
                pagesWithDots.push('...')
            }
        }
        
        pagesWithDots.push(page)
        prevPage = page
    }
    
    return pagesWithDots
}


const ButtonPage = ({
                        onClick,
                        disabled,
                        children,
                        linkHrefBuilderFn,
                        page,
                    }: {
    onClick: () => void
    disabled: boolean
    children: ReactNode
    page: number
    linkHrefBuilderFn?: (page: number) => string
}) => {
    if (linkHrefBuilderFn) {
        const href = linkHrefBuilderFn(page)
        return (
            <a
                onClick={(e) => {
                    e.preventDefault()
                    onClick()
                }}
                className={classNames(styles.btn, disabled && styles.disabled)}
                href={href}
            >
                {children}
            </a>
        )
    }
    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
            disabled={disabled}
            className={styles.btn}
        >
            {children}
        </button>
    )
}

export const Pagination = ({
                               page,
                               totalPage,
                               onChange,
                               linkHrefBuilderFn,
                           }: {
    page: number
    totalPage: number
    onChange: (page: number) => void
    linkHrefBuilderFn?: PaginationLinkHrefBuilderFn
}) => {
    
    const t = useTranslation()
    const handlePageClick = (page: number) => {
        onChange(page)
    }
    
    const renderPageNumbers = () => {
        const pages = getPageNumbers(page, totalPage)
        
        return pages.map((p, index) => {
            if (p === '...') {
                return (
                    <span
                        key={`dots-${index}`}
                        className={styles.dots}
                    >
                    ...
                </span>
                )
            }
            
            if (linkHrefBuilderFn) {
                const href = linkHrefBuilderFn(p)
                return (
                    <a
                        key={p}
                        href={href}
                        className={classNames(styles.page, p === page && styles.active)}
                        onClick={(e) => {
                            e.preventDefault()
                            handlePageClick(Number(p))
                        }}
                    >
                        {p}
                    </a>
                )
            }
            
            return (
                <button
                    key={p}
                    className={classNames(styles.page, p === page && styles.active)}
                    onClick={(e) => {
                        e.preventDefault()
                        handlePageClick(Number(p))
                    }}
                >
                    {p}
                </button>
            )
        })
    }
    
    return (
        <div
            className={styles.root}
        >
            <ButtonPage
                onClick={() => {
                    
                    handlePageClick(page - 1)
                }}
                disabled={page === 1}
                page={page - 1}
                linkHrefBuilderFn={linkHrefBuilderFn}
            >
                ← {t('prev')}
            </ButtonPage>
            
            {renderPageNumbers()}
            
            <ButtonPage
                onClick={() => {
                    handlePageClick(page + 1)
                }}
                disabled={page === totalPage}
                page={page + 1}
                linkHrefBuilderFn={linkHrefBuilderFn}
            >
                {t('next')} →
            </ButtonPage>
        </div>
    )
}
