document.getElementById('menu-hamburguesa').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

// Obtener el botón y el modal
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');

// Escuchar clic en el botón para mostrar el modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Obtener el botón para cerrar el modal
const closeModalBtn = document.createElement('span');
closeModalBtn.className = 'close';
closeModalBtn.innerHTML = '&times;'; // Símbolo de "X" para cerrar

// Agregar el botón de cerrar al modal
modal.getElementsByClassName('modal-content')[0].appendChild(closeModalBtn);

// Escuchar clic en el botón de cerrar para ocultar el modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Escuchar clic fuera del modal para cerrarlo (si se hace clic fuera de la ventana modal)
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Slider functionality
let currentIndex = 0;
const sliderTrack = document.querySelector('.slider-track');
const sliderGroups = document.querySelectorAll('.slider-group');
const totalGroups = sliderGroups.length;

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

setInterval(showNextSlide, 5000); //Intervalo de cambio 5s
