function play() {
    var no = Math.floor(Math.random() * 5);
    console.log(no);
    var image_name; // 画像名の変数を宣言
    
    // ランダム番号に基づいて正しい画像ファイル名を割り当てる
    if (no == 0) {
        image_name = "daikiti.jpg";
    } else if (no == 1) {
        image_name = "chuukichi.jpg";
    } else if (no == 2) {
        image_name = "shoukichi.jpg";
    } else if (no == 3) {
        image_name = "kichi.jpg";
    } else if (no == 4) {
        image_name = "kyou.jpg";
    } else  {
        image_name = "suekiti.jpg";
    
    console.log(image_name);

    alert("おみくじが出たぞ！結果は如何に！？");
    
    // 正しい画像のソースとボタンのテキストを設定する
    document.getElementById('omikuji').src = "images/" + image_name;
    document.getElementById('playBtn').innerHTML = "やり直す";
}



