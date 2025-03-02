document.addEventListener('DOMContentLoaded', function() {
    const players = document.querySelectorAll('.audio-player');
    players.forEach(player => {
        const audio = player.querySelector('audio');
        const playPauseButton = player.querySelector('.play-pause');
        const progress = player.querySelector('.progress');
        const time = player.querySelector('.time');
        const duration = player.querySelector('.duration');
        const skipBackwardButton = player.querySelector('.skip.backward');
        const skipForwardButton = player.querySelector('.skip.forward');

        playPauseButton.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseButton.textContent = 'Play';
            }
        });

        skipBackwardButton.addEventListener('click', function() {
            audio.currentTime = Math.max(0, audio.currentTime - 10);
        });

        skipForwardButton.addEventListener('click', function() {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        });

        audio.addEventListener('timeupdate', function() {
            const currentTime = audio.currentTime;
            const totalDuration = audio.duration;
            progress.value = (currentTime / totalDuration) * 100;
            time.textContent = formatTime(currentTime);
            duration.textContent = formatTime(totalDuration);
        });

        progress.addEventListener('input', function() {
            const totalDuration = audio.duration;
            audio.currentTime = (progress.value / 100) * totalDuration;
        });

        audio.addEventListener('ended', function() {
            playPauseButton.textContent = 'Play';
            const nextPlayer = player.nextElementSibling;
            if (nextPlayer && nextPlayer.classList.contains('audio-player')) {
                nextPlayer.querySelector('audio').play();
                nextPlayer.querySelector('.play-pause').textContent = 'Pause';
            }
        });

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    });
});
