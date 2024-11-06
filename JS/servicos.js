let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Função para mover o slide
function moveSlide(direction) {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
    const carouselInner = document.querySelector('.carousel-inner');
}

// Função para auto-rolar os slides a cada 3 segundos
function autoSlide() {
    moveSlide(1); // Move para o próximo slide
}

// Inicia o auto-rolar
setInterval(autoSlide, 3000); // A cada 3 segundos