const continente = document.querySelector('#continente');
const pais = document.querySelector('#pais')


fetch("continentes.json")

// promesa donde se parsea el resultado del fetch
.then(
    (respuesta) => {
        return respuesta.json();
    })
// accion a desarrollar con el archivo leido y parseado
.then((respuesta) => {
    contador = 0;
        for (let i = 0; i < respuesta.length; i++) {
            contador = contador + 1
            const option = document.createElement('option')
            option.setAttribute('value',contador)
            option.innerHTML = respuesta[i].nombre
            continente.appendChild(option)
        }
    });


    fetch("paises.json")

    // promesa donde se parsea el resultado del fetch
    .then(
        (respuesta) => {
            return respuesta.json();
        })
    // accion a desarrollar con el archivo leido y parseado
    .then((respuesta) => {
        contador = 0;
            for (let i = 0; i < respuesta.length; i++) {
                contador = contador + 1
                const option = document.createElement('option')
                option.setAttribute('value',contador)
                option.innerHTML = respuesta[i].nombre
                pais.appendChild(option)
            }
        });