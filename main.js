const inputContainer = document.querySelector('input')
const bodyElement = document.documentElement

const lightTheme = {
    '--background-color': '#fff',
    '--toggle-color': 'rgba(255, 169, 220, 0.5)',
    '--text-color': '#1c1c1c',
    '--content-bg-color': '#F3F3F3',
    '--btn-text-pink': '#F925A2',
    '--btn-text-purple': '#9B3EF8',
    '--line-color': '4px solid #C3C3C3',
    '--bg-button-color': '#EFEFEF',
    '--bg-img-color': 'url("./img/bg-img.png")',
    '--bg-btn-hover': '#E7E7E7'
}

const darkTheme = {
    '--background-color': '#07091B',
    '--toggle-color': '#7E24AB',
    '--text-color': '#FFF',
    '--content-bg-color': '#141527',
    '--btn-text-pink': '#F925A2',
    '--btn-text-purple': '#9B3EF8',
    '--line-color': '4px solid #FFF',
    '--bg-button-color': '#151629',
    '--bg-img-color': 'url("./img/bg-img-dark.png")',
    '--bg-btn-hover': '#1D1E2F'
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    if (isChecked) {
        changeTheme(darkTheme)
    } else {
        changeTheme(lightTheme)
    }
})

function changeTheme(theme) {
   for (let prop in theme) {
    changeProperty(prop, theme[prop])
   }
}

function changeProperty(property, value) {
    bodyElement.style.setProperty(property, value)
}
