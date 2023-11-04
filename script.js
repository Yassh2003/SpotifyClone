console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('audio1.mp3');
let masterPlay = document.getElementById('play-bt');
let bottomSong = document.getElementById('bottom-song');
let myProgressBar = document.getElementById('progress-bar')
let gif = document.getElementById('play-gif')

let songs = [
    {songName: "JPB - High | NCS", filePath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\audio1.mp3",
     coverPath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\cover-1.jpg"},
    {songName: "Janji - Heroes Tonight", filePath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\audio2.mp3",
     coverPath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\cover-1.jpg"},
    {songName: "Robin Hustin x TobiMorrow", filePath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\audio3.mp3",
     coverPath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\cover-1.jpg"},
    {songName: "Unknown Brain - MATAFAKA", filePath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\audio4.mp3",
     coverPath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\cover-1.jpg"},
    {songName: "Different Heaven - Safe And Sound", filePath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\audio5.mp3",
     coverPath: "C:\Users\yashp\OneDrive\Desktop\SpotifyClone\cover-1.jpg"}
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = 'pause.png';
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.src = 'play.png'
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('body-play-bt')).forEach((element) => {
        element.src = 'play-black.jpg';
    })
}

Array.from(document.getElementsByClassName('body-play-bt')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.src = 'pause.png';
        audioElement.src = `audio${songIndex+1}.mp3`;
        bottomSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.src = 'pause.png';
        gif.style.opacity = 1;
    })
})

document.getElementById('next-bt').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `audio${songIndex+1}.mp3`;
    bottomSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'pause.png';
})

document.getElementById('prev-bt').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 3;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `audio${songIndex+1}.mp3`;
    bottomSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'pause.png';
})