// glow animation mechanism

const p = document.querySelector(".name");
const colors = ["#F06",
                    "#3bbced",
                    "#777",
                    "#555",
                    "#3dc200",
                    "#9000ff",
                    "#0ef",
                    "#60f",
                    "#f03",
                    "#f60"];
let str = p.textContent;

const animationNames = ["glowA", "glowB"];

str = str.replace(/\w/g, function(x, i) {
    return "<span style='color:" + colors[i] + "'>" + x + "</span>";
});

p.innerHTML = str;

// letters animation

const spans = p.querySelectorAll("span");

for (let x=0; x<spans.length; x++) {
    animationNames.push(animationNames[x]);
    spans.forEach(function(span, i) {
        span.classList.add(animationNames[i]);
    });
}

// welcome mechanism

p.addEventListener("click", function() {
    if (this.style.backgroundColor != "transparent") {
        this.style.backgroundColor = "transparent";
    } else {
        this.style.backgroundColor = "#FFF";
    }
});

// slideshow timer

const bg = document.querySelector(".blur");
const images = ["https://i.pinimg.com/originals/35/8b/53/358b539b1fe285e32573de0a9cd15182.jpg",
                "https://wallpaperaccess.com/full/158905.jpg",
                "https://wallpaperaccess.com/full/2415294.jpg",
                "https://images.hdqwalls.com/wallpapers/cyberpunk-2077-4k-2020-game-jd.jpg",
                "https://images.wallpapersden.com/image/download/stray-game-cyberpunk_bGZoZ2WUmZqaraWkpJRmbmdlrWZlbWU.jpg",
                "https://wallpapercave.com/wp/wp5392103.jpg",
                "https://wallpaperaccess.com/full/3311394.jpg"]
let x = 0;

setInterval(function() {
    if (x < images.length) {
        bg.style.backgroundImage = "url(" + images[x] + ")";
        x++;
    } else {
        x = 0;
    }
}, 5000);

// sound mechanism

const audio = document.createElement("audio");
audio.src = "https://vgmsite.com/soundtracks/persona-3-original-soundtrack/kyyyndbh/2-05%20Living%20With%20Determination.mp3";
audio.autoplay = "autoplay";

document.querySelector(".menu").onclick = function() {
    if (audio.paused) audio.play();
    else audio.pause();
}