let nav = document.getElementsByTagName("a")[0];

let main = document.getElementsByClassName("main")[0];

let body = document.getElementsByTagName("body")[0];

let btn = document.getElementById("btn");

let menu = document.getElementById("menu");

let k = document.getElementsByClassName("k")[0];

let k2 = document.getElementsByClassName("k")[1];

let k3 = document.getElementsByClassName("k")[2];

let hamburger = document.getElementById("hamburger");

btn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    btn.innerText = "light mode";
    nav.classList.add("a");
    nav.classList.remove("a-click");
    k.classList.add("light-2");
    k.classList.remove("dark-2");
    k2.classList.add("light-2");
    k2.classList.remove("dark-2");
    // mahanij
    k3.classList.add("light-2");
    k3.classList.remove("dark-2");
  } else {
    btn.innerText = "dark mode";
    body.classList.add("dark");
    body.classList.remove("light");
    nav.classList.remove("a");
    nav.classList.add("a-click");
    k.classList.add("dark-2");
    k.classList.remove("light-2");
    k2.classList.add("dark-2");
    k2.classList.remove("light-2");
    k3.classList.add("dark-2");
    k3.classList.remove("light-2");
  }
});
menu.addEventListener("click", () => {
  hamburger.classList.toggle('none')
});
