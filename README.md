# Grave | Tienda para bajistas 🎸

Proyecto desarrollado con **ReactJS** y **Vite** para la preentrega de **TalentoTech**.

## 🚀 Características de esta versión
- **Arquitectura de Componentes**: Separación estricta de responsabilidades entre componentes contenedores ("smart") y presentacionales ("dumb").
- **Estructura Modular**: Cada componente posee su propia carpeta con su archivo `.jsx` y su correspondiente `.css`.
- **Navegación SPA**: Enrutamiento sin recargas mediante `react-router-dom`:
  - `/`: Catálogo general de productos (`ItemListContainer` -> `ItemList` -> `Item`).
  - `/product/:id`: Vista de detalle dinámico (`ItemDetailContainer` -> `ItemDetail`).
  - `/cart`: Vista del carrito de compras.
- **Carga de Datos Asíncrona**: Consumo del catálogo vía `fetch` a `/data/products.json` con imágenes públicas alojadas en **ImgBB**.
- **Gestión de Estados (UX)**: Manejo completo de los 3 estados en efectos secundarios (`data`, `loading`, `error`) con `finally`.
- **Estado Global (`CartContext`)**: Contexto de carrito con contador de artículos reflejado en tiempo real en la barra de navegación (`Header`).
- **Layout y Footer**: Componente `Layout` reutilizable con cabecera fija y pie de página con información de la tienda y tarjetas de los integrantes.

## 🛠️ Tecnologías Utilizadas
- **React 19**
- **Vite**
- **React Router DOM 7**
- **ImgBB API** (Hosting de imágenes de catálogo)

---
*Desarrollado para el curso de Frontend ReactJS - TalentoTech.*
