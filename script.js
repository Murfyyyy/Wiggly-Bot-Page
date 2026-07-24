const link = document.getElementById('discord-link');
const sound = document.getElementById('click-sound');

link.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
});