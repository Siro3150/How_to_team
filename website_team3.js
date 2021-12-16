window.addEventListener("load", init);
function init() {


  //アイデアツリーの描画
  const canvas = document.getElementById("myCanvas");
  //canvas自体の範囲
  canvas.width = 1440;
  canvas.height = 3000;
  const cvs = canvas.getContext("2d");

  //根っこと幹の描画
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("Webページを作る目的(思想)", canvas.width / 2, canvas.height - 70);
  cvs.ellipse(canvas.width / 2, canvas.height - 70, 500, 60, 0, Math.PI * 2, false);
  cvs.moveTo(canvas.width / 2, canvas.height - 130);
  cvs.lineTo(canvas.width / 2, 1000);
  cvs.closePath();
  cvs.stroke();

  //自己表現のアイデア
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("自己表現", canvas.width / 2 - 300, 2600);
  cvs.ellipse(canvas.width / 2 - 300, 2600, 200, 60, 0, Math.PI * 2, false);
  cvs.moveTo(canvas.width / 2, 2680);
  cvs.lineTo(609, 2623);
  cvs.closePath();
  cvs.stroke();

  //本当の自分
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("本当の自分", 1106,2557);
  cvs.ellipse(1106, 2557,200, 60, 0, Math.PI * 2, false);
  cvs.moveTo(622, 2602);
  cvs.lineTo(911, 2559);
  cvs.closePath();
  cvs.stroke();

  //ばってん
  cvs.beginPath();
  cvs.moveTo(733.5,2534); cvs.lineTo(879.5,2633);
  cvs.moveTo(755, 2624); cvs.lineTo(844, 2530);
  cvs.closePath();
  cvs.stroke();

  //理想
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("理想", 799.5, 2336);
  cvs.ellipse(799.5, 2336, 200, 60, 0, Math.PI * 2, false);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.closePath();
  cvs.stroke();

  //他者
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("他者", 634.5, 2170);
  cvs.ellipse(634.5, 2170, 200, 60, 0, Math.PI * 2, false);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.closePath();
  cvs.stroke();

  //感動
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("感動", 338.5, 2269);
  cvs.ellipse(338.5, 2269, 200, 60, 0, Math.PI * 2, false);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.closePath();
  cvs.stroke();

  //感動
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("デザイン", 1038.5, 2147);
  cvs.ellipse(1038.5, 2147, 200, 60, 0, Math.PI * 2, false);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.closePath();
  cvs.stroke();

  //価値有る情報共有
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("価値有る情報共有", 876.5, 1878);
  cvs.ellipse(876.5, 1878, 300, 60, 0, Math.PI * 2, false);
  cvs.moveTo(canvas.width/2, 2068);
  cvs.lineTo(842.5, 1941);
  cvs.closePath();
  cvs.stroke();

  //情報の信憑性
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("情報の信憑性", 419.5, 1730);
  cvs.ellipse(419.5, 1730, 300, 60, 0, Math.PI * 2, false);
  cvs.moveTo(canvas.width / 2, 2068);
  cvs.lineTo(842.5, 1941);
  cvs.closePath();
  cvs.stroke();

  //与える影響
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.strokeText("与える影響", 958.5, 1643);
  cvs.ellipse(958.5, 1643, 300, 60, 0, Math.PI * 2, false);
  cvs.moveTo(canvas.width / 2, 2068);
  cvs.lineTo(842.5, 1941);
  cvs.closePath();
  cvs.stroke();


  console.log('Hello');









  // class Tree {
  //   constructor(cvs, x, y, scale) {
  //     this.cvs = cvs
  //     配置場所を調整
  //     this.x = x;
  //     this.y = y;
  //     this.scale = scale;
  //     木のプロトタイプ
  //     this.drawTree(this.x, this.y, scale);
  //   }

  //   drawTree(x, y, scale) {
  //     this.cvs.beginPath();
  //   }
  // }


  //木サンプル
  cvs.beginPath();
  function drawTree(x1, y1, leng, level,angle = -90,) {
    let x2 = leng * Math.cos(angle * Math.PI / 180) + x1;
    let y2 = leng * Math.sin(angle * Math.PI / 180) + y1;

    cvs.moveTo(x1, y1);
    cvs.lineTo(x2, y2);
    if (level > 0) {
      level = level - 1;
      drawTree(x2, y2, getRandomArbitrary(leng * 0.5, leng * 0.9),level, angle + getRandomArbitrary(0, 50));
      drawTree(x2, y2, getRandomArbitrary(leng * 0.5, leng * 0.9),level, angle - getRandomArbitrary(0, 50));
    }
  }
  drawTree(canvas.width/2, 1800, 300,10);


  cvs.closePath();
  cvs.stroke();










  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }



  function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  canvas.addEventListener('click', function (evt) {
    var mousePos = getMousePosition(canvas, evt);
    var message =  mousePos.x + ',' + mousePos.y;
    console.log(message);
  }, false);

}
