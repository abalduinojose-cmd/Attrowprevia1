# Attrow Assessoria Contábil — Site

Site institucional em **React + Vite + Tailwind CSS v4 + Framer Motion**.

## Comandos

```bash
npm install    # instalar dependências (primeira vez)
npm run dev    # rodar em desenvolvimento (http://localhost:5176)
npm run build  # gerar versão de produção na pasta dist/
```

## Publicação

Depois de `npm run build`, envie **o conteúdo da pasta `dist/`** para a
hospedagem (Hostinger, Vercel, Netlify, etc.). É um site estático — não
precisa de servidor Node em produção.

## Onde editar

- Contatos, endereço, CNPJ e links: `src/lib/constants.js`
- Textos de cada seção: `src/components/` (Hero, Pillars, Services, Faq…)
- Cores e fontes: `src/index.css` (bloco `@theme`)
- SEO (título, descrição, dados estruturados): `index.html`
