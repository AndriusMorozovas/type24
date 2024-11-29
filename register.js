const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const alert = document.querySelector(".alert")

button.onclick = () => {
    const myUser = {
        email: inputs[0].value,
        passwordOne: inputs[1].value,
        passwordTwo: inputs[2].value,
        image: "https://th.bing.com/th/id/R.53c40003551744b9689dc52f158cafe0?rik=%2fd6w2xE5GDXGTQ&pid=ImgRaw&r=0"
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myUser.email) === false)
    {
        alert.innerText = "You have entered an invalid email address!"
    }
    if (myUser.passwordOne.length && myUser.passwordTwo.length < 4) {
        alert.innerText = "Password is too short"
    }
    if (myUser.passwordOne.length && myUser.passwordTwo.length >= 20) {
        alert.innerText = "Password is too long"
    }
    if (myUser.passwordOne !== myUser.passwordTwo) {
        alert.innerText = "Passwords dont match"
    }
    alert.innerText = "Registration successful!"
    localStorage.setItem("email", myUser.email)
    localStorage.setItem("passwordOne", myUser.passwordOne)
    localStorage.setItem("image", myUser.image)

}
