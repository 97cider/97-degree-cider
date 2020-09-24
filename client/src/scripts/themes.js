const standardTheme = require('../scss/standard-theme.scss');
const darkTheme = require('../scss/dark-theme.scss');

module.exports = Object.assign({
    standardTheme: {
        base: standardTheme.baseColor,
        text: standardTheme.textColor,
        detail: standardTheme.detailColor,
        highlight: standardTheme.highlightColor,
    },
    darkTheme: {
        base: darkTheme.baseColor,
        text: darkTheme.textColor,
        detail: darkTheme.detailColor,
        highlight: darkTheme.highlightColor,
    }
});