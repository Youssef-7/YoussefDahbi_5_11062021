let create_item_page_url = "http://localhost:3000/api/cameras";

fetch(create_item_page_url)
  .then(function(item_page_response) {if (item_page_response.ok) {return item_page_response.json(); } })
  .then(function(item_page_json) {
    // -------------------------------------------------------------------
        // let item_name = item_page_json;
        // let camera_name = document.getElementById("camera_name");
        for (x in item_page_json){
        	console.log(x);
        	console.log(item_page_json[x]);
        	console.log(item_page_json[x].name);
          
           // fin de la boucle
        // creation code html
        let new_item_node_name = document.createTextNode("Description")
        let h2Element = document.createElement("h2");
        h2Element.classList = "camera";
        h2Element.appendChild(new_item_node_name);
        let div_id_camera = document.getElementById("camera");
        div_id_camera.appendChild(h2Element);    //div titre description


        let div_class_camera_choix = document.createElement("div");
        div_class_camera_choix.classList = "camera_choix";
        div_id_camera.appendChild(div_class_camera_choix); //div camera choix

        	let div_class_camera_images = document.createElement("div");
        	div_class_camera_images.classList = "camera_images";
        	div_class_camera_choix.appendChild(div_class_camera_images); //div camera images

        				let item_text_node_image = document.createTextNode(item_page_json[x].imageUrl);
						let imgElement = document.createElement("img");
						let lien = document.createElement('a');
						lien.setAttribute('href', "description.html");
						div_class_camera_images.appendChild(lien);
	    				imgElement.setAttribute("src", item_page_json[x].imageUrl);
	    				imgElement.appendChild(item_text_node_image);
	    				lien.appendChild(imgElement); //image

	    let div_class_camera_flex_description = document.createElement("div");
	    div_class_camera_flex_description.classList = "camera_flex_description";
	    div_class_camera_choix.appendChild(div_class_camera_flex_description); // DIV Class_camera_flex_description

		    let h3_id_camera_name = document.createElement("h3");
		    let h3_node_name = document.createTextNode(item_page_json[x].name);
		    h3_id_camera_name.id = "camera_name";
		    h3_id_camera_name.appendChild(h3_node_name);
		    div_class_camera_flex_description.appendChild(h3_id_camera_name); // H3 Camera name

		   	let p_price= document.createElement("p");
		    let p_node_price = document.createTextNode(item_page_json[x].price/100+",00"+"€");
		    p_price.appendChild(p_node_price);
		    div_class_camera_flex_description.appendChild(p_price); 
		    }//Price

        // let item_name = item_page_json[0].name;
        // let camera_name = document.getElementById("camera_name");
        // camera_name.innerHTML = item_name;
    // -------------------------------------------------------------------
     }) //.then(function(item_page_json)
  .catch(function(err) {
    alert("Error " + err);

    // Une erreur est survenue
  });// end of fetch