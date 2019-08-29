const button = document.querySelectorAll(".button");
const home = document.querySelector(".fa-home");
const characters = document.querySelector(".fa-user-friends");
const video = document.querySelector(".fa-video");
const discord = document.querySelector(".fa-discord");
const navInfo = document.querySelector(".nav-info");
const characterList = document.querySelector(".character-list");
const videoList = document.querySelector(".video-list");
const navigationButton = document.querySelector(".navigation-button");
const internalNavigation = document.querySelector(".internal-navigation");

characters.addEventListener("click", () => {
  navInfo.classList.toggle("character-open");

  if (characterList.classList.contains("visible-flex")) {
    setTimeout(() => {
      characterList.classList.toggle("visible-flex");
    }, 1000);
  } else {
    characterList.classList.toggle("visible-flex");
  }

  if (
    navInfo.classList.contains("video-open") ||
    videoList.classList.contains("visible-flex")
  ) {
    navInfo.classList.remove("video-open");
    videoList.classList.remove("visible-flex");
  }
});

video.addEventListener("click", () => {
  navInfo.classList.toggle("video-open");

  if (videoList.classList.contains("visible-flex")) {
    setTimeout(() => {
      videoList.classList.remove("visible-flex");
    }, 1000);
  } else {
    videoList.classList.toggle("visible-flex");
  }

  if (
    navInfo.classList.contains("character-open") ||
    characterList.classList.contains("visible-flex")
  ) {
    navInfo.classList.remove("character-open");
    characterList.classList.remove("visible-flex");
  }
});

navigationButton.addEventListener("click", () => {
  internalNavigation.classList.toggle("internal-navigation-dropdown");
});

// Experimental logic to ensure that clicking one button to open and using a different button to close does not cause any glitches.
