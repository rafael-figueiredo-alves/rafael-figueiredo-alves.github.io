interface TranslationKey {
    [key: string]: string
}

interface TranslationScreen {
    [key: string]: TranslationKey
}

export interface iTranslation {
    [key: string]: TranslationScreen
}