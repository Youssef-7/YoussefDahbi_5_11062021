
var paramsString = window.location.search
console.log("Test n°1: Recuperation du lien dans la page description.html")
console.log(paramsString)
const ValidationId= (valeur) => {
return /^[a-z0-9]{24}$/.test(valeur);
}
var searchParams = new URLSearchParams(paramsString);
let newId = searchParams.get("camera_id");


if(ValidationId(newId)) {
	console.log("OK")

}else {	alert("Erreur ! ID non valide")

}

console.log("Test n°2: Recuperation de l'ID")
console.log (newId)


let create_item_page_url = "http://localhost:3000/api/cameras/" + newId;
fetch(create_item_page_url)
  .then(function(item_page_response) {if (item_page_response.ok) {return item_page_response.json(); } })
  .then(function(item_page_json) {
    // -------------------------------------------------------------------
//div id=camera
let div_id_camera = document.createElement('div');
div_id_camera.id = "camera";

let container = document.getElementById("container");
container.appendChild(div_id_camera);
   
    //div class = camera_choix
	let div_class_camera_choix = document.createElement('div');
	div_class_camera_choix.className = "camera_choix";

	let camera = document.getElementById("camera");
	camera.appendChild(div_class_camera_choix);

	//div class = camera_images
	let camera_images = document.createElement('div');
	camera_images.className = "camera_images";

	let camera_choix = document.getElementsByClassName("camera_choix");
	div_class_camera_choix.appendChild(camera_images);

	//images
		let item_text_node_image = document.createTextNode(item_page_json.imageUrl);
		let imgElement = document.createElement("img");
	    imgElement.id = "camera_image";
	    imgElement.setAttribute("src", item_page_json.imageUrl);
	    imgElement.appendChild(item_text_node_image);
        camera_images.appendChild(imgElement);
    //div description
   let div_class_description = document.createElement("div");
   div_class_description.className = "description";
   camera.appendChild(div_class_description);
   			// h2 camera name
   			let item_text_node_name = document.createTextNode(item_page_json.name); 
			let new_item_page_name = document.createElement("h2"); 
			new_item_page_name.appendChild(item_text_node_name);
			div_class_description.appendChild(new_item_page_name);


			let div_class_description_titre = document.createElement("h3");
			let description_node_titre = document.createTextNode("Description")
   			div_class_description_titre.className = "description_titre";
   			div_class_description_titre.appendChild(description_node_titre);
   			div_class_description.appendChild(div_class_description_titre);
			//paragraphe
			let item_text_node_description = document.createTextNode(item_page_json.description); 
			let new_item_page_description = document.createElement("p"); 
			new_item_page_description.appendChild(item_text_node_description);
			div_class_description.appendChild(new_item_page_description);
			//prix
			let item_text_node_prix = document.createTextNode(item_page_json.price/100+",00"+"€");
			let item_price_decimal = item_text_node_prix; 
			let new_item_page_prix = document.createElement("p"); 
			new_item_page_prix.appendChild(item_price_decimal);
			div_class_description.appendChild(new_item_page_prix);

			let form = document.createElement("form");
			div_class_description.appendChild(form);

			let label = document.createElement("label");
			let label_node_texte = document.createTextNode("Choisir quantité");
			label.appendChild(label_node_texte);
			label.setAttribute("for", "quantite_produit");
			form.appendChild(label);

			let select =document.createElement("select");
			select.id = "quantite_produit";
			select.setAttribute("name", "quantite_produit");
			form.appendChild(select);

			let option = document.createElement("option");
			let option_node_texte = document.createTextNode("1")
			option.appendChild(option_node_texte);
			option.setAttribute("value", "1");
			select.appendChild(option);

			let option2 = document.createElement("option");
			let option_node_texte2 = document.createTextNode("2")
			option2.appendChild(option_node_texte2);
			option2.setAttribute("value", "2");
			select.appendChild(option2);


			let option3 = document.createElement("option");
			let option_node_texte3 = document.createTextNode("3")
			option3.appendChild(option_node_texte3);
			option3.setAttribute("value", "3");
			select.appendChild(option3);


			let button = document.createElement("button");
			button.className = "button";
			let button_texte = document.createTextNode("Ajouter au panier");
			button.appendChild(button_texte);
			div_class_description.appendChild(button);

// ---------------------Quantité produit----------------------//

		const quantite_produit = document.querySelector("#quantite_produit");



			button.addEventListener("click", (event) => { event.preventDefault();
//Local storage
			var camera_quantite = quantite_produit.value;


			console.log('Test n°3: Verification quantite cameras');
			console.log(camera_quantite);
			
			// let optionProduit = {
			// 	NomProduit : item_page_json.name,
			// 	id_produit : item_page_json._id,
			// 	image_Produit : item_page_json.imageUrl,
			// 	prix_Produit :item_page_json.price * camera_quantite,
			// 	quantite_produit : camera_quantite,
			//  }
			//  console.log("Test n°4: Donnees presentes dans optionProduit")
			//  console.log(optionProduit)
			// let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

			// if (!produitLocalStorage) produitLocalStorage = [];
			// 	produitLocalStorage.push(optionProduit);
			// 	localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
			// 	console.log("Test n°5: Donnees presentes dans le localStorage")
			// 	console.log(produitLocalStorage);
				
			// 	console.log(cameraIdPanier);
			let optionProduit = {
	'NomProduit': 		item_page_json.name,
	'id_produit': 		item_page_json._id,
	'image_Produit': 		item_page_json.imageUrl,
	'prix_Produit': 		item_page_json.price * camera_quantite,
	'quantite_produit': camera_quantite,
 };
			 console.log("Test n°1: Donnees presentes dans optionProduit");
			 console.log(optionProduit);

// Create artificial localStorage - data to test code
let produitLocalStorage = [];
produitLocalStorage = JSON.parse(localStorage.getItem("produit"));



// *******************************************************

			if (!produitLocalStorage){
			 produitLocalStorage = [];
				produitLocalStorage.push(optionProduit);
				localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

				}else{

					for (x in produitLocalStorage ){

						let produit_deja_choisi = produitLocalStorage[x];
						let nb1 = parseInt(optionProduit.quantite_produit);
						let nb2 = parseInt(produit_deja_choisi.quantite_produit);
						let nb3 = parseInt(nb1 + nb2);
						let nb4 = parseInt(optionProduit.prix_Produit)
						let nb5 = parseInt(nb4*nb3)
				console.log("Test n°2-2 ** nb1 - nb2 - nb3");
				console.log(nb1 + " - " + nb2 + " - " + nb3);
				console.log(optionProduit.prix_Produit)
						if (produit_deja_choisi.id_produit == item_page_json._id){
							 produitLocalStorage[x].quantite_produit = nb3; 
							 produitLocalStorage[x].prix_Produit = nb5;
							 localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
							}else{
							produitLocalStorage.push(optionProduit);
							localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

						}//end if (produit_deja_choisi. ... 
					}//end for in
			}//end if (!produitLocalStorage)


				let cameraIdPanier = item_page_json.name;
				alert("La camera"+" "+cameraIdPanier+" "+"à été ajouté au panier")
			
				}) //fin evenement
			
    // -------------------------------------------------------------------
     }) //.then(function(item_page_json)
  .catch(function(err) {
    alert("Error " + err);

    // Une erreur est survenue
  });// end of fetch

