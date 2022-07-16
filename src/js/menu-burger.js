const menuToggle = document.querySelector('#menuToggle');

menuToggle.addEventListener('click', function() {
    if (this.type === "button") {
        this.type= "submit"
    } else {
        this.type= "button"
    }
})