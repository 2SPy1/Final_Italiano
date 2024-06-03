document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    if (menuHamburguesa && menu) {
        menuHamburguesa.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

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
});
