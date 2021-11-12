const images = ["1.jfif", "2.png", "3.jpg", "4.jfif", "5.jfif", "6.jfif", "7.jfif", "8.jfif", "9.jfif", "10.jfif", "11.jfif", "12.jfif"];

let currentImg = 0;

// initilizing the image viewer
document.getElementById("img-viewer").innerHTML = `<img src="./images/${images[0]}">`;


function addimages() {


    let index = 0;
    images.forEach(element => {
        document.getElementById("container").innerHTML += `<div><img id="${index}" class="img" src="./images/${element}" onClick="changeSelectedImg(${index})"><div>`;
        
        index++;
    });
}
addimages();


function changeSelectedImg(index) {
    document.getElementById("img-viewer").innerHTML = `<img src="./images/${images[index]}">`;
}

function nextImg() {
    if (currentImg < images.length  - 1) {
        currentImg++;
        changeSelectedImg(currentImg);
    }
}

function prevImg() {
    if (currentImg > 0) {
        currentImg--;
        changeSelectedImg(currentImg);
    }
}