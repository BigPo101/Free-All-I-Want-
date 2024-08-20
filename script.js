window.onload = function() {
    var video = document.getElementById('introVideo');
    var mainContent = document.getElementById('mainContent');
    var videoContainer = document.getElementById('videoContainer');

    video.onended = function() {
        // Fade out the video container
        videoContainer.style.opacity = '0';
        videoContainer.style.transition = 'opacity 1s ease';

        // Delay for the fade-out animation, then hide the video and show the main content
        setTimeout(function() {
            videoContainer.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
        }, 1000); // Match this with the duration of your fade-out transition
    };
};
