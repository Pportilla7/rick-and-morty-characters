let lista=document.getElementById('character-list');
let page=1;
let url='https://rickandmortyapi.com/api/character/?page='
let objeto=fetch('https://rickandmortyapi.com/api/character/?page=1').then((response)=>{
    if(!response.ok){
        throw new Error('La solicitud NOK');
    }
    return response.json();
})
.then((data)=>{
    data.results.forEach(element => {
        console.log(element);
        let elemento_lista = document.createElement('li');
        let div_contenedor = document.createElement('div');
        let imagen = document.createElement('img');
        imagen.src = element.image;
        let parrafo1 = document.createElement('p');
        parrafo1.innerHTML = 'Nombre: '+element.name;
        let parrafo2 = document.createElement('p');
        parrafo2.innerHTML = 'Especie: '+element.species;
        div_contenedor.appendChild(imagen);
        div_contenedor.appendChild(parrafo1);
        div_contenedor.appendChild(parrafo2);
        elemento_lista.appendChild(div_contenedor);
        lista.appendChild(elemento_lista);
    });
    return data;
})

let button_next=document.getElementById('next-page');

button_next.addEventListener('click',()=>{
    lista.innerHTML='';
    page++;
    let url_def;
    (page>42)?page=1:page=page;
    url_def=url+page;
    console.log(url_def);
    fetch(url_def).then((response)=>{
    if(!response.ok){
        throw new Error('La solicitud NOK');
    }
    return response.json();
    })
    .then((data)=>{
        data.results.forEach(element => {
        console.log(element);
        let elemento_lista = document.createElement('li');
        let div_contenedor = document.createElement('div');
        let imagen = document.createElement('img');
        imagen.src = element.image;
        let parrafo1 = document.createElement('p');
        parrafo1.innerHTML = 'Nombre: '+element.name;
        let parrafo2 = document.createElement('p');
        parrafo2.innerHTML = 'Especie: '+element.species;
        div_contenedor.appendChild(imagen);
        div_contenedor.appendChild(parrafo1);
        div_contenedor.appendChild(parrafo2);
        elemento_lista.appendChild(div_contenedor);
        lista.appendChild(elemento_lista);
        });
    })
})  


