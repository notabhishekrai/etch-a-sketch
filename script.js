const body = document.querySelector("body");
const canvas = document.querySelector(".canvas");

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    const canvas_width = canvas.clientWidth;
    const mini_div = document.createElement("div");
    mini_div.classList.add("mini-div");
    mini_div.style.width = `${canvas_width / 16}px`;
    canvas.appendChild(mini_div);
  }
  const br = document.createElement("br");
  canvas.appendChild(br);
}
