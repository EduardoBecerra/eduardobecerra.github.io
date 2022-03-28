var inputEl = document.getElementById("input");
var outputEl = document.getElementById("output");
var listEl = document.getElementById("list");
var selectEl = document.getElementById("select");


function next() {

  let income = inputEl.value;
  if(isNaN(income)) {
       
    alert("Enter a number"); 
    return null;
}

  if(selectEl.value == "hourly"){
    income = income * 8
    income = income * 5
    income = income * 4
  } else if (selectEl.value == "annually"){
    income = income / 12;
  }


  let housing = income * .30;
  let food = income * .08;
  let car = income * .07;
  let fun = income * .06;
  let saving = income * .13;
  let tax = income * .20;
  let misc = income * .15;

  let output = "";



  
  output += "Housing: $"+ `${housing.toFixed(2)}` +
  "<br>Food: $"+ `${food.toFixed(2)}` +
  "<br>Car: $"+ `${car.toFixed(2)}`  +
  "<br>Entertaiment: $"+ `${fun.toFixed(2)}` +
  "<br>Savings: $"+ `${saving.toFixed(2)}` +
  "<br>Taxes: $"+ `${tax.toFixed(2)}` +
  "<br>Bills: $"+ `${misc.toFixed(2)}`+
  "<br>"+
  "<br>$ left over from bills"+ 
  "<br>should go to savings! ";

  listEl.innerHTML = output;
   
 }







