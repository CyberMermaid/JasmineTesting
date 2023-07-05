window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
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
  document.getElementById("loan-amount").value = values.amount;
  document.getElementById("loan-years").value = values.years;
  document.getElementById("loan-rate").value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currValues = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(currValues);
  updateMonthly(monthly);
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
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = monthly;
}