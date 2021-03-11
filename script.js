const images = [
    "https://i.pinimg.com/564x/6b/e5/a8/6be5a87828cd45dd49d542ba653d74ea.jpg",
    "https://fsb.zobj.net/crop.php?r=LLE0iYWoQAK7DiAAmJWcZIIJwTukKeuwhyChWuFqm4nL9H1pYCLeEMO0VdXy-eDm-DrMfiTR6lzMxlpRzVTK0P_O0RrcPSKD9cuDyfmU1gR4MeS5mAWysoklGKQPqarKaLncDOUdhqYUen4p",
    "https://images.hdqwalls.com/download/anime-girl-in-rain-36-1125x2436.jpg",
    "https://iphone7wallpapers.co/media/uploads/2017/02/Studio-Ghibli-Castle-Anime-Green-Peace-Art-Illustration-640x960.jpg"];
let counter = 0;

setInterval(function() {
    if (counter < images.length) {
        document.querySelector(".blur").style.backgroundImage = "url(" + images[counter++] + ")";
    } else {
        clearInterval(arguments.callee);
        counter = 0;
    }
}, 4000);