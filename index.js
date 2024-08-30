document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Only prevent default behavior for internal links, not for full-page navigation
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
