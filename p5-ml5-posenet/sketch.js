// we need a handle to the socket to send our osc values
var socket;
var isConnected;

let video;
let posenet;
let pose;

function setup() {
  createCanvas(640, 480);
  setupOsc(8000, 12000);

  video = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on("pose", gotPoses);
  fill(255, 0, 0);
}

function modelLoaded() {
  console.log("ml5 version: ", ml5.version);
}

function gotPoses(poses) {
  if (poses.length > 0) {
    // console.log(poses);
    // console.log(poses[0].pose.nose.x, poses[0].pose.nose.y);
    pose = poses[0].pose;
  }
}

function draw() {
  background(0);
  image(video, 0, 0);
  //   if (pose) {
  //     ellipse(pose.nose.x, pose.nose.y, 20, 20);
  //     if (isConnected) {
  //       socket.emit("message", [
  //         "/pose/nose",
  //         pose.nose.x / width,
  //         pose.nose.y / height,
  //       ]);
  //     }
  //   }
  if (pose) {
    let points = pose.keypoints;
    for (let i = 0; i < points.length; i++) {
      let px = points[i].position.x;
      let py = points[i].position.y;
      ellipse(px, py, 5, 5);
      if (isConnected) {
        socket.emit("message", ["/pose/px/" + i, px / width]);
        socket.emit("message", ["/pose/py/" + i, py / height]);
      }
    }
  }
}

function receiveOsc(address, value) {
  console.log("received OSC: " + address + ", " + value);
}

function sendOsc(address, value) {
  socket.emit("message", [address, value]);
}

function setupOsc(oscPortIn, oscPortOut) {
  socket = io.connect("http://127.0.0.1:8081", {
    port: 8081,
    rememberTransport: false,
  });
  socket.on("connect", function () {
    socket.emit("config", {
      server: { port: oscPortIn, host: "127.0.0.1" },
      client: { port: oscPortOut, host: "127.0.0.1" },
    });
  });
  socket.on("connect", function () {
    isConnected = true;
  });
  socket.on("message", function (msg) {
    if (msg[0] == "#bundle") {
      for (var i = 2; i < msg.length; i++) {
        receiveOsc(msg[i][0], msg[i].splice(1));
      }
    } else {
      receiveOsc(msg[0], msg.splice(1));
    }
  });
}
