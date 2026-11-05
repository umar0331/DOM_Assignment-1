//change heading text
let heading = document.getElementById("heading");
heading.innerText = "Welcome to Javascrip DOM";

//this is button when you click then text chinge
let pr = document.getElementsByClassName("pra");
let btton = document.getElementById("btn");
btton.addEventListener("click", function () {
  pr[0].innerText = "Paragraph text changed!";
});

// this is button  when you click btton of the bg then change bg color
let all_boday = document.body;
let bg_btn = document.getElementById("bg");
bg_btn.addEventListener("click", function () {
  all_boday.style.backgroundColor = "lightblue";
});

//this button for this when you click then show alert
let alert_btn = document.getElementById("alert_btns");
alert_btn.addEventListener("click", function () {
  alert("DOM is working!");
});

//when you click the btn then from the input value show to paragarp
let ipt = document.getElementById("input");
let from_btn = document.getElementById("form_btn");
let show_res = document.getElementById("form_pra");

from_btn.addEventListener("click", function (con) {
  con.preventDefault();
  show_res.innerText = ipt.value;
});

//ENT ASSIGNET 1 OF THE DOM
