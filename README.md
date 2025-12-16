# NextJS + Drizzle + Better-auth + Elysia + i18n-next + shadcn/ui + Tailwind CSS Starter

This is a starter template for building modern web applications with the following stack:

- **Next.js**: React framework for server-side rendering, static site generation, and progressive web apps.
- **Drizzle ORM**: Type-safe SQL ORM for working with databases intuitively in TypeScript.
- **Better-auth**: Plug-and-play authentication solution.
- **Elysia**: Blazing-fast, flexible backend API framework in TypeScript.
- **next-intl**: Internationalization (i18n) library for Next.js with support for easy locale management.
- **shadcn/ui**: Beautifully designed accessible UI components built with Radix UI and Tailwind CSS.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

---

## Features

- 🌏 **Internationalization:** Easily add and switch locales. See [`src/constants/locale.ts`](src/constants/locale.ts) for configuration.
- 💾 **Drizzle ORM:** Type-safe, flexible database integration.
- 🔐 **Better-auth:** Secure authentication out-of-the-box.
- ⚡️ **Lightning-fast APIs:** Powered by [Elysia](https://elysiajs.com/), see [`src/app/api/[[...slugs]]/route.ts`](src/app/api/[[...slugs]]/route.ts)
- ⚛️ **Client+Server State:** React Query integration for fetching and caching data.
- 🎨 **shadcn/ui + Tailwind CSS:** Modern, accessible, customizable UI components and utility-first CSS.

---

## Getting Started

1. **Install dependencies**

   ```bash
   bun install
   ```

2. **Set up environment variables**

   Copy `.env.example` to `.env` and edit as needed.

3. **Run the development server**

   ```bash
   bun run dev
   ```

4. **Build for production**

   ```bash
   bun run build && bun run start
   ```

---

## Project Structure

```
src/
  app/                        # Next.js app directory & routes
    api/[[...slugs]]/route.ts # Elysia API handler
  components/                 # Shared React components (inc. shadcn/ui components)
  constants/                  # Locale and other constants
  lib/                        # API client and utilities
  styles/                     # Tailwind & global CSS
```

---

## Localization

Locales are defined in [`src/constants/locale.ts`](src/constants/locale.ts):

```ts
export const LOCALES = [
  { code: "en", label: "English", default: true },
  // Add more locales as needed
];
```

Switching locale is automatic via `next-intl`.

---

## Notes

- Uses [@tanstack/react-query](https://tanstack.com/query/latest) for efficient client state.
- Fast API routes thanks to [Elysia](https://elysiajs.com/).
- Easily extend authentication flow via Better-auth.
- UI powered by [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/) for rapid, accessible design.

---

## Credits

Built with ❤️ using:

- [Next.js](https://nextjs.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Better-auth](https://github.com/openstatus/better-auth)
- [Elysia](https://elysiajs.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---
