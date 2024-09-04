
// api json place holder
let container = document.getElementById("friends-container")
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data.forEach(user => {
            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.innerHTML = 
                `<div class="card-body">
                    <p class="card-text"> <b>Id:</b> ${user.id}</p>
                    <h3 class="card-text"><b>Nombre:</b> ${user.name}</h3>
                    <p class="card-text"><b>Ciudad:</b> ${user.address.city}</p>
                    <p class="card-text"><b>Mail:</b> ${user.email}</p>
                    <p class="card-text"><b>URL:</b> ${user.website}</p>
                    <button class="eliminar-amigo form-submit bdr__form" data-id="${user.id}">Eliminar Amigo</button>
                </div>`; 

                container.appendChild(card);
            
                // Evento para eliminar la card
            card.querySelector('.eliminar-amigo').addEventListener('click', function (event) {
                const id = parseInt(event.target.getAttribute('data-id'), 10);
                card.remove();
                Swal.fire({
                    title: "Amigo borrado",
                    text: `${user.name} ha sido eliminado de tus amigos correctamente`,
                    icon: "success"
                });
            });
        });
    })
    .catch(error => console.error('No se puede conectar con el servidor:', error));
    
