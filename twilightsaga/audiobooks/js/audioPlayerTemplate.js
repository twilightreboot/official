// This script injects the audio player template and generates players for the given audioSources array.
(function() {
    // Only run if audioSources is defined
    if (!window.audioSources || !Array.isArray(window.audioSources)) return;
    // Inject the template if not present
    if (!document.getElementById('audio-player-template')) {
        const template = document.createElement('template');
        template.id = 'audio-player-template';
        template.innerHTML = `
        <div class="audio-player">
            <audio></audio>
            <button class="play-pause">Play</button>
            <input type="range" class="progress" min="0" max="100" value="0">
            <span class="time">0:00</span> / <span class="duration">0:00</span>
            <button class="skip backward">Skip Back</button>
            <button class="skip forward">Skip Forward</button>
            <div class="volume-container">
                <label class="volume-label">Volume:</label>
                <input type="range" class="volume" min="0" max="1" step="0.01" value="1">
            </div>
            <button class="mute">Mute</button>
            <label for="speed">Speed:</label>
            <select class="speed">
                <option value="0.5">0.5x</option>
                <option value="1" selected>1x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
            </select>
            <canvas width="600" height="100"></canvas>
            <button class="theme-toggle">Toggle Theme</button>
        </div>`;
        document.body.appendChild(template);
    }
    // Generate players
    const container = document.querySelector('.audio-container');
    const template = document.getElementById('audio-player-template').content;
    if (container) {
        container.innerHTML = "";
        window.audioSources.forEach(src => {
            const player = document.importNode(template, true);
            player.querySelector("audio").src = src;
            container.appendChild(player);
        });
    }
})();
