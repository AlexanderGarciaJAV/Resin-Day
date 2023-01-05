

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
//preguntas frecuentes
let question = document.querySelectorAll('.pregunta');
let btnDropdown = document.querySelectorAll('.pregunta .mas');
let answer = document.querySelectorAll('.respuesta');
let parrafo = document.querySelectorAll('.respuesta p');

for ( let i = 0; i < btnDropdown.length; i ++ ){

    let altoparrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click', () => {

        if(switchc == 0){
            answer[i].style.height = `${altoparrafo}px`;
            question[i].style.marginBottom = '10px';
            btnDropdown[i].innerHTML = '<i>-<i>';
            switchc ++;  
        }
        else if(switchc == 1){
            answer[i].style.height = '0' ;
            question[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<i>+<i>';
            switchc --;  
        }
    })
}
