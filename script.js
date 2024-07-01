// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: 'smooth'
        });
    }
});
