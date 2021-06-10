$('.slider-one')
    .not('.slick-initialized')
    .slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider.slider-btn.prev",
    nextArrow:".site-slider.slider-btn.next"
});

var MainImg = document.getElementById('MainImg')
var SmallImg = document.getElementsByClassName('small-img')

SmallImg[0].onclick = function (){
    MainImg.src = SmallImg[0].src
}
SmallImg[1].onclick = function (){
    MainImg.src = SmallImg[1].src
}
SmallImg[2].onclick = function (){
    MainImg.src = SmallImg[2].src
}
