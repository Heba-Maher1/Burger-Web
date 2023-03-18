var dark = document.getElementById("dark");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var popup = document.getElementById("popup");
var darkMode = document.getElementById("darkMode");
var lightMode = document.getElementById("lightMode");

// onload
window.btn2 = (load) => {
  popup.style.display = "block";
};

// btn dark
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  popup.style.display = "none";
  document.images[1].src = "img/sun.png";
});

// btn light
lightMode.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  popup.style.display = "none";
  document.images[1].src = "img/moon.png";
});

//icon
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.images[1].src = "img/sun.png";
  } else {
    document.images[1].src = "img/moon.png";
  }
});

// large font
btn1.addEventListener("click", () => {
  document.body.style.fontSize = "18px";
});

// small font
btn2.addEventListener("click", () => {
  document.body.style.fontSize = "12px";
});

// mouseover
btn1.addEventListener("mouseover", () => {
  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
});

// mouseover
btn2.addEventListener("mouseover", () => {
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
});

// mouseout
btn1.addEventListener("mouseout", () => {
  btn1.style.backgroundColor = "#a5c9ca";
  btn1.style.color = "black";
});

// mouseout
btn2.addEventListener("mouseout", () => {
  btn2.style.backgroundColor = "#a5c9ca";
  btn2.style.color = "black";
});
