        function play() {
            var no = Math.floor(Math.random()*5);
            console.log(no);
                var image_name
           
                
                if (no == 0) {
                image_mame = "daikiti.png";
            } else if (no == 1) {
               image_mame  = "chuukichi.png";
            } else if (no == 2) {
               image_mame  = "shoukichi.png";
            } else if (no == 3) {
               image_mame  = "suekichi.png";  
            } else   {
               image_mame  = "kyou.png";

                console.log(image_name);


                alert("おみくじが出たぞ！結果は如何に！？");
                    
            document.getElementById('omikuji').src = "images/" + image_name;
             document.getElementById('playBtn').innerHTML = "やり直す" ;
                
                }
