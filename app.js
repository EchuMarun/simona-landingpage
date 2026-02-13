// Configuración editable para el número de WhatsApp.
const WHATSAPP_PHONE = "5493416906290"; // Argentina (+54 9) + numero local

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);
}

function getWhatsappUrl(message) {
  // encodeURIComponent evita errores por espacios, acentos y símbolos.
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function setFloatingWhatsapp() {
  const waButton = document.getElementById("floatingWhatsapp");
  if (!waButton) return;

  const genericMessage = "Hola! Vi el catálogo y quiero consultar por disponibilidad y precios 😊";
  waButton.href = getWhatsappUrl(genericMessage);
}

function renderProductCards(products) {
  return products.map((product) => `
    <article class="card">
      <img class="card-media" src="${product.imagen}" alt="${product.titulo}" loading="lazy" onerror="this.onerror=null;this.src='img/logo.png';" />
      <div class="card-body">
        <h3 class="card-title">${product.titulo}</h3>
        <p class="price">${formatPrice(product.precio)}</p>
        <p class="tagline">Talles: ${product.talles.join(", ")}</p>
        <div class="actions">
          <a class="btn btn-primary" href="producto.html?id=${product.id}">Ver</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderHome() {
  const categoryGrid = document.getElementById("categoryGrid");
  if (!categoryGrid) return;

  categoryGrid.innerHTML = CATEGORIES.map((category) => `
    <a class="card" href="categoria.html?cat=${category.slug}">
      <img class="card-media" src="${category.imagen}" alt="${category.nombre}" loading="lazy" onerror="this.onerror=null;this.src='img/logo.png';" />
      <div class="card-body">
        <h3 class="card-title">${category.nombre}</h3>
      </div>
    </a>
  `).join("");
}

function renderCategory() {
  const params = new URLSearchParams(window.location.search);
  const categorySlug = params.get("cat") || "";

  const title = document.getElementById("categoryTitle");
  const subtitle = document.getElementById("categorySubtitle");
  const searchInput = document.getElementById("searchInput");
  const sizeFilter = document.getElementById("sizeFilter");
  const productGrid = document.getElementById("productGrid");

  if (!title || !subtitle || !searchInput || !sizeFilter || !productGrid) return;

  const selectedCategory = CATEGORIES.find((c) => c.slug === categorySlug);
  const categoryProducts = PRODUCTS.filter((p) => p.categoria === categorySlug);

  if (!selectedCategory) {
    title.textContent = "Categoría no encontrada";
    subtitle.textContent = "Volvé al inicio y elegí una categoría válida.";
    productGrid.innerHTML = '<div class="empty">No se encontró la categoría solicitada.</div>';
    return;
  }

  const uniqueSizes = Array.from(new Set(categoryProducts.flatMap((p) => p.talles)))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true, sensitivity: "base" }));

  sizeFilter.innerHTML = `
    <option value="">Todos</option>
    ${uniqueSizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
  `;

  title.textContent = selectedCategory.nombre;

  if (!categoryProducts.length) {
    subtitle.textContent = "0 producto(s) disponibles";
    productGrid.innerHTML = '<div class="empty">No hay productos cargados en esta categoría.</div>';
    return;
  }

  const applyFilters = () => {
    const term = searchInput.value.trim().toLowerCase();
    const selectedSize = sizeFilter.value;

    const filteredProducts = categoryProducts.filter((product) => {
      const searchableText = `${product.titulo} ${product.detalle}`.toLowerCase();
      const matchesText = !term || searchableText.includes(term);
      const matchesSize = !selectedSize || product.talles.includes(selectedSize);
      return matchesText && matchesSize;
    });

    subtitle.textContent = `${filteredProducts.length} de ${categoryProducts.length} producto(s)`;

    if (!filteredProducts.length) {
      productGrid.innerHTML = '<div class="empty">No se encontraron productos con esos filtros.</div>';
      return;
    }

    productGrid.innerHTML = renderProductCards(filteredProducts);
  };

  searchInput.addEventListener("input", applyFilters);
  sizeFilter.addEventListener("change", applyFilters);
  applyFilters();
}

function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "";
  const product = PRODUCTS.find((p) => p.id === id);

  const detail = document.getElementById("productDetail");
  const backToCategory = document.getElementById("backToCategory");
  if (!detail || !backToCategory) return;

  if (!product) {
    detail.innerHTML = '<div class="empty">Producto no encontrado.</div>';
    backToCategory.href = "index.html";
    return;
  }

  backToCategory.href = `categoria.html?cat=${product.categoria}`;
  const categoryName = CATEGORIES.find((category) => category.slug === product.categoria)?.nombre || product.categoria;

  detail.innerHTML = `
    <img class="detail-image" src="${product.imagen}" alt="${product.titulo}" onerror="this.onerror=null;this.src='img/logo.png';" />
    <div class="detail-content">
      <h1>${product.titulo}</h1>
      <p class="price">${formatPrice(product.precio)}</p>
      <p class="muted">${product.detalle}</p>

      <div class="select-wrap">
        <label for="sizeSelect"><strong>Talle (obligatorio)</strong></label>
        <select id="sizeSelect" required>
          <option value="">Seleccioná un talle</option>
          ${product.talles.map((size) => `<option value="${size}">${size}</option>`).join("")}
        </select>
        <p id="sizeError" class="error-text" hidden>Seleccioná un talle para continuar.</p>
      </div>

      <div class="actions">
        <button id="wantBtn" class="btn btn-primary">Lo quiero</button>
      </div>
    </div>
  `;

  const sizeSelect = document.getElementById("sizeSelect");
  const sizeError = document.getElementById("sizeError");
  const wantBtn = document.getElementById("wantBtn");

  if (!sizeSelect || !sizeError || !wantBtn) return;

  sizeSelect.addEventListener("change", () => {
    if (sizeSelect.value) {
      sizeError.hidden = true;
    }
  });

  wantBtn.addEventListener("click", () => {
    if (!sizeSelect.value) {
      sizeError.hidden = false;
      return;
    }

    sizeError.hidden = true;
    const message = `Hola! Estoy interesada en:\n${product.titulo}\nCategoría: ${categoryName}\nTalle: ${sizeSelect.value}\nPrecio: ${formatPrice(product.precio)}\n¿Hay stock?`;
    window.open(getWhatsappUrl(message), "_blank", "noopener");
  });
}

function initPage() {
  setFloatingWhatsapp();

  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "category") renderCategory();
  if (page === "product") renderProduct();
}

document.addEventListener("DOMContentLoaded", initPage);
