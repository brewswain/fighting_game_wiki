const characters = document.querySelector(".fa-bars");
const navInfo = document.querySelector(".nav-info");
const characterList = document.querySelector(".character-list");
const leftHandedMode = document.querySelector(".flip-to-left");
const rightHandedMode = document.querySelector(".flip-to-right");
const characterFlip = document.querySelectorAll(".character-flip");
const isLeftHanded = localStorage.getItem("left-handed");
const mobileView = window.matchMedia("(max-width: 820px)");
const desktopView = window.matchMedia("(min-width: 821px)");

characters.addEventListener("click", () => {
  navInfo.classList.toggle("character-open");

  characterCloseNav();
  if (desktopView.matches) {
    hideSpan();
  } else {
    showSpan();
  }
});

leftHandedMode.addEventListener("click", () => {
  makeLeftHanded();
});
rightHandedMode.addEventListener("click", () => {
  makeRightHanded();
});

function characterCloseNav() {
  if (characterList.classList.contains("visible-flex")) {
    setTimeout(() => {
      characterList.classList.toggle("visible-flex");
    }, 1000);
  } else {
    characterList.classList.toggle("visible-flex");
  }
}

function closeNav() {
  navInfo.classList.remove("video-open");
  navInfo.classList.remove("character-open");
  setTimeout(() => {
    characterList.classList.toggle("visible-flex");
    videoList.classList.remove("visible-flex");
  }, 1000);
}

function makeLeftHanded() {
  characterFlip.forEach(characterFlip => {
    characterFlip.style.textAlign = "left";
    leftHandedMode.style.display = "none";
    rightHandedMode.style.display = "block";
    localStorage.setItem("left-handed", "true");
  });
}

function makeRightHanded() {
  characterFlip.forEach(characterFlip => {
    characterFlip.style.textAlign = "right";
    leftHandedMode.style.display = "block";
    rightHandedMode.style.display = "none";
    localStorage.setItem("left-handed", "false");
  });
}

function hideSpan() {
  leftHandedMode.style.display = "none";
  rightHandedMode.style.display = "none";
}

function showSpan() {
  if (isLeftHanded === "true") {
    rightHandedMode.style.display = "block";
    leftHandedMode.style.display = "none";
  } else if (!isLeftHanded) {
    leftHandedMode.style.display = "block";
    rightHandedMode.style.display = "none";
  }
}

function getListOrientation() {
  if (mobileView.matches) {
    if (isLeftHanded === "true") {
      makeLeftHanded();
    } else {
      makeRightHanded();
    }
  }
}

getListOrientation();
