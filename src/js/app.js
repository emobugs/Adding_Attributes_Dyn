import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
document.querySelectorAll(".product").forEach(p => {
    let price = p.querySelector(".price").innerHTML;
    p.dataset.price = price;
  })


});
