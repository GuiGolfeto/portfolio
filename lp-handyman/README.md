# Ramos Construction & Remodeling — LP de portfólio

Landing page para empresa de reformas residenciais. Segunda peça do portfólio,
feita para contrastar com a LP de limpeza: base escura, display serifado,
cantos secos e ênfase em credibilidade em vez de leveza.

Serve também como template de mockup: depois que o lead responde, você reskina
com o nome e as cores dele e manda a prévia.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Adaptar para um cliente

### `src/lib/content.ts`
Nome, telefone, e-mail, número de licença, ano de fundação, cidades atendidas,
a lista de projetos da galeria e **todo o texto** em PT e EN.

```ts
export const business = {
  phone: "+15083334417",   // E.164, alimenta os links tel: e sms:
  license: "MA HIC #187452",
  since: 2010,             // os "anos de mercado" saem daqui, em todo lugar
};
```

Os anos de experiência aparecem no hero e na faixa de credenciais. Os dois saem
de `business.since` — na faixa, o valor `"auto"` é substituído pelo cálculo.
Nunca edite o número na mão, senão os dois lugares divergem.

### `public/images/`
Substitua mantendo os nomes:

| Arquivo | Onde aparece | Proporção |
| --- | --- | --- |
| `hero.jpg` | topo | retrato 4:5 |
| `craft.jpg` | coluna de serviços | paisagem 4:3 |
| `p-kitchen-*.jpg` `p-bath-*.jpg` `p-out-*.jpg` | galeria de projetos | paisagem 4:3 |
| `av-1..3.jpg` | avatares dos depoimentos | quadrado, 200px |

Para mudar os projetos da galeria, mexa no array `projects` de `content.ts`:
cada item tem imagem, categoria (`kitchen` / `bath` / `outdoor`) e título,
cidade e prazo em cada idioma. As categorias alimentam os filtros sozinhas.

### Cores e tipografia
Tokens no `@theme` de `src/app/globals.css`. `--color-rust-*` é o acento,
`--color-espresso-*` a base escura, `--color-stone-*` os neutros claros.
Display é Fraunces, corpo é Archivo, ambos via `next/font`.

## Contato: ligação

Nos EUA o padrão é telefone, então o CTA principal é `tel:` em toda a página
(7 pontos). O formulário é o caminho secundário: sem backend, monta o texto com
as respostas e abre o app de SMS já preenchido. `smsLink()` trata a diferença de
separador entre iOS (`&`) e Android (`?`).

O campo de fotos existe para o cliente ver a funcionalidade: mostra os arquivos
escolhidos, e o texto embaixo do botão explica que as fotos são anexadas na
conversa (um link `sms:` não carrega anexo). Se um dia entrar backend, o ponto
de troca é o `handleSubmit` do `QuoteForm.tsx`.

## Responsividade

Verificado com Chrome headless em 320, 360, 390, 430, 768, 1024 e 1440px: sem
scroll horizontal, sem elemento fora da viewport, sem texto cortado, sem erro de
console e alvos de toque com pelo menos 40px.

```bash
npm run dev
node scripts/check-responsive.mjs
```

## Deploy

Estático. `npx vercel`, Netlify ou Cloudflare Pages.
