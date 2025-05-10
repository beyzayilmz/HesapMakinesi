function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculateResult() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Hata!";
    }
  }

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const display = document.getElementById("display");
  
  
    if (!isNaN(key) || key === "." || key === "π") {
      appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "**" || key === "π") {
      appendToDisplay(key);
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
      clearDisplay();
    }else if (key === "%"){
      calculatePercentage(); 
    }else if(key === "r" || key === "R"){
      calculateSquareRoot();
    }else if (key === "c" || key === "C"){
      clearDisplay();
    }else if (key === "k" || key === "K"){
      calculateCubeRoot();
    }else if (key === "!"){
      calculateFactorial();
    } else if (key === "p" || key === "P") {
      appendToDisplay(Math.PI);
    }else if (key === "1/"){
      calculateReciprocal();
    }
  });

  function calculatePercentage(){
    const display = document.getElementById("display");
    try{
      display.value = eval(display.value.replace('π', Math.PI))/100;
    }catch (error){
      display.value = "Hata!";
    }
  }

  function calculateSquareRoot(){
    const display = document.getElementById("display");
    try{
      display.value = Math.sqrt(eval(display.value.replace('π', Math.PI)));
    }catch (error) {
      display.value = "Hata!";
    }
  }

  function calculateCubeRoot(){
    const display = document.getElementById("display");
    try{
      display.value = Math.pow(eval(display.value.replace('π', Math.PI)), 1 / 3);
    }catch (error) {
      display.value = "Hata!";
    }
  }
  function calculateFactorial() {
    const display = document.getElementById("display");
    const value = parseInt(display.value.replace('π', Math.PI), 10);
    if (isNaN(value) || value < 0) {
        display.value = "Geçersiz giriş";
        return;
    }
    display.value = factorial(value);
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


function calculateReciprocal(){
  const display = document.getElementById("display");
  try{
      const value =eval(display.value);
      if (value === 0){
        display.value = "Tanımsız!";
      } else {
          display.value = 1 / value;
      }
  } catch (error) {
      display.value = "Hata!";
      }
      }
    
  






