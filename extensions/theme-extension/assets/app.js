const popupLogin = document.querySelector('.popup-login')
const backBtn1 = document.querySelector('.back-btn')

function openPopup() {
  var popup = document.getElementById("popupContainer");
  popup.style.display = "flex";
  showSlide(1);
}

function removeLogin() {
  if (getCurrentSlide() > 2) {
    popupLogin.style.visibility = "hidden"
    backBtn1.classList.remove('hidden')
  } else {
    popupLogin.style.visibility = "visible"
    backBtn1.classList.add('hidden')
  }
}


function closePopup() {
  var popup = document.getElementById("popupContainer");
  popup.style.display = "none";
}

function previousSlide() {
  var currentSlide = getCurrentSlide();
  if (currentSlide > 1) {
    showSlide(currentSlide - 1);
  }
}

function nextSlide() {
  var currentSlide = getCurrentSlide();
  if (currentSlide < 7) {
    showSlide(currentSlide + 1);
  }
}

function getCurrentSlide() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      return i + 1;
    }
  }
}

function showSlide(slideNumber) {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideNumber - 1].classList.add("active");
  slides[slideNumber - 1].style.animation = "fade-in 0.5s ease-in";

  var previousSlide = slideNumber - 2;
  if (previousSlide >= 0) {
    slides[previousSlide].style.animation = "fade-out 0.5s ease-out";
    setTimeout(function () {
      slides[previousSlide].classList.remove("active");
      sideNote();
      removeLogin()
    }, 500);
  }


}

function sideNote() {
  const steps_nav = document.querySelector('.steps-nav');
  const page_num = document.querySelector('.page_num');

  if (getCurrentSlide() > 2) {
    steps_nav.classList.remove('hidden')
    page_num.innerText = getCurrentSlide() - 2;
  } else {
    steps_nav.classList.add('hidden')
  }
}


const options = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, "14W", "15 Extended", 37, "16W", "16 Extended", 38, "18W", "18 Extended", 39, "20W", "20 Extended", 40, "22W", "22 Extended", 41, "24W", "24 Extended", 42, "26W", "28W"];

const selectElement = document.getElementById("jean");

options.forEach((option) => {
  const optionElement = document.createElement("option");
  optionElement.value = option;
  optionElement.text = option;
  selectElement.appendChild(optionElement);
});


const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");

checkbox3.addEventListener("change", () => {
  if (checkbox3.checked) {
    checkbox1.checked = false;
    checkbox2.checked = false;
  }
});

checkbox1.addEventListener("change", () => {
  if (checkbox1.checked) {
    checkbox3.checked = false;
  }
});

checkbox2.addEventListener("change", () => {
  if (checkbox2.checked) {
    checkbox3.checked = false;
  }
});

const inches = document.querySelector('#heightin')
const cm = document.querySelector('#heightcm')

function choose_cm() {
  cm.classList.remove('hidden')
  inches.classList.add('hidden')
}

function choose_inches() {
  inches.classList.remove('hidden')
  cm.classList.add('hidden')
}
