// alert("Event JS");

// Page Events
// --> load
//  scroll
// resize

// Mouse Events
// click
// dbclick
// mouseover
// mouseenter
//

// Keyborad Events
// keydown
// keyup
// keypress

// Form Events
// focus
// blur
// onchange

document.addEventListener("keydown", function (e) {
  //   console.log("Key pressed");
  //   console.log(e.key);
  if (e.key === "Escape") {
    alert("Escape Was clicked");
  }
});

// document.addEventListener("keypress", (e) => console.log(e));

// form events

var userid = document.querySelector(".userid");
userid.onfocus = handleFocus;
userid.onblur = handleBlur;

function handleFocus() {
  userid.value = "On focus state";
}

function handleBlur() {
  userid.value = "On Blur state";
}

userid.addEventListener("change", function () {
  console.log(userid.value);
});

// page events

// load
// scroll
// resize
var img = document.querySelector("img");
document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY <= 90) {
    img.style.transform = "rotate(" + window.scrollY + "deg)";
  }
});

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
});
document.addEventListener("load", function () {
  alert("");
});

var btn = document.querySelector(".btn");
btn.addEventListener("dblclick", function () {
  alert("Button was clicked Twice");
});

var bgYellow = document.querySelector(".bg-yellow");
bgYellow.addEventListener("mouseover", function () {
  bgYellow.style.backgroundColor = "orange";
});
bgYellow.addEventListener("mouseleave", function () {
  bgYellow.style.backgroundColor = "tomato";
});
