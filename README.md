# Guilherme Golfeto — portfólio

Site pessoal com **três LPs de demonstração embutidas no mesmo deploy**.

- `/` → o portfólio
- `/demos/limpeza`, `/demos/reformas`, `/demos/barbearia` → os sites completos,
  funcionando

O app do portfólio vive na **raiz do repositório**, de propósito: assim a Vercel
o encontra sem nenhuma configuração. As três LPs ficam em pastas irmãs.

| Pasta | O que é |
| --- | --- |
| `src/`, `public/` | O portfólio (o app que vai para o ar) |
| `lp-cleaning/` | Demo: empresa de limpeza (SparkleHome) |
| `lp-handyman/` | Demo: reformas e construção (Ramos Construction) |
| `lp-barbearia/` | Demo: barbearia (Studio Nove) |

## Deploy na Vercel

Importe o repositório e faça deploy. **Sem ajuste de Root Directory, sem
variável de ambiente, sem comando customizado** — o padrão do Next.js funciona.

`public/demos/` está versionado de propósito: a Vercel instala apenas as
dependências da raiz, então não conseguiria construir as LPs vizinhas durante o
deploy. Elas vão prontas no commit.

## Rodar local

```bash
npm install
npm run dev        # http://localhost:3000
```

As LPs têm dependências próprias. Para mexer numa delas:

```bash
cd lp-cleaning && npm install && npm run dev
```

Depois de alterar qualquer LP, regenere o que o portfólio serve:

```bash
npm run demos                              # da raiz
git add public/demos && git commit -m "atualiza demos"
```

## Como as demos ficam embutidas

`scripts/build-demos.mjs` roda `next build` em cada LP com
`DEMO_BASE_PATH=/demos/<slug>`, o que faz cada uma sair como HTML estático já
prefixado, e copia o resultado para `public/demos/<slug>/`.

Duas peças em cada LP sustentam isso:

- `next.config.ts` — sem a variável, a LP roda normal com o otimizador de
  imagens; com ela, vira `output: "export"` com `basePath`.
- `image-loader.ts` — o Next aplica o `basePath` aos chunks de `_next`, mas
  **não** ao `src` de imagens vindas de `/public`. Sem esse loader as fotos
  dariam 404 dentro de `/demos/<slug>/`.

No portfólio, o `rewrites` do `next.config.ts` mapeia `/demos/:slug` para o
`index.html` de cada pasta, porque o Next não resolve índice de diretório
sozinho em arquivos estáticos.

O `tsconfig.json` e o `eslint.config.mjs` da raiz excluem as pastas `lp-*`:
cada LP tem a própria configuração, e sem isso o type-check da raiz tentaria
compilar as três.

## Seus dados

`src/lib/content.ts` concentra e-mail, Instagram, sua foto, todo o texto da
página e a lista de demos.

## Responsividade

```bash
npm run dev
node scripts/check-responsive.mjs
```

Verificado em 320, 360, 390, 430, 768, 1024 e 1440px.

## Aviso sobre as demos

São sites de demonstração. Negócios, endereços, telefones, avaliações, e-mails
e números de licença são **fictícios** — os telefones usam a faixa 555-01xx e os
e-mails o TLD `.example`, ambos reservados justamente para isso.
