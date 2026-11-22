# Grave | Tienda para bajistas 🎸

Aplicación e-commerce SPA desarrollada con **ReactJS** y **Vite** como **Entrega Final Completa** del curso de Frontend ReactJS de **TalentoTech (Comisión C26242)**.

## 🚀 Funcionalidades Implementadas

* **Catálogo y Detalle en Tiempo Real (Cloud Firestore):**
  * Listado de productos (`/`) y vista de detalle dinámico (`/product/:id`) consumidos desde Firestore mediante una capa de servicios dedicada (`src/services/productsService.js`).
* **Carrito de Compras Global (`CartContext`):**
  * Contador en tiempo real en la barra de navegación y vista modular `/cart` (`CartView`, `CartList`, `CartItem`, `CartSummary`) para sumar, restar, eliminar productos, vaciar y finalizar compra.
* **Panel Administrativo Protegido (`/admin`) + CRUD Completo:**
  * Autenticación con **Firebase Authentication** (`AuthContext` + `ProtectedRoute` + `Login` oculto en `/admin/login`).
  * Separación de interfaces mediante `PublicLayout` y `AdminLayout` con `<Outlet />`.
  * **Alta, Edición y Eliminación** de productos en Firestore (`Dashboard`, `ProductFormContainer`, `ProductFormUI`, `ProductSuccess`) con modal de confirmación al eliminar, validación manual (`validateProduct.js`) y carga automática de imágenes vía **ImgBB API** (`uploadImage.js`).
* **UX y Notificaciones:**
  * Indicadores de carga accesibles (`Spinner`) y notificaciones no invasivas con **React Toastify**.
* **Soporte SPA en Producción:**
  * Configuración de reescrituras `vercel.json` y `public/_redirects` para acceder directamente a rutas internas como `/admin`.

## 🛠️ Stack Tecnológico

* **React 19** + **Vite**
* **React Router DOM 7**
* **Firebase 13** (Cloud Firestore + Authentication)
* **ImgBB API** (alojamiento de imágenes)
* **React Toastify** (notificaciones)

## 📁 Estructura del Proyecto

```text
src/
├── components/
│   ├── adminComponents/
│   │   ├── Dashboard/
│   │   ├── ProductForm/
│   │   └── ProductSuccess.jsx
│   ├── Cart/
│   ├── Footer/
│   ├── Header/
│   ├── Item/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Login/
│   ├── Nav/
│   ├── ProtectedRoute/
│   └── Spinner/
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── firebase/
│   └── config.js
├── layouts/
│   ├── AdminLayout.jsx
│   └── PublicLayout.jsx
├── services/
│   ├── productsService.js
│   └── uploadImage.js
└── utils/
    └── validateProduct.js
```

## 📦 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/vierbo/TalentoTech-ReactJS.git
   cd TalentoTech-ReactJS
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Compilar para producción:
   ```bash
   npm run build
   ```

## 🔐 Acceso al Panel de Administración

* Ruta oculta: `/admin` (redirige automáticamente a `/admin/login` si no hay sesión activa).
* Credenciales de prueba: `admin@admin.com` / `admin123`.

---
*Javier Boviez — Proyecto integrador final — TalentoTech React JS (Comisión C26242).*
