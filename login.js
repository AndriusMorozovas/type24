const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const alert = document.querySelector(".alert")


button.onclick = () => {
    const myUser = {
        email: inputs[0].value,
        password: inputs[1].value,
    }

    if (localStorage.getItem("email") !== myUser.email) {
        alert.innerText = "Incorrect email address"
    }
    if (localStorage.getItem("passwordOne") !== myUser.password) {
        alert.innerText = "Incorrect password"
    } else {
        alert.innerText = "Successful login!"
        window.open("index.html")
    }

}

