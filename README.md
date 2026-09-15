# Sites para negócios locais — portfólio e demos

Monorepo simples com quatro projetos Next.js:

| Pasta | O que é |
| --- | --- |
| `portfolio/` | **O site que vai para o ar.** Portfólio pessoal, com as três demos embutidas. |
| `lp-cleaning/` | Demo: empresa de limpeza (SparkleHome) |
| `lp-handyman/` | Demo: reformas e construção (Ramos Construction) |
| `lp-barbearia/` | Demo: barbearia (Studio Nove) |

As três demos são construídas como HTML estático e copiadas para
`portfolio/public/demos/`, então **um único deploy serve tudo**:

- `/` → portfólio
- `/demos/limpeza`, `/demos/reformas`, `/demos/barbearia` → os sites completos

## Deploy na Vercel

1. Importe este repositório na Vercel.
2. Em **Root Directory**, escolha **`portfolio`**.
3. O resto é o padrão do Next.js. Não há variável de ambiente.

`portfolio/public/demos/` está versionado de propósito: a Vercel instala apenas
as dependências do `portfolio`, então não conseguiria construir as LPs vizinhas
na hora do deploy.

## Rodar local

```bash
cd portfolio && npm install && npm run dev
```

Para mexer numa demo, entre na pasta dela (`cd lp-cleaning && npm install &&
npm run dev`). Depois de alterar, regenere o que vai para o portfólio:

```bash
cd portfolio && npm run demos
git add public/demos && git commit -m "atualiza demos"
```

Cada projeto tem o próprio README com os detalhes.

## Aviso sobre as demos

São sites de demonstração. Os negócios, endereços, telefones, avaliações e
números de licença são **fictícios**. Os telefones usam a faixa 555-01xx,
reservada para uso ficcional.
