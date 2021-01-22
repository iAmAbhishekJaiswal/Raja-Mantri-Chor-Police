var player1={
name:"",
post:"",
point:0}

var player2={
name:"",
post:"",
point:0}

var player3=
{
name:"",
post:"",
point:0}

var player4=
{
name:"",
post:"",
point:0}
var chor;
var police;

var button1=document.createElement("button");
var button2=document.createElement("button");
var button3=document.createElement("button");
var button4=document.createElement("button");

var numOfRound=20;
var countNum=0;

var post=["Raja","Chor","Mantri","Police"];


function play(){
countNum += 1;
var num;
num=Math.floor(Math.random()*4);
player1.post=post[num];
post.splice(num,1);
num=Math.floor(Math.random()*3);
player2.post=post[num];
post.splice(num,1);
num=Math.floor(Math.random()*2);
player3.post=post[num];
post.splice(num,1);
player4.post=post[0];
post=["Raja","Chor","Mantri","Police"];
pointtable();
}

function pointtable()
{
if(player1.post=="Raja")
player1.point += 1000;
else if(player1.post=="Mantri")
player1.point += 800;

if(player2.post=="Raja")
player2.point += 1000;
else if(player2.post=="Mantri")
player2.point += 800;

if(player3.post=="Raja")
player3.point += 1000;
else if(player3.post=="Mantri")
player3.point += 800;

if(player4.post=="Raja")
player4.point += 1000;
else if(player4.post=="Mantri")
player4.point += 800;
}


window.onload=init;

function init()
{
var startBtn = document.getElementById("subNam");

startBtn.onclick=naamkaran;
}

function naamkaran()
{
numOfRound=document.getElementById("numOfRound").value;
player1.name=document.getElementById("name1").value;
player2.name=document.getElementById("name2").value;
player3.name=document.getElementById("name3").value;
player4.name=document.getElementById("name4").value;
if(player1.name==""||player2.name==""||player3.name==""||player4.name=="")
{
window.alert("Please enter name of players ! ");
}
else
{
var scrollElmt = document.getElementById("gameLoc");
scrollElmt.scrollIntoView({behavior: 'smooth',block:'start'});
document.getElementById("pl1").innerHTML=player1.name;
document.getElementById("pl2").innerHTML =player2.name;
document.getElementById("pl3").innerHTML=player3.name;
document.getElementById("pl4").innerHTML=player4.name;

document.getElementById("nameOne").innerHTML=player1.name;
document.getElementById("nameTwo").innerHTML=player2.name;
document.getElementById("nameThree").innerHTML=player3.name;
document.getElementById("nameFour").innerHTML=player4.name;

starting();
}
}



function starting()
{
var playBtn=document.getElementById("play");
playBtn.onclick=startgame;
}



function startgame()
{
if(numOfRound == countNum)
{
var scrollForResult= document.getElementById("result");
scrollForResult.scrollIntoView({behavior: 'smooth',block:'start'});

}


document.getElementById("play").disabled=true;
window.play1=document.getElementById("player1");
window.play2=document.getElementById("player2");
window.play3=document.getElementById("player3");
window.play4=document.getElementById("player4");


play1.innerHTML="";
play2.innerHTML="";
play3.innerHTML="";
play4.innerHTML="";

play();
setTimeout(function(){
if(player1.post=="Raja"||player1.post=="Police")
{
play1.innerHTML=player1.post;
if(player1.post=="Police")
police=player1;
}
else
{

if(player1.post=="Chor")
chor=player1;


button1.classList.add("btn1")
button1.innerHTML="Chor !";
play1.appendChild(button1);
}

if(player2.post=="Raja"||player2.post=="Police")
{
play2.innerHTML=player2.post;

if(player2.post=="Police")
police=player2;

}
else
{
if(player2.post=="Chor")
chor=player2;

button2.classList.add("btn1")
button2.innerHTML="Chor !";
play2.appendChild(button2);
}

if(player3.post=="Raja"|| player3.post=="Police")
{
play3.innerHTML=player3.post;

if(player3.post=="Police")
police=player3;
}
else
{

if(player3.post=="Chor")
chor=player3;

button3.classList.add("btn1");
button3.innerHTML="Chor !";
play3.appendChild(button3);
}

if(player4.post=="Raja"|| player4.post=="Police")
{
play4.innerHTML=player4.post;

if(player4.post=="Police")
police=player4;
}
else
{
if(player4.post=="Chor")
chor=player4;


button4.classList.add("btn1");
button4.innerHTML="Chor !";
play4.appendChild(button4);
}

},1500);
setTimeout(function(){alert("Police ! Police ! Chor ko pakdo..");},1800);
check();
}



function check()
{


button1.onclick=function(){
if(player1.post=="Chor")
{
alert("Sahi pakde hai..");
police.point += 500;
}
else
{
alert("Itne galat kaise ho sakte ho bhai?")
chor.point += 500;
}

finalReveal();
}


button2.onclick=function(){
if(player2.post=="Chor")
{
alert("Sahi pakde hai..");
police.point += 500;
}
else
{
alert("Itne galat kaise ho sakte ho bhai?")
chor.point += 500;
}

finalReveal();
}

button3.onclick=function(){
if(player3.post=="Chor")
{
alert("Sahi pakde hai..");
police.point += 500;
}
else
{
alert("Itne galat kaise ho sakte ho bhai?")
chor.point += 500;
}

finalReveal();
}

button4.onclick=function(){
if(player4.post=="Chor")
{
alert("Sahi pakde hai..");
police.point += 500;
}
else
{
alert("Itne galat kaise ho sakte ho bhai?")
chor.point += 500;
}

finalReveal();
}
}


function finalReveal()
{
play1.innerHTML=player1.post;
play2.innerHTML=player2.post;
play3.innerHTML=player3.post;
play4.innerHTML=player4.post;
printtable();
document.getElementById("play").disabled=false;
}

function printtable()
{
document.getElementById("pointOne").innerHTML=player1.point;
document.getElementById("pointTwo").innerHTML=player2.point;
document.getElementById("pointThree").innerHTML=player3.point;
document.getElementById("pointFour").innerHTML=player4.point;
document.getElementById("countNum").innerHTML=countNum;
winnerHandler();
}

function winnerHandler()
{
var winnerEle=document.getElementById("winner");
if(numOfRound <= countNum)
{
winner=calculateWinner();
winnerEle.innerHTML=winner + " is winner ! " ;
}
}

function calculateWinner()
{
var highest=Math.max(player1.point,player2.point,player3.point,player4.point);
if(player1.point==highest)
return player1.name;
else if(player2.point==highest)
return player2.name;
else if(player3.point==highest)
return player3.name;
else
return player4.name;
}



function openNav() {
  document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
