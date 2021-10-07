function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



function chooseImage(randomNumber){
    var source = "images/dice1.png";

    if (randomNumber == 2){
        source = "images/dice2.png";
    }else if (randomNumber == 3){
        source = "images/dice3.png";
    }else if (randomNumber == 4){
        source = "images/dice4.png";
    }else if (randomNumber == 5){
        source = "images/dice5.png";
    }else if (randomNumber == 6){
        source = "images/dice6.png";
    }

    return source;
}

function UpdateText(randomNumber1,randomNumber2){
    var text;
    if (randomNumber1 > randomNumber2){
        text = document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    }else if (randomNumber1 < randomNumber2){
        text = document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
    }else{
        text = document.querySelector("h1").innerHTML = "Draw";
    }
}

randomNumber1 = getRandomInt(1,6)
source1 = chooseImage(randomNumber1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", source1)


randomNumber2 = getRandomInt(1,6)
source2 = chooseImage(randomNumber2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", source2)

UpdateText(randomNumber1, randomNumber2);
