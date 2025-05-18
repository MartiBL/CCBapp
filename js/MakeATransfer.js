const dateInput = document.getElementById("datePicker");
dateInput.valueAsDate = new Date(); // Set current date by default

dateInput.addEventListener("change", () => {
  const selected = new Date(dateInput.value);
  const formatted = selected.toLocaleDateString("en-GB"); // dd/mm/yyyy
  console.log("Selected date:", formatted);
});

const buttonContinueTransfer = document.querySelector('#buttonContinueTransfer'); 


const buttonCancelTransfer = document.querySelector('#buttonCancelTransfer'); 

buttonCancelTransfer.addEventListener('click', function() {
  window.location.href = 'Transfer.html'; 
});

const goToTransfers = document.querySelector('#transferNavButton'); 

goToTransfers.addEventListener('click', function() {
  window.location.href = 'Transfer.html'; 
});

const goHome = document.querySelector('#goHomeNavButton'); 

goHome.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

//Continue button actions to save the data from the input fields and drop-downs and move it to the confirmation page


    /** First I create consts that are equated to the data from the respective inputs once the Continue button is pressed. */
buttonContinueTransfer.addEventListener("click", () => {
  const sender = document.getElementById("accountSelect").value;
  const recipient = document.getElementById("recipientIBAN").value;
  const amount = document.getElementById("amountTransfer").value;
  const currency = document.getElementById("currencySelect").value;
  const title = document.getElementById("titleTransfer").value;
  const date = document.getElementById("datePicker").value;
  const isRecurring = document.querySelector(".switch input").checked;
  const recurrenceAmount = document.getElementById("recurrance").value;
  const recurrenceType = document.getElementById("timeSelect").value;
  // Once that is done, I create another const (an object) with properties marching the desired fields for the confirmation page.
  // Those properties are then given the values extracted from the MakeAtransferpage previously through the consts
  const transferData = {
    sender: sender,
    recipient: recipient,
    amount: `${amount} ${currency}`,
    title: title,
    date: date,
    recurrence: isRecurring ? `${recurrenceAmount} ${recurrenceType}` : "Never"
    //In this last line, I use the boolean data about whether the toggle is checked or not,
    //to see whether the recurrance property will be 'Never' (because no recurrance is desired)
    //or it will be equal to the stringified combination of the Amount inputted and the currency selected from the dropdown
  };
  // Then make the the object into a JSON string and and save it in the local storage
  localStorage.setItem("transferData", JSON.stringify(transferData));

  // Finally, the JSON object is sent to the local storage of the ConfirmTransfer page
  window.location.href = "ConfirmTransfer.html";
});

const recurrenceSwitch = document.querySelector(".switch input");
const recurrenceContainer = document.getElementById("recurranceContainer");

// Hide on initial load (for extra safety)
recurrenceContainer.style.display = "none";

recurrenceSwitch.addEventListener("change", () => {
  if (recurrenceSwitch.checked) {
    recurrenceContainer.style.display = "block";
  } else {
    recurrenceContainer.style.display = "none";
  }
});

