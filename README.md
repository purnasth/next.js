## **nextjs** => react framework

### Why Next.js ?

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

## **Day 1**

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

## **Day 2**

### React Server Components (RSC)

- React Server Components (RSC) is a new way to build server-rendered UIs with React.

- The architecture introduces a new way of creating React components, splitting them into two types:
  - Server components
  - Client components


- Server components are a new primitive that enables developers to build UIs that can be rendered on the server and streamed to the client.

- Client components are regular React components that are hydrated on the client and can be used to build interactive experiences. "use client"

### Routing

- Next.js has a file system based routing system, which means, you can create a new file in the pages directory, and it will be automatically routed.

### Routing Convention

- all routes must be inside the app directory
- every file that corresponds to a route must be named as page.js or page.tsx
- every folder corresponds to a path segment in the browser url

### Routing Example

- create a new file inside the app directory
- name the file as about.tsx
- add the following code to the file

```tsx
import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About
```

- Similarly, create a profile component

```tsx
- open your about page in your browser
- open your profile page in your browser

```bash
http://localhost:3000/about
http://localhost:3000/profile
```

### File Structure

- app
  - about
    - about.tsx
  - profile
    - profile.tsx
  - layout.tsx
  - page.tsx


### Dynamic Routing



