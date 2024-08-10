const leaf = document.getElementById("leaf");

window.addEventListener("scroll", ()=> {
    let value = window.scrollY * .5;
    leaf.style.transform = `translatex(-10%) translatex(-50%) rotate(${value}deg)`;
});