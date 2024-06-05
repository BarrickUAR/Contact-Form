let myName = document.querySelector("#name");
let mySurname = document.querySelector("#lastName");
let email = document.querySelector("#eMailInput");
let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");
let message = document.querySelector(".textArea1");
let submit = document.querySelector(".submit");
let approve = document.querySelector("#approve")

let isminiz = document.querySelector(".outputFName")
let Soyadiniz = document.querySelector(".lNameOutput")
let ePosta = document.querySelector(".emailOutPut")
let Mesajiniz = document.querySelector(".messageOutPut")
let tercihiniz = document.querySelector(".queryOutput");


function handleFormClick() {
  
  isminiz.innerText = myName.value;
  Soyadiniz.innerText = mySurname.value;
  ePosta.innerText = email.value;
  Mesajiniz.innerText = message.value;

 


}

submit.addEventListener("click", handleFormClick);



