let datos = {};

function enviar(){
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fecha = document.getElementById('fecha').value;
    
    
    let datos = {
    
        nombre: nombre,
        apellido: apellido,
        fecha: fecha,
       
    };
};

fetch('https://jsonplaceholder.typicode.com/users', {
       
headers: { "Content-Type": "application/json; charset=utf-8" },
method: 'POST',
body: JSON.stringify(datos)
})

.then(response => response.json()) 
.then(datos => { 
    
    document.getElementById('nombre').value ="";
    document.getElementById('apellido').value="";
    document.getElementById('fecha').value="";
    
    
    alert('tus datos se cargaron correctamente')})

    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
        alert('Hubo un error al enviar tus datos');
    });



document.addEventListener('DOMContentLoaded', function(){


    let btn = document.getElementById('enviar');

    btn.addEventListener('click', function(){
    enviar();
    });


})