
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

window.addEventListener("orientationchange", function() {
    var orientation = window.orientation;

    if (orientation === 90 || orientation === -90) {
        document.body.style.transform = "rotate(0deg)";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        alert("Por favor, gire o dispositivo de volta para a orientação retrato.");
    }
});
