# AISeekhegaIndia — Frontend

Community-driven platform for Machine Learning, Deep Learning, and Language Models — built with **Next.js 15** and **Fumadocs**.

**Backend repo:** [aiseekhegaindia-dgliger-backend](https://github.com/akarshit-dgliger/aiseekhegaindia-dgliger-backend)

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `http://localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run typecheck` | TypeScript check |

## Project structure

```text
app/           Next.js App Router pages (home, docs, blog, fellowship, contribute)
components/    React components (interactive tutorials, layout)
docs/          MDX documentation content + meta.json sidebar config
lib/           Fumadocs source loader, navigation, shared layout options
public/        Static assets (images, favicon)
source.config.ts  Fumadocs MDX pipeline (math/KaTeX)
```

## Docs

Documentation lives under `/docs` and is powered by [Fumadocs](https://fumadocs.dev). Content is in the `docs/` folder; sidebar order is controlled by `meta.json` files.
