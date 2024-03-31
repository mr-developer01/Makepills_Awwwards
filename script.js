var topElement = document.querySelector("#top");
var main = document.querySelector("#main");
var part3 = document.querySelector("#part-3");
var prg = document.querySelector("#progress");
var h4 = document.querySelector("h4");
var p = document.querySelectorAll("p");
var immer = document.querySelector("#immer");
var s1 = document.querySelector("#s-1");
var s2 = document.querySelector("#s-2");
var s3 = document.querySelector("#s-3");
var nav = document.querySelector("nav");
var navText = document.querySelector("#nav-text");
var rght = document.querySelector(".rght");
var part3 = document.querySelector("#part-3");
var capsule = document.querySelector("#capsule");

var count = 0;
topElement.addEventListener("click", () => {
  var int = setInterval(() => {
    if (count === 100) {
      prg.style.opacity = 0;
      h4.style.opacity = 0;
      topElement.style.transform = "translateY(-100%)";
      main.style.height = "100%";
      document.querySelector("#part-3").style.height = "100vh";
      document.querySelector("#part-4").style.height = "40%";
      document.querySelector("#part-5").style.height = "100vh";
      document.querySelector("#part-6").style.height = "100vh";
      document.querySelector("#part-7").style.height = "100vh";
      // part3.style.transform = "translateY(-100%)";
      clearInterval(int);
    }
    count++;
    prg.style.width = count + "%";
    h4.textContent = count + "%";
  }, 40);
});

immer.addEventListener("mouseover", () => {
  s1.style.opacity = 0.2;
  s2.style.opacity = 0.2;
  s3.style.opacity = 0.2;
  p.forEach((p) => {
    p.style.transform = "translateY(-1px)";
  });
});

immer.addEventListener("mouseout", () => {
  s1.style.opacity = 1;
  s2.style.opacity = 1;
  s3.style.opacity = 1;
  p.forEach((p) => {
    p.style.transform = "translateY(18px)";
  });
});

topElement.addEventListener("mouseover", () => {
  nav.style.color = "white";
  capsule.style.color = "white";
  capsule.style.border = "1px solid white";
  navText.style.color = "white";
  rght.style.borderLeft = "1px solid white";
  rght.style.color = "white";
});

part3.addEventListener("mouseover", () => {
  nav.style.color = "black";
  capsule.style.color = "black";
  capsule.style.border = "1px solid black";
  navText.style.color = "black";
  rght.style.borderLeft = "1px solid black";
  rght.style.color = "black";
});

var p51 = document.querySelector("#p-5-1");
var p52 = document.querySelector("#p-5-2");
var p53 = document.querySelector("#p-5-3");
var p54 = document.querySelector("#p-5-4");
var p55 = document.querySelector("#p-5-5");
var h51 = document.querySelector("#h5-1")
var h52 = document.querySelector("#h5-2")
var h53 = document.querySelector("#h5-3")
var h54 = document.querySelector("#h5-4")
var h55 = document.querySelector("#h5-5")
var icon51 = document.querySelector("#icon5-1")
var icon52 = document.querySelector("#icon5-2")
var icon53 = document.querySelector("#icon5-3")
var icon54 = document.querySelector("#icon5-4")
var icon55 = document.querySelector("#icon5-5")
var fiveVideo = document.querySelector("#fiveVideo");

p51.addEventListener("mouseover", () => {
  h51.style.opacity = 1;
  icon51.style.opacity = 1;
});
p51.addEventListener("mouseout", () => {
  h51.style.opacity = .5;
  icon51.style.opacity = .5;
});
p52.addEventListener("mouseover", () => {
  h52.style.opacity = 1;
  icon52.style.opacity = 1;
  fiveVideo.src = "./assets/videos/a.webm";
});
p52.addEventListener("mouseout", () => {
  h52.style.opacity = .5;
  icon52.style.opacity = .5;
  fiveVideo.src = "./assets/videos/battlehack_reel_vp9_53ef201263.webm";
});
p53.addEventListener("mouseover", () => {
  h53.style.opacity = 1;
  icon53.style.opacity = 1;
  fiveVideo.src = "./assets/videos/b.webm";
});
p53.addEventListener("mouseout", () => {
  h53.style.opacity = .5;
  icon53.style.opacity = .5;
  fiveVideo.src = "./assets/videos/battlehack_reel_vp9_53ef201263.webm";
});
p54.addEventListener("mouseover", () => {
  h54.style.opacity = 1;
  icon54.style.opacity = 1;
  fiveVideo.src = "./assets/videos/c.webm";
});
p54.addEventListener("mouseout", () => {
  h54.style.opacity = .5;
  icon54.style.opacity = .5;
  fiveVideo.src = "./assets/videos/battlehack_reel_vp9_53ef201263.webm";
});
p55.addEventListener("mouseover", () => {
  h55.style.opacity = 1;
  icon55.style.opacity = 1;
});
p55.addEventListener("mouseout", () => {
  h55.style.opacity = .5;
  icon55.style.opacity = .5;
});

// var int = setInterval(() => {
//   if (count === 100) {
//     prg.style.opacity = 0;
//     h4.style.opacity = 0;
//     topElement.style.transform = "translateY(-100%)";
//     clearInterval(int);
//   }
//   count++;
//   prg.style.width = count + "%";
//   h4.textContent = count + "%";
// }, 80);
