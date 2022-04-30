var video1 = document.querySelector(".leftbox .back video");
var video2 = document.querySelector(".middlebox .back video");
var video3 = document.querySelector(".rightbox .back video");
var leftbox =document.querySelector(".leftbox");
var middlebox=document.querySelector(".middlebox");
var rightbox=document.querySelector(".rightbox");
var choices1 = document.querySelector(".choices1");
var choices2 = document.querySelector(".choices2");
var choices3 = document.querySelector(".choices3");
var continueButton1 = document.querySelector(".leftbox #continue");
var pauseButton1 = document.querySelector(".leftbox #pause");
var returnButton1 = document.querySelector(".leftbox #return");
var continueButton2 = document.querySelector(".middlebox #continue");
var pauseButton2 = document.querySelector(".middlebox #pause");
var returnButton2 = document.querySelector(".middlebox #return");
var continueButton3 = document.querySelector(".rightbox #continue");
var pauseButton3 = document.querySelector(".rightbox #pause");
var returnButton3 = document.querySelector(".rightbox #return");

var currentActiveVideo=0;


leftbox.addEventListener('click', function(){
  if(!leftbox.classList.contains("anim") && currentActiveVideo==0){
    leftbox.classList.add("anim");
    video1.play();
    currentActiveVideo=1;
  }
});

middlebox.addEventListener('click', function(){
  if(!middlebox.classList.contains("anim") && currentActiveVideo==0){
    middlebox.classList.add("anim");
    video2.play();
    currentActiveVideo=2;
  }
});

rightbox.addEventListener('click', function(){
  if(!rightbox.classList.contains("anim") && currentActiveVideo==0){
    rightbox.classList.add("anim");
    video3.play();
    currentActiveVideo=3;
  }
});

var shownChoices1 = false;
var shownChoices2 = false;
var shownChoices3 = false;

video1.addEventListener('timeupdate', function(){
  if(video1.currentTime > 5 && !shownChoices1)
  {
    video1.pause();
    choices1.style.visibility = "visible";
    shownChoices1 = true;
  }
});

video2.addEventListener('timeupdate', function(){
  if(video2.currentTime > 5 && !shownChoices2)
  {
    video2.pause();
    choices2.style.visibility = "visible";
    shownChoices2 = true;
  }
});

video3.addEventListener('timeupdate', function(){
  if(video3.currentTime > 5 && !shownChoices3)
  {
    video3.pause();
    choices3.style.visibility = "visible";
    shownChoices3 = true;
  }
});

continueButton1.addEventListener('click', function(){
  video1.play();
  // choices1.style.visibility = "hidden";
});
continueButton2.addEventListener('click', function(){
  video2.play();
  // choices1.style.visibility = "hidden";
});
continueButton3.addEventListener('click', function(){
  video3.play();
  // choices1.style.visibility = "hidden";
});

pauseButton1.addEventListener('click', function(){
  video1.pause();
});

pauseButton2.addEventListener('click', function(){
  video2.pause();
});
pauseButton3.addEventListener('click', function(){
  video3.pause();
});

returnButton1.addEventListener('click', function(){
  if(!leftbox.classList.contains("anim2")){
    leftbox.classList.add("anim2");
    video1.pause();
    currentActiveVideo=0;
  }
});

returnButton3.addEventListener('click', function(){
  if(!rightbox.classList.contains("anim2")){
    rightbox.classList.add("anim2");
    video3.pause();
    currentActiveVideo=0;
  }
});

returnButton2.addEventListener('click', function(){
  if(!middlebox.classList.contains("anim2")){
    middlebox.classList.add("anim2");
    video2.pause();
    currentActiveVideo=0;
  }
});

video.addEventListener('ended', function(){
  leftbox.classList.remove("anim");
  shownChoices = false;
});
