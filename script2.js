// alert("1111");

var sakura = document.getElementById('sakura');
var blursArray = ['0', '4px', '5px'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 100;
var bodersArray = ['50%', '70%'];
var colorsArray = ['#FF6b6B'];
var img = document.createElement("img");
img.src = "./src/sakura.png";

function createElementRandom() {
    for(var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random()*width);
        var randomTop = Math.floor(Math.random()*height);
        var widthElement = Math.floor(Math.random()*5)+5;
        img.width = widthElement; 
        img.height = widthElement;
        var timeAnimation = Math.floor(Math.random()*12) + 4;
        var blur = Math.floor(Math.random()*3);
        var border = Math.floor(Math.random()*2);
        
        var div = document.createElement('div');
        // div.appendChild(img);
        div.style.backgroundColor = "#FFCCCC";
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        div.style.borderRadius = bodersArray[border];
        div.style.animation = 'move ' + timeAnimation + 's ease-in infinite';
        sakura.appendChild(div);
    }
}

createElementRandom();