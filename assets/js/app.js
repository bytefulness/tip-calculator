// A) DEFINE STATE VARIABLES
let selectedTipRate, tipRatePerPerson, total, totalPerPerson;

// B) SELECT DOM ELEMENTS
// B.1) Select Inputs
let inputBill = document.querySelector("#bill");
let inputPeople = document.querySelector("#people");
let inputCustomTip = document.querySelector("#custom-tip");

// B.2) Select Buttons
// - Parent of the buttons
const tipButtonsContainer = document.querySelector(".tip__amount-wrapper");
const resetButton = document.querySelector(".reset");

// B.3) Select Result Elements
let resultTip = document.querySelector("#result-tip");
let resultTotalPerPerson = document.querySelector("#result-total-person");

// C) FUNCTIONS
// C.1) Remove active class
const uiRemoveActiveClass = function () {
  tipButtonsContainer.querySelectorAll(".tip__amount").forEach((button) => {
    button.classList.remove("active");
  });
};

// C.2) Reset Inputs
const resetApp = function () {
  inputBill.value = "";
  inputPeople.value = "1";
  resultTip.textContent = "$0.00";
  resultTotalPerPerson.textContent = "$0.00";
};

// D) EVENT HANDLERS

// D.1) Calculate Tip Rate
tipButtonsContainer.addEventListener("click", function (event) {
  // Don't do anything if not selected any button
  if (!event.target.classList.contains("tip__amount")) return;

  uiRemoveActiveClass();
  // Add active class to selected tip rate button
  event.target.classList.add("active");

  selectedTipRate = event.target.dataset.tipRate;

  tipRatePerPerson =
    (inputBill.valueAsNumber * selectedTipRate) /
    100 /
    inputPeople.valueAsNumber;

  total =
    inputBill.valueAsNumber + (inputBill.valueAsNumber * selectedTipRate) / 100;

  totalPerPerson = total / inputPeople.valueAsNumber;

  // Output of the values
  console.log(
    `Input Bill: ${inputBill.valueAsNumber}, Selected Tip Rate: ${selectedTipRate}, Tip Rate Per Person: ${tipRatePerPerson}, Total Per Person: ${totalPerPerson} Total Bill: ${total}`
  );

  // Update UI Parts
  resultTip.textContent = `$${tipRatePerPerson}`;
  resultTotalPerPerson.textContent = `$${totalPerPerson}`;
});

// D.2) Reset UI
resetButton.addEventListener("click", function (event) {
  resetApp();
  uiRemoveActiveClass();
});
