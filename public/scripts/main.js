const characters = document.querySelector(".fa-user-friends");
const video = document.querySelector(".fa-video");
const navInfo = document.querySelector(".nav-info");
const characterList = document.querySelector(".character-list");
const videoList = document.querySelector(".video-list");
const navigationButton = document.querySelector(".navigation-button");
const internalNavigation = document.querySelector(".internal-navigation");
const leftHandedMode = document.querySelector(".flip-to-left");
const rightHandedMode = document.querySelector(".flip-to-right");
const characterFlip = document.querySelectorAll(".character-flip");
const isLeftHanded = localStorage.getItem("left-handed");
const mobileView = window.matchMedia("(max-width: 820px)");
const desktopView = window.matchMedia("(min-width: 821px)");

video.addEventListener("click", () => {
  navInfo.classList.toggle("video-open");
  videoCloseNav();
});

characters.addEventListener("click", () => {
  navInfo.classList.toggle("character-open");

  characterCloseNav();
  if (desktopView.matches) {
    hideSpan();
  } else {
    showSpan();
  }
});

navigationButton.addEventListener("click", () => {
  openInternalNavigation();
});

leftHandedMode.addEventListener("click", () => {
  makeLeftHanded();
});
rightHandedMode.addEventListener("click", () => {
  makeRightHanded();
});

function videoCloseNav() {
  if (videoList.classList.contains("visible-flex")) {
    setTimeout(() => {
      videoList.classList.remove("visible-flex");
    }, 1000);
  } else {
    videoList.classList.toggle("visible-flex");
  }

  if (
    navInfo.classList.contains("character-open") ||
    characterList.classList.contains("visible-flex") ||
    internalNavigation.classList.contains("internal-navigation-dropdown")
  ) {
    internalNavigation.classList.remove("internal-navigation-dropdown");
    navInfo.classList.remove("character-open");
    characterList.classList.remove("visible-flex");
  }
}

function characterCloseNav() {
  if (characterList.classList.contains("visible-flex")) {
    setTimeout(() => {
      characterList.classList.toggle("visible-flex");
    }, 1000);
  } else {
    characterList.classList.toggle("visible-flex");
  }

  if (
    navInfo.classList.contains("video-open") ||
    videoList.classList.contains("visible-flex") ||
    internalNavigation.classList.contains("internal-navigation-dropdown")
  ) {
    internalNavigation.classList.remove("internal-navigation-dropdown");
    navInfo.classList.remove("video-open");
    videoList.classList.remove("visible-flex");
  }
}

function openInternalNavigation() {
  if (
    navInfo.classList.contains("video-open") ||
    navInfo.classList.contains("character-open")
  ) {
    closeNav();
  }
  internalNavigation.classList.toggle("internal-navigation-dropdown");
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
