// mouse hover effect 

var fire = document.querySelector('#fire');

document.addEventListener('mousemove' , function(e){

    fire.style.top = e.clientY + 'px';
    fire.style.left = e.clientX + 'px';

    // console.log()
    // console.log()
})

