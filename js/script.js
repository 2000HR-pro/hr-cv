const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Architect', 'Python Programmer'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

const sr = ScrollReveal({ 
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true 
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img', { origin: 'bottom' });
sr.reveal('.skill-box', { origin: 'bottom', interval: 200 });
sr.reveal('.exp-card', { origin: 'bottom', delay: 400 });