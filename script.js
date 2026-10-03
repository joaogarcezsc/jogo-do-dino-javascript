const dino = document.querySelector("#dino");
const cacto = document.querySelector("#cacto");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left"),
  );

  if (cactoLeft < 50 && cactoLeft > 0 && dinoTop >= 140) {
    alert("Game Over");
  }
}, 10);

document.addEventListener("keydown", () => {
  jump();
});
