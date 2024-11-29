const header = document.querySelector('.header');
const container2 = document.querySelector('.container-2');
const chatBox = document.querySelector('.chat-box');
const messageInput = document.querySelector('input');
const button = document.querySelector('button');

let message = []

header.innerText = `Logged in as: ${localStorage.getItem('email')}`;

button.onclick = () => {
    message.push(messageInput.value)
    chatBox.innerHTML += `
    <div class="message-text">${message[message.length - 1]}</div>
<div class="date">${new Date()}</div>`
}