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
const modalDialogDOM = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");

btnCloseDialog.addEventListener("click", function () {
  modalDialogDOM.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(modalContentDOM)) {
    modalDialogDOM.classList.remove("show");
  }
});

setTimeout(() => {
  modalDialogDOM.classList.add("show");
}, 3000);
//! modal dialog end
