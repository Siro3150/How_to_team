window.addEventListener("load", init);
function init() {

  // ステージを作成
  var stage = new createjs.Stage("myCanvas");
  stage.canvas.width = window.innerWidth;
  console.log(window.innerWidth);
  stage.canvas.height = 2000;



  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  //10 < level < 15
  class Tree extends createjs.Shape {
    constructor(x, y, scale, level) {
      super();

      // 配置場所を調整
      this.x = x;
      this.y = y;
      this.scaleX = scale;
      this.scaleY = scale;
      //木のプロトタイプ
      this.drawTree(300, level);
    }

    drawTree(
      leng, // 枝の長さ
      level, // 再帰レベル
      width = 20,//枝の太さ
      x1 = 0, // 始点のX座標
      y1 = 0, // 始点のY座標
      angle = -90, // 木の伸びる方向(角度)
    ) {
      // 次の枝の座標を算出
      let x2 = leng * Math.cos(angle * Math.PI / 180) + x1;
      let y2 = leng * Math.sin(angle * Math.PI / 180) + y1;

      // 線の種類を設定
      if (level == 13) {
        this.graphics.setStrokeStyle(80).beginStroke('maroon');
      }
      else if (level < 1) {
        //先端に実をつける
        this.graphics.beginFill('red');
        this.graphics.drawCircle(x2, y2, 8);
      }
      else if (level < 3) {
        //先端付近には葉っぱもつける
        this.graphics.setStrokeStyle(width).beginStroke('green');
        this.graphics.beginFill('green');
        this.graphics.drawCircle(x2, y2, 20);
      }
      else {
        this.graphics.setStrokeStyle(width).beginStroke('maroon');
      }
      // 枝を結ぶ
      this.graphics.moveTo(x1, y1);
      this.graphics.lineTo(x2, y2);

      // 細分化
      if (level > 0) {
        // 細分化レベルを更新
        level = level - 1;

        // 次の枝を描く
        this.drawTree(
          getRandomArbitrary(leng * 0.5, leng * 0.9),
          level,
          width * getRandomArbitrary(0.6, 0.9),
          x2, y2, angle + getRandomArbitrary(0, 50)
        );

        this.drawTree(
          getRandomArbitrary(leng * 0.5, leng * 0.9),
          level,
          width * getRandomArbitrary(0.6, 0.9),
          x2, y2, angle - getRandomArbitrary(0, 50)
        );
      }

    }
  }

  //インスタンス化
  //背景の木
  // for (let j = 0; j < 10; j++) {
  //   stage.addChild(new Tree(
  //     getRandomArbitrary(0, 1400),
  //     getRandomArbitrary(300, 1500),
  //     0.5,
  //     10)
  //   );
  // }

  //メインの木
  var tree = new Tree(700, 2000, 1, 13);

  // ステージに配置する
  stage.addChild(tree);

  let leaf = new createjs.Bitmap("/Users/nobatakai/Desktop/leaf2.png");
  stage.addChild(leaf);

  stage.update();
}
