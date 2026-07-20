const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    bulb.style.backgroundColor = "yellow";
    btn.textContent = "Off";
});
