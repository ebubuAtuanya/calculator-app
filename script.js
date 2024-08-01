const displayInput = document.getElementById('displayInput');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () =>{
    const buttonValue = button.value;
      if(buttonValue === "AC"){
        displayInput.value = "";
        return;
      }else if(buttonValue === "="){
            try {
              displayInput.value = eval(displayInput.value);
            }catch (e) {
              displayInput.value = "Error";
            }
          }else {
            displayInput.value = displayInput.value += buttonValue;
          }
          if(buttonValue === "%"){
            displayInput.value = eval(displayInput.value.replace("%", "/100"));
          }else if(buttonValue === "+/-"){
            displayInput.value = displayInput.value.replace("-");
          }
      })
    })


  