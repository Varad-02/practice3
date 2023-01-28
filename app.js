var txtInput = document.querySelector("#txt-input")
var btnResult = document.querySelector("#btn-result")
var outputDiv = document.querySelector("#output")

function clickHandler() {

    var username = "varad";
   var inputText = txtInput.value; 

   if (inputText  === username) {
    resultText ="user found"
   } else{ 
    resultText = "user not found"
   }
   outputDiv.innerText = resultText 

} 

btnResult.addEventListener("click", clickHandler)

