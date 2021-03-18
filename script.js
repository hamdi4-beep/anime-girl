document.querySelector("ul").addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        const target = e.target;
        this.querySelectorAll("li").forEach(function(li) {
            if (target == li) {
                target.classList.add("current");
            } else {
                li.classList.remove("current");
            }
        })
    }
});