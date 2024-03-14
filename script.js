
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Mostra o botão quando a rolagem da página for maior que 100px
    } else {
        scrollToTopBtn.style.display = "none"; // Oculta o botão quando a rolagem da página for menor ou igual a 100px
    }
});

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}
