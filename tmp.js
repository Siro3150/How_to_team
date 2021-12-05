
// 描画用のシェイプを作成
var shape = new createjs.Shape();
stage.addChild(shape);
// 配置場所を調整
shape.y = 1400;
shape.x = 700;
shape.scaleX = 1;
shape.scaleY = 1;

// フラクタルの木を描く
//背景の木
// for (let i = 0; i < 30; i++) {
//   drawTree(
//     x1 = getRandomArbitrary(0, window.innerWidth),
//     y1 = getRandomArbitrary(0, window.innerHeight * 0.5),
//     leng = getRandomArbitrary(80, 150),
//     angle = -90,
//     level = 10,
//     width = 10
//   );
// }

//メインの木
//drawTree(0, 0, 300, -90, 13, 20);

// 枝を描く
function drawTree(
  x1, // 始点のX座標
  y1, // 始点のY座標
  leng, // 枝の長さ
  angle, // 木の伸びる方向(角度)
  level, // 再帰レベル
  width,//枝の太さ
) {
  // 次の枝の座標を算出
  var x2 = leng * Math.cos(angle * Math.PI / 180) + x1;
  var y2 = leng * Math.sin(angle * Math.PI / 180) + y1;
  // 線の種類を設定
  if (level < 1) {
    //先端に実をつける
    shape.graphics.beginFill('red');
    shape.graphics.drawCircle(x2, y2, 8);
  }
  else if (level < 3) {
    //先端付近には葉っぱもつける
    shape.graphics.setStrokeStyle(width).beginStroke('green');
    shape.graphics.beginFill('green');
    shape.graphics.drawCircle(x2, y2, 20);
  }
  else {
    shape.graphics.setStrokeStyle(width).beginStroke('maroon');
  }

  // 枝を結ぶ
  shape.graphics.moveTo(x1, y1);
  shape.graphics.lineTo(x2, y2);


  // 細分化
  if (level > 0) {
    // 細分化レベルを更新
    level = level - 1;

    // 三角関数で変動する値を得る (-1.0〜+1.0の周期になる)
    var rot = getRandomArbitrary(20, 50); // +20〜+100の値を得る

    // 次の枝を描く
    drawTree(
      x2, y2, getRandomArbitrary(leng * 0.5, leng * 0.9),
      angle + getRandomArbitrary(0, 50), level,
      width * getRandomArbitrary(0.6, 0.9)
    );
    drawTree(
      x2, y2, getRandomArbitrary(leng * 0.5, leng * 0.9),
      angle - getRandomArbitrary(0, 50), level,
      width * getRandomArbitrary(0.6, 0.9)
    );
  }
}
