# SIMONA (demo) - Catálogo Web

Mini sitio estático tipo catálogo (no ecommerce). La compra se cierra por WhatsApp con mensaje prearmado.

## Archivos

- `index.html`: Home con categorías, promos, horarios y botón flotante de WhatsApp.
- `categoria.html`: Lista productos según `?cat=...`.
- `producto.html`: Detalle de producto + selector de talle + botón "Lo quiero".
- `styles.css`: Estilos responsive mobile-first.
- `data.js`: Datos de categorías y productos.
- `app.js`: Lógica de render, navegación y WhatsApp.

## Cómo cambiar el WhatsApp

1. Abrí `app.js`.
2. Editá la constante:

```js
const WHATSAPP_PHONE = "5493413226579";
```

Formato sugerido: código de país + código de área + número, sin `+`, espacios ni guiones.

## Cómo editar productos

1. Abrí `data.js`.
2. Dentro de `PRODUCTS`, agregá o editá objetos con este formato:

```js
{
  id: "nuevo-id",
  titulo: "Nombre del producto",
  precio: 12345,
  detalle: "Descripción corta",
  categoria: "verano", // verano | invierno | calzados | promo
  talles: ["S", "M", "L"],
  imagen: "https://picsum.photos/seed/nuevo-id/900/900"
}
```

Importante: `id` no debe repetirse.

## Publicar en GitHub Pages

1. Subí estos archivos a un repositorio en GitHub.
2. En GitHub: `Settings` → `Pages`.
3. En `Build and deployment`, elegí:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (o `master`) y carpeta `/ (root)`
4. Guardá y esperá la URL pública.

## Uso local

Podés abrir `index.html` directamente en el navegador o usar un servidor estático simple.
