const input = document.getElementById("validation-input");

const blur = () => {
  const enteredValue = input.value;
  const expectedLength =
    parseInt(input.getAttribute("data-length"));
  
  if (enteredValue.length === expectedLength) {

    input.classList.remove("invalid");
    input.classList.add('valid')

  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  
};



input.addEventListener("blur", blur);




