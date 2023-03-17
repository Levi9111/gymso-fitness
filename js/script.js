const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const navbar = document.querySelector(".navbar");

btn1.addEventListener("click", function () {
  btn1.style.display = "none";
  btn2.style.display = "block";
  navbar.classList.add("height");
});

btn2.addEventListener("click", function () {
  btn2.style.display = "none";
  btn1.style.display = "block";
  navbar.classList.remove("height");
});
