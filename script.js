// glow animation mechanism

const p = document.querySelector("p");
const classNames = ["#F06",
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
    return "<span style='color:" + classNames[i] + "'>" + x + "</span>";
});

p.innerHTML = str;

const spans = p.querySelectorAll("span");

for (let x=0; x<spans.length; x++) {
    animationNames.push(animationNames[x]);
}

spans.forEach(function(span, i) {
    span.classList.add(animationNames[i]);
});

// fade animation

p.addEventListener("click", function(e) {
    if (this.style.backgroundColor != "transparent") this.style.backgroundColor = "transparent";
    else this.style.backgroundColor = "#FFF";
});

// slideshow timer

const bg = document.querySelector(".blur");
const images = ["https://i.pinimg.com/originals/35/8b/53/358b539b1fe285e32573de0a9cd15182.jpg",
                "https://wallpaperaccess.com/full/158905.jpg",
                "https://wallpaperaccess.com/full/2415294.jpg",
                "https://images.hdqwalls.com/wallpapers/cyberpunk-2077-4k-2020-game-jd.jpg",
                "https://images.wallpapersden.com/image/download/stray-game-cyberpunk_bGZoZ2WUmZqaraWkpJRmbmdlrWZlbWU.jpg",
                "https://wallpapercave.com/wp/wp5392103.jpg"]
let x = 0;

setInterval(function() {
    if (x != 5) {
        bg.style.backgroundImage = "url(" + images[x] + ")";
        x++;
    } else {
        x = 0;
    }
}, 4000);

// sound mechanism

const audio = document.createElement("audio");
audio.src = "https://vgmsite.com/soundtracks/persona-3-original-soundtrack/fmmwwmjr/1-12%20When%20The%20Moon%27s%20Reaching%20Out%20Stars.mp3";
audio.autoplay = "autoplay";

bg.onclick = function() {
    if (audio.paused) audio.play();
    else audio.pause();
}

alert("Click anywhere on the background to play music.");