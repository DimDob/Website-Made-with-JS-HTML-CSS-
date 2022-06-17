const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})





let registerBtn = document.getElementsByClassName('registerbtn')[0]
function trigger() {
    let passwordInput = document.getElementById('psw').value
    let emailInput = document.getElementById('email').value
    const result = emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'g')
    const strongPasswordRegExp = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

    if (result == null){
        alert('Wrong email! Please select a valid email.')
    } else if (strongPasswordRegExp.test(passwordInput) == false) {
        alert('Please enter more secure password!')
    } else { 
        alert('Welcome! Your data has been registered to the system.')
        window.location.href = 'main_page.html'
    }
}
