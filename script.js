// تأثيرات الظهور البسيطة
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// إضافة كلاس النشاط عند الرؤية
document.styleSheets[0].insertRule('.active { opacity: 1 !important; transform: translateY(0) !important; }', 0);
