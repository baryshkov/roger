var imagesArray = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

function displayImage(){
    var num = Math.floor(Math.random() * 6); // 0...6
    document.canvas.src = imagesArray[num];
}


