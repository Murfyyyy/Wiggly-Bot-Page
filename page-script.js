const page_sound = document.getElementById('page-sound');
page_sound.volume = 0.3;
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function (evento) {
        const destino = this.href;

        evento.preventDefault(); // impede a navegação imediata
        page_sound.currentTime = 0;
        page_sound.play();

        page_sound.addEventListener('ended', () => {
            window.location.href = destino;
        }, { once: true });
    });
});
