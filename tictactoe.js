let indices = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let onClickSquare = function (event) {
  let flag = false;
  let element = event.srcElement;
  let elementIndex = element.id.substring(6);
  console.log(elementIndex);
  let player = document.getElementById("playerNumber");
  if (player.innerText.indexOf("1") !== -1) {
    element.innerText = "X";
    indices[elementIndex.charAt(0)][elementIndex.charAt(1)] = 1;
    player.innerHTML = validateIndex()
      ? "<b>Player 1 Wins</b>"
      : "Current Player: <b>Player 2</b>";
  } else {
    element.innerText = "O";
    indices[elementIndex.charAt(0)][elementIndex.charAt(1)] = 0;
    player.innerHTML = validateIndex()
      ? "<b>Player 2 Wins</b>"
      : "Current Player: <b>Player 1</b>";
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (indices[i][j] === null) {
        flag = true;
        break;
      }
    }
  }
  if (!flag) {
    player.innerHTML =
      player.innerText.indexOf("Wins") === -1 ? "<b>Draw<b>" : player.innerHTML;
  }

  if (player.innerText === "Draw" || player.innerText.indexOf("Wins") !== -1) {
    let allDivs = document.getElementsByTagName("div");
    for (let element of allDivs) {
      if (element.id.indexOf("square") !== -1) {
        element.removeEventListener("click", onClickSquare);
      }
    }
  }
};

let validateIndex = function () {
  for (let i = 0; i < 3; i++) {
    if (
      (indices[i][0] === indices[i][1] &&
        indices[i][1] === indices[i][2] &&
        indices[i][2] === indices[i][0] &&
        indices[i][0] !== null &&
        indices[i][1] !== null &&
        indices[i][2] !== null) ||
      (indices[0][i] === indices[1][i] &&
        indices[1][i] === indices[2][i] &&
        indices[2][i] === indices[0][i] &&
        indices[0][i] !== null &&
        indices[1][i] !== null &&
        indices[2][i] !== null) ||
      (indices[0][0] === indices[1][1] &&
        indices[1][1] === indices[2][2] &&
        indices[0][0] !== null &&
        indices[1][1] !== null &&
        indices[2][2] !== null)
    ) {
      return true;
    }
  }
  return false;
};

window.onload = function () {
  let allDivs = document.getElementsByTagName("div");
  for (let element of allDivs) {
    if (element.id.indexOf("square") !== -1) {
      element.addEventListener("click", onClickSquare);
    }
  }
};

let reset = function () {
  location.reload();
};
