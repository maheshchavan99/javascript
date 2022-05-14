const loginElement = document.getElementById('login')
loginElement.addEventListener('click', function() {
    const userNameVal = document.getElementById('userName')
    const passwordVal = document.getElementById('password')

    const isUserName = validUserName(userNameVal)
    const isPassword = validPassword(passwordVal)

})

function validUserName(userName) {
    if (userName) {
        console.log(userName);
        showUserNameErorr(false);
        return true
    } else {
        //console.log('user is emty')
        showUserNameErorr(true)
        return false
    }

}

function validPassword(userName) {
    if (userName) {
        console.log(userName);
        showUserNameErorr(false);
        return true
    } else {
        console.log('user is emty')
        showUserNameErorr(true)
        return false
    }

}