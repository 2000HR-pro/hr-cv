// تأثير ظهور العناصر عند التمرير (Scroll Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// تشغيل التأثير مرة واحدة عند التحميل
reveal();

// إضافة تأثير بسيط للـ Console للتأكد من العمل
console.log("Hassan Ragab Portfolio Loaded Successfully!");
