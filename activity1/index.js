//Your code goes here

// 1. Click the button to display your name
//Selectors
let btnName = document.querySelector('#btnName');
let myName = document.querySelector('#myName');
//Function
const displayName = () => {
  myName.value = "Antonio";
};
//Call the event
btnName.addEventListener('click', displayName);
//2. Switch lights on mouseover
//Selectors
let imageOff = document.querySelector('#imageOff');
//Function
const lightOn = () =>{
  imageOff.src = "./images/lighton.png";
}
const lightOff = () =>{
  imageOff.src = "./images/lightoff.png";
}
//Call the event
imageOff.addEventListener("mouseover", lightOn);
imageOff.addEventListener("mouseout", lightOff);
//3. Double click to display content
//Selectors
let btndbName = document.querySelector('#btndbName');
let displayPara = document.querySelector('#displayPara');
/*Function {
  //some code here
  //create a new img element
}*/
const displayContent = () =>{
  displayPara.innerHTML = "You double ckicked me";
  displayPara.style.color = "red";
  displayPara.style.display = "block";
  let newImg = document.createElement("img");
  newImg.src = "./images/smileyface.png";
  displayPara.appendChild(newImg);
}

//Call the event
btndbName.addEventListener('dblclick', displayContent);
// 4. Traffic Lights
//Selectors
let btnStop = document.querySelector('#btnStop');
let btnReady = document.querySelector('#btnReady');
let btnGo = document.querySelector('#btnGo');
let stopDiv = document.querySelector('#stopDiv');
let readyDiv = document.querySelector('#readyDiv');
let goDiv = document.querySelector('#goDiv');
//Function 1
const stop = () => {
  stopDiv.style.backgroundColor = "red";
  readyDiv.style.backgroundColor = "";
  goDiv.style.backgroundColor = "";
};
//Function 2
const ready = () => {
  stopDiv.style.backgroundColor = "";
  readyDiv.style.backgroundColor = "yellow";
  goDiv.style.backgroundColor = "";
};
//Function 3
const go = () => {
  stopDiv.style.backgroundColor = "";
  readyDiv.style.backgroundColor = "";
  goDiv.style.backgroundColor = "green";
};
//Call the events
btnStop.addEventListener("click", stop);
btnReady.addEventListener("click", ready);
btnGo.addEventListener("click", go);
//5. Change textbox border colours
//Selectors
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let btn2Name = document.querySelector('#btn2Name');
//Function
const borderColor = () => {
  firstName.style.borderColor = "red";
  lastName.style.borderColor = "green";
};
//Call the event
btn2Name.addEventListener("click", borderColor);
//6. validate the box [length should be more than 5 characters]
//Selectors
let errMsg = document.querySelector('#errMsg');
let myName2 = document.querySelector('#myName2');
let btnSub2 = document.querySelector('#btnSub2');
/*Function {
  //if statement
}*/
const validation = () => {
  if(myName2.value.length > 8){
    errMsg.innerHTML = "All good!";
    errMsg.style.color = "green";
  }
};


//Call the event

// 7.create a list of hobbies
//Selectors

/*Function {
  //for loop
}*/

//Call the event

// 8. Display a profile card from an object
//Object

//Selectors

/*Function {
    //for loop
      //if statement
  }*/
