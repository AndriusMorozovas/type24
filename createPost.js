const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")


button.onclick = () => {
    const item = {
        title: inputs[0].value,
        image: inputs[1].value,
        description: inputs[2].value,
        secretKey: localStorage.getItem("secret")
    }

    const option = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(item)
    }

    fetch("http://167.99.138.67:1111/createpost", option)
        .then(res => res.json())
        .then(data => {

            console.log(data)
        })
}