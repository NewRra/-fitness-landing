document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    
    function checkScroll() {
        if (hero) {
            const heroHeight = hero.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > heroHeight - 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    // Check on initial load
    checkScroll();
}); 