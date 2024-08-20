function playMedia(src, title) {
    const mediaPlayer = document.getElementById('mediaPlayer');
    const mediaSource = document.getElementById('mediaSource');
    const mediaTitle = document.getElementById('mediaTitle');

    mediaSource.src = src;
    mediaTitle.textContent = title;
    mediaPlayer.load();
    mediaPlayer.play();
}

document.addEventListener("DOMContentLoaded", function() {
    var introVideo = document.getElementById('introVideo');
    var introVideoContainer = document.getElementById('introVideoContainer');
    var mainContent = document.getElementById('mainContent');

    introVideo.onended = function() {
        // Fade out the intro video and remove it
        introVideoContainer.classList.add('hidden');
        
        // Show the main content after the video
        setTimeout(function() {
            mainContent.classList.remove('hidden');
            mainContent.classList.add('show');
        }, 1000); // Time to match the fade-out duration
    };
});
