const button = document.querySelectorAll(".button");
const home = document.querySelector(".fa-home");
const characters = document.querySelector(".fa-user-friends");
const stream = document.querySelector(".fa-twitch");
const discord = document.querySelector(".fa-discord");

button.forEach(() => {
  addEventListener("click", () => {
    console.log("Hello!");
  });
});
