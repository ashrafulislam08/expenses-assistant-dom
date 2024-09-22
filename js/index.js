// Selected all inputs and buttons

const income = document.getElementById("income");
const softwareCost = document.getElementById("software");
const coursesCost = document.getElementById("courses");
const internetCost = document.getElementById("internet");
const calculateButton = document.getElementById("calculate");
const results = document.getElementById("results");

// handle calculate button
calculateButton.addEventListener("click", function () {
  // Validation
  if (
    income.value === "" &&
    softwareCost.value === "" &&
    coursesCost === "" &&
    internetCost === ""
  ) {
    alert("Fill the correct amount");
  }
  const incomeValue = parseFloat(income.value);
  const softwareValue = parseFloat(softwareCost.value);
  const coursesValue = parseFloat(coursesCost.value);
  const internetValue = parseFloat(internetCost.value);
  const totalExpensesAmount = softwareValue + coursesValue + internetValue;
  const finalBalance = incomeValue - totalExpensesAmount;
  results.classList.remove("hidden");
  const totalExpenses = document.getElementById("total-expenses");
  const balanceAmount = document.getElementById("balance");
  totalExpenses.innerText = totalExpensesAmount;
  balanceAmount.innerText = finalBalance;

  //   calculating savings
  const calculateSavings = document.getElementById("calculate-savings");
  const savingsAmount = document.getElementById("savings-amount");

  calculateSavings.addEventListener("click", function () {
    const remainingBalance = document.getElementById("remaining-balance");
    const savingsPercentage = document.getElementById("savings");
    const savingsBalance =
      (finalBalance * parseFloat(savingsPercentage.value)) / 100;
    const remainingAmount = finalBalance - savingsBalance;
    savingsAmount.innerText = savingsBalance;
    remainingBalance.innerText = remainingAmount;
    console.log(savingsBalance);
  });
});
