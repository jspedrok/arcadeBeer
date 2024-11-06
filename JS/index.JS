let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    
    // Remove a classe 'active' do item atual
    items[currentIndex].classList.remove('active');

    // Atualiza o índice com base na direção
    currentIndex = (currentIndex + direction + items.length) % items.length;

    // Adiciona a classe 'active' ao novo item
    items[currentIndex].classList.add('active');

    // Move os itens no carrossel
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Para inicializar o carrossel (opcional, para garantir que comece no primeiro item)
moveSlide(0);