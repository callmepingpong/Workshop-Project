var slide = new Array("../images/slider_start/img1.png", "../images/slider_start/img2.png", "../images/slider_start/img3.png", "../images/slider_start/img4.png", "../images/slider_start/img5.png", "../images/slider_start/img6.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}