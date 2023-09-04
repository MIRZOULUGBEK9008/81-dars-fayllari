// api
const API = 'https://randomuser.me/api/?results=9';

// for leader
const overlay = document.getElementById('overlay');
const loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("overlay--hidden");
  } else {
    overlay.classList.add("overlay--hidden");
  }
};
const getData = function (res) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState > 4) {
        loaderToggle(1);
      } else if (req.readyState == 4 && req.status == 200) {
        const data = JSON.parse(req.responseText);
        resolve(data.results);
        loaderToggle(0);
      } else if (req.readyState == 4) {
        reject("error");
        loaderToggle(0);
      }
    };

    req.open("GET", res);
    req.send();
  });
};

const reLoad = () => {
  getData(API)
    .then(data => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
document.addEventListener("DOMContentLoaded", reLoad);
