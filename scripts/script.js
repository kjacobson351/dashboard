const sidebar = document.querySelector(".sidebar");

const button = document.querySelector("#open-button");

const closeButton = document.querySelector("#close-button");

button.onclick = () => {
sidebar.classList.toggle("open")
}

closeButton.onclick = () => {
sidebar.classList.toggle("open")
}