let video;
let poseNet;
let poses = [];

setup = () => {
    createCanvas(window.innerWidth, window.innerHeight);
    video = createCapture(VIDEO);
    video.size(width, height);
    poseNet = ml5.poseNet(video);
    poseNet.on('pose', function (results) {
        poses = results;
    });
    video.hide();
}


draw = () => {
    image(video, 0, 0, width, height);
    for (let i = 0; i < poses.length; i++) {
    // ENTER P5 CODE HERE






    }
}