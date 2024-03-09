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
import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
```

- Similarly, create a profile component

````tsx
- open your about page in your browser
- open your profile page in your browser

```bash
http://localhost:3000/about
http://localhost:3000/profile
````

### File Structure

- app
  - about
    - about.tsx
  - profile
    - profile.tsx
  - layout.tsx
  - page.tsx

### 3 layers of routing

- app
  - blog
    - first
      - page.tsx
    - second
      - page.tsx
  - layout.tsx
  - page.tsx

### Dynamic Routing

- Next.js has a file system based dynamic routing system, which means, you can create a new file in the pages directory, and it will be automatically routed.

### Dynamic Routing Example

```tsx
import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h2> Details of the Product {params.productId}</h2>
    </>
  );
};

export default page;
```

- open your product page in your browser

```bash
http://localhost:3000/product/1
http://localhost:3000/product/2
http://localhost:3000/product/
......
```

### File Structure

- app
  - product
    - [productId]
      - page.tsx
  - layout.tsx
  - page.tsx

## **Day 3**

### Nested Dynamic Routing

- Next.js has a file system based nested dynamic routing system, which means, you can create a new file in the pages directory, and it will be automatically routed.

### Nested Dynamic Routing Example

```tsx
import React from "react";

const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <>
      <h2>Review Product Page</h2>

      <h2>
        Review {params.productId} for product {params.reviewId}
      </h2>
    </>
  );
};

export default page;
```

- open your review page in your browser

```bash
http://localhost:3000/product/1/review/1
http://localhost:3000/product/1/review/2
http://localhost:3000/product/2/review/1
http://localhost:3000/product/2/review/2
```

### File Structure

- app

  - product
    - [productId]
      - review
        - [reviewId]
          - page.tsx
      - page.tsx
    - page.tsx
  - layout.tsx
  - page.tsx

  ### NOTE: here [productId] is a dynamic segment, and [reviewId] is a nested dynamic segment which makes the URL dynamic .. EG: instead of having 20 different folders for the 20 different products, we can have a single folder with a dynamic segment

### Catch- all Segments

...slug

### File Structure

- app
  - docs
    - [...slug]
      - page.tsx
  - layout.tsx
  - page.tsx

### 404 file

- Next.js has a file system based 404 file, which means, you can create a new file in the pages directory, and it will be automatically routed.

### 404 file Example

FILE NAME: not-found.tsx at the /root app folder

### File Colocation

## **Day 4**

### Private Folder

- for separating UI logic from routing logic

### File Structure

- app
  - \_lib
    - page.tsx

### Route Groups

=> allows you to logically group your routes and project files without affecting the URL structure

### File Structure

- app
  - (auth)
    - login
      - page.tsx
    - register
      - page.tsx

### Route Groups Test

```bash
http://localhost:3000/auth/login
```

### NOTE: here (auth) is a logical group, and it does not affect the URL structure => so now the URL structure is

```bash
http://localhost:3000/login
```

## **Day 5**

### Layouts

- For consistent UI across multiple pages like header at top and footer at bottom

### File Structure

- app
  - layout.tsx
  - page.tsx

### Layouts Example

```tsx
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features Product</h2>
    </>
  );
}
```

### Nested Layouts

### File Structure

- app
  - layout.tsx
  - page.tsx
  - products
    - [productId]
    - layout.tsx
    - page.tsx

## **Day 6**

### Route Group Layout

- to organize your project in a manner that doesn't affect the URL structure

### Routing Metadata

- ensuring proper SEO is crucial for increasing visibility and attracting users
- next.js introduced the Metadata API which allows you to define metadata for each page

#### Metadata rules

- both layout.tsx and page.tsx can export metadata. if defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies to that page only

### Title Metadata

- the title field's primary purpose is to define the document's title, which is displayed in the browser's title bar or tab

### Link Component Navigation

- The `<Link>` component is a React component that extends the HTML `<a>` tag, and it's the primary way to navigate between routes in a Next.js application
- To use it, we need to import it from the "next/link" module

### Link Component Example

```tsx
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products/2" replace>
        Products 2
      </Link>
    </>
  );
};

export default page;
```

<!-- here `replace` on the Link brings back the page directly from the products/2 page to /home page .. as without replace it would be brought back to /products page  -->

### Active Link on Navigation

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
```

### Navigating Programmatically

```tsx
"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    alert("Order placed successfully");
    router.push("/");
    // router.back();
    // router.forward();
  };

  return (
    <>
      <h2>Order Product</h2>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
```

## **Day 7**

### Templates

- templates are similar to layouts in that they wrap each child layout or page
- But, with templates, when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized
- a template can be defined by exporting a template object from a template.js or template.tsx file

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
```

### Illustration Layout VS Template

- if the file name is layout.tsx, when you put an input value and then redirect to the other pages like register, login, forgot-password, the input value will be preserved and will not be lost
- but if the file name is template.tsx, when you put an input value and then redirect to the other pages like register, login, forgot-password, the input value will be lost and will not be preserved

### Special Files

- layout.tsx
- template.tsx
- error.tsx
- loading.tsx
- not-found.tsx
- page.tsx

### loading.tsx

- this allows us to create loading states that are displayed to users while a specific route segment's content is loading

```tsx
export default function Loading() {
  return (
    <>
      <h2>Loading...</h2>
    </>
  );
}
```

### error.tsx

- this allows us to create error states that are displayed to users when a specific route segment's content fails to load

```tsx
export default function Error() {
  return (
    <>
      <h2>Error...</h2>
    </>
  );
}
```

### Component Hierarchy

<Layout>
  <Template>
    <ErrorBoundary fallback={<Error/>}>
      <Suspense fallback={<Loading/>}>
        <ErrorBoundary fallback={<NotFound/>}>
          <Page/>
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>

## **Day 8**

### Parallel Routes

- an advanced routing mechanism that allows for the simultaneous rendering of multiple pages with the same layout

- parallel routes in next.js are defined using a feature known as slots, slots help structure our content in a modular fashion
- to define a slot, we use the `@folder` naming convention
- each slot is then passed as a prop to its corresponding `layout.tsx` file.

### File Structure

- app
  - dashboard
    - @notifications
      - page.tsx
    - @revenue
      - page.tsx
    - @users
      - page.tsx

### Benefits

- the ability to split a single layout into various slots, making the code more manageable and easier to maintain
