const API = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data";
const img = document.querySelector("img");
const QR_btn = document.querySelector("#QR-Generate-btn");
const input = document.querySelector("input");

let inputValue = "";
input.addEventListener("change", (e) => {
  inputValue = e.target.value;
});

QR_btn.addEventListener("click", () => {
  if (inputValue) {
    img.style.display = "inline";
    img.src = `${API}=${inputValue}`;
  } else {
    alert("Paste a url or enter text");
    img.style.display = "none";
  }
});
