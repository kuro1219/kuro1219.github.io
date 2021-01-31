

var pics_src = new Array("IMG_7048.jpg","IMG_4127.JPG","IMG_6285.jpg","IMG_7105.jpg","IMG_5746.jpg","IMG_4126.JPG","IMG_6811.jpg"
,"IMG_5691.jpg","IMG_6183.jpg","IMG_4133.JPG","IMG_4131.JPG","IMG_7344.JPG","IMG_4150.JPG","IMG_4129.JPG"
,"IMG_4149.JPG","IMG_4156.jpg",);
var num = -1;

slideshow_timer();

function slideshow_timer(){
    if (num == 15){
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("photo").src=pics_src[num];
    setTimeout("slideshow_timer()",2000);
}
