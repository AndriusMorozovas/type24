const inputUsername = document.querySelector('#input-username');
const inputPasswordOne = document.querySelector('#input-password-one');
const inputPasswordTwo = document.querySelector('#input-password-two');
const errorBox = document.querySelector('.error-box');
const loginBtn = document.querySelector('.login');





loginBtn.onclick = () => {

    const myUser = {
        name: inputUsername,
        passwordOne: inputPasswordOne,
    }
    console.log(myUser.name)

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(myUser),
    }

    fetch("http://167.99.138.67:1111/login", option)
        .then(response => response.json())
        .then(data => {

            localStorage.setItem("secret", data.secretKey)
        })

}