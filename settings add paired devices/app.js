// const myH1 = document.getElementById("myH1");
// const mybtn = document.getElementById("mybtn");

// mybtn.addEventListener("click", () => {
//   myH1.innerHTML = "hello";
//   myH1.classList.add("d");
// });
/* bulb ON and OFF */
// const myP = document.getElementById("demo");
// const btnOn = document.getElementById("bulbOn");
// const btnOff = document.getElementById("bulbOff");

// btnOn.addEventListener("click", () => {
//   myP.style.backgroundColor = "yellow";
// });
// btnOff.addEventListener("click", () => {
//   myP.style.backgroundColor = "black";
// });
// HIDE CONTENT
// const para = document.getElementById("dem");
// const btn = document.getElementById("btn");

// btn.addEventListener("dblclick", () => {
//   para.style.display = "none";
// });
// Display Time
const myP = document.getElementById("display");
const btn = document.getElementById("disTime");

btn.addEventListener("click", (e) => {
  myP.textContent = new Date();
});
