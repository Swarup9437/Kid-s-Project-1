const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("myAudio");

  num1 = document.getElementById("base").innerHTML;
  num2 = 0;
  answer = 0;

document.getElementById("num1").innerHTML = num1; 
document.getElementById("num2").innerHTML = num2;
  
option1.innerHTML = ".";
option2.innerHTML = answer;
option3.innerHTML = ".";

function incrementCounter() {
  quet = document.getElementById('num2'); 
  num2++;
  quet.innerHTML = num2;
  option2.innerHTML = num1*num2;
}


const ans = document.getElementById("option2");
ans.addEventListener('click', incrementCounter) 
