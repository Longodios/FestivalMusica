document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});

function navegacionFija() {

    const barra = document.querySelector('.header');


    //Registrar el intersection observer

    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            console.log('Se ve');
            barra.classList.remove('.fijo');
        } else {
            console.log('No se ve');
            barra.classList.add('fijo');
        }
    });

    //Elemento a observar

    observer.observe(document.querySelector('.sobre-festival'));
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion__principal a');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

};
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        //Añadir función de mostrarImagen

        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen() {
    console.log('Diste click en una imagen');
}