const standardTheme = require('../scss/standard-theme.scss');
const darkTheme = require('../scss/dark-theme.scss');

module.exports = Object.assign({
    standardTheme: {
        base: standardTheme.primaryThemeColor,
        light: standardTheme.darkThemeColor,
        dark: standardTheme.lightThemeColor,
        highlight: standardTheme.highlightThemeColor
    },
    darkTheme: {
        base: darkTheme.primaryThemeColor,
        light: darkTheme.darkThemeColor,
        dark: darkTheme.lightThemeColor,
        highlight: darkTheme.highlightThemeColor
    }
});