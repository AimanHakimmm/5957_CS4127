document.addEventListener("DOMContentLoaded", () => {
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    
    revealOnScroll();

    
    window.addEventListener('scroll', revealOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const overlayImages = document.querySelectorAll(".overlay-image");

    overlayImages.forEach((image) => {
        image.addEventListener("click", () => {
            const description = image.nextElementSibling.querySelector("p").textContent;
            alert(description);
        });
    });
});