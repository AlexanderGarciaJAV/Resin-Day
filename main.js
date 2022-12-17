//menu
document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
});


//boton subir
let botonsubir = document.querySelector('#subir');
botonsubir.addEventListener('click', () => {
    document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
        
    })  
})

//compras
