import { useRef, useEffect, useState } from "react";
import $ from "jquery";
import { useBetContext } from "./ContextAndHooks/BetContext";
import { useSettingContext } from "./ContextAndHooks/SettingContext";
import { memo } from "react";
import { useSocket } from "./ContextAndHooks/SocketContext";
const CanvasAnimation = memo(({ stateRef, game }) => {
  const socket = useSocket();
  // const [gameStartTime, setGameStartTime] = useState();
  const [adminPlaneCrashedTime, setAdminPlaneCrashedTime] = useState();

  // function handleCrashedPlane(crashedPlaneTime) {
  //   socket.emit("crashedPlane", crashedPlaneTime);
  // }

  useEffect(() => {
    if (socket) {
      // socket.on("gameStartedTime", (time) => {
      //   setGameStartTime(time);
      // });
      socket.on("adminPlaneCrashedTime", (time) => {
        setAdminPlaneCrashedTime(time);
      });
    }
  }, [socket]);

  const { state, dispatch } = useBetContext();
  const { state: settingState } = useSettingContext();
  const { sound } = settingState;
  const { planeCrashed, gameStarted } = state;
  const canvasRef = useRef(null);

  useEffect(() => {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    var cW = stateRef.current.offsetWidth;
    var cH = stateRef.current.offsetHeight;
    canvas.width = cW;
    canvas.height = cH;
    var screenHeight;
    var screenWidth;
    var x;
    var canvasHeight = 0;
    var canvasWidth = 0;
    var calcwidth = 0;
    var calcheight = 0;
    var horizontalLine = 0;
    var verticalLine = 0;
    var verticaldots = 0;
    var verticalDotSize = 0;
    var boardWidth = 0;
    var boardheight = 0;
    var widthDouble = 0;
    var xPoint = 0;
    var yPoint = 0;
    var diffx = 0;
    var imgheight = 0;
    var imgwidth = 0;
    var imgyposition = 0;
    var imgxposition = 0;
    var settimeinterval = 0;
    var checkuplinedownlinecount = 0;
    var diffy = 0;
    var diffx1 = 0;

    var yend = 0;
    var xend = 0;
    var backgroundImage = "";
    var start = null;
    var progress = 0;
    var frameIndex = 0;
    var countInterval = 0;
    var estimateHeight = 0;
    var estimateWidth = 0;
    var HorizontalDotsCountRun = 0;
    var VerticalDotsCountRun = 0;
    var lastUpdate = Date.now();
    var y0 = 0;
    var x0 = 0;
    var y1 = 0;
    var x1 = 0;
    var y2 = 0;
    var x2 = 0;
    var intervalID;
    var intervalID1;
    var stopPlaneEvent = 0;
    var nx0 = 0;
    var ny0 = 0;
    var nx1 = 0;
    var ny1 = 0;
    var nx2 = 0;
    var ny2 = 0;
    var StopPlaneIntervalID;
    var StopPlaneIntervalID1 = 0;
    var startupdown = 0;
    var imgTag;

    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, 40, 40);
    let bmp;

    function setVariable(isPlane = "") {
      cW = canvas.width;
      cH = canvas.height;
      screenHeight = window.innerHeight - 4;
      screenWidth = window.innerWidth;

      x = 0;

      canvasHeight = cH;
      canvasWidth = cW;
      calcwidth = canvasWidth / 100;
      calcheight = canvasHeight / 100;
      if (canvasWidth < 992) {
        diffx = calcwidth * 45;
        horizontalLine = calcwidth * 10;
        verticalLine = calcheight * 10;
      } else {
        diffx = calcwidth * 30;
        horizontalLine = calcwidth * 5;
        verticalLine = calcheight * 5;
      }
      verticaldots = verticalLine / 100;
      verticalDotSize = verticaldots * 50;
      boardWidth = canvasWidth;
      boardheight = canvasHeight;
      widthDouble = boardWidth * 2.5;
      xPoint = 0 - boardWidth * 1.25;
      yPoint = boardheight - boardWidth * 1.25;
      $(".rotateimage").css({
        width: widthDouble,
        height: widthDouble,
        top: yPoint,
        left: xPoint,
      });
      imgTag = new Image();
      if (canvasWidth < 992) {
        imgheight = 48;
        imgwidth = 200;
        imgyposition = 45;
        imgxposition = 10;
        imgTag.src = "images/sprite2.png";
        // imgTag.src = "https://i.ibb.co/hHkQ7Sh/sprite2.png";
        settimeinterval = 40;
        checkuplinedownlinecount = 50;
      } else {
        imgheight = 71;
        imgwidth = 300;
        imgyposition = 66;
        imgxposition = 15;
        imgTag.src = "images/sprite3.png";
        // imgTag.src = "https://i.ibb.co/qFtKTGp/sprite3.png";
        settimeinterval = 20;
        checkuplinedownlinecount = 150;
      }
      diffy = calcheight * 70;
      diffx1 = canvasWidth - calcwidth * 60;
      yend = canvasHeight - diffy;
      xend = canvasWidth - diffx;
      backgroundImage = "";
      start = null;
      progress = 0;
      frameIndex = 0;
      countInterval = 0;
      estimateHeight = 0;
      estimateWidth = 0;
      HorizontalDotsCountRun = 1;
      VerticalDotsCountRun = 1;
      lastUpdate = Date.now();
      y0 = ctx.canvas.height - verticalLine;
      x0 = verticalLine;
      y1 = ctx.canvas.height - verticalLine;
      x1 = diffx1;
      y2 = yend;
      x2 = xend;
      startupdown = 0;
      stopPlaneEvent = 0;

      if (isPlane != "") {
        var isPlane_display = "";
      } else {
        var isPlane_display = imgTag;
      }
      animatePathDrawing(
        ctx,
        verticalLine,
        ctx.canvas.height - verticalLine,
        diffx1,
        ctx.canvas.height - verticalLine,
        xend,
        yend,
        5000,
        isPlane_display
      );
      // console.log('-----------------------start--------setVariable-------------------------');
    }
    function animatePathDrawing(ctx, x0, y0, x1, y1, x2, y2, duration, imgTag) {
      var step = function animatePathDrawingStep(timestamp) {
        if (start === null) start = timestamp;

        var delta = timestamp - start,
          progress = Math.min(delta / duration, 1);

        if (imgTag !== "") {
          drawBezierSplit(ctx, x0, y0, x1, y1, x2, y2, 0, progress, imgTag);
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    function stopPlane() {
      if (StopPlaneIntervalID1 === 0) {
        ctx.beginPath();
        clearInterval(intervalID);
        clearInterval(intervalID1);
        stopPlaneEvent = 1;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        var intervalTimex = 100;
        var intervalTimey = 50;
        var stopPlaneCount = Math.round((ctx.canvas.width - nx2) / 4);

        StopPlaneIntervalID = setInterval(() => {
          ctx.beginPath();
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.moveTo(nx0, ny0);
          ctx.quadraticCurveTo(
            nx1,
            ny1,
            nx2 + intervalTimex,
            ny2 - intervalTimey
          );
          GameObject(
            imgTag,
            nx2 + intervalTimex - imgxposition,
            ny2 - intervalTimey - imgyposition,
            imgwidth,
            imgheight,
            300,
            2,
            ctx
          );
          ctx.closePath();
          StopPlaneIntervalID1++;
          intervalTimex = intervalTimex + 4;
          intervalTimey = intervalTimey + 1;

          if (StopPlaneIntervalID1 >= stopPlaneCount) {
            window.clearInterval(StopPlaneIntervalID);
            StopPlaneIntervalID1 = 0;
          }
        }, 1);
        ctx.closePath();
      }
    }

    function drawLine() {
      ctx.beginPath();
      ctx.moveTo(verticalLine, 0);
      ctx.lineTo(verticalLine, ctx.canvas.height - verticalLine);
      ctx.lineTo(ctx.canvas.width, ctx.canvas.height - verticalLine);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#423033";
      ctx.stroke();
      ctx.closePath();
    }

    function drawHorizontalDots() {
      var HorizontalDotsCount = 1;
      var verticalLinedata;
      var horizontalLinedata;
      ctx.save();
      ctx.beginPath();
      if (canvasWidth < 992) {
        verticalLinedata = verticalLine / 2;
        horizontalLinedata = horizontalLine / 2;
      } else {
        verticalLinedata = verticalLine;
        horizontalLinedata = horizontalLine;
      }
      ctx.rect(
        verticalLine,
        ctx.canvas.height - verticalLine,
        ctx.canvas.width,
        verticalLine
      );
      ctx.closePath();
      ctx.clip();
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(
          horizontalLinedata * 2 * i + 3,
          ctx.canvas.height - verticalLine + verticalDotSize,
          2,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
      }
      ctx.restore();
    }

    function animationHorizontalDots() {
      var verticalLinedata;
      var horizontalLinedata;
      ctx.beginPath();
      ctx.save();
      ctx.beginPath();
      if (canvasWidth < 992) {
        verticalLinedata = verticalLine / 2;
        horizontalLinedata = horizontalLine / 2;
      } else {
        verticalLinedata = verticalLine;
        horizontalLinedata = horizontalLine;
      }
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.rect(
        verticalLine,
        ctx.canvas.height - verticalLine,
        ctx.canvas.width,
        verticalLine
      );
      ctx.fill();
      ctx.closePath();
      ctx.clip();
      for (let i = 0; i < 2000; i++) {
        ctx.beginPath();
        ctx.arc(
          horizontalLinedata * 2 * i + 3 - HorizontalDotsCountRun,
          ctx.canvas.height - verticalLine + verticalDotSize,
          2,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
      }
      HorizontalDotsCountRun = HorizontalDotsCountRun + 1;
      ctx.restore();
    }

    function animationVerticalDots() {
      var verticalLinedata;
      var horizontalLinedata;
      ctx.beginPath();
      if (canvasWidth < 992) {
        verticalLinedata = verticalLine / 2;
        horizontalLinedata = horizontalLine / 2;
      } else {
        verticalLinedata = verticalLine;
        horizontalLinedata = horizontalLine;
      }
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.rect(0, 0, verticalLine, ctx.canvas.height - verticalLine);
      ctx.closePath();
      ctx.clip();
      for (let i = 0; i < 2000; i++) {
        ctx.beginPath();
        ctx.arc(
          verticalLine - verticalDotSize,
          (ctx.canvas.height - verticalLinedata * i) * 2 -
            5 +
            VerticalDotsCountRun,
          2,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "#1197D6";
        ctx.fill();
        ctx.closePath();
      }
      VerticalDotsCountRun = VerticalDotsCountRun + 1;
      ctx.restore();
    }

    function drawVerticalDots() {
      var verticalLinedata;
      var horizontalLinedata;
      var VerticalDotsCount = 0;
      ctx.save();
      ctx.beginPath();
      if (canvasWidth < 992) {
        verticalLinedata = verticalLine / 2;
        horizontalLinedata = horizontalLine / 2;
      } else {
        verticalLinedata = verticalLine;
        horizontalLinedata = horizontalLine;
      }
      ctx.rect(0, 0, verticalLine, ctx.canvas.height - verticalLine);
      ctx.closePath();
      ctx.clip();
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(
          verticalLine - verticalDotSize,
          verticalLinedata * i * 2 + 5,
          2,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "#1197D6";
        ctx.fill();
        ctx.closePath();
      }
      ctx.restore();
    }

    function draw(
      spritesheet,
      x,
      y,
      width,
      height,
      timePerFrame,
      numberOfFrames,
      ctx,
      frameIndex
    ) {
      if (spritesheet?.complete && spritesheet.naturalWidth !== 0) {
        // Ensure that the image is fully loaded and not broken
        ctx.drawImage(
          spritesheet,
          (frameIndex * width) / numberOfFrames,
          0,
          width / numberOfFrames,
          height,
          x,
          y,
          width / numberOfFrames,
          height
        );
      }
      // else {
      //   console.error(
      //     "Error: The spritesheet image is not fully loaded or is broken."
      //   );
      // }
    }
    function GameObject(
      spritesheet,
      x,
      y,
      width,
      height,
      timePerFrame,
      numberOfFrames,
      ctx
    ) {
      numberOfFrames = numberOfFrames || 1; //number of frames(sprites) in the spritesheet, default 1

      if (Date.now() - lastUpdate >= timePerFrame) {
        frameIndex++;
        if (frameIndex >= numberOfFrames) {
          frameIndex = 0;
        }
        lastUpdate = Date.now();
      }
      // window.onload=function(){
      draw(
        spritesheet,
        x,
        y,
        width,
        height,
        timePerFrame,
        numberOfFrames,
        ctx,
        frameIndex
      );
      // }
    }
    function drawBezierSplit(ctx, x0, y0, x1, y1, x2, y2, t0, t1, imgTag) {
      if (0.0 == t0 && t1 == 1.0) {
        if (stopPlaneEvent == 0) {
          startupdown = 1;
          ctx.beginPath();
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          $.when(drawLine()).then(animationHorizontalDots());
          animationVerticalDots();
          ctx.moveTo(x0, y0);
          ctx.quadraticCurveTo(x1, y1, x2, y2);
          GameObject(
            imgTag,
            x2 - imgxposition,
            y2 - imgyposition,
            imgwidth,
            imgheight,
            300,
            2,
            ctx
          );
          ctx.lineWidth = 5;
          ctx.strokeStyle = "#F00B3E";
          ctx.stroke();
          ctx.closePath();
          fillShape(x2, y2, x0, y0, x1, y1, t1);
          startfirstinterval();
          animationHorizontalDots();
        }
      } else if (t0 != t1) {
        if (stopPlaneEvent == 0) {
          ctx.beginPath();

          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          $.when(drawLine()).then(drawHorizontalDots());
          $.when(drawHorizontalDots()).then(drawVerticalDots());
          var t00 = t0 * t0,
            t01 = 1.0 - t0,
            t02 = t01 * t01,
            t03 = 2.0 * t0 * t01;

          (nx0 = t02 * x0 + t03 * x1 + t00 * x2),
            (ny0 = t02 * y0 + t03 * y1 + t00 * y2);

          t00 = t1 * t1;
          t01 = 1.0 - t1;
          t02 = t01 * t01;
          t03 = 2.0 * t1 * t01;

          (nx2 = t02 * x0 + t03 * x1 + t00 * x2),
            (ny2 = t02 * y0 + t03 * y1 + t00 * y2);

          (nx1 = lerp(lerp(x0, x1, t0), lerp(x1, x2, t0), t1)),
            (ny1 = lerp(lerp(y0, y1, t0), lerp(y1, y2, t0), t1));
          ctx.moveTo(nx0, ny0);
          ctx.quadraticCurveTo(nx1, ny1, nx2, ny2);
          GameObject(
            imgTag,
            nx2 - imgxposition,
            ny2 - imgyposition,
            imgwidth,
            imgheight,
            300,
            2,
            ctx
          );
          ctx.lineWidth = 5;
          ctx.strokeStyle = "#F00B3E";
          ctx.stroke();
          ctx.closePath();
          fillShape(nx2, ny2, nx0, ny0, nx1, ny1, 0);
        }
      }
    }
    function startfirstinterval() {
      intervalID = setInterval(() => {
        downplane(x0, y0, x1, y1, x2, y2);
        if (++countInterval >= checkuplinedownlinecount) {
          window.clearInterval(intervalID);
          countInterval = 0;
          startsecondinterval();
        }
      }, settimeinterval);
    }
    function startsecondinterval() {
      intervalID1 = setInterval(() => {
        upplane(x0, y0, x1, y1, x2, y2);
        if (++countInterval >= checkuplinedownlinecount) {
          window.clearInterval(intervalID1);
          countInterval = 0;
          startfirstinterval();
        }
      }, settimeinterval);
    }
    function upplane(x0, y0, x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      $.when(drawLine()).then(animationHorizontalDots());
      animationVerticalDots();
      var IncreaseY = estimateHeight - countInterval;
      var DecreaseX = estimateWidth - countInterval;
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(x1, y1, DecreaseX, IncreaseY);
      GameObject(
        imgTag,
        DecreaseX - imgxposition,
        IncreaseY - imgyposition,
        imgwidth,
        imgheight,
        300,
        2,
        ctx
      );
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#F00B3E";
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(x1, y1, DecreaseX, IncreaseY);
      ctx.lineTo(DecreaseX + 3, IncreaseY);
      ctx.lineTo(DecreaseX, y0);
      ctx.fillStyle = "rgba(104,1,14,0.8)";
      ctx.fill();
      ctx.closePath();
    }

    function downplane(x0, y0, x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      $.when(drawLine()).then(animationHorizontalDots());
      animationVerticalDots();
      var DecreaseY = y2 + countInterval;
      var IncreaseX = x2 + countInterval;
      estimateHeight = DecreaseY;
      estimateWidth = IncreaseX;
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(x1, y1, IncreaseX, DecreaseY);
      GameObject(
        imgTag,
        IncreaseX - imgxposition,
        DecreaseY - imgyposition,
        imgwidth,
        imgheight,
        300,
        2,
        ctx
      );
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#F00B3E";
      ctx.stroke();
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(x1, y1, IncreaseX, DecreaseY);
      ctx.lineTo(IncreaseX + 3, DecreaseY);
      ctx.lineTo(IncreaseX, y0);
      ctx.fillStyle = "rgba(104,1,14,0.8)";
      ctx.fill();
      ctx.closePath();
    }

    function lerp(v0, v1, t) {
      return (1.0 - t) * v0 + t * v1;
    }

    function fillShape(nx2, ny2, nx0, ny0, nx1, ny1, t1) {
      if (t1 == 1.0) {
        ctx.beginPath();
        ctx.moveTo(nx0, ny0);
        ctx.quadraticCurveTo(nx1, ny1, nx2, ny2);
        ctx.lineTo(nx2 + 3, ny2);
        ctx.lineTo(nx2 + 3, y0);
        ctx.fillStyle = "rgba(104,1,14,0.8)";
        ctx.fill();
        ctx.closePath();
      } else {
        ctx.beginPath();
        ctx.moveTo(nx0, ny0);
        ctx.quadraticCurveTo(nx1, ny1, nx2, ny2);
        ctx.lineTo(nx2, ny2);
        ctx.lineTo(nx2, y0);
        ctx.fillStyle = "rgba(104,1,14,0.8)";
        ctx.fill();
        ctx.closePath();
      }
    }
    function crashPlane() {
      $(".rotateimage").css("width", 0).css("height", 0);
      stopPlane();
      dispatch({ type: "planeCrashed", payload: true });
      dispatch({ type: "gameStarted", payload: false });
      // const time = new Date().getTime();
      // handleCrashedPlane(time);
    }

    if (!gameStarted) {
      console.log(game);
      crashPlane();
    }
    if (gameStarted) {
      setVariable();
    }
  }, [gameStarted]); // Ensure this effect runs only once on component mount

  return (
    <canvas ref={canvasRef} id="myCanvas" height={400} width={1900}></canvas>
  );
});

export default CanvasAnimation;
