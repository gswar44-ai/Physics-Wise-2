// ==============================
// Physics StoryVerse v1.0
// ==============================

console.log("📚 Physics StoryVerse Loaded Successfully!");

window.onload = function(){

console.log("Welcome to Physics StoryVerse!");

};


// Start Button Animation

const startBtn = document.getElementById("startBtn");

if(startBtn){

startBtn.addEventListener("mouseenter",function(){

startBtn.style.transform="scale(1.08)";

});

startBtn.addEventListener("mouseleave",function(){

startBtn.style.transform="scale(1)";

});

}


// Progress System

if(localStorage.getItem("progress")==null){

localStorage.setItem("progress","0");

}


// Function to Unlock Chapters

function unlockChapter(number){

localStorage.setItem("progress",number);

}


// Function to Read Progress

function getProgress(){

return localStorage.getItem("progress");

}


// Coming Soon Alert

function comingSoon(){

alert("🚧 This chapter is under development.");

}
