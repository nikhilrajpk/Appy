const leaf = document.getElementById("leaf");

window.addEventListener("scroll", ()=> {
    let value = window.scrollY * .5;
    leaf.style.transform = `translatex(-60%) rotate(${value}deg)`;
});