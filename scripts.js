// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Offset para ajustar ao cabeçalho fixo
                behavior: 'smooth'
            });
        }
    });
});

// Função para rolagem suave ao clicar no botão "Saiba mais"
document.querySelector('#intro .btn').addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Offset para ajustar ao cabeçalho fixo
            behavior: 'smooth'
        });
    }
});
