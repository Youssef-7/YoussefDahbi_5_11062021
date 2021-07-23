var paramsString = window.location.search
var searchParams = new URLSearchParams(paramsString);
const newId = searchParams.get("camera_id");
console.log (newId)


let create_item_page_url = "http://localhost:3000/api/cameras/" + newId;
fetch(create_item_page_url)
  .then(function(item_page_response) {if (item_page_response.ok) {return item_page_response.json(); } })
  .then(function(item_page_json) {
    // -------------------------------------------------------------------
 for (x in item_page_json){
        	console.log(x);
        	console.log(item_page_json[x]);
        	console.log(item_page_json[x].name);

	let h2_id_camera_name = document.createElement("h2");
	let h2_node_name = document.createTextNode(item_page_json[x].name);
	h2_id_camera_name.classList = "camera";
 	h2_id_camera_name.appendChild(h3_node_name);
 	let section= document.getElementById("camera_panier")
	section.appendChild(h2_id_camera_name);

	let div_id_camera = document.createElement("div");
    div_id_camera.id = "camera_";
    section.appendChild(div_id_camera);

    	let div_class_camera_choix = document.createElement("div");
        div_class_camera_choix.classList = "camera_choix";
        div_id_camera.appendChild(div_class_camera_choix);

        	let div_class_camera_images = document.createElement("div");
        	div_class_camera_images.classList = "camera_images";
        	div_class_camera_choix.appendChild(div_class_camera_images); //div camera images

        				let item_text_node_image = document.createTextNode(item_page_json[x].imageUrl);
						let imgElement = document.createElement("img");
	    				imgElement.setAttribute("src", item_page_json[x].imageUrl);
	    				imgElement.appendChild(item_text_node_image); //image
	    				div_class_camera_images.appendChild(imgElement);

	   		let div_class_description = document.createElement("div");
	    	div_class_description.classList = "camera_flex_description";
	    	div_id_camera.appendChild(div_class_description);		

	    	        let h3_panier = document.createTextNode("Total Panier TTC :")
        			let h3Element = document.createElement("h3");
        			h3Element.appendChild(h3_panier);
        			div_class_description.appendChild(h3Element);

        			let p_price= document.createElement("p");
		    		let p_node_price = document.createTextNode(item_page_json[x].price/100+",00"+"€");
		    		p_price.appendChild(p_node_price);
		    		div_class_description.appendChild(p_price);

		    		let button = document.createElement("button");
					button.id = "btn";
					button.classList = "btn"
					let button_texte = document.createTextNode("Confirmer commande");
					button.appendChild(button_texte);
					let lien = document.createElement('a');
					lien.setAttribute('href', "confirmation.html";
					button.appendChild(lien);
					div_class_description.appendChild(button);
      }

    // -------------------------------------------------------------------
     }) //.then(function(item_page_json)
  .catch(function(err) {
    alert("Error " + err);

    // Une erreur est survenue
  });// end of fetch
