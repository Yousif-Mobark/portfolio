document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navIcon = navToggle.querySelector('i');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navIcon.classList.toggle('fa-bars');
        navIcon.classList.toggle('fa-times');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navIcon.classList.add('fa-bars');
            navIcon.classList.remove('fa-times');
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.classList.add('fade-in');
        observer.observe(category);
    });

    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                } else {
                    navbar.style.background = 'rgba(10, 10, 10, 0.9)';
                }
                ticking = false;
            });
            ticking = true;
        }
    });
});
