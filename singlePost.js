const header = document.querySelector('.header');
const container2 = document.querySelector('.container-2');

header.innerText = `Logged in as: ${localStorage.getItem('email')}`;

const post_id = localStorage.getItem("post_id")

let post = null

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(res => res.json())
    .then(data => {

        post = data.data

        container2.innerHTML += `
            <div class="post-box d-flex f-column" style="width:900px">
<div class="id">${data.id}</div>
<h3 class="title">${data.title}</h3>
<p class="text">${data.body}</p>
</div>
`
    })