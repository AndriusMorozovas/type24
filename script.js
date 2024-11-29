const header = document.querySelector('.header');
const container2 = document.querySelector('.container-2');

let posts = []

header.innerText = `Logged in as: ${localStorage.getItem('email')}`;

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        posts.push(data[i])
        container2.innerHTML += `<div class="post-box d-flex f-column">
<div class="id">${data[i].id}</div>
<h3 class="title">${data[i].title}</h3>
<p class="text">${data[i].body}</p>
</div>`
    }
    const titles = document.querySelectorAll(".post-box")
    titles.forEach((item, index) => {
        item.onclick = () => {

            localStorage.setItem("post_id", posts[index].id)


            window.location.href = "singlePost.html"
        }
    })
})



