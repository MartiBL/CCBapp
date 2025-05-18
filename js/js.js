const goToTransfers = document.querySelector('#transferNavButton'); 

goToTransfers.addEventListener('click', function() {
  window.location.href = 'Transfer.html'; 
});

const goHome = document.querySelector('#goHomeNavButton'); 

goHome.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});



const makeATransferButton = document.querySelector('#makeATransferButton'); 

makeATransferButton.addEventListener('click', function() {
  window.location.href = 'MakeATransfer.html'; 
});

