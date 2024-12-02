        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "末吉"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "小吉";
            } else if (colour === "黒" && number === 1) {
                result = "中吉";
            } else if (colour === "黒" && number === 2) {
                result = "凶";
            } else if (colour === "黒" && number === 3) {
                result = "末吉";  
            } else if (colour === "白" && number === 0) {
                result = "中吉";
            } else if (colour === "白" && number === 1) {
                result = "小吉";
            } else if (colour === "白" && number === 2) {
                result = "大凶";
            } else if (colour === "白" && number === 3) {
                result = "末吉";
            } else if (colour === "オレンジ" && number === 0) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 1) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) {
                result = "中吉";
            } else if (colour === "オレンジ" && number === 3) {
                result = "末吉";
        　　} else if (colour === "金" && number === 0) {
                result = "末吉";
　　　　　　 } else if (colour === "金" && number === 1) {
                result = "中吉";
        　  } else if (colour === "金" && number === 2) {
                result = "大吉";
        　　 } else if (colour === "金" && number === 3) {
                result = "大凶";
            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
