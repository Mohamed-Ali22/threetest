
var roct = document.createElement('div');
// roct.classList.add(roct);
// body.appendChild(roct);

// var move = document.querySelector('.roct')
// var roct = document.querySelector('.roct img')
// var con = document.querySelector('.roct span')
// var palt = document.querySelector('span .pult')
// var moveLeft = 0;
// var moveDown = 0;
// document.addEventListener('keydown' , function(e){
//     if (e.code== ('ArrowRight')){
//         moveLeft += 100;
//         move.style.left = moveLeft + 'px';
//         con.style.left = moveLeft + 'px';
//     }else if(e.code == ('ArrowLeft')){
//         moveLeft -= 100;
//         roct.style.left = moveLeft + 'px';
//         move.style.left = moveLeft + 'px';
//         con.style.left = moveLeft + 'px';
//     } else if(e.code == ('ArrowDown')){
//         moveDown += 100;
//         roct.style.top = moveDown + 'px';
//         move.style.left = moveDown + 'px';
//         con.style.top = moveDown + 'px';
//     }else if(e.code == ('ArrowUp')){
//         moveDown -= 100;
//         roct.style.top = moveDown + 'px';
//         move.style.left = moveDown + 'px';
//         con.style.top = moveDown + 'px';
//     }else if(e.code == ('Space')){
//         palt.style.top='-300px'
//         palt.style.opacity = 1
//     }
// })




// 'Space'






var fire = document.querySelector('img');
moveLeft=0;
moveUp=0;

document.addEventListener('mousemove' , function(e){
    // console.log(e.clientX);
    // console.log(e.clientY);
    fire.style.left =e.clientX +'px';
    fire.style.top=e.clientY+ 'px'

})


// Math.random()*255
// Math.round();

document.addEventListener('click' , function(e){
    
    var body = document.body;
    var x = Math.round(Math.random()*255)
    var y = Math.round(Math.random()*255)
    var z = Math.round(Math.random()*255)

    document.style.backgroundColor=('rgb('+ x + ')' + '(' + y + ')' + '('+ z +')') 
    body.style.backgroundColor = 'rgb('+ x + ','  + y + ',' + z +')'; 
    console.log(x)
    console.log(y)
    console.log(z)
})

// test one 
//-------------------------------------------------



//----------------------------------------------------


// chiken text
//---------------------------------------------------
var body = document.body;
var roct = document.querySelector('.roct');
var pult = document.querySelector('#plt')

var moveLeft = 0;
var moveTop = 0;
document.addEventListener('keydown' , function(e){
    if(e.code == ('ArrowRight')){
        moveLeft += 100
        roct.style.left = moveLeft +'px'
    }else if(e.code == ('ArrowLeft')){
        moveLeft -= 100
        roct.style.left = moveLeft +'px'
    }else if(e.code == ('ArrowDown')){
        moveTop += 100
        roct.style.top = moveTop +'px'
    }else if(e.code == ('ArrowUp')){
        moveTop -= 100
        roct.style.top = moveTop +'px'
    }else if(e.code == ('Space')){
        pult.style.opacity = 1
        pult.style.top = -400 +'px';
        pult.style.transition = 'all 0.5s'

    }
    // console.log(e)

})
document.addEventListener('keyup' , function(e){
    pult.style.opacity = 0
    pult.style.top = 0 +'px'
    pult.style.transition = 'all 0s'
})

var counter = 0
var x = setInterval(function(){
    counter ++
    var contaner = document.getElementById('main');
    var image = document.createElement('img');
    contaner.style.textAlign='center'
    image.setAttribute('src','Chicken.png');
    image.style.width='60px'
    contaner.append(image);
    if(counter == 50){
        clearInterval(x)
    }
},30)
// code: 'ArrowUp'
// code: 'ArrowDown'
// code: 'ArrowRight'
// code: 'ArrowLeft'




