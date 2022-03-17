var moneySpentEl = document.getElementById("moneySpent");
var tipRequired = document.getElementById("tipRequired");
var tipRequired2 = document.getElementById("tipRequired2");
var percentEl = document.getElementById("percent");

function tip() {
  var letterNumber = /^[0-9]+$/;
  if(!moneySpentEl.value.match(letterNumber)){
    alert("Enter a numeric value");
    moneySpentEl.value = "";
    return null;
  }


  var deci = moneySpentEl.value * percentEl.value;  
  tipRequired.value = `$${deci.toFixed(2)}`;
  tipRequired2.innerText = `$${deci.toFixed(2)}`;

  
    
 }







