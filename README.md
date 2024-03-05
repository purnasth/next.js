nextjs => react framework

React => needs third party routing

Nextjs doesn't

Next.js => frontend code and api code

Why Next.js ?

- Routing
  (No need to use third party routing, like react-router, nextjs has its own routing system like express.js)
- API routes
  (No need to use third party api, like express.js, nextjs has its own api routes)
- Rendering (SEO)
  (Next.js has server side rendering, which is good for SEO)
- Data fetching
  (Next.js has getServerSideProps, getStaticProps, getStaticPaths, getServerSideProps, which are good for data fetching)
- Styling
  (Next.js has its own styling system, like styled-components, tailwindcss, etc)
- Optimizations
  (Next.js has its own optimizations, like image optimization, code splitting, etc)
- Dev and prod build system
  (Next.js has its own build system, like webpack, babel, etc)

Next.js is a framework for building React applications, which is good for SEO, and has its own routing, api routes, data fetching, styling, optimizations, dev and prod build system.

Pre-requisites

- html, css, js
- es6 + features
- react

Installation

- node.js (nodejs.org)
(https://nodejs.org/en/download/) => download and install the latest version of node.js

if you have node.js installed, then you can check the version of node.js by running the following command in your terminal

```bash
node -v
```

and update npm to the latest version by running the following command in your terminal

```bash
npm install -g npm
```


- vs code (code.visualstudio.com)
(https://code.visualstudio.com/download) => download and install the latest version of vs code


- git (git-scm.com)

(https://git-scm.com/downloads) => download and install the latest version of git


## Create a new Next.js app

```bash
npx create-next-app@latest
```

name your next app

select yes no

yes => TypeScript, EsLint, Tailwind CSS, src/directory, app router

cd into your app

```bash
cd your-app-name
```

start your app

```bash
npm run dev
```

open your app in your browser

```bash

http://localhost:3000

```

## Folder structure

- .next
- node_modules
- public
- src
    - app 
        - favicon.ico
        - globals.css
        - layout.tsx
        - page.tsx
- .eslintrc.json
- .gitignore
- next-env.d.ts
- next.config.js
- package-lock.json
- package.json
- postcss.config.js
- README.md
- tailwind.config.js
- tsconfig.json

