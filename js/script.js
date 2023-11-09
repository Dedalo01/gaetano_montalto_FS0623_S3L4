function generateTableNums() {
  const tombolaDiv = document.querySelector("#tombola");

  for (let i = 0; i < TOTAL_NUMBERS; i++) {
    const numberDiv = document.createElement("div");
    const numberP = document.createElement("p");

    numberDiv.setAttribute("data-isOut", "false");
    numberDiv.setAttribute("id", `num${i}`);
    numberP.innerText = i + 1;
    tableNumbers[i] = numberP.innerText;

    numberDiv.appendChild(numberP);
    tombolaDiv.appendChild(numberDiv);
  }
}

function setIsOut(val) {
  const numberDiv = document.querySelector(`#num${val}`);
  numberDiv.setAttribute("data-isOut", "true");
}

function generateRandomNum() {
  let randomNum = Math.floor(Math.random() * TOTAL_NUMBERS);

  while (!chechedNum.includes(randomNum)) {
    if (chechedNum) chechedNum.push(randomNum);
    randomNum = Math.floor(Math.random() * TOTAL_NUMBERS);
  }

  const selectedNum = tableNumbers[randomNum];
  setIsOut(selectedNum - 1);
}

// variabili e costanti
const tableNumbers = [];
const chechedNum = [];
const TOTAL_NUMBERS = 76;

generateTableNums();

const generateNumBtn = document.querySelector("#generateNumBtn");

generateNumBtn.addEventListener("click", generateRandomNum);
