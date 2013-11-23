$(document).ready(function(){

var imgArr = new Array( // relative paths of images
'./images/bird_horn.jpg',
'./images/theneonone.jpg',
'./images/trees.jpg',
'./images/city.jpg',
'./images/bg.jpg'
);

var preloadArr = new Array();
var i;

/* preload images */
for(i=0; i < imgArr.length; i++){
preloadArr[i] = new Image();
preloadArr[i].src = imgArr[i];
}

var currImg = 0;
var intID = setInterval(changeImg, 8250);

/* image rotator */
function changeImg(){
$('.bg').animate({opacity: 0}, 1250, function(){
$('.bg').attr('src',preloadArr[currImg++%preloadArr.length].src);
}).animate({opacity: 1}, 1250);
}

});