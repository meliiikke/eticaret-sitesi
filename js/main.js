import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

//! add product to localStorage start

async function getData() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc();
  searchFunc(data);
}

getData();

//! add product to localStorage end

//! add cartItem to localStorage start

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";

//! add cartItem to localStorage end

//! modal dialog start
const modalDialog = document.querySelector(".modal-dialog");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");



btnCloseDialog.addEventListener("click", function () {
  modalDialog.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if(!e.composedPath().includes(modalContentDOM)){
    modalDialog.classList.remove("show");
  }
});
setTimeout(() => {
  modalDialog.classList.add("show");
}, 2000);

//! modal dialog end
