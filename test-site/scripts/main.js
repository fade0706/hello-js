let myHeader=document.querySelector("h2");
myHeader.textContent="Hello world!";

const button=document.querySelector("button")
button.onclick=function(){
    console.log("哈哈")
    let name=prompt("你叫啥")
    alert("Hello"+name+",很高兴见到你")
}
let myBody=document.querySelector("h3") 
myBody.textContent="哈哈"


let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });


  let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/img1.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/img1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };

