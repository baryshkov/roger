// var imagesArray = ["https://i.imgur.com/OzPFFCS.jpg", "https://i.imgur.com/qUs4fS3.jpg", "https://i.imgur.com/DoEpBAU.jpg", "https://i.imgur.com/sTwRoZ0.jpg", "https://i.imgur.com/aCAMdHN.jpg", "https://i.imgur.com/1v4b7IQ.jpg"];
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'https://i.imgur.com/OzPFFCS.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'https://i.imgur.com/qUs4fS3.jpg';
imgArray[2] = new Image();
imgArray[2].src = 'https://i.imgur.com/DoEpBAU.jpg';
imgArray[3] = new Image();
imgArray[3].src = 'https://i.imgur.com/sTwRoZ0.jpg';
imgArray[4] = new Image();
imgArray[4].src = 'https://i.imgur.com/OzPFFCS.jpg';
imgArray[5] = new Image();
imgArray[5].src = 'https://i.imgur.com/OzPFFCS.jpg';


function pickimg2() {
    var num = Math.floor(Math.random() * 6);
    document.randimg.src = imgArray[num].src;
}

// function nextImage(mainImg)
// {
//     var img = document.getElementById(element);
//
//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }

