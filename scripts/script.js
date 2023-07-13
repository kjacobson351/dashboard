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

//RESUME SLIDER


const main1 = document.querySelector(".main1")
const first1 = document.querySelector(".first-page-first-section")
const first2 = document.querySelector(".first-page-second-section");
const second1 = document.querySelector(".second-page-first-section");
const main2Wrapper = document.querySelector(".main2-wrapper");
const slider = document.querySelector("#slider");
const toggleResumeButton = document.querySelector("#toggle-resume-btn");
slider.addEventListener("input", changeValue);
function changeValue(){
    const sliderValue = slider.value;
    main2Wrapper.style.transform = `translateX(${sliderValue}%)`;
    if (sliderValue == 0) {
        main1.style.display = "none"
        toggleResumeButton.style.display = "none";   
    } else {
        main1.style.display = "grid";
        toggleResumeButton.style.display = "block";
        
    }
}


