function api(){
var pokemon = document.getElementById("pokemon").value;
    var pokemon = document.getElementById('pokemon').value;
    var endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(endpoint)
    .then (respuesta => respuesta.json())
    .then (datosJson => {
        var datos = (datosJson);
        var id = datos['id'];
        var nombre = datos.name;
        var tipo = datos.types[0].type.name;
        var peso = datos.weight;
        var altura = datos.height;
        document.getElementById("id").innerHTML ="<b>Id: </b>" + id;
        document.getElementById('nombre').innerHTML = "<b>Nombre: </b>"+nombre;
        document.getElementById('tipo').innerHTML = "<b>Tipo: </b>"+tipo;
        document.getElementById('peso').innerHTML ="<b>Peso: </b>"+peso;
        document.getElementById('altura').innerHTML ="<b>Altura: </b>"+altura;
    });
}

function enviar(){
    var titulo = "Producto 1";
    var precio = 250.0;
    var descripcion = "Descripción de producto 1";
    var categoria = "Categoria 1";
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: titulo,
                price: precio,
                description: descripcion,
                image: 'https://i.pravatar.cc',
                category: categoria
            }
        )
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    alert("Se ha enviado el producto a la API usando el método POST");
}


function obtener(){
    fetch('https://www.datos.gov.co/resource/d4fr-sbn2.json')
    .then(res=>res.json())
    .then(json=>{
        var datos = json;
        var table = document.getElementById('table');
        var mensaje = document.getElementById('mensaje');
        mensaje.innerHTML = "<h2>Se han obtenido los datos de la API usando el método GET</h2>";
        var html = '';
        html += '<tr>';
        html += '<th>Departamento</th>';
        html += '<th>Municipio</th>';
        html += '<th>Fecha</th>';
        html += '<th>Tipo de hurto</th>';
        html += '</tr>';
        for (var i = 0; i < datos.length; i++) {
            html = html + `<tr>
                <td class="table-info">${datos[i].departamento}</td>
                <td class="table-info">${datos[i].municipio}</td>
                <td class="table-info">${datos[i].fecha_hecho}</td>
                <td class="table-info">${datos[i].tipo_de_hurto}</td>
            </tr>`;
        }
        table.innerHTML = html;
    });
}


