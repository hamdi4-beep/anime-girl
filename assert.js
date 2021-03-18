function assert(value, msg) {
    const li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(msg));
    document.querySelector("#results").appendChild(li);
}