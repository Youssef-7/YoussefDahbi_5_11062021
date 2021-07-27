let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

			// let optionProduit = {
			// 	NomProduit : item_page_json.name,
			// 	id_produit : item_page_json.id,
			// 	image_Produit : item_page_json.imageUrl,
			// 	prix_Produit :item_page_json.price,
			//  }

    // -------------------------------------------------------------------
 for (x in produitLocalStorage){
     

	let h2_id_camera_name = document.createElement("h2");
	let h2_node_name = document.createTextNode(produitLocalStorage[x].NomProduit);
	h2_id_camera_name.classList = "camera";
 	h2_id_camera_name.appendChild(h2_node_name);
 	let section = document.getElementById("camera_panier");
	section.appendChild(h2_id_camera_name);

	let div_id_camera = document.createElement("div");
    div_id_camera.id = "camera";
    section.appendChild(div_id_camera);

    	let div_class_camera_choix = document.createElement("div");
        div_class_camera_choix.classList = "camera_choix";
        div_id_camera.appendChild(div_class_camera_choix);

        	let div_class_camera_images = document.createElement("div");
        	div_class_camera_images.classList = "camera_images";
        	div_class_camera_choix.appendChild(div_class_camera_images); //div camera images

        				let item_text_node_image = document.createTextNode(produitLocalStorage[x].image_Produit);
						let imgElement = document.createElement("img");
	    				imgElement.setAttribute("src", produitLocalStorage[x].image_Produit);
	    				imgElement.appendChild(item_text_node_image); //image
	    				div_class_camera_images.appendChild(imgElement);

	   		var div_class_description = document.createElement("div");
	    	div_class_description.classList = "camera_flex_description";
	    	div_id_camera.appendChild(div_class_description);
		





      }  //Fin de la boucle

    // -------------------------------------------------------------------
let  prix_totale_panier = [];

// Recuperation prix panier
for (let x in produitLocalStorage) {

	let prixDansPanier = produitLocalStorage[x].prix_Produit;
	console.log(prixDansPanier);
// Prix dans tableau
	prix_totale_panier.push(prixDansPanier);
	console.log(prix_totale_panier)
} // Fin boucle

// Additionner les prix
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const Total = prix_totale_panier.reduce(reducer,0);
console.log(Total);

      				let h3_panier = document.createTextNode("Total Panier TTC :")
        			let h3Element = document.createElement("h3");
        			h3Element.appendChild(h3_panier);
        			div_class_description.appendChild(h3Element);

      				let p_price= document.createElement("p");
		    		let p_node_price = document.createTextNode(Total/100+",00"+"€");
		    		p_price.appendChild(p_node_price);
		    		div_class_description.appendChild(p_price);

		    		let button = document.createElement("button");
					button.id = "btn";
					button.classList = "btn"
					let button_texte = document.createTextNode("Confirmer commande");
					button.appendChild(button_texte);
					let lien = document.createElement('a');
					lien.setAttribute('href', "confirmation.html");
					button.appendChild(lien);
					div_class_description.appendChild(button);