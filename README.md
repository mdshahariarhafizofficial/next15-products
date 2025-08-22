# Next15 Products App

A simple Next.js 15 application demonstrating public and protected pages with authentication using **NextAuth.js**. Users can view products, see product details, and add new products if logged in.

---

## 🔹 Features

### Core Features

1. **Landing Page (`/`)**

   * Sections: Navbar, Hero, Product Highlights, Footer
   * Navigation to Login & Products
   * No authentication required

2. **Login Page (`/login`)**

   * Social login using Google via **NextAuth.js**
   * Redirects to the original page after login

3. **Product List Page (`/products`)**

   * Publicly accessible
   * Shows a list of products with: Name, Description, Price, Details button

4. **Product Details Page (`/products/[id]`)**

   * Shows full details of a single product
   * Publicly accessible

5. **Protected Page: Add Product (`/dashboard/add-product`)**

   * Only accessible when logged in
   * Form to add a new product
   * New products are added to the in-memory `data.js`
   * Redirects unauthenticated users to login


---

## 🔹 Technologies Used

* **Next.js 15 (App Router)**
* **NextAuth.js** for authentication
* **react-hot-toast** for toast notifications
* **Tailwind CSS** for styling
* Route Handlers (`/api`) for backend functionality

---

## 🔹 Project Structure

```
src/
├─ app/
│  ├─ api/
│  │  ├─ auth/[...nextauth]/route.js
│  │  └─ products/route.js
│  ├─ dashboard/add-product/page.js
│  ├─ products/[id]/page.js
│  ├─ products/page.js
│  ├─ login/page.js
│  ├─ about/page.js
│  ├─ page.js  (Landing page)
│  └─ layout.js
├─ components/
│  ├─ Navbar.js
│  └─ Footer.js
├─ data/
│  └─ data.js  (mock product data)
└─ globals.css
```

---

## 🔹 Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/<username>/<repo>.git
cd <repo>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generate-a-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser.

---

## 🔹 Routes Summary

| Route                    | Description                       | Auth Required |
| ------------------------ | --------------------------------- | ------------- |
| `/`                      | Landing page                      | No            |
| `/login`                 | Login page (Google / credentials) | No            |
| `/products`              | List all products                 | No            |
| `/products/[id]`         | Product details page              | No            |
| `/dashboard/add-product` | Add new product                   | Yes           |

---

## 🔹 Deployment

* Recommended: **Vercel** for easy Next.js deployment
* Push project to GitHub, import in Vercel, and set environment variables
* Live site will handle NextAuth login, API routes, and protected pages automatically

---

## 🔹 Notes

* Products are stored in-memory (`data.js`). In production, replace with a real database.
* Adding new products only updates the in-memory array during runtime.
* Toast notifications indicate successful product addition.

---
🔹 License
This project is licensed under the MIT License.

Made with ❤️ using **Next.js 15**, **NextAuth.js**, and **Tailwind CSS**.
