const musicContainer = document.getElementById('music-container');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
var songs = ['hey', 'summer', 'ukulele'];

// Keep track of song.
let songIndex = 2;

//Initially load song details into DOM

loadSong(songs[songIndex]);

//Update Song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

//Play song
function playSong() {
  musicContainer.classList.add('play');
  play.querySelector('i.fas').classList.remove('fa-play');
  play.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}

//Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  play.querySelector('i.fas').classList.add('fa-play');
  play.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}

//Event Listeners.
play.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
