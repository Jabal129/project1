# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
project1
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ Componants
│  │  ├─ About
│  │  │  ├─ About.css
│  │  │  └─ About.jsx
│  │  ├─ Contact
│  │  │  ├─ Contact.css
│  │  │  └─ Contact.jsx
│  │  ├─ Footer
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.jsx
│  │  └─ Home
│  │     ├─ Home.css
│  │     └─ Home.jsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js

```
```
project1
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ Delta.png
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ Componants
│  │  ├─ About
│  │  │  ├─ About.css
│  │  │  └─ About.jsx
│  │  ├─ Auth
│  │  │  ├─ Login.jsx
│  │  │  └─ Register.jsx
│  │  ├─ Cart
│  │  │  ├─ Cart.css
│  │  │  └─ Cart.jsx
│  │  ├─ Contact
│  │  │  ├─ Contact.css
│  │  │  └─ Contact.jsx
│  │  ├─ Footer
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.jsx
│  │  ├─ Home
│  │  │  ├─ Home.css
│  │  │  └─ Home.jsx
│  │  ├─ Navbar
│  │  │  └─ Navbar.jsx
│  │  └─ Products
│  │     └─ Products.jsx
│  ├─ data
│  │  └─ products.js
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js

```