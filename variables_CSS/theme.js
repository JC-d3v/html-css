const changeThemeButtons = document.querySelectorAll('[name=theme]');
const rootStyles = document.documentElement.style;
const lightTheme = {
  '--bg-color': "#eee",
  '--bg-color-2': "#fff",
  '--text-color': "#53575a",
  '--accent-color': "#007bdf",
  '--font': "'Open Sans', sans-serif"
}

const darkTheme = {
  '--bg-color': "#53575a",
  '--bg-color-2': "#282d31",
  '--text-color': "#eee",
  '--accent-color': "#FF3C32",
  '--font': "'Menlo', sans-serif"
}

for (let button of changeThemeButtons) {
  button.addEventListener('change', (e) => {
    if (e.target.id === 'dark') {
      changeTheme(darkTheme)
    } else if (e.target.id === 'light') {
      changeTheme(lightTheme)
    }
  })
}

const changeTheme = theme => {
  let cssVars = Object.keys(theme)
  for (let cssVar of cssVars) {
    rootStyles.setProperty(cssVar, theme[cssVar])
  }
}