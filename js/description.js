
var paramsString = window.location.search
var searchParams = new URLSearchParams(paramsString);
const newId = searchParams.get("camera_id");
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

			let button = document.createElement("button");
			button.className = "button";
			let button_texte = document.createTextNode("Ajouter au panier");
			button.appendChild(button_texte);
			div_class_description.appendChild(button);

			button.addEventListener("click", (event) => { event.preventDefault();
//Local storage
			let optionProduit = {
				NomProduit : item_page_json.name,
				id_produit : item_page_json._id,
				image_Produit : item_page_json.imageUrl,
				prix_Produit :item_page_json.price,
			 }




			let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

			if (!produitLocalStorage) produitLocalStorage = [];

				
				produitLocalStorage.push(optionProduit);
				localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

				console.log(produitLocalStorage);
			
				}) //fin evenement
			
    // -------------------------------------------------------------------
     }) //.then(function(item_page_json)
  .catch(function(err) {
    alert("Error " + err);

    // Une erreur est survenue
  });// end of fetch

