
function gototop() {
	window.location.href = "#header";
};

var objPeople = [
	// {
	// 	name	: 'Abhijit Unavane',
	// 	username: 'abhi',
	// 	email	: 'abhi@gmail.com',
	// 	password: 'abhi'
	// }
];

section = document.getElementsByTagName('section')[0];

// signup
if (section.id == 'signup')
{
	const signupForm = document.getElementById("signup-form");
	const name = document.getElementById("name");
	const username = document.getElementById("username");
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const password2 = document.getElementById("password2");

	signupForm.addEventListener('submit', (event) => {
		event.preventDefault();
		
		checkInputs();
	});

	function checkInputs() {

		const nameValue = name.value.trim();
		const usernameValue = username.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();
		const password2Value = password2.value.trim();
		let flag = 0;
		if(nameValue === '') {
			setErrorFor(name, 'Username cannot be blank');
			flag = 0;
		} else {
			setSuccessFor(name);
			flag = 1;
		}

		if(usernameValue === '') {
			setErrorFor(username, 'Username cannot be blank');
			flag = 0;
		} else {
			setSuccessFor(username);
			flag = 1;
		}

		if(emailValue === '') {
			setErrorFor(email, 'Email cannot be blank');
			flag = 0;
		} else if(! isEmail(emailValue)){
			setErrorFor(email, "Email is not valid!");
			flag = 0;
		} else {
			setSuccessFor(email);
			flag = 1;
		}

		if(passwordValue === '') {
			setErrorFor(password, 'Password cannot be blank');
			flag =0;
		} else {
			flag = 1;
			setSuccessFor(password);
		}
		
		if(password2Value === '') {
			flag = 0;
			setErrorFor(password2, 'Password2 cannot be blank');
		} else if(passwordValue !== password2Value) {
			flag = 0;
			setErrorFor(password2, 'Passwords does not match');
		} else{
			flag = 1;
			setSuccessFor(password2);
		}
		if (usernameValue && nameValue && emailValue && passwordValue && password2Value ) {
			setTimeout(()=>{
				window.location.href = 'login.html';
			}, 300 );	
			// let object = {
			// 	name	: nameValue,
			// 	username: usernameValue,
			// 	email	: emailValue,
			// 	password: passwordValue
			// };
			// objPeople.push(object);
			// console.log(objPeople);
				
		}
	};

	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}
}
else if( section.id == 'login' ){
	const loginForm = document.getElementById("login-form");
	const username = document.getElementById("username");
	const password = document.getElementById("password");

	loginForm.addEventListener( 'submit', (e)=> {
		e.preventDefault();
		
		getInfo();
	});

	function getInfo(){
		const usernameValue = username.value;
		const passwordValue = password.value;
				
		if(usernameValue === '') {
			setErrorFor(username, 'Username cannot be blank');
		} else {
			setSuccessFor(username);
		}
		if(passwordValue === '') {
			setErrorFor(password, 'Password cannot be blank');
		} else {
			setSuccessFor(password);
		}
		if (usernameValue && passwordValue) {
			setTimeout(()=>{
				window.location.href = 'mobiles.html';
			}, 300);	
			

			// for(i=0; i < objPeople.length; i++){
			// 	if ((usernameValue === objPeople[i].username || usernameValue === objPeople[i].email) && passwordValue === objPeople[i].password ){
			// 		console.log(usernameValue + ' is logged in!' + ' with password as ' + passwordValue);
			// 		return;
			// 	}
			// 	console.log('wrong username or password!');
			// }
		}
	};
}
else if ( section.id =="separate-mobiles-section") {
	var productImg = document.getElementById("product-img");
	var smallImg   = document.getElementsByClassName("small-img");
	
	
	for(let i =0;i <smallImg.length; i++){
		smallImg[i].onclick = function() 
		{
			productImg.src = smallImg[i].src;
		}
	}

}
else if ( section.id =="about") {
	var about = document.getElementById('about-heading-downward');

	about.addEventListener('click', ()=> {
		window.location.href = '#about-info';
	});
}
	// login completed

function setErrorFor( input, message ) {
	const formControl = input.parentElement; // .form-control
	const small = formControl.querySelector('small');
	//add error message to small
	small.innerText = message;

	//add error class to formControl 
	formControl.className = "form-control error";
	
};

function setSuccessFor(input) {
	const formControl = input.parentElement; // .form-control

	//add success class to formControl
	formControl.className = 'form-control success';
}

