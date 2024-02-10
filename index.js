// console.log("hi");
let songIndex = 1;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Legion", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
    { songName: "Trap", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
    { songName: "They Mad", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
    { songName: "Plug Walk", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
    { songName: "Song Title", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
    { songName: "Safety Dance", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
    { songName: "Back it up", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg" },
    { songName: "Love", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg" },
    { songName: "Life", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg" },
    { songName: "True Love", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg" }
];

// audioElement.play();
// play song
masterPlay.addEventListener('click', () => {
    console.log("masterPlay")
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
    }
});
// iterate through songs
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// event to update time
audioElement.addEventListener('timeupdate', () => {
    console.log("Time update");
    // seekbar update
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 10) {
        songIndex = 1;
    }
    else {
        songIndex = songIndex + 1;
    }
    console.log(songIndex);
    audioElement.src = `./songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = 10;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});