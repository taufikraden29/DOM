// document.title;

// document.title = "Belajar Javascript DOM with ME";
// console.log(document.title);

// body.append("Hello this is Raden Cuy!");

// const h1 = document.createElement("h1");
// h1.textContent = "AKU INI H1 LOH BANG!";

// const namaSaya = document.createElement("p");
// namaSaya.innerHTML = "Raden Muhamad Irsyad Taufik";

// const namaBold = document.createElement("b");
// namaBold.innerText = "b nih boss, senggol dong!";

// body.append(h1);
// body.append(namaSaya);
// body.append(namaBold);

// console.log(document.body);

document.title = "Javascript DOM";
const body = document.body;

const satu = document.getElementById("satu");
const dua = document.getElementById("dua");

console.log(satu);
// console.log(dua);
satu.style.border = "none";
satu.style.padding = "10px";
satu.style.fontSize = "20px";
satu.style.borderRadius = "20px";
satu.style.backgroundColor = "tomato";

function addText() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Raden Muhamad Irsyad Taufik";
  body.append(h1);
}

function textColor() {
  const h1 = document.createElement("h1");
  h1.style.color = "red";
  h1.innerHTML = "Raden Muhamad Irsyad Taufik";
  body.append(h1);
}

function gantiWarna() {
  //   console.log("Aman Bos!");
  satu.style.backgroundColor = "aqua";
}

function ubahText() {
  //   console.log("Ubah text");
  satu.textContent = "Hihihii";
}

function oriText() {
  satu.textContent = "KLIK SAYA 1";
}
