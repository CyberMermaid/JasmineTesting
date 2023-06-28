window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  // let calculateButton = document.getElementById('calc-submit');
  if (form) {
    setupInitialValues();
    // calculateButton.addEventListener("submit", function (e) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  //Average Autoloan years and interest rate from April-June,2023
  let values = { amount: 41445, years: 6, rate: 7.1 };
  document.getElementById("loan-amount").value = 41445;
  // let loanAmount = document.getElementById("loan-amount").value;
  let loanAmount = values.amount;
  // let termInYears = document.getElementById("loan-years").value;
  document.getElementById("loan-years").value = 6;
  let termInYears = values.years;
  document.getElementById("loan-rate").value = 7.1;
  // let yearlyRate = document.getElementById("loan-rate").value;
  let yearlyRate = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currValues = getCurrentUIValues();
  calculateMonthlyPayment(currValues);
  updateMonthly(currValues);
}

// Given an object of values (a value has amount, years and rate),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //P is the loan amount or principle
  let P = values.amount;
  //i is the periodic or monthly interest rate
  let i = values.rate / 12;
  // n is the total number of months in which payments are made
  let n = values.years * 12;

  let monthlyPayment = ((P * i) / (1 - Math.pow((1 + i), -n))).toFixed(2);
  return `${monthlyPayment}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = Number.parseInt(monthly, 10);
  // let msg = '$' + Number.parseInt(monthly, 10);
  // let newSpan = document.createElement('span');
  // const txtNode = document.createTextNode(msg);
  // newSpan.appendChild(txtNode);
  // monthlyPayment.appendChild(newSpan);
}