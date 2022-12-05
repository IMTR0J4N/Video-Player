import '../css/style.css';

const backBtn = document.getElementById('back-btn');
const skipBtn = document.getElementById('skip-btn');
const resetBtn = document.getElementById('reset-btn');

const progressBar = document.getElementById('progress-bar');
const video = document.getElementById('video');

video.loop = true;

video.addEventListener("loadedmetadata", (ev) => {
    progressBar.max = video.duration
})

video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
})

video.addEventListener('timeupdate', () => {
    progressBar.value = video.currentTime
})

backBtn.addEventListener('click', () => {
    if (video.currentTime < 10) {
        video.currentTime = 0
    } else {
        video.currentTime -= 10
    }
})

skipBtn.addEventListener('click', () => {
        video.currentTime += 10
})

resetBtn.addEventListener('click', () => {
    video.currentTime = 0
})

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case "ArrowLeft":
            if (video.currentTime < 10) {
                video.currentTime = 0
            } else {
                video.currentTime -= 10
            }
            break;
        case "ArrowRight":
            video.currentTime += 10
            break;
        case "Space":
            video.paused ? video.play() : video.pause();
            break;
    }
})