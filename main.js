noseX=0;
noseY=0;
difference=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    
    canvas=createCanvas(600, 500);
    canvas.position(600, 110);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    }
    
    function modelLoaded(){
        console.log('PoseNet is Initialized ! ');
    }
    
    function draw(){
        background("#b0a3a2");
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
        }
    }
    
    function gotPoses(results){
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX=" + noseX + "noseY=" + noseY );

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
                 
            difference = floor(leftWristX - rightWristX);
            console.log("leftWristX=" + leftWristX + "leftWristY=" + leftWristY + "rightWristX=" + rightWristX + "rightWristY=" + rightWristY + "diffrence=" + difference );

        }
    }

    function draw(){
        document.getElementById("FM").innerHTML="Width and Height of the Square=" + difference +"px"
        background('#99a1ba');
        textSize(difference);
        text("Sneha",noseX, noseY);
       
       
    }
