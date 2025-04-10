const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : JSON.parse(localStorage.setItem("productId", JSON.stringify(1)));
