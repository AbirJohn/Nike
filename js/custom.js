let menu = document.querySelector('#menu-bar');
let Nevbar = document.querySelector('.navbar');




menu.onclick =() =>{

    menu.classList.toggle('fa-times');
    Nevbar.classList.toggle('active');

}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    Nevbar.classList.remove('active');

}

//Home Slider ---------------------


let Slider = document.querySelectorAll('.slider-container');
let index = 0;


function next(){
    Slider[index].classList.remove('active');
    index = (index + 1)% Slider.length;
    Slider[index].classList.add('active');
}

function prev(){
    Slider[index].classList.remove('active');
    index = (index - 1 + Slider.length)% Slider.length;
    Slider[index].classList.add('active');
}

// featured --------------------------

document.querySelectorAll('.f-img-1').forEach(image_1=>{

    image_1.addEventListener('click',()=>{
        var src =image_1.getAttribute('src');
        document.querySelector('.big-img-1').src = src;
    });

});



document.querySelectorAll('.f-img-2').forEach(image_2=>{

    image_2.addEventListener('click',()=>{
        var src =image_2.getAttribute('src');
        document.querySelector('.big-img-2').src = src;
    });

});




document.querySelectorAll('.f-img-3').forEach(image_3=>{

    image_3.addEventListener('click',()=>{
        var src =image_3.getAttribute('src');
        document.querySelector('.big-img-3').src = src;
    });

});



