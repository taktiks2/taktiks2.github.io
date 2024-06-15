const HELLO_WORLD = "Hello, World!";

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelector("main");
  const newH1 = document.createElement("h1");
  newH1.textContent = HELLO_WORLD;
  mainElement.appendChild(newH1);
});
