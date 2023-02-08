const toggle = document.querySelector('#menu-hamburguer')
const toggleClose = document.querySelector('#menu-hamburguer-close')
const headerOptions = document.querySelector('.header-options')
const header = document.querySelector('.navbar')

toggle.addEventListener('click', ()=>{
    headerOptions.style.display = 'flex'
    toggleClose.style.display = 'inline-block'
    toggle.style.display = 'none'
    /*
    toggleClose.style.position = 'relative'
    toggleClose.style.right = '-280px'
    */
})
toggleClose.addEventListener('click', ()=>{
    toggleClose.style.display = 'none'
    toggle.style.display = 'inline-block'
    headerOptions.style.display = 'none'
})