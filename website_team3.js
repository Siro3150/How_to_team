window.addEventListener("load", init);
function init() {
  //アイデアツリーの描画
  const canvas = document.getElementById("myCanvas");
  //canvas自体の範囲
  canvas.width = 1440;
  canvas.height = 3000;
  const cvs = canvas.getContext("2d");

  img = new Image();
  img.src = "/Users/nobatakai/Documents/website_team/how2.jpg";
  img.onload = function () { cvs.drawImage(img, 60, 20, canvas.width-100, 700);}

  class Tree {
    constructor(x, y, leng, level, num = 15) {
      //配置場所を調整
      this.x = x;
      this.y = y;
      this.leng = leng;
      this.level = level;
      this.num = num;
      //木のプロトタイプ
      this.drawMiki(this.x, this.y, this.leng);
      cvs.beginPath();
      this.drawTree(this.x, this.y, this.leng, this.level);
      cvs.fillStyle = "green";
      cvs.fill();
      cvs.closePath();
      this.drawMi(this.x, this.y, this.leng, this.num);
    }

    drawTree(x1, y1, leng, level, angle = -90,) {
      let x2 = leng * Math.cos(angle * Math.PI / 180) + x1;
      let y2 = leng * Math.sin(angle * Math.PI / 180) + y1;

      cvs.moveTo(x1, y1);
      cvs.lineTo(x2, y2);

      if (level < 9) {
        cvs.arc(x2, y2, leng * 1.3, Math.PI * 2, false);
      }
      if (level > 0) {
        level = level - 1;
        this.drawTree(x2, y2, getRandomArbitrary(leng * 0.5, leng * 0.9), level, angle + getRandomArbitrary(0, 50));
        this.drawTree(x2, y2, getRandomArbitrary(leng * 0.5, leng * 0.9), level, angle - getRandomArbitrary(0, 50));
      }

    }

    drawMiki(x1, y1, leng) {
      y1 -= leng*1.3;
      //支点
      cvs.beginPath();
      cvs.moveTo(x1, y1);

      //幹左上
      let x2 = leng * Math.cos(-110 * Math.PI / 180) + x1;
      let y2 = leng * Math.sin(-110 * Math.PI / 180) + y1;
      cvs.lineTo(x2, y2);
      console.log("2", x2, y2);

      //根左端
      let x3 = leng * 4 * Math.cos(98 * Math.PI / 180) + x1;
      let y3 = leng * 4 * Math.sin(98 * Math.PI / 180) + y1;
      console.log("3", x3, y3);
      cvs.quadraticCurveTo(x1, y1 + leng, x3, y3);

      //根
      let x3_1 = (x3 + x1) / 2;
      let y3_1 = y3 - leng / 2;
      cvs.lineTo(x3_1, y3_1);

      let x3_2 = x1;
      let y3_2 = y3;
      cvs.lineTo(x3_2, y3_2);

      let x3_3 = x1 + (x1 - x3_1)
      let y3_3 = y3_1
      cvs.lineTo(x3_3, y3_3);

      //根右端
      let x4 = x1 + (x1 - x3);
      let y4 = y3
      console.log("4", x4, y4);
      cvs.lineTo(x4, y4);
      let x5 = x1 + (x1 - x2);
      let y5 = y2
      console.log("5", x5, y5);
      cvs.quadraticCurveTo(x1, y1 + leng, x5, y5);

      cvs.lineTo(x1, y1);
      cvs.fillStyle = "maroon";
      cvs.fill();
      cvs.closePath();
    }

   drawMi(x1, y1, leng, num) {

      for (let i = 0; i < num; i++) {
        let x = getRandomArbitrary(x1 + leng * 2, x1 - leng * 2);
        let y = getRandomArbitrary(y1 - leng * 2, y1 - leng * 3);
        // cvs.beginPath();
        // cvs.arc(x, y, leng / 3, Math.PI * 2, false);
        // cvs.fillStyle = "green";
        // cvs.fill();
        // cvs.closePath();
        cvs.beginPath();
        cvs.arc(x, y, leng / 10, Math.PI * 2, false);
        cvs.fillStyle = "red";
        cvs.stroke();
        cvs.fill();
        cvs.closePath();
      }
    }
  }

  for (let j = 0; j < 10; j++) {
    new Tree(getRandomArbitrary(0,canvas.width), getRandomArbitrary(0, 1700), 100, 10);
  }

  const mainTree = new Tree(canvas.width/2, 1800, 350, 10);



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
    var message = mousePos.x + ',' + mousePos.y;
    console.log(message);
  }, false);


  cvs.lineWidth = 3;
  cvs.beginPath();
  cvs.font = '50pt "游ゴシック体","YuGothic","游教科書体","YuKyokasho","Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif';
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(242, 122, 2, 1)";
  cvs.ellipse(canvas.width / 2, canvas.height - 70, 500, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("Webページを作る目的(思想)", canvas.width / 2, canvas.height - 70);
  cvs.moveTo(canvas.width / 2, canvas.height - 130);
  cvs.lineTo(canvas.width / 2, 1500);
  cvs.closePath();
  cvs.stroke();

  //自己表現のアイデア
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(canvas.width / 2 - 300, 2600, 200, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("自己表現", canvas.width / 2 - 300, 2600);
  cvs.moveTo(canvas.width / 2, 2680);
  cvs.lineTo(609, 2623);
  cvs.moveTo(389.5833282470703, 2542.005126953125);
  cvs.lineTo(346.5833282470703, 2331.005126953125);
  cvs.closePath();
  cvs.stroke();

  //本当の自分
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(1106, 2557, 200, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("本当の自分", 1106, 2557);
  cvs.moveTo(622, 2602);
  cvs.lineTo(911, 2559);
  cvs.closePath();
  cvs.stroke();

  //ばってん
  cvs.beginPath();
  cvs.strokeStyle = "red";
  cvs.moveTo(916.8333282470703, 2488.171875); cvs.lineTo(1276.8333282470703, 2623.171875);
  cvs.moveTo(1268.8333282470703, 2468.171875); cvs.lineTo(929.8333282470703, 2640.171875);
  cvs.closePath();
  cvs.stroke();
  cvs.strokeStyle = "black";

  //理想
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(799.5, 2336, 200, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("理想", 799.5, 2336);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.moveTo(911.8333282470703, 2287.3385009765625);
  cvs.lineTo(959.8333282470703, 2205.3385009765625);
  cvs.closePath();
  cvs.stroke();

  //他者
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(634.5, 2170, 200, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("他者", 634.5, 2170);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.closePath();
  cvs.stroke();

  //感動
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(338.5, 2269, 200, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("感動", 338.5, 2269);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.moveTo(496.8333282470703, 2233.171875);
  cvs.lineTo(504.8333282470703, 2216.171875);
  cvs.closePath();
  cvs.stroke();

  //感動
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(1038.5, 2147, 200, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("デザイン", 1038.5, 2147);
  cvs.moveTo(545.5, 2556);
  cvs.lineTo(681.5, 2389);
  cvs.closePath();
  cvs.stroke();

  //価値有る情報共有
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(876.5, 1878, 300, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("価値有る情報共有", 876.5, 1878);
  cvs.moveTo(canvas.width / 2, 2068);
  cvs.lineTo(842.5, 1941);
  cvs.moveTo(635.8333282470703, 1842.505126953125);
  cvs.lineTo(595.8333282470703, 1778.505126953125);
  cvs.moveTo(920.8333282470703, 1818.671875);
  cvs.lineTo(956.8333282470703, 1703.671875);
  cvs.closePath();
  cvs.stroke();

  //情報の信憑性
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(419.5, 1730, 300, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("情報の信憑性", 419.5, 1730);
  cvs.moveTo(canvas.width / 2, 2068);
  cvs.lineTo(842.5, 1941);
  cvs.closePath();
  cvs.stroke();

  //与える影響
  cvs.beginPath();
  cvs.font = "50pt sans-selif";
  cvs.textAlign = "center";
  cvs.textBaseline = "middle";
  cvs.fillStyle = "rgba(137, 224, 7, 1)";
  cvs.ellipse(958.5, 1643, 300, 60, 0, Math.PI * 2, false);
  cvs.fill();
  cvs.fillStyle = "black";
  cvs.fillText("与える影響", 958.5, 1643);
  cvs.moveTo(canvas.width / 2, 2068);
  cvs.lineTo(842.5, 1941);
  cvs.closePath();
  cvs.stroke();

//   //目的にあったWebサイト作りをサポートするハウツー
//   cvs.beginPath();
//   cvs.font = "50pt sans-selif";
//   cvs.textAlign = "center";
//   cvs.textBaseline = "middle";
//   cvs.fillStyle = "rgba(255, 255, 255, 1)";
//   cvs.fillRect(500, 1300, 450, 130);
//   cvs.fill();
//   cvs.fillStyle = "black";
//   cvs.fillText("目的にあったWebサイト作りをサポート", canvas.width/2, 1369);
//   cvs.closePath();
//   cvs.stroke();
//   console.log('Hello');
 }
