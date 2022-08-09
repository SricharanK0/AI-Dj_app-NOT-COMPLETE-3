song1="";
song2="";
leftWristX=0;
leftwristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(400,400);
    background("white");
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model Is Loaded");
}
function draw(){
    image(video,0,0,400,400);
    
}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}
function gotPoses(results){
 if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristX);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
 }
}