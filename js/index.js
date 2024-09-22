// Selected all inputs and buttons

const income = document.getElementById("income");
const softwareCost = document.getElementById("software");
const coursesCost = document.getElementById("courses");
const internetCost = document.getElementById("internet");
const calculateButton = document.getElementById("calculate");

// handle calculate button
calculateButton.addEventListener("click", function () {
  const incomeValue = parseFloat(income.value);
  const softwareValue = parseFloat(softwareCost.value);
  const coursesValue = parseFloat(coursesCost.value);
  const internetValue = parseFloat(internetCost.value);
  const totalCost = softwareValue + coursesValue + internetValue;
  console.log(totalCost);
});
