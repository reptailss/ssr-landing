import { useCallback, useContext } from 'react'
import { TranslationsContextValue } from '@client-shared/translations/context/contextValue'

export function useTranslation() {
    const translations = useContext(TranslationsContextValue)
    return useCallback((key: string) => {
        if (!(key in translations)) {
            return key
        }
        return translations[key]
    }, [translations])
}