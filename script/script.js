let input = document.querySelector("#date");
let calcBtn = document.querySelector(".calc-btn");
let yearsOutput = document.querySelector("#years");
let monthsOutput = document.querySelector("#months");
let daysOutput = document.querySelector("#days");

let data;

function dateDifference(data) {
  let now = new Date();
  let difference = now.getTime() - data.getTime();
  let years = Math.floor(difference / 31557600000);
  let months = Math.floor((difference - years * 31557600000) / 2629800000);
  let days = Math.floor(
    (difference - years * 31557600000 - months * 2629800000) / 86400000
  );
  yearsOutput.innerHTML = years;
  monthsOutput.innerHTML = months;
  daysOutput.innerHTML = days;
}

calcBtn.addEventListener("click", () => {
  data = new Date(input.value);
  dateDifference(data);
});
