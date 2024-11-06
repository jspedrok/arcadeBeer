function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.querySelector('.menu-toggle').style.display = navLinks.classList.contains('active') ? 'none' : 'block';
    document.querySelector('.close-btn').style.display = navLinks.classList.contains('active') ? 'block' : 'none';
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
    document.querySelector('.menu-toggle').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'none';
}