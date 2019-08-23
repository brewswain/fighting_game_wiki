const button = document.querySelectorAll(".button");
const home = document.querySelector(".fa-home");
const characters = document.querySelector(".fa-user-friends");
const stream = document.querySelector(".fa-twitch");
const discord = document.querySelector(".fa-discord");
const navInfo = document.querySelector(".nav-info");
const characterList = document.querySelector(".character-list");
const streamList = document.querySelector(".stream-list");

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
    navInfo.classList.contains("stream-open") ||
    streamList.classList.contains("visible-flex")
  ) {
    navInfo.classList.remove("stream-open");
    streamList.classList.remove("visible-flex");
  }
});

stream.addEventListener("click", () => {
  navInfo.classList.toggle("stream-open");

  if (streamList.classList.contains("visible-flex")) {
    setTimeout(() => {
      streamList.classList.remove("visible-flex");
    }, 100);
  } else {
    streamList.classList.toggle("visible-flex");
  }

  if (
    navInfo.classList.contains("character-open") ||
    characterList.classList.contains("visible-flex")
  ) {
    navInfo.classList.remove("character-open");
    characterList.classList.remove("visible-flex");
  }
});

function navBarExpand() {
  navInfo.classList.toggle("open");
}

// Experimental logic to ensure that clicking one button to open and using a different button to close does not cause any glitches.
