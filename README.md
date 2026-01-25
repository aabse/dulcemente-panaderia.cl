# Dulce-mente — Landing Page (Astro + Tailwind)

Landing page de alto rendimiento para **Dulce-mente**, una panadería artesanal. Diseño “Artisan Bakery” con paleta cálida (tostado/beige/harina) y acento rojo mermelada, tipografías **Playfair Display** (títulos) + **Inter** (texto), y animaciones al hacer scroll.

## Resumen del sitio

Secciones principales:
- **Header sticky** con efecto `backdrop-blur` y navegación a anclas.
- **Hero** full-screen con parallax suave + CTA “Ver Delicias”.
- **Features** (3 columnas): “100% Integral”, “Sin conservantes”, “Recetas de la abuela”.
- **Product Showcase** con grid de tarjetas y hover zoom en imágenes (incluye badge “Favorito de la temporada”).
- **About / Story** con layout alternado texto/imagen sobre el proceso manual.
- **Contact** con fondo oscuro y CTA directa para pedir por WhatsApp.
- **Footer** simple.
- **Botón flotante de WhatsApp** global (esquina inferior derecha).

Stack:
- **Astro** (última versión instalada en el proyecto)
- **Tailwind CSS** (integrado vía `@astrojs/tailwind`)
- **Animaciones**: AOS (CDN)
- **Iconos**: Lucide (CDN, UMD)
- **Imágenes**: placeholders de `images.unsplash.com`

## Estructura del proyecto

```text
/
├── astro.config.mjs
├── tailwind.config.mjs
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── ProductShowcase.astro
│   │   ├── AboutStory.astro
│   │   ├── Contact.astro
│   │   ├── WhatsAppButton.astro
│   │   └── Footer.astro
│   └── styles/
│       └── global.css
└── package.json
```

Notas:
- El layout global (`src/layouts/Layout.astro`) incluye SEO básico, carga de fuentes, inicialización de AOS/Lucide y el botón flotante de WhatsApp.
- El número de WhatsApp está como **placeholder** (cámbialo cuando tengas el número final).

## Cómo ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Desarrollo (hot reload):

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```
