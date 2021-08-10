        const responseId = localStorage.getItem("OrderId")
        console.log("Test n°1: Id de la commande")
        console.log(responseId)
        let new_item_node_name = document.createTextNode("Bravo votre commande n°"+responseId+" "+"arrivera très prochainement")
        let pElement = document.createElement("p");
        pElement.classList = "confirmation";
        pElement.appendChild(new_item_node_name);
        let div_id_camera_confirmation = document.getElementById("camera_confirmation");
        div_id_camera_confirmation .appendChild(pElement)