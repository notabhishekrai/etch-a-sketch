const body = document.querySelector("body");
const canvas = document.querySelector(".canvas");
const input = document.querySelector("input");

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

function clearGrid() {
  const canvas_child_div = document.querySelectorAll("div.mini-div");
  const canvas_child_br = document.querySelectorAll("br");
  canvas_child_div.forEach((child) => {
    child.remove();
  });
  canvas_child_br.forEach((child) => {
    child.remove();
  });
}

function createGrid(e) {
  clearGrid();
  e.preventDefault();
  let numberOfRow = input.value;
  if (numberOfRow > 100) {
    alert("ERROR! Enter less than 100");
    return;
  }
  const canvas_width = canvas.clientWidth;
  const fragment = document.createDocumentFragment();
  let numberOfColumn = numberOfRow;
  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= numberOfColumn; j++) {
      const mini_div = document.createElement("div");
      mini_div.classList.add("mini-div");
      mini_div.style.width = `${canvas_width / numberOfRow}px`;
      fragment.appendChild(mini_div);
    }
    const br = document.createElement("br");
    fragment.appendChild(br);
  }
  canvas.appendChild(fragment);
  input.value = "";
  input.focus();
}

const btn = document.querySelector("button");

btn.addEventListener("click", createGrid);
