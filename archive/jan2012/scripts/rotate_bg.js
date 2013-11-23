$(document).ready(function(){

var imgArr = new Array( // relative paths of images
'./images/purple.jpg',
'./images/galaxy.jpg',
'./images/castle_mountain.jpg'
);

var preloadArr = new Array();
var i;

/* preload images */
for(i=0; i < imgArr.length; i++){
preloadArr[i] = new Image();
preloadArr[i].src = imgArr[i];
}

var currImg = 0;

changeImg();

/* image rotator */
function changeImg(){

	if(currImg < imgArr.length) {
		$('.bg').animate({opacity: 0}, 750, function(){
			$('.bg').attr('src',preloadArr[currImg++].src);
			}).animate({opacity: 1}, 750);	
		setTimeout(changeImg, 9500);
		}
	else {
		currImg = 0
		changeImg();
		}
}

});