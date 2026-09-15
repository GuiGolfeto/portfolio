# Gui Golfeto — portfólio

Landing page pessoal com as três LPs de demonstração **embutidas no mesmo
deploy**. `/` é o portfólio; `/demos/limpeza`, `/demos/reformas` e
`/demos/barbearia` são os sites completos, funcionando.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

As demos vêm de `public/demos/`, que já está no repositório. Você não precisa
das LPs vizinhas para rodar ou publicar o portfólio.

## Publicar na Vercel

1. Suba a pasta `freela/` (ou só `portfolio/`) para o GitHub.
2. Na Vercel, importe o repositório.
3. Se subiu a `freela/` inteira, defina **Root Directory: `portfolio`**.
4. Framework Next.js, build `npm run build` — tudo padrão, sem variável de
   ambiente.

`public/demos/` (~10 MB) vai junto no commit. É de propósito: a Vercel só
instala as dependências do portfólio, então ela não conseguiria construir as
LPs vizinhas na hora do deploy.

## Atualizar uma demo

Depois de mexer em `lp-cleaning`, `lp-handyman` ou `lp-barbearia`:

```bash
npm run demos    # constrói as três e regrava public/demos/
git add public/demos && git commit -m "atualiza demos"
```

O script `scripts/build-demos.mjs` roda `next build` em cada LP com
`DEMO_BASE_PATH=/demos/<slug>`, o que faz cada uma sair como HTML estático já
prefixado naquele caminho, e copia o resultado para cá.

Duas peças fazem isso funcionar, uma em cada LP:

- `next.config.ts` — sem `DEMO_BASE_PATH`, a LP roda normal com o otimizador de
  imagens. Com a variável, vira `output: "export"` com `basePath`.
- `image-loader.ts` — o Next aplica o `basePath` aos chunks de `_next`, mas
  **não** ao `src` de imagens vindas de `/public`. Sem esse loader as fotos
  dariam 404 dentro de `/demos/<slug>/`.

No portfólio, o `rewrites` do `next.config.ts` mapeia `/demos/:slug` para o
`index.html` de cada pasta, porque o Next não resolve índice de diretório
sozinho em arquivos estáticos.

## Atualizar os mockups de celular

As fotos dos celulares em `public/mockups/` são screenshots reais das demos.
Para refazer, suba as três LPs (`npm run dev` em cada uma) e rode o script de
captura que está no repositório de origem, ou tire print a 390×844.

## Trocar seus dados

`src/lib/content.ts` concentra e-mail, Instagram, o texto em PT e EN e a lista
de demos (slug, cor de destaque, descrição e destaques de cada projeto).

## Responsividade

```bash
npm run dev
node scripts/check-responsive.mjs
```

Verificado em 320, 360, 390, 430, 768, 1024 e 1440px.
