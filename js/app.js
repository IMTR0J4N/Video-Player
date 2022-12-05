import '../css/style.css';

const backBtn = document.getElementById('back-btn');
const skipBtn = document.getElementById('skip-btn');
const resetBtn = document.getElementById('reset-btn');

const progressBar = document.getElementById('progress-bar');
const video = document.getElementById('video');

video.loop = true;

video.addEventListener("loadedmetadata", () => {
    progressBar.max = video.duration
})

video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
})