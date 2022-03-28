var passwordEl = document.getElementById("password");
var timeEl = document.getElementById("time");


function pass() {

  let word = passwordEl.value;
  let wordLength = word.length;

  let columnPosition = 0;

  var nums = /^(?=.*[0-9])/;
  if(nums.test(word))columnPosition = 1;

  var letters = /^(?=.*[a-zA-Z])/;
  if(letters.test(word))columnPosition = 2;

  var numsLetters = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
  if(numsLetters.test(word))columnPosition = 3;

  var numsLettersSpecial = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if(numsLettersSpecial.test(word))columnPosition = 4;

 switch(columnPosition) {
   case 1:

    switch(wordLength) {
     case 1:
       timeEl.value = "Instantly";
     break;
     case 2:
       timeEl.value = "Instantly";
     break;
     case 3:
       timeEl.value = "Instantly";
     break;
     case 4:
       timeEl.value = "Instantly";
     break;
     case 5:
       timeEl.value = "Instantly";
     break;
     case 6:
      timeEl.value = "Instantly";
     break;
     case 7:
      timeEl.value = "Instantly";
     break;
     case 8:
      timeEl.value = "Instantly";
     break;
     case 9:
      timeEl.value = "Instantly";
     break;
     case 10:
      timeEl.value = "Instantly";
     break;
     case 11:
      timeEl.value = "Instantly";
     break;
     case 12:
      timeEl.value = "2 Seconds";
     break;
     case 13:
      timeEl.value = "16 Seconds";
     break;
     case 14:
      timeEl.value = "3 Minutes ";
     break;
     case 15:
      timeEl.value = "26 Minutes ";
     break;
     case 16:
      timeEl.value = "4 Hours ";
     break;
     case 17:
      timeEl.value = "2 Days ";
     break;
     case 18:
      timeEl.value = "18 Days ";
     break;
     case 19:
      timeEl.value = "183 Days ";
     break;
     case 20:
      timeEl.value = "5 Years ";
     break;
     default:
       timeEl.value = "Type less than 20";  
   }

   break;
   case 2:
    switch(wordLength) {
      case 1:
        timeEl.value = "Instantly";
      break;
      case 2:
        timeEl.value = "Instantly";
      break;
      case 3:
        timeEl.value = "Instantly";
      break;
      case 4:
        timeEl.value = "Instantly";
      break;
      case 5:
        timeEl.value = "Instantly";
      break;
      case 6:
        timeEl.value = "Instantly";
      break;
      case 7:
        timeEl.value = "2 Seconds";
      break;
      case 8:
        timeEl.value = "1 Minute";
      break;
      case 9:
        timeEl.value = "1 Hour";
      break;
      case 10:
        timeEl.value = "3 Days";
      break;
      case 11:
        timeEl.value = "138 Days";
      break;
      case 12:
        timeEl.value = "20 Years";
      break;
      case 13:
        timeEl.value = "1K Year";
      break;
      case 14:
        timeEl.value = "53K Years";
      break;
      case 15:
        timeEl.value = "3M Years";
      break;
      case 16:
        timeEl.value = "143M Years";
      break;
      case 17:
        timeEl.value = "7bn Years";
      break;
      case 18:
        timeEl.value = "388bn Years";
      break;
      case 19:
        timeEl.value = "20tn Years";
      break;
      case 20:
        timeEl.value = "1qdn Years";
      break;
      default:
        timeEl.value = "No more than 20 characters";  
     }   

   break;
   case 3:
    switch(wordLength) {
      case 1:
        timeEl.value = "Instantly";
      break;
      case 2:
        timeEl.value = "Instantly";
      break;
      case 3:
        timeEl.value = "Instantly";
      break;
      case 4:
        timeEl.value = "Instantly";
      break;
      case 5:
        timeEl.value = "Instantly";
      break;
      case 6:
        timeEl.value = "Instantly";
      break;
      case 7:
        timeEl.value = "6 Seconds";
      break;
      case 8:
        timeEl.value = "6 Minutes";
      break;
      case 9:
        timeEl.value = "6 Hours";
      break;
      case 10:
        timeEl.value = "15 Days";
      break;
      case 11:
        timeEl.value = "3 Years";
      break;
      case 12:
        timeEl.value = "162 Years";
      break;
      case 13:
        timeEl.value = "10K Years";
      break;
      case 14:
        timeEl.value = "622K Years";
      break;
      case 15:
        timeEl.value = "39M Years";
      break;
      case 16:
        timeEl.value = "2BN Years";
      break;
      case 17:
        timeEl.value = "148BN Years";
      break;
      case 18:
        timeEl.value = "9TN Years";
      break;
      case 19:
        timeEl.value = "570TN Years";
      break;
      case 20:
        timeEl.value = "35qdn Years";
      break;
      default:
        timeEl.value = "No more than 20 characters";  
     } 
   break;
   case 4:
    switch(wordLength) {
      case 1:
        timeEl.value = "Instantly";
      break;
      case 2:
        timeEl.value = "Instantly";
      break;
      case 3:
        timeEl.value = "Instantly";
      break;
      case 4:
        timeEl.value = "Instantly";
      break;
      case 5:
        timeEl.value = "Instantly";
      break;
      case 6:
        timeEl.value = "20 Seconds";
      break;
      case 7:
        timeEl.value = "49 Minutes";
      break;
      case 8:
        timeEl.value = "5 Days";
      break;
      case 9:
        timeEl.value = "2 Years";
      break;
      case 10:
        timeEl.value = "330 Years";
      break;
      case 11:
        timeEl.value = "50K Years";
      break;
      case 12:
        timeEl.value = "8M Years";
      break;
      case 13:
        timeEl.value = "1BN Years";
      break;
      case 14:
        timeEl.value = "176BN Years";
      break;
      case 15:
        timeEl.value = "27TN Years";
      break;
      case 16:
        timeEl.value = "4QDN Years";
      break;
      case 17:
        timeEl.value = "619QDN Years";
      break;
      case 18:
        timeEl.value = "94QTN Years"; 
      break;
      case 19:
        timeEl.value = "14SXN Years";
      break;
      case 20:
        timeEl.value = "2SPTN Years";
      break;
      default:
        timeEl.value = "No more than 20 characters";  
     } 
   break;
   default:

 }





  



  
    
 }


 tipRequired2.innerText = `$${deci.toFixed(2)}`;




