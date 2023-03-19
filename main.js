let color1 = ["red", "green", "blue", "black", "gray", "pink", "lightblue"];

        let button = document.getElementById("color");
        let body = document.querySelector("body");

        button.addEventListener('click', function(){
            body.style.backgroundColor = color1[Math.round(Math.random()*color1.length)];
        })