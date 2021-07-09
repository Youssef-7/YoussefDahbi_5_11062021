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
        }  
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

        				let item_text_node_image = document.createTextNode(item_page_json[0].imageUrl);
						let imgElement = document.createElement("img");
						let lien = document.createElement('a');
						lien.setAttribute('href', "description.html");
						div_class_camera_images.appendChild(lien);
	    				imgElement.setAttribute("src", item_page_json[0].imageUrl);
	    				imgElement.appendChild(item_text_node_image);
	    				lien.appendChild(imgElement); //image

	    let div_class_camera_flex_description = document.createElement("div");
	    div_class_camera_flex_description.classList = "camera_flex_description";
	    div_class_camera_choix.appendChild(div_class_camera_flex_description); // DIV Class_camera_flex_description

		    let h3_id_camera_name = document.createElement("h3");
		    let h3_node_name = document.createTextNode(item_page_json[0].name);
		    h3_id_camera_name.id = "camera_name";
		    h3_id_camera_name.appendChild(h3_node_name);
		    div_class_camera_flex_description.appendChild(h3_id_camera_name); // H3 Camera name

		   	let p_price= document.createElement("p");
		    let p_node_price = document.createTextNode(item_page_json[0].price/100+",00"+"€");
		    p_price.appendChild(p_node_price);
		    div_class_camera_flex_description.appendChild(p_price); //Price

// -------------------------------------------------------------------------------------------------------------

        let div_class_camera_choix1 = document.createElement("div");
        div_class_camera_choix1.classList = "camera_choix";
        div_id_camera.appendChild(div_class_camera_choix1); //div camera choix

        	let div_class_camera_images1 = document.createElement("div");
        	div_class_camera_images1.classList = "camera_images";
        	div_class_camera_choix1.appendChild(div_class_camera_images1); //div camera images

        				let item_text_node_image1 = document.createTextNode(item_page_json[1].imageUrl);
						let imgElement1 = document.createElement("img");
	    				imgElement1.setAttribute("src", item_page_json[1].imageUrl);
	    				imgElement1.appendChild(item_text_node_image1);
	    				div_class_camera_images1.appendChild(imgElement1); //image

	    let div_class_camera_flex_description1 = document.createElement("div");
	    div_class_camera_flex_description.classList1 = "camera_flex_description";
	    div_class_camera_choix1.appendChild(div_class_camera_flex_description1); // DIV Class_camera_flex_description

		    let h3_id_camera_name1 = document.createElement("h3");
		    let h3_node_name1 = document.createTextNode(item_page_json[1].name);
		    h3_id_camera_name1.id = "camera_name";
		    h3_id_camera_name1.appendChild(h3_node_name1);
		    div_class_camera_flex_description1.appendChild(h3_id_camera_name1); // H3 Camera name

		   	let p_price1= document.createElement("p");
		    let p_node_price1 = document.createTextNode(item_page_json[1].price/100+",00"+"€");
		    p_price1.appendChild(p_node_price1);
		    div_class_camera_flex_description1.appendChild(p_price1); //Price

// -------------------------------------------------------------------------------------------------------------

        let div_class_camera_choix2 = document.createElement("div");
        div_class_camera_choix2.classList = "camera_choix";
        div_id_camera.appendChild(div_class_camera_choix2); //div camera choix

        	let div_class_camera_images2 = document.createElement("div");
        	div_class_camera_images2.classList = "camera_images";
        	div_class_camera_choix2.appendChild(div_class_camera_images2); //div camera images

        				let item_text_node_image2 = document.createTextNode(item_page_json[2].imageUrl);
						let imgElement2 = document.createElement("img");
	    				imgElement2.setAttribute("src", item_page_json[2].imageUrl);
	    				imgElement2.appendChild(item_text_node_image2);
	    				div_class_camera_images2.appendChild(imgElement2); //image

	    let div_class_camera_flex_description2 = document.createElement("div");
	    div_class_camera_flex_description.classList2 = "camera_flex_description";
	    div_class_camera_choix2.appendChild(div_class_camera_flex_description2); // DIV Class_camera_flex_description

		    let h3_id_camera_name2 = document.createElement("h3");
		    let h3_node_name2 = document.createTextNode(item_page_json[2].name);
		    h3_id_camera_name2.id = "camera_name";
		    h3_id_camera_name2.appendChild(h3_node_name2);
		    div_class_camera_flex_description2.appendChild(h3_id_camera_name2); // H3 Camera name

		   	let p_price2= document.createElement("p");
		    let p_node_price2 = document.createTextNode(item_page_json[2].price/100+",00"+"€");
		    p_price2.appendChild(p_node_price2);
		    div_class_camera_flex_description2.appendChild(p_price2); //Price
// -------------------------------------------------------------------------------------------------------------
        let div_class_camera_choix3 = document.createElement("div");
        div_class_camera_choix3.classList = "camera_choix";
        div_id_camera.appendChild(div_class_camera_choix3); //div camera choix

        	let div_class_camera_images3 = document.createElement("div");
        	div_class_camera_images3.classList = "camera_images";
        	div_class_camera_choix3.appendChild(div_class_camera_images3); //div camera images

        				let item_text_node_image3 = document.createTextNode(item_page_json[3].imageUrl);
						let imgElement3 = document.createElement("img");
	    				imgElement3.setAttribute("src", item_page_json[3].imageUrl);
	    				imgElement3.appendChild(item_text_node_image3);
	    				div_class_camera_images3.appendChild(imgElement3); //image

	    let div_class_camera_flex_description3 = document.createElement("div");
	    div_class_camera_flex_description.classList3 = "camera_flex_description";
	    div_class_camera_choix3.appendChild(div_class_camera_flex_description3); // DIV Class_camera_flex_description

		    let h3_id_camera_name3 = document.createElement("h3");
		    let h3_node_name3 = document.createTextNode(item_page_json[3].name);
		    h3_id_camera_name3.id = "camera_name";
		    h3_id_camera_name3.appendChild(h3_node_name3);
		    div_class_camera_flex_description3.appendChild(h3_id_camera_name3); // H3 Camera name

		   	let p_price3= document.createElement("p");
		    let p_node_price3 = document.createTextNode(item_page_json[3].price/100+",00"+"€");
		    p_price3.appendChild(p_node_price3);
		    div_class_camera_flex_description3.appendChild(p_price3); //Price



        // let item_name = item_page_json[0].name;
        // let camera_name = document.getElementById("camera_name");
        // camera_name.innerHTML = item_name;
    // -------------------------------------------------------------------
     }) //.then(function(item_page_json)
  .catch(function(err) {
    alert("Error " + err);

    // Une erreur est survenue
  });// end of fetch