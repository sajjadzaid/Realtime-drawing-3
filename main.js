leftWristX=0;
rightWristX=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet is initialized");
}

function gotPoses(result){
    if(result.length>0)
    {
        console.log(result)

        leftWristX=result[0].pose.nose.x
        rightWristX=result[0].pose.nose.y
        difference=floor(leftWristX-rightWristX)
    }
}

function draw(){
    background("grey");

    textSize(difference);
    fill('#FFE787');
    stroke('Sajjad',50,400)
}