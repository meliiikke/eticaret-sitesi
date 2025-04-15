import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js"

//! add product to localStorage start

async function getData() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc();
  searchFunc(data)
}

getData();

//! add product to localStorage end

//! add cartItem to localStorage start

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";

  //! add cartItem to localStorage end
