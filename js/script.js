let lista=document.getElementById('character-list');
let page=1;
const url='https://rickandmortyapi.com/api/character/?page='

getPersonajes(url+page);

let button_next=document.getElementById('next-page');
let button_previous=document.getElementById('prev-page');

button_next.addEventListener('click',()=>{
    lista.innerHTML='';
    page++;
    let url_def;
    
    //Si pasamos de la pagina 42 volvemos a la primera
    (page>42)?page=1:page=page;
    url_def=url+page;
    
    getPersonajes(url_def);
})  

button_previous.addEventListener('click',()=>{
    lista.innerHTML='';
    page--;
    let url_def;
    console.log(page);
    //Si bajamos de la pagina 1 pasamos a la 42
    (page<1)?page=42:page=page;
    url_def=url+page;
    console.log(page);

    getPersonajes(url_def);
})  


function getPersonajes(url_def){
    fetch(url_def).then((response)=>{
    if(!response.ok){
        throw new Error('La solicitud NOK');
    }
    return response.json();
    })
    .then((data)=>{
        let aux=0;
        data.results.forEach(element => {
            ContenedorLi(element,aux);
            aux++;
        });
    return data;
    })
    .catch((error) => {
        console.error('Error al obtener los personajes:', error);
    });
}

function ContenedorLi(element,aux){
    crearContenedor(aux);
    darValor(element,aux);
}

function crearContenedor(aux){
    let elemento_lista = document.createElement('li');
    let imagen = document.createElement('img');
    let parrafo1 = document.createElement('p');
    let parrafo2 = document.createElement('p');

    elemento_lista.id='Li_'+page+aux;
    imagen.id='Img_'+page+aux;
    parrafo1.id='P1_'+page+aux;
    parrafo2.id='P2_'+page+aux;

    elemento_lista.appendChild(imagen);
    imagen.insertAdjacentElement('afterend', parrafo1);
    parrafo1.insertAdjacentElement('afterend', parrafo2);
    
    lista.appendChild(elemento_lista);
}

function darValor(element,aux){
    let cadena_aux='_'+page+aux;
    (document.getElementById('Img'+cadena_aux)).src=element.image;
    (document.getElementById('P1'+cadena_aux)).textContent='Name: '+element.name;
    (document.getElementById('P2'+cadena_aux)).textContent='Specie: '+element.species;
}