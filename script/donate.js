
// for section -1
// Helper function to get input value by ID and convert it to a number
function inputFieldValueById(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value) || 0;  // Parse as a number, return 0 if invalid
}

// Helper function to get the text content of a field by ID and convert it to a number
function textFieldValueById(id) {
  const value = document.getElementById(id).innerText;
  return parseFloat(value) || 0;  // Parse as a number, return 0 if invalid
}

// Function to display error modal
function showErrorModal(message) {
  // Update the error modal with the provided message
  document.getElementById('errorMessage').innerText = message;

  // Show the error modal
  document.getElementById('error_modal').showModal();
}

// Add event listener for donation button
document.getElementById('donate-1').addEventListener('click', function (event) {
  event.preventDefault();
  
  // Retrieve values
  const storedValue = inputFieldValueById('inputField-1');
  const mainBalance = textFieldValueById('balance');
  const noakhaliSectionBalance = textFieldValueById('noakhaliBalance');
  
  // Input validation: check if the input is a positive number
  if (isNaN(storedValue) || storedValue <= 0) {
    showErrorModal("Please enter a valid donation amount.");
    return;  // Stop the script if the input is invalid
  }

  // Check if the stored value exceeds the main balance
  if (storedValue > mainBalance) {
    showErrorModal("Donation amount exceeds your available balance.");
    return;
  }
  
  // Deduct the donation amount from the main balance
  const changedBalance = mainBalance - storedValue;
  document.getElementById('balance').innerText = changedBalance;

  // Add the donation to the Noakhali section balance
  const noakhaliSection = noakhaliSectionBalance + storedValue;
  document.getElementById('noakhaliBalance').innerText = noakhaliSection;

  // Update modal content with donation amount and balances
  document.getElementById('donationAmount').innerHTML = `<span class="text-3xl">৳ ${storedValue}</span>`;
 
  // Show the success modal
  document.getElementById('my_modal_1').showModal();



  // history
  const historytab = document.createElement('div')
  historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", 'mb-8')
  historytab.innerHTML = `
  <p class= "text-xl lg:text-2xl font-bold mb-4">${storedValue} Taka is Donated for Flood Relief in Noakhali, Bangladesh</p>
  <p class="font-light text-sm md:text-md" >Date: ${new Date()}
  `
  const historyContainer = document.getElementById('historyTab')
  console.log(historyContainer);
  historyContainer.insertBefore(historytab, historyContainer.firstChild)


});


// section - 2

// Helper function to get input value by ID and convert it to a number
function inputFieldValueById(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value) || 0;  // Parse as a number, return 0 if invalid
}

// Helper function to get the text content of a field by ID and convert it to a number
function textFieldValueById(id) {
  const value = document.getElementById(id).innerText;
  return parseFloat(value) || 0;  // Parse as a number, return 0 if invalid
}

// Function to display error modal for Section 2
function showErrorModal2(message) {
  // Update the error modal with the provided message
  document.getElementById('errorMessage2').innerText = message;

  // Show the error modal
  document.getElementById('error_modal_2').showModal();
}

// Add event listener for donation button in Section 2
document.getElementById('donate-2').addEventListener('click', function (event) {
  event.preventDefault();
  
  // Retrieve values
  const storedValue = inputFieldValueById('inputField-2');
  const mainBalance = textFieldValueById('balance'); // Assuming 'balance' refers to the common main balance
  const feniSectionBalance = textFieldValueById('feniBalance');
  
  // Input validation: check if the input is a positive number
  if (isNaN(storedValue) || storedValue <= 0) {
    showErrorModal2("Please enter a valid donation amount.");
    return;  // Stop the script if the input is invalid
  }

  // Check if the stored value exceeds the main balance
  if (storedValue > mainBalance) {
    showErrorModal2("Donation amount exceeds your available balance.");
    return;
  }
  
  // Deduct the donation amount from the main balance
  const changedBalance = mainBalance - storedValue;
  document.getElementById('balance').innerText = changedBalance;

  // Add the donation to the Feni section balance
  const feniSection = feniSectionBalance + storedValue;
  document.getElementById('feniBalance').innerText = feniSection;

  // Update modal content with donation amount and balances
  document.getElementById('donationAmount2').innerHTML = `<span class="text-3xl">৳ ${storedValue}</span>`;

  // Show the success modal
  document.getElementById('my_modal_2').showModal();

  // history
  const historytab = document.createElement('div')
  historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", "mb-8")
  historytab.innerHTML = `
  <p class= "text-xl lg:text-2xl font-bold mb-4">${storedValue} Taka is Donated for Flood Relief in Lakshmipur,Bangladesh</p>
  <p class="font-light text-sm md:text-md" >Date: ${new Date()}
  `
  const historyContainer = document.getElementById('historyTab')
  historyContainer.insertBefore(historytab, historyContainer.firstChild)
});




// section - 3

// Helper function to get input value by ID and convert it to a number
function inputFieldValueById(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value) || 0;  // Parse as a number, return 0 if invalid
}

// Helper function to get the text content of a field by ID and convert it to a number
function textFieldValueById(id) {
  const value = document.getElementById(id).innerText;
  return parseFloat(value) || 0;  // Parse as a number, return 0 if invalid
}

// Function to display error modal for Section 3
function showErrorModal3(message) {
  // Update the error modal with the provided message
  document.getElementById('errorMessage3').innerText = message;

  // Show the error modal
  document.getElementById('error_modal_3').showModal();
}

// Add event listener for donation button in Section 3
document.getElementById('donate-3').addEventListener('click', function (event) {
  event.preventDefault();
  
  // Retrieve values
  const storedValue = inputFieldValueById('inputField-3');
  const mainBalance = textFieldValueById('balance'); // Assuming 'balance' refers to the common main balance
  const protestSectionBalance = textFieldValueById('protestBalance');

  // Input validation: check if the input is a positive number
  if (isNaN(storedValue) || storedValue <= 0) {
    showErrorModal3("Please enter a valid donation amount.");
    return;  // Stop the script if the input is invalid
  }

  // Check if the stored value exceeds the main balance
  if (storedValue > mainBalance) {
    showErrorModal3("Donation amount exceeds your available balance.");
    return;
  }
  
  // Deduct the donation amount from the main balance
  const changedBalance = mainBalance - storedValue;
  document.getElementById('balance').innerText = changedBalance;

  // Add the donation to the Protest section balance
  const protestSection = protestSectionBalance + storedValue;
  document.getElementById('protestBalance').innerText = protestSection;

  // Update modal content with donation amount and balances
  document.getElementById('donationAmount3').innerHTML = `<span class="text-3xl">৳ ${storedValue}</span>`;

  // Show the success modal
  document.getElementById('my_modal_3').showModal();

  // history
  const historytab = document.createElement('div')
  historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", "mb-8")
  historytab.innerHTML = `
  <p class= "text-xl lg:text-2xl font-bold mb-4">${storedValue} Taka is Donated for Flood Relief in Lakshmipur,Bangladesh</p>
  <p class="font-light text-sm md:text-md" >Date: ${new Date()}
  `
  const historyContainer = document.getElementById('historyTab')
  historyContainer.insertBefore(historytab, historyContainer.firstChild)
});

// history Tab
const historyMenu = document.getElementById('historyMenu')
const donationMenu = document.getElementById('donationMenu')
historyMenu.addEventListener('click', function () {
    historyMenu.classList.add('bg-[#B4F461]')
    historyMenu.classList.remove('bg-white')
    donationMenu.classList.remove('bg-[#B4F461]')
    donationMenu.classList.add('bg-white')

    document.getElementById('donationSection').classList.add('hidden')
    document.getElementById('historySection').classList.remove('hidden')



})

//  dontation tab

donationMenu.addEventListener('click', function () {
    donationMenu.classList.add('bg-[#B4F461]')
    donationMenu.classList.remove('bg-white')
    historyMenu.classList.remove('bg-[#B4F461]')
    historyMenu.classList.add('bg-white')

    document.getElementById('historySection').classList.add('hidden')
    document.getElementById('donationSection').classList.remove('hidden')



})

// blog btn

document.getElementById('blogBtn').addEventListener('click', function(event){
    
    window.location.href = './blog.html';
})
