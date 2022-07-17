const menuToggle = document.querySelector('#menuToggle');
const menu = document.querySelector('.header__nav-links');

function showMenu(element) {
    element.classList.toggle('active')
}

function closeMenu() {
    menuToggle.type = 'button'
    menu.classList.remove('active')
    document.body.classList.remove('stop-scroll')
}

menuToggle.addEventListener('click', function() {
    if (this.type === "button") {
        this.type= "submit"
        showMenu(menu)
        document.body.classList.add('stop-scroll')
    } else {
        this.type= "button"
        showMenu(menu)
        document.body.classList.remove('stop-scroll')
    }
})

menu.addEventListener('click', event => {
    closeMenu()
})