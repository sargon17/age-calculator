let input = document.querySelector("#date");
let calcBtn = document.querySelector(".calc-btn");

let data;
// let now;

function dateDifference(data) {
  let now = new Date.now();
  let difference = now.getTime() - data.getTime();
  console.log(difference);
}

// console.log(d);
// console.log(y);

calcBtn.addEventListener("click", () => {
  data = new Date(input.value);
  dateDifference(data);
});
