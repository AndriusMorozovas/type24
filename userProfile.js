const header = document.querySelector('.header');
const container2 = document.querySelector('.container-2');




header.innerText = `Logged in as: ${localStorage.getItem('email')}`;

container2.innerHTML = `
<div class="grow2 d-flex f-column profile-image">
      <img src="${localStorage.getItem('image')}" alt="" class="profile-picture">
      <input type="text" class="input-image" placeholder="Enter image url">
      <button class="change-image">Change profile picture</button>
    </div>
    <div class="grow2 user-details">
      <h3>Email: ${localStorage.getItem('email')}</h3>
      <input type="password" class="input-password" placeholder="Enter new password">
      <button class="change-password">Change your password</button>
    </div>`

const btnImage = document.querySelector('.change-image');
const inputImage = document.querySelector('.input-image');

btnImage.onclick = () => {
    container2.innerHTML = `<div class="grow2 d-flex f-column profile-image">
      <img src="${inputImage.value}" alt="">
      <input type="text" class="input-image" placeholder="Enter image url">
      <button class="change-image">Change profile picture</button>
    </div>
    <div class="grow2 user-details">
      <h3>Email: ${localStorage.getItem('email')}</h3>
      <input type="password" class="input-password" placeholder="Enter new password">
      <button class="change-password">Change your password</button>
    </div>`
    localStorage.setItem('image', inputImage.value)
}

const btnPassword = document.querySelector('.change-password');
const inputPassword = document.querySelector('.input-password');

btnPassword.onclick = () => {
    const newPassword = inputPassword.value;
    localStorage.setItem('passwordOne', newPassword);
}
