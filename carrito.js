javascript
const carritoContenedor = document.getElementById("carrito-contenido");
const vaciarBtn = document.getElementById("vaciar");

function renderizarCarrito() {
  const productos = JSON.parse(localStorage.getItem("carrito")) || [];
  if (productos.length === 0) {
    carritoContenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
}

  carritoContenedor.innerHTML = "";
  productos.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("item-carrito");
    div.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
    `;
    carritoContenedor.appendChild(div);
});
}

vaciarBtn.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  renderizarCarrito();
});

renderizarCarrito();