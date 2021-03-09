const p = document.querySelector("p");
const classNames = ["#F06", "#3bbced", "#777","#555","#3dc200",
                    "#9000ff", "#0ef", "#60f", "#f03", "#f60"];
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
    console.log(i);
});