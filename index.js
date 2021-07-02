const elements ='<div id="camera"> <div class="camera_choix"> <div class="camera_images" > <img src="Server/images/vcam_1.jpg" alt="menu palette"/></div> </div> <div class="description"> <h3>Description</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum dui ex, ac malesuada felis vestibulum ut. Etiam molestie luctus lorem a consectetur. Fusce fringilla lacus lectus, nec feugiat lacus consequat ac. Quisque iaculis ullamcorper diam nec blandit. Pellentesque in fringilla ipsum, eget maximus elit. Quisque nec justo dignissim, sagittis lectus vel, accumsan lacus. Aenean mi est, commodo eget felis ac, lobortis dapibus nibh. In ut ipsum quam. Vestibulum lectus urna, placerat nec odio eu, sollicitudin porttitor mauris. Pellentesque ullamcorper bibendum mauris, vel pretium libero tempor vitae. Pellentesque in feugiat leo.</p> <h3>PRIX: 100€ </h3> <div><a href="panier.html"><button class="btn">Ajouter au panier</button></a></div> </div> </div>'
 document.querySelector(".container").innerHTML = elements;
 fetch("http://localhost:3000/api/cameras/5be1ef211c9d44000030b062")
 .then(reponse => reponse.json ())
 .then(reponse2 => console.table(reponse2.name))

