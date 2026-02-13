// Datos demo del catálogo. Podés editar libremente este arreglo.
const PRODUCTS = [
  {
    id: "re1",
    titulo: "Remera básica",
    precio: 24990,
    detalle: "Talles S/M/L",
    categoria: "remeras",
    talles: ["S", "M", "L"],
    imagen: "img/remeras.remeras1.jpg"
  },
  {
    id: "re2",
    titulo: "Musculosa lisa",
    precio: 21990,
    detalle: "Calidad premium",
    categoria: "remeras",
    talles: ["S", "M", "L"],
    imagen: "img/remeras.musculosas2.png"
  },
  {
    id: "re3",
    titulo: "Musculosa rib",
    precio: 22990,
    detalle: "Importado",
    categoria: "remeras",
    talles: ["S", "M", "L"],
    imagen: "img/remeras.musculosas3.png"
  },
  {
    id: "re4",
    titulo: "Remera estampada",
    precio: 26990,
    detalle: "Algodón suave",
    categoria: "remeras",
    talles: ["S", "M", "L"],
    imagen: "img/remeras.remeras4.png"
  },
  {
    id: "pr1",
    titulo: "Campera promo",
    precio: 45990,
    detalle: "Edición limitada",
    categoria: "promos",
    talles: ["S", "M", "L"],
    imagen: "img/promos.campera1.png"
  },
  {
    id: "pr2",
    titulo: "Chaleco promo",
    precio: 35990,
    detalle: "Ideal para media estación",
    categoria: "promos",
    talles: ["S", "M", "L"],
    imagen: "img/promos.chalecos2.png"
  },
  {
    id: "pr3",
    titulo: "Jean promo",
    precio: 39990,
    detalle: "Denim elastizado",
    categoria: "promos",
    talles: ["38", "40", "42", "44"],
    imagen: "img/promos.jeans3.jpg"
  },
  {
    id: "pr4",
    titulo: "Remera promo",
    precio: 19990,
    detalle: "Oferta por tiempo limitado",
    categoria: "promos",
    talles: ["S", "M", "L"],
    imagen: "img/promos.remeras4.jpg"
  },
  {
    id: "ve1",
    titulo: "Bikini clásico",
    precio: 32990,
    detalle: "Talles S/M/L",
    categoria: "verano",
    talles: ["S", "M", "L"],
    imagen: "img/verano.bikinis1.jpg"
  },
  {
    id: "ve2",
    titulo: "Bikini triángulo",
    precio: 33990,
    detalle: "Secado rápido",
    categoria: "verano",
    talles: ["S", "M", "L"],
    imagen: "img/verano.bikinis2.jpg"
  },
  {
    id: "ve3",
    titulo: "Bikini estampado",
    precio: 34990,
    detalle: "Diseño exclusivo",
    categoria: "verano",
    talles: ["S", "M", "L"],
    imagen: "img/verano.bikinis3.jpg"
  },
  {
    id: "ve4",
    titulo: "Bikini tiro alto",
    precio: 35990,
    detalle: "Calce cómodo",
    categoria: "verano",
    talles: ["S", "M", "L"],
    imagen: "img/verano.bikinis4.png"
  },
  {
    id: "in1",
    titulo: "Campera abrigo",
    precio: 69990,
    detalle: "Interior térmico",
    categoria: "invierno",
    talles: ["S", "M", "L", "XL"],
    imagen: "img/invierno.campera1.jpg"
  },
  {
    id: "in2",
    titulo: "Campera puffer",
    precio: 75990,
    detalle: "Muy liviana",
    categoria: "invierno",
    talles: ["S", "M", "L", "XL"],
    imagen: "img/invierno.campera2.jpg"
  },
  {
    id: "in3",
    titulo: "Campera corta",
    precio: 67990,
    detalle: "Cierre reforzado",
    categoria: "invierno",
    talles: ["S", "M", "L", "XL"],
    imagen: "img/invierno.campera3.jpg"
  },
  {
    id: "in4",
    titulo: "Campera oversize",
    precio: 78990,
    detalle: "Calidad premium",
    categoria: "invierno",
    talles: ["S", "M", "L", "XL"],
    imagen: "img/invierno.campera4.jpg"
  },
  {
    id: "co1",
    titulo: "Conjunto sport",
    precio: 49990,
    detalle: "Talles S/M/L",
    categoria: "conjuntos",
    talles: ["S", "M", "L"],
    imagen: "img/conjuntos.conjuntos1.jpg"
  },
  {
    id: "co2",
    titulo: "Conjunto casual",
    precio: 51990,
    detalle: "Textura suave",
    categoria: "conjuntos",
    talles: ["S", "M", "L"],
    imagen: "img/conjuntos.conjuntos2.png"
  },
  {
    id: "co3",
    titulo: "Conjunto rib",
    precio: 53990,
    detalle: "Calce relajado",
    categoria: "conjuntos",
    talles: ["S", "M", "L"],
    imagen: "img/conjuntos.conjuntos3.jpg"
  },
  {
    id: "co4",
    titulo: "Conjunto premium",
    precio: 56990,
    detalle: "Edición nueva",
    categoria: "conjuntos",
    talles: ["S", "M", "L"],
    imagen: "img/conjuntos.conjuntos4.jpg"
  }
];

const CATEGORIES = [
  { slug: "remeras", nombre: "Remeras", imagen: "img/remeras.categoria.jpg" },
  { slug: "promos", nombre: "Promos", imagen: "img/promos.categoria.png" },
  { slug: "verano", nombre: "Verano", imagen: "img/verano.categoria.png" },
  { slug: "invierno", nombre: "Invierno", imagen: "img/invierno.categoria.png" },
  { slug: "conjuntos", nombre: "Conjuntos", imagen: "img/conjuntos.categoria.jpg" }
];
