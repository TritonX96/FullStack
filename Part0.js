// Peresonalized image
let myImage = document.querySelector('img');
myImage.onclick =function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'firefox-icon.png'){
        myImage.setAttribute('src','firefox2.png');
    }else{
        myImage.setAttribute('src','firefox-icon.png');
    }
}

//Personalized button
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        
        return;
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' +storedName;
}

myButton.onclick = function(){
    setUserName();
}


//Personalized welcome message code

// document.querySelector('h1').onclick=function(){};

// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


//Example testing
// document.querySelector('html').onclck=function(){};

// let myVariable = 'Bob';
// myVariable="Isaac";
