const boton = document.getElementById('cambiarColor');
let colorOriginal = document.body.style.backgroundColor || 'red';

boton.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'lightblue') {
        document.body.style.backgroundColor = colorOriginal;
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
});