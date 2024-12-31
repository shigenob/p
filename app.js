function play() {
    var no = Math.floor(Math.random() * 5);
    console.log(no);
    var image_name; // 画像名の変数を宣言
    
    // ランダム番号に基づいて正しい画像ファイル名を割り当てる
    if (no == 0) {
        image_name = "daikiti.png";
    } else if (no == 1) {
        image_name = "chuukichi.png";
    } else if (no == 2) {
        image_name = "shoukichi.png";
    } else if (no == 3) {
        image_name = "suekichi.png";
    } else {
        image_name = "kyou.png";
    }
    
    console.log(image_name);

    alert("おみくじが出たぞ！結果は如何に！？");
    
    // 正しい画像のソースとボタンのテキストを設定する
    document.getElementById('omikuji').src = "images/" + image_name;
    document.getElementById('playBtn').innerHTML = "やり直す";
}
   const fortunes = [
       { text: "大吉!", description: "最高の運勢です！" },
       { text: "吉!", description: "良い運勢です！" },
       { text: "中吉!", description: "まずまずの運勢です。" },
       { text: "小吉!", description: "悪くはありません。" },
       { text: "凶!", description: "注意が必要です。" }
   ];

   function play() {
       const randomIndex = Math.floor(Math.random() * fortunes.length);
       alert(fortunes[randomIndex].text + "\n" + fortunes[randomIndex].description);
   }

