document.addEventListener("DOMContentLoaded", function() {
    var introVideo = document.getElementById('introVideo');
    var introVideoContainer = document.getElementById('introVideoContainer');
    var mainContent = document.getElementById('mainContent');

    introVideo.onended = function() {
        // Instantly hide the intro video
        introVideoContainer.classList.add('hidden');
        
        // Instantly show the main content
        mainContent.classList.remove('hidden');
    };
});
