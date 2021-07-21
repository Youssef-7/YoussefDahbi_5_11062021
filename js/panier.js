btn.onclick = () => {

	localStorage.setItem("nom", Name.value);
	localStorage.setItem("adresse", Adresse.value);
	localStorage.setItem("email", Email.value);
	localStorage.setItem("phone", Phone.value);
	localStorage.setItem("cb", CB.value);
}