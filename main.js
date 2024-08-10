const leaf = document.getElementById("leaf");
const div = document.getElementById("img-scroll");

window.addEventListener("scroll", ()=> {
    let value = window.scrollY * .5;
    leaf.style.transform = `translatex(-10%) translatex(-50%) rotate(${value}deg)`;
});