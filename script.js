console.log("Welcome to spotify");
let audioElement=new Audio('1.mp3');
let songIndex=0;
let masterplay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"tumari kasam",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Salam",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Bhula dena",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"baarish",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"lovely",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"perfect",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"let me lovely",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},

]

songItems.forEach((element,i)=>{

element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByClassName('songname')[0].innerText=songs[i].songName;

})


masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        
            audioElement.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            gif.style.opacity=0;


        
    }
})
audioElement.addEventListener('timeupdate',()=>{

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;


})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=audioElement.duration*myprogressbar.value/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
    
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');


    })
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>7){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-solid fa-circle-pause');
    masterplay.classList.remove('fa-solid fa-solid-play');


})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-solid fa-circle-pause');
    masterplay.classList.remove('fa-solid fa-solid-play');


})


