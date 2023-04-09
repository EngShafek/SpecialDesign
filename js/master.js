//start test local storage
let testColorStorage = localStorage.getItem("color");
if (testColorStorage !== null) {
  document.documentElement.style.setProperty("--main-color", testColorStorage);
  document.querySelectorAll(".setting .select-color li").forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color == testColorStorage) {
      li.classList.add("active");
    }
  });
}
let trOrFlsRandomImage = true;
let bgInterval;
let bgLocal = localStorage.getItem("bgrandom");
if (bgLocal !== null) {
  if (bgLocal == "true") {
    trOrFlsRandomImage = true;
    document.querySelectorAll(".setting .random-image span").forEach((span) => {
      span.classList.remove("active");
      if (span.dataset.bgimage == "yes") {
        span.classList.add("active");
      }
    });
  } else {
    trOrFlsRandomImage = false;
    document.querySelectorAll(".setting .random-image span").forEach((span) => {
      span.classList.remove("active");

      if (span.dataset.bgimage == "no") {
        span.classList.add("active");
      }
    });
  }
}
//end test local storage
//start setting
document.querySelector(".setting .toggel i").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting").classList.toggle("open");
};
let colorsLi = document.querySelectorAll(".setting .select-color li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", e.target.dataset.color);
    colorsLi.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
//start random background image
let yesOrNoRandomBg = document.querySelectorAll(".setting .random-image span");
console.log(yesOrNoRandomBg);
yesOrNoRandomBg.forEach((span) => {
  span.addEventListener("click", (e) => {
    yesOrNoRandomBg.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.bgimage === "yes") {
      trOrFlsRandomImage = true;
      fRandomImage();
      localStorage.setItem("bgrandom", true);
    } else {
      trOrFlsRandomImage = false;
      clearInterval(bgInterval);
      localStorage.setItem("bgrandom", false);
    }
  });
});
//end random background image
//end setting
// start landing page
let landingPage = document.querySelector(".landing");
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
function fRandomImage() {
  if (trOrFlsRandomImage == true) {
    bgInterval = setInterval(() => {
      let randomNumForImages = Math.floor(Math.random() * imagesArray.length);

      landingPage.style.backgroundImage = `url(../images/${imagesArray[randomNumForImages]})`;
    }, 5000);
  }
}
fRandomImage();

// end landing page
//start skills
let skillSec = document.querySelector(".skills");
window.onscroll = function () {
  let skillsOffsetTop = skillSec.offsetTop;
  let skiilsOuterHeight = skillSec.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrolHeight = this.pageYOffset;
  if (windowScrolHeight > skillsOffsetTop + skiilsOuterHeight - windowHeight) {
    let spansProg = document.querySelectorAll(".skills span");
    spansProg.forEach((span) => {
      span.style.width = span.dataset.prog;
    });
  }
};
//end skills
// start gallary
let imagesGallary = document.querySelectorAll(".gallary .images img");
imagesGallary.forEach((e) => {
  e.addEventListener("click", (img) => {
    let overLayeGallary = document.createElement("div");
    overLayeGallary.className = "overLayeGallary";
    document.body.appendChild(overLayeGallary);
    let mainDivGallary = document.createElement("div");
    mainDivGallary.className = "mainDivGallary";
    document.body.appendChild(mainDivGallary);
    let imgGallary = document.createElement("img");
    imgGallary.setAttribute("src", e.src);
    if (e.alt !== null) {
      let imgHeadingGallary = document.createElement("h3");
      imgHeadingGallary.style.textAlign = "center";
      imgHeadingGallary.style.color = "var(--main-color)";
      imgHeadingGallary.style.fontSize = "22px";
      imgHeadingGallary.textContent = e.alt;
      mainDivGallary.appendChild(imgHeadingGallary);
    }
    mainDivGallary.appendChild(imgGallary);
    let closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "x";
    mainDivGallary.appendChild(closeBtn);
  });
});
document.addEventListener("click", (e) => {
  if (e.target.className == "close-btn") {
    e.target.parentNode.remove();
    document.querySelector(".overLayeGallary").remove();
  }
});
// end gallary
// start toggel and bullets
document.querySelector(".landing i").addEventListener("click", (e) => {
  document.querySelector(".landing ul").classList.toggle("open");
});
let bullets1 = document.querySelectorAll(".scroll ul li");
let bullets2 = document.querySelectorAll(".links li a");
// function bullToggel(groub) {
//   groub.forEach((e) => {
//     addEventListener("click", (e) => {
//       document.querySelector(e.target.dataset.sec).scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });
// }
// bullToggel(bullets);
function goToSomewhere(groub) {
  groub.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.sec).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
goToSomewhere(bullets1);
goToSomewhere(bullets2);
let tlinks = document.querySelector(".landing .links");
document.addEventListener("click", (e) => {
  if (
    e.target !== tlinks &&
    e.target !== document.querySelector(".landing i")
  ) {
    tlinks.classList.remove("open");
  }
});
tlinks.onclick = function (e) {
  e.stopPropagation();
};
// end toggel and bullets
