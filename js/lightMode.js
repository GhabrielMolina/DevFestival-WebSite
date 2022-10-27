const toggleBtn = document.getElementById('btn-light-mode')
let lightMode = localStorage.getItem ('light-mode')

const enableLightMode = () => {
    document.body.classList.toggle('light')
    window.localStorage.setItem('light-mode', 'enable')
}

const disableLightMode = () => {
    document.body.classList.remove('light')
    window.localStorage.setItem('light-mode', 'disable')
}

if (lightMode === 'enable') {
    enableLightMode ()
}

toggleBtn.addEventListener('click', (e) => {
    lightMode = localStorage.getItem('light-mode')
    
    if (lightMode === 'enable') {
        disableLightMode()
    }   else {
        enableLightMode()
    }
})

























//  CODE  BY GHABRIEL MOLINA 
//  LINKEDIN 
// https://www.linkedin.com/in/ghabriel-molina/ 