// import { getAllItems, createItem } from "./api";

const table = document.getElementById("ids-table");
const createTableBtn = document.getElementById("createTable");
const getIdsFromApiBtn = document.getElementById("getIdsBtn");
const showIds = document.getElementById("showIds");
const sortIds = document.getElementById("sortIds");

getIdsFromApiBtn.addEventListener("click", getDataFromApi);

const ids = [];

showIds.addEventListener("click", () => {
  console.log(ids);
});

sortIds.addEventListener("click", () => {
  ids.flat().map((item) => {
    console.log("in loop");
    if (checkLuhn(item)) {
      return item;
    }
  });

  console.log(ids);
});

createTableBtn.addEventListener("click", () => {
  console.log("create-table");
  createTableFunc();
});

function createTableFunc() {
  let counter = 0;
  const tr = document.createElement("tr");

  ids.map((item) => {
    const td = document.createElement("td");
    td.innerText = item;
    tr.appendChild(td);
  });
  table.appendChild(tr);
}

async function getDataFromApi() {
  const url = "https://api.mly.co.il/";
  let res = await fetch(url)
    .then((data) => data.json())
    .catch((error) => console.log(error));

  console.log(res);
  ids.push(res);
}

async function checkLuhn(cardNo) {
  let nDigits = cardNo.length;

  let nSum = 0;
  let isSecond = false;
  for (let i = nDigits - 1; i >= 0; i--) {
    let d = cardNo[i].charCodeAt() - "0".charCodeAt();

    if (isSecond == true) d = d * 2;

    // We add two digits to handle
    // cases that make two digits
    // after doubling
    nSum += parseInt(d / 10, 10);
    nSum += d % 10;

    isSecond = !isSecond;
  }
  return nSum % 10 == 0;
}
