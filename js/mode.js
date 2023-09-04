const body = document.querySelector('body');
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

const toggleModeBtn = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};


// Toggle mode
const modeLocal = localStorage.getItem("mode");
if (modeLocal) {
  toggleModeBtn();
}


darkBtn.onclick = () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark");
};
lightBtn.onclick = () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
};