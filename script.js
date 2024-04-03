// RGB Colors

document.getElementById("previewBtn").addEventListener("click", preview);

function preview() {
  let r = document.getElementById("red").value;
  let g = document.getElementById("green").value;
  let b = document.getElementById("blue").value;

  document.getElementById("text").innerHTML = `rgb(${r},${g},${b})`;
  document.getElementById(
    "display"
  ).style.backgroundColor = `rgb(${r},${g},${b})`;
}

document.getElementById("black").addEventListener("click", btnBlack);

function btnBlack() {
  document.getElementById("display").style.backgroundColor = `black`;
  document.getElementById("text").innerHTML = `rgb(0,0,0)`;
}

document.getElementById("white").addEventListener("click", btnWhite);

function btnWhite() {
  document.getElementById("display").style.backgroundColor = `white`;
  document.getElementById("text").innerHTML = `rgb(255,255,255)`;
}
