const response_id = localStorage.getItem("order_id");
const response_prix = localStorage.getItem("prixTotal");
console.log(response_prix)
console.log("Test n°1: Id de la commande")
console.log(response_id)
let new_item_node_name = document.createTextNode("Bravo votre commande n°"+response_id+" "+", d'un montant de "+ " "+response_prix+" "+"arrivera très prochainement")
let p_element = document.createElement("p");
p_element.classList = "confirmation";
p_element.appendChild(new_item_node_name);
let div_id_camera_confirmation = document.getElementById("camera_confirmation");
div_id_camera_confirmation .appendChild(p_element)