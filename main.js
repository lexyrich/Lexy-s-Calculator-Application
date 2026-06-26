const screen = document.querySelector(".screen");

let currentInput = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

  button.addEventListener("click",()=>{
    
    const buttonText = button.innerText;
    
    if(buttonText === "C"){
      currentInput = "";
      screen.innerText = 0;
    }
    else if (buttonText === "=") {
      try{
        let result = eval(currentInput);
        screen.innerText =  result;
        currentInput = result.toString();
      }catch(error) {
        screen.innerText ="Error";
        currentInput = "";
      }
      
    } 
    else{
      if(buttonText === "." && currentInput.includes(".")){
      return;
      }
     currentInput += buttonText;
      screen.innerText = currentInput;
    }

    
  })
  
})


