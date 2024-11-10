document.addEventListener('DOMContentLoaded', () => {
    // Hero Section animation effects
    const typewriter = document.querySelector('.typewriter');
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;
    const typingEffect = () => {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        }
    };
    typingEffect();

    // Slideshow
    let slideIndex = 0;
    const showSlides = () => {
        let slides = document.querySelectorAll('.mySlides');
        let dots = document.querySelectorAll('.dot');
        slides.forEach(slide => slide.style.display = 'none');
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = 'block';
        dots.forEach(dot => dot.className = dot.className.replace(' active', ''));
        dots[slideIndex - 1].className += ' active';
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    };
    showSlides();

    // Popup functionality
    document.querySelectorAll('.popup-button').forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.getAttribute('data-popup');
            document.getElementById(popupId).style.display = 'flex';
        });
    });

    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.popup').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });

    // Initialize AOS
    AOS.init();
});