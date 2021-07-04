let create_item_page_url = "http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b061";

fetch(create_item_page_url)
  .then(function(item_page_response) {if (item_page_response.ok) {return item_page_response.json(); } })
  .then(function(item_page_json) {
    // -------------------------------------------------------------------
        let item_name =item_page_json.name;
        let camera_name = document.getElementById("camera_name");
        camera_name.innerHTML = item_name;

        let item_imageUrl = item_page_json.imageUrl;
        let camera_image = document.getElementById("camera_image");
        camera_image.src = item_imageUrl;

        let item_description = item_page_json.description;
        let camera_description = document.getElementById("camera_description");
        camera_description.innerHTML = item_description;

        let item_price = (item_page_json.price)/100;
        let item_price_decimal = item_price.toFixed(2);
        let camera_price = document.getElementById("camera_price");
        camera_price.innerHTML = item_price_decimal + "€" ;
        // pareil pour la description
        // pareil pour le prix



    // -------------------------------------------------------------------
     }) //.then(function(item_page_json)
  .catch(function(err) {
    alert("Error " + err);

    // Une erreur est survenue
  });// end of fetch

