import { USE_DARK_MODE } from './constants'

/**
 * Should return true when dark mode enabled
 * Should return false when dark mode disabled
 * @returns {boolean}
 */
export const checkIfDarkModeEnabledOnClientDevice = () => {
    if (window && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
}

/**
 * Should take isDarkModeEnabled as arg, its a boolean
 * Should set state to local storage.
 * Should return false when error occurs when saving to local storage
 * @param isDarkModeEnabled
 */
export const setDarkModePrefToLocalStorage = (isDarkModeEnabled) => {
    if (window && window.localStorage) {
        try {
            window.localStorage.setItem(USE_DARK_MODE, isDarkModeEnabled)
            return true
        } catch (e) {
            return false
        }
    }
}

/**
 * Should return the exact pref from local storage when no error occurs
 * Should return false when local storage read error occurred
 * @returns {string|boolean}
 */
export const getDarkModePrefFromLocalStorage = () => {
    if (window && window.localStorage) {
        try {
            return window.localStorage.getItem(USE_DARK_MODE)
        } catch (e) {
            return false
        }
    }
}

/**
 * If user wants dark mode on his apps, use it first. If for some reason
 * dark mode is disabled on his client but he chooses dark mode on app. Use it next
 *
 * If dark mode is enabled in either client or app, use it.
 * @returns {boolean|string}
 */
export const shouldUseDarkMode = () => {
    return (
        checkIfDarkModeEnabledOnClientDevice() ||
        getDarkModePrefFromLocalStorage()
    )
}
