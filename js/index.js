
document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.perfil-link');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const img = link.querySelector('img');
            const caption = link.querySelector('figcaption');

            if (img && caption) {
                const nomePerfil = caption.textContent.trim();
                const imagemPerfil = img.src;

                localStorage.setItem('perfilAtivoNome', nomePerfil);
                localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            }
        });
    });
});

