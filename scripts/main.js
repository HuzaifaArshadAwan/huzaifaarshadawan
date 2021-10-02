let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src')
	if(mySrc === 'images/huzaifa-photo.jpg') {
		myImage.setAttribute('src', 'images/horse.jpg')
	}
	else {
		myImage.setAttribute('src', 'images/huzaifa-photo.jpg')
	}
}

myButton = document.querySelector('button')
myHeading = document.querySelector('h1')

function setUserName() {
	let name = prompt('Enter your name please');
	if(!name){
		setUserName();
	}
	else{
		localStorage.setItem('name', name);
		myHeading.textContent = 'Hey! My name is ' + name;
	}
	
}

if(!localStorage.getItem('name')){
	setUserName()
}
else{
	let name = localStorage.getItem('name')
	myHeading.textContent = 'Hey! My name is ' + name
}

myButton.onclick = function() {
	setUserName();
}
