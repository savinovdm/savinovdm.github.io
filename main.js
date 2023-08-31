 document.querySelector(".open-popup-bg").addEventListener("click",function() {
    document.querySelector(".my-popup-bg").classList.add("open")

});
 document.querySelector(".zapis").addEventListener("click",function() {
    document.querySelector(".my-popup-bg").classList.add("open")

});

document.querySelectorAll(".button-row").forEach(b=>b.addEventListener("click",function() {
    document.querySelector(".my-popup-bg").classList.add("open")

}));

document.getElementById("close-popup-bg").addEventListener("click",function() {
    document.querySelector(".my-popup-bg").classList.remove("open")

});

document.querySelector(".my-popup-bg .popup").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.querySelector(".my-popup-bg").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
 
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".my-popup-bg").classList.remove("open")
    }
});  

