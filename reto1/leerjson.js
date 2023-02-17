
const miTabla = document.querySelector('#miTabla')
const cuerpoTabla = document.querySelector('#cuerpoTabla')
const tablaTitulo2 = document.querySelector('#tablaTitulo2')
const tablaTitulo3 = document.querySelector('#tablaTitulo3')
const tablaTitulo4 = document.querySelector('#tablaTitulo4')
const tablaTitulo5 = document.querySelector('#tablaTitulo5')

const td1 = document.querySelector('#td1')
const td2 = document.querySelector('#td2')
const td3 = document.querySelector('#td3')
const td4 = document.querySelector('#td4')
const td5 = document.querySelector('#td5')

mitabla.appendChild(cuerpoTabla)

cuerpoTabla.appendChild(tablaTitulo2)

tablaTitulo2.appendChild(td1)
tablaTitulo2.appendChild(td2)
tablaTitulo2.appendChild(td3)
tablaTitulo2.appendChild(td4)
tablaTitulo2.appendChild(td5)




//promesas fetch() el parametro es el recurso a leer
fetch("mascotas.json")
// promesa donde se parsea el resultado del fetch
.then(
    (respuesta) => {
        return respuesta.json();
    })
// accion a desarrollar con el archivo leido y parseado
.then((respuesta) => {
        console.log(respuesta)
        for (let i = 0; i < respuesta.length; i++) {

            td1.innerHTML += respuesta[i].Nombre + '<br>';
            td2.innerHTML += respuesta[i].Genero + '<br>';
            td3.innerHTML += respuesta[i].Color + '<br>';
            td4.innerHTML += respuesta[i].Tipo + '<br>';
            td5.innerHTML += respuesta[i].Fecha_nacimiento +'<br>';
        }

    });


    document.body.appendChild(mitabla)