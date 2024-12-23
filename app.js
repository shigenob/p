        function play() {
            var one = Math.floor(Math.random()*5);
            console.log(one);
                var image_name
           
                
                if (one == 0) {
                image_mame = "daikiti.png";
            } else if (one == 1) {
               image_mame  = "chuukichi.png";
            } else if (one == 2) {
               image_mame  = "shoukichi.png";
            } else if (one == 3) {
               image_mame  = "suekichi.png";  
            } else   {
               image_mame  = "kyou.png";

                } 
                console.log(image_name);


                alert("おみくじが出たぞ！結果は如何に！？");
                    
            document.getElementById('omikuji').src = "images/" + image_name;
             document.getElementById('playBtn').innerHTML = "やり直す" ;
                
                }
