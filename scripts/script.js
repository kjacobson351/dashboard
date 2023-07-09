///////SIDE BAR TOGGLE
const sidebar = document.querySelector(".sidebar");

const button = document.querySelector("#open-button");

const closeButton = document.querySelector("#close-button");

button.onclick = () => {
sidebar.classList.toggle("open")
}

closeButton.onclick = () => {
sidebar.classList.toggle("open")
}
//////RESUME LAYOUT TOGGLE
const resumeTogglebtn = document.querySelector("#toggle-resume-btn");

const japaneseResume = document.querySelector(".japanese-resume");

resumeTogglebtn.onclick = () => {
japaneseResume.classList.toggle("layout");
}