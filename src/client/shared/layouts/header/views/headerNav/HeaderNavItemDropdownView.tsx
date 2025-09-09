import React, { useRef, useState, useState as useReactState } from 'react'
import ReactDOM from 'react-dom'
import { HeaderNavItem } from '@client-shared/layouts/header/types'
import styles from './styles.module.css'
import { useTranslation } from '@client-shared/translations/useTranslation'
import { Link, useLocationWithoutLocale, useNavigate } from 'os-react-ssr-client'
import { classNames } from '@client-utils/classNames'

export const HeaderNavItemDropdownView = ({
                                              headerNavItem,
                                              hasDesktopBgTransparent,
                                          }: {
    headerNavItem: HeaderNavItem
    hasDesktopBgTransparent?: boolean
}) => {
    
    
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    const [coords, setCoords] = useReactState<{ top: number; left: number; width: number | string } | null>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const t = useTranslation()
    const navigate = useNavigate()
    const location = useLocationWithoutLocale()
    
    const handleOpen = (value: boolean) => {
        if (value) {
            if (triggerRef.current) {
                const rect = triggerRef.current.getBoundingClientRect()
                rect.width
                setCoords({
                    top: rect.bottom,
                    left: rect.left,
                    width: rect.width > 70 ? rect.width : 'auto',
                })
            }
            setVisible(true)
            setOpen(true)
        } else {
            setOpen(false)
            setVisible(false)
        }
    }
    if(location.url === headerNavItem.href){
        return (
            <Link
                className={styles.item}
                href={headerNavItem.href}
            >
                {t(headerNavItem.key)}
            </Link>
        )
    }
    
    return (
        <div
            ref={triggerRef}
            className={styles.dropdownWrapper}
            onMouseEnter={() => handleOpen(true)}
            onMouseLeave={() => handleOpen(false)}
        >
            <a
                className={styles.item}
                href={headerNavItem.href}
                onClick={(e) => {
                    e.preventDefault()
                    handleOpen(false)
                    navigate(headerNavItem.href)
                }}
            >
                {t(headerNavItem.key)}
            </a>
            
            {visible && ReactDOM.createPortal(
                <div
                    className={classNames(
                        styles.dropdown,
                        open && styles.open,
                        hasDesktopBgTransparent && styles.desktopBgTransparent,
                    )}
                    style={{
                        position: 'fixed',
                        top: coords?.top,
                        left: coords?.left,
                        width: coords?.width,
                    }}
                >
                    {headerNavItem.children.map((child) => (
                        <a
                            className={styles.dropdownItem}
                            key={child.href}
                            href={child.href}
                            onClick={(e) => {
                                e.preventDefault()
                                handleOpen(false)
                                navigate(child.href)
                            }}
                        >
                            {t(child.key)}
                        </a>
                    ))}
                </div>,
                document.body,
            )}
        </div>
    )
}
