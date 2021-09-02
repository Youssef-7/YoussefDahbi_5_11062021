let produit_local_storage = JSON.parse(localStorage.getItem("produit"));

			// let optionProduit = {
			// 	nom_produit : item_page_json.name,
			// 	id_produit : item_page_json.id,
			// 	image_produit : item_page_json.imageUrl,
			// 	prix_produit :item_page_json.price,
			//  quantite_produit : camera_quantite,
			//  }
    // -------------------------------------------------------------------
if (produit_local_storage === null){
let h2_id_camera_name = document.createElement("h2");
let h2_node_name = document.createTextNode("Le panier est vide !");
h2_id_camera_name.classList = "camera";
h2_id_camera_name.appendChild(h2_node_name);
let section = document.getElementById("camera_panier");
section.appendChild(h2_id_camera_name);

} else {


for (x in produit_local_storage) {

let div_id_camera = document.createElement("div");
div_id_camera.id = "camera";
var section = document.getElementById("camera_panier");
section.appendChild(div_id_camera);

let div_class_camera_choix = document.createElement("div");
div_class_camera_choix.classList = "camera_choix";
div_id_camera.appendChild(div_class_camera_choix);

let h2_id_camera_name = document.createElement("h2");
let h2_node_name = document.createTextNode(produit_local_storage[x].nom_produit);
h2_id_camera_name.classList = "camera_flex_description";
	h2_id_camera_name.appendChild(h2_node_name);
div_class_camera_choix.appendChild(h2_id_camera_name);

let div_class_camera_images = document.createElement("div");
div_class_camera_images.classList = "camera_images";
div_class_camera_choix.appendChild(div_class_camera_images); //div camera images

let item_text_node_image = document.createTextNode(produit_local_storage[x].image_produit);
let imgElement = document.createElement("img");
imgElement.setAttribute("src", produit_local_storage[x].image_produit);
imgElement.appendChild(item_text_node_image); //image
div_class_camera_images.appendChild(imgElement);

let k_id_camera_prix = document.createElement("p");
let k_node_prix = document.createTextNode("Quantité:"+" "+produit_local_storage[x].quantite_produit);
k_id_camera_prix.classList = "camera_flex_description";
	k_id_camera_prix.appendChild(k_node_prix);
div_class_camera_choix.appendChild(k_id_camera_prix);

let p_id_camera_prix = document.createElement("p");
let p_node_prix = document.createTextNode(produit_local_storage[x].prix_produit/100+",00"+"€");
p_id_camera_prix.classList = "camera_flex_description";
	p_id_camera_prix.appendChild(p_node_prix);
div_class_camera_choix.appendChild(p_id_camera_prix);

var button_supprimer = document.createElement("button");
button_supprimer.id = "btn_delete";
var button_supprimer_texte = document.createTextNode("Supprimer");
button_supprimer.appendChild(button_supprimer_texte);
div_class_camera_choix.appendChild(button_supprimer);


var div_class_description = document.createElement("div");
div_class_description.classList = "camera_flex_description";
div_id_camera.appendChild(div_class_description);

} } //Fin de la boucle
    // ------------------------Boutton supprimer-----------------------

var btn_supp = document.querySelectorAll("#btn_delete");
console.log("Test n°1: bouton supprimer")
console.log(btn_supp)

for (let x = 0; x < btn_supp.length; x++){
btn_supp[x].addEventListener("click", (event) =>{
	event.preventDefault()

localStorage.removeItem[x];
produit_local_storage.splice(x, 1);
localStorage.setItem('produit', JSON.stringify( produit_local_storage));
window.location.reload();
})
}

    // -------------------------------------------------------------------
let  prix_totale_panier = [];
let products = [];
if (produit_local_storage === null){}

else {
console.log("Test n°2: Controle donnée localStorage si panier plein")
console.log(produit_local_storage)	
// Recuperation prix panier
for (let x in produit_local_storage) {
var prod = produit_local_storage[x].id_produit;
products.push(prod);
// --------------------------------
let prix_dans_panier = produit_local_storage[x].prix_produit;
console.log("Test n°3: Présence des prix des cameras dans le panier")
console.log(prix_dans_panier);
// Prix dans tableau
prix_totale_panier.push(prix_dans_panier);
console.log("Test n°4: prix totale affiché")
console.log(prix_totale_panier)
} // Fin boucle

// Additionner les prix
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const Total = prix_totale_panier.reduce(reducer,0);
console.log(Total);
localStorage.setItem( "prixTotal", Total/100+",00"+"€"); 
let h3_panier = document.createTextNode("Total Panier TTC :")
let h3_element = document.createElement("h3");
h3_element.appendChild(h3_panier);
section.appendChild(h3_element);

let p_price= document.createElement("p");
let p_node_price = document.createTextNode(Total/100+",00"+"€");
p_price.appendChild(p_node_price);
section.appendChild(p_price);
// -----------------Boutton Confirmation-------------------

var button = document.createElement("button");
button.id = "btn";
button.classList = "btn"
var button_texte = document.createTextNode("Confirmer commande");
button.appendChild(button_texte);
var lien = document.createElement('a');
lien.setAttribute('href', "confirmation.html");
button.appendChild(lien);
section.appendChild(button);

}
// --------------------------------------------------------

let affichage_formulaire = () => {

var position_formulaire = document.querySelector("#formulaire");

 var formulaire = ` <form method="post" id="form_1">
                    <div class="form">
                        <label>
                            Nom
                        </label>
                        <input id="firstName" class="form-control" placeholder="Nom requis" />
                    </div>
                    <div class="form">
                        <label>
                            Prenom
                        </label>
                        <input id="lastName" class="form-control" placeholder="Nom requis" />
                    </div>
                    <div class="form">
                        <label>
                            Adresse
                        </label>
                        <input id="address" class="form-control" type="Adresse" placeholder="Adresse requise" />
                    </div>
                    <div class="form">
                        <label>
                            Ville
                        </label>
                        <input id="city" class="form-control" placeholder="Nom requis" />
                    </div>
                    <div class="form">
                        <label>
                            Adresse email
                        </label>
                        <input id="email" class="form-control" type="email" placeholder="Email requis" />
                    </div>
                    <div class="form">
                        <label>
                            Telephone
                        </label>
                        <input id="Phone" class="form-control" type="telephone" placeholder="Numero telephone requis" />
                    </div>
                    <div class="form">
                        <label>
                            Numero CB
                        </label>
                        <input id="CB" class="form-control" type="CB" placeholder="Numero CB requis" />
                    </div>`;

                    position_formulaire.insertAdjacentHTML("afterbegin", formulaire);

}
affichage_formulaire ()
// -------------------------vider le panier ----------------------
var button_vider = document.createElement("button");
button_vider.classList = "btn";
var button_vider_texte = document.createTextNode("Vider le panier");
button_vider.appendChild(button_vider_texte);
formulaire.appendChild(button_vider);
button_vider.addEventListener("click", (event) => { event.preventDefault()

localStorage.removeItem("produit");

alert("Vous avez vidé le panier");
window.location.href = "panier.html";

 });

// locale storage formulaire

button.addEventListener("click", (event) => { event.preventDefault()
// localStorage.setItem("prenom", document.querySelector("#Prenom").value)
// localStorage.setItem("Nom", document.querySelector("#Nom").value)
// localStorage.setItem("Adresse", document.querySelector("#Adresse").value)
// localStorage.setItem("Ville", document.querySelector("#Ville").value)
// localStorage.setItem("Email", document.querySelector("#Email").value)
// localStorage.setItem("Phone", document.querySelector("#Phone").value)
// localStorage.setItem("CB", document.querySelector("#CB").value)
localStorage.removeItem("produit")
const contact = {

	firstName : document.querySelector("#firstName").value,
	lastName : document.querySelector("#lastName").value,
	address : document.querySelector("#address").value,
	city : document.querySelector("#city").value,
	email : document.querySelector("#email").value,

};

//-----------------Validation Formulaire--------
const validation_prenom_nom_ville= (valeur) => {
return /^[A-Za-z]{3,15}$/.test(valeur);
}

const validation_email= (valeur) => {
return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/.test(valeur);
}

const validation_address= (valeur) => {
return /^[A-Za-z0-9\s]{5,30}$/.test(valeur);
}

const fenetre_alert = (valeur) => {
	return `${valeur}: ERREUR ! Champs non valide.`
}

	//controle validité prenom
function prenom_controle() {
const lastName = contact.lastName;
if(validation_prenom_nom_ville(lastName)){
	console.log("Test n°5: validation formulaire")
	console.log("OK")
	return true;
}else {
	console.log("Test n°6: Nom validation formulaire")
	console.log("ko")
	alert(fenetre_alert("Prenom :"))
	return false	
}
};//Fin fonction
	//controle validité nom
function nom_controle() {
const firstName = contact.firstName;
if(validation_prenom_nom_ville(firstName)){
	return true;
}else {
	alert(fenetre_alert("Nom:"))
	return false	
}
}; //Fin fonction
	//controle validité ville
function city_controle() {
const city = contact.city;
if(validation_prenom_nom_ville(city)){
	return true;
}else {
	alert(fenetre_alert("Ville:"))
	return false	
}
}; //Fin fonction
	//controle validité addresse
function address_controle() {
const address = contact.address;
if(validation_address(address)){
	return true;
}else {
	alert("Erreur ! Adresse non valide")
	return false	
}
}; //Fin fonction
	//controle validité email
function email_controle() {
const email = contact.email;
if(validation_email(email)){
	return true;
}else {
	alert("Erreur ! Email non valide")
	return false	
}
}; //Fin fonction
if (prenom_controle() && nom_controle() && city_controle() && address_controle() && email_controle()) {
	// Si fonction vrai prenom dans le local storage
	localStorage.setItem("contact", JSON.stringify(contact));

	// --------------ENVOIE SERVER------------------
console.log("Test n°7: Produit")
console.log (products)
console.log("Test n°8: Contact")
console.log (contact)

const envoieServer = fetch("http://localhost:3000/api/cameras/order", {
method: "POST",
body: JSON.stringify({ contact, products }),	
headers: { "Accept": "application/json",
	"content-Type" :  "application/json",

}

}); //fin fetch
envoieServer.then(async(response)=>{
	try{
		const contenu = await response.json();
		console.log(contenu);
		if(response.ok){

			///order Id dans le localestorage
			localStorage.setItem( "order_id", contenu.orderId)
			///lien page confirmation.html
			window.location = "confirmation.html"

		} else{
			
		};

	} catch(e){
		console.log(e);
	};
}); //fin test fetch

}else {
	
}

});//Fin evenement