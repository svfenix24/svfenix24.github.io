var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo-sashe.jpg') {
      myImage.setAttribute ('src','images/photo-sashe2.jpg');
    } else {
      myImage.setAttribute ('src','images/photo-sashe.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Флорентийское аромасаше - это круто, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Флорентийское аромасаше - это круто, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }