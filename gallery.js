const header = document.querySelector('.header');
const container2 = document.querySelector('.container-2');

header.innerText = `Logged in as: ${localStorage.getItem('email')}`;

fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => res.json())
.then(data => {

    for (let i = 0; i < 20; i++) {
        container2.innerHTML += `
        <div class="image-box">
        <img src="${data[i].url}" alt="${data[i].id}">
</div>
        `
    }
})