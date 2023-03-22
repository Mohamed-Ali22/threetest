// btn random color 

var body = document.body;
var btn = document.getElementById('btn');
var alpBtn = document.getElementById('alpBtn')
var overlay = document.querySelector('.overlay')

btn.addEventListener('click' , function(e){
    // back ground color 
    var x = Math.round(Math.random()*255)
    var y = Math.round(Math.random()*255)
    var z = Math.round(Math.random()*255)

    overlay.style.backgroundColor = `rgba(${x} , ${y} , ${z})`;
})
alpBtn.addEventListener('click',function () {
    var x = Math.round(Math.random()*255)
    var y = Math.round(Math.random()*255)
    var z = Math.round(Math.random()*255)
    var a = Math.round(Math.random()*1000)

        overlay.style.backgroundColor = `rgba(${x} , ${y} , ${z} , 0.${a})`;
    })