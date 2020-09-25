const standardTheme = require('../scss/standard-theme.scss');
const darkTheme = require('../scss/dark-theme.scss');
const blueTheme = require('../scss/rain-theme.scss');
const mornTheme = require('../scss/morning-theme.scss');
// module.exports = Object.assign({
//     standardTheme: {
//         name: 'Spring Latte',
//         base: standardTheme.baseColor,
//         text: standardTheme.textColor,
//         detail: standardTheme.detailColor,
//         highlight: standardTheme.highlightColor,
//     },
//     darkTheme: {
//         name: 'Dark Mocha',
//         base: darkTheme.baseColor,
//         text: darkTheme.textColor,
//         detail: darkTheme.detailColor,
//         highlight: darkTheme.highlightColor,
//     }
// });

module.exports = Object.assign({
    themes: [{
            name: 'Spring Latte',
            invertIcons: true,
            base: standardTheme.baseColor,
            text: standardTheme.textColor,
            detail: standardTheme.detailColor,
            highlight: standardTheme.highlightColor,
        },
        {
            name: 'Dark Mocha',
            invertIcons: true,
            base: darkTheme.baseColor,
            text: darkTheme.textColor,
            detail: darkTheme.detailColor,
            highlight: darkTheme.highlightColor,
        },
        {
            name: 'Rainy Season',
            invertIcons: true,
            base: blueTheme.baseColor,
            text: blueTheme.textColor,
            detail: blueTheme.detailColor,
            highlight: blueTheme.highlightColor,
        },
        {
            name: 'Morning Commute',
            invertIcons: false,
            base: mornTheme.baseColor,
            text: mornTheme.textColor,
            detail: mornTheme.detailColor,
            highlight: mornTheme.highlightColor,
        }
    ]
});