document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


document.getElementById('mostrarCartasBtn').addEventListener('click', function() {
    var contenedorCartas = document.querySelector('.contenedor-cartas');
    contenedorCartas.classList.toggle('mostrar');
    contenedorCartas.classList.toggle('oculto');
});

// Funcionalidad del slider
let currentIndex = 0;
    const sliderTrack = document.querySelector('.slider-track');
    const sliderGroups = document.querySelectorAll('.slider-group');
    const totalGroups = sliderGroups.length;

    if (sliderTrack && sliderGroups.length > 0) {
        function showNextSlide() {
            const currentGroup = sliderGroups[currentIndex];
            const nextIndex = (currentIndex + 1) % totalGroups;
            const nextGroup = sliderGroups[nextIndex];

            currentGroup.classList.remove('active');
            currentGroup.classList.add('exit');

            nextGroup.classList.add('enter');
            setTimeout(() => {
                nextGroup.classList.remove('enter');
                nextGroup.classList.add('active');
                currentGroup.classList.remove('exit');
            }, 1000);

            currentIndex = nextIndex;
        }

    setInterval(showNextSlide, 5000); // Intervalo de cambio 5s
}

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el div que abre el modal
var div = document.getElementById("modalBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("closeModal")[0];

// Cuando el usuario hace clic en el div, se abre el modal
div.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, se cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
