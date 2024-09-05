let container = document.getElementById("friends-container");

fetch('../db/friends.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(friend => {
            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.innerHTML = 
                `<div class="card-body">
                    <p class="card-text"> <b>Id:</b> ${friend.id}</p>
                    <h3 class="card-text"><b>Apellido:</b> ${friend.apellido}</h3>
                    <h5 class="card-text"><b>Nombre:</b> ${friend.nombre}</h5>
                    <p class="card-text"><b>Ciudad:</b><span class="ciudad"> ${friend.ciudad}</p>
                    <p class="card-text"><b>Mail:</b> <span class="email">${friend.mail}</span></p>
                    <p class="card-text"><b>URL:</b> <span class="web">${friend.web}</span></p>
                    <p class="card-text"><b>Contacto:</b> <span class="contacto">${friend.contacto}</span></p>
                    <button class="editar-amigo form-submit-2 bdr__form" data-id="${friend.id}">Editar</button>
                    <button class="eliminar-amigo form-submit-2 bdr__form" data-id="${friend.id}">Eliminar Amigo</button>
                </div>`;

            container.appendChild(card);

            botonesCard(card, friend)

            function botonesCard(card, friend) {
                // eliminar la card
                card.querySelector('.eliminar-amigo').addEventListener('click', function () {
                    borrarCard(card, friend);
                });
            
                // editar la card
                card.querySelector('.editar-amigo').addEventListener('click', function () {
                    editarCard(card, friend);
                });
            }
            
            function borrarCard(card, friend) {
                card.remove();
                Swal.fire({
                    title: "Amigo borrado",
                    text: `${friend.nombre} ha sido eliminado de tus amigos correctamente`,
                    icon: "success"
                });
            }
            
            function editarCard(card, friend) {
                let ciudad = card.querySelector('.ciudad').textContent;
                let email = card.querySelector('.email').textContent;
                let web = card.querySelector('.web').textContent;
                let contacto = card.querySelector('.contacto').textContent;
            
                // reemplazo de datos
                card.innerHTML = `
                    <div class="card-body">
                        <p class="card-text"> <b>Id:</b> ${friend.id}</p>
                        <h3 class="card-text"><b>Apellido:</b> ${friend.apellido}</h3>
                        <h5 class="card-text"><b>Nombre:</b> ${friend.nombre}</h5>
                        <p class="card-text"><b>Ciudad:</b> <input type="text" class="edit-ciudad" value="${ciudad}"></p>
                        <p class="card-text"><b>Mail:</b> <input type="text" class="edit-email" value="${email}"></p>
                        <p class="card-text"><b>URL:</b> <input type="text" class="edit-web" value="${web}"></p>
                        <p class="card-text"><b>Contacto:</b> <input type="text" class="edit-contacto" value="${contacto}"></p>
                        <button class="guardar-cambios form-submit-2 bdr__form" data-id="${friend.id}">Guardar Cambios</button>
                    </div>`;
            
                // guardar los cambios
                card.querySelector('.guardar-cambios').addEventListener('click', function () {
                    let nuevaCiudad = card.querySelector('.edit-ciudad').value;
                    let nuevoEmail = card.querySelector('.edit-email').value;
                    let nuevaWeb = card.querySelector('.edit-web').value;
                    let nuevoContacto = card.querySelector('.edit-contacto').value;
            
                    card.innerHTML = `
                        <div class="card-body">
                            <p class="card-text"> <b>Id:</b> ${friend.id}</p>
                            <h3 class="card-text"><b>Apellido:</b> ${friend.apellido}</h3>
                            <h5 class="card-text"><b>Nombre:</b> ${friend.nombre}</h5>
                            <p class="card-text"><b>Ciudad:</b> <span class="ciudad">${nuevaCiudad}</span></p>
                            <p class="card-text"><b>Mail:</b> <span class="email">${nuevoEmail}</span></p>
                            <p class="card-text"><b>URL:</b> <span class="web">${nuevaWeb}</span></p>
                            <p class="card-text"><b>Contacto:</b> <span class="contacto">${nuevoContacto}</span></p>
                            <button class="editar-amigo form-submit-2 bdr__form" data-id="${friend.id}">Editar</button>
                            <button class="eliminar-amigo form-submit-2 bdr__form" data-id="${friend.id}">Eliminar Amigo</button>
                        </div>`;
            
                    // funcion para nuevos botones
                    botonesCard(card, friend);
                });
            }
          });
        })
            .catch(error => console.error('No se puede conectar con el servidor:', error));
