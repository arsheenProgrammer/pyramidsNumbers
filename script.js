const gridItems = document.querySelectorAll(".grid-item");

function randomNumber() {
  return Math.trunc(Math.random() * 10);
}

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].textContent = randomNumber();
}

/*const container = document.querySelector("#container");

function makeRows(rows, cols) {
  const br = document.createElement("br");
  container.appendChild(br);
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

for (let i = 4; i < 14; i++) {
  makeRows(1, i);
}
*/
/*
makeRows(1, 7);
makeRows(1, 8);
makeRows(1, 9);
makeRows(1, 10);
makeRows(1, 11);
makeRows(1, 12);
makeRows(1, 13);
*/
