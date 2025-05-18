// Here I make it so that once the content of the page is loaded (the page has been opened)
// the data from the JSON will be extracted and put into a local const, from which
// the respective H1's and H2's from the HTML, selected by their unique IDs,
// will be given string values based on those from the JSON

window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("transferData"));
  if (!data) return;

  document.getElementById("selectedAccount").textContent = data.sender;
  document.getElementById("selectedRecipient").textContent = data.recipient;
  document.getElementById("selectedAmount").textContent = data.amount;
  document.getElementById("selectedTitle").textContent = data.title;
  document.getElementById("selectedDate").textContent = data.date;
  document.getElementById("selectedRecurrance").textContent = data.recurrence;
});

const goToTransfers = document.querySelector('#transferNavButton'); 

goToTransfers.addEventListener('click', function() {
  window.location.href = 'Transfer.html'; 
});

const goHome = document.querySelector('#goHomeNavButton'); 

goHome.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

const buttonNoConfirmTransfer = document.querySelector('#buttonNoConfirmTransfer'); 

divElement.addEventListener('click', function() {
  window.location.href = 'MakeATransfer.html'; 
});

