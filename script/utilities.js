

function inputFieldValueById(id){
  const inputField = document.getElementById(id).value;
  const inputFieldNumber = parseFloat(inputField);
  return inputFieldNumber;
}

function textFieldValueById(id){
  const inputTextField = document.getElementById(id).innerText;
  const inputTextFieldNumber = parseFloat(inputTextField);
  return inputTextFieldNumber;
}