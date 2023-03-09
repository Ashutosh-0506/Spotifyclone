console.log("Welcome to Spotify");
let songsongindex = 0;
let audioElement = new Audio('0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let MasterSongName = document.getElementById('MasterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Wolves", filePath: "Au5-Interstellar.mp3", coverPath: "1.jpg" },
    { songName: "Sunflower", filePath: "Lost+Sky+Dreams+pt+II+feat+Sara+Skinner+NCS+Release].mp3", coverPath: "2.jpg" },
    { songName: "Something in the way", filePath: "[MP3DOWNLOAD.TO] Nirvana - Something In The Way _ EPIC TRAILER VERSION (Batman Trailer Music Cover)-320k.mp3", coverPath: "3.jpg" },
    { songName: "Feel Crazy", filePath: "Tame Impala - The Less I Know The Better (Official Audio).mp3", coverPath: "4.jpg" },
    { songName: "Darkside", filePath: "Push My Luck [320 kbps].mp3", coverPath: "5.jpg" },
    { songName: "Diamond Heart", filePath: "Sing Me To Sleep(PaglaSongs).mp3", coverPath: "6.jpg" },
    { songName: "Faded", filePath: "Lost Sky - Where We Started (feat. Jex) [NCS Release].mp3", coverPath: "7.jpg" },
    { songName: "Sing me to sleep", filePath: "Lost Sky - Where We Started (feat. Jex) [NCS Release].mp3", coverPath: "8.jpg" },
    { songName: "On my way", filePath: "Lost Sky - Where We Started (feat. Jex) [NCS Release].mp3", coverPath: "9.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const MakeAllPlays = () => {

    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        MakeAllPlays();
        songsongindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = ` ${songsongindex}.mp3`;
        MasterSongName.innerText = songs[songsongindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click', () => {
    if (songsongindex >= 9) {
        songsongindex = 0;
    }
    else {
        songsongindex += 1;
    }
    audioElement.src = ` ${songsongindex}.mp3`;
    MasterSongName.innerText = songs[songsongindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', () => {
    if (songsongindex <= 0) {
        songsongindex = 9;
    }
    else {
        songsongindex -= 1;
    }
    audioElement.src = ` ${songsongindex}.mp3`;
    MasterSongName.innerText = songs[songsongindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})