function playMedia(src, title) {
    const mediaPlayer = document.getElementById('mediaPlayer');
    const mediaSource = document.getElementById('mediaSource');
    const mediaTitle = document.getElementById('mediaTitle');

    mediaSource.src = src;
    mediaTitle.textContent = title;
    mediaPlayer.load();
    mediaPlayer.play();
}
