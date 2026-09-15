# SparkleHome Cleaning — LP de portfólio

Landing page para empresa de limpeza residencial, pensada para dois usos:

1. **Peça de portfólio** — o que você mostra no perfil ou manda como link.
2. **Template de mockup** — depois que o lead responde na DM, você reskina isso
   com o nome e as cores dele em ~30 min e manda a prévia personalizada.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Adaptar para um cliente em 30 minutos

Quase tudo mora em dois lugares.

### 1. `src/lib/content.ts`

Nome, WhatsApp, e-mail, Instagram, cidades atendidas e **todo o texto** em PT e EN.
Trocar o `business.whatsapp` já religa todos os botões e o formulário.

```ts
export const business = {
  name: "SparkleHome",
  whatsapp: "15085550142",  // internacional, só dígitos
  cities: ["Framingham", "Natick", ...],
};
```

### 2. `public/images/`

Substitua mantendo os nomes:

| Arquivo | Onde aparece | Proporção sugerida |
| --- | --- | --- |
| `hero.jpg` | topo | retrato 4:5 |
| `team.jpg` | "Como funciona" | retrato 4:5 |
| `svc-recorrente.jpg` `svc-mudanca.jpg` `svc-posobra.jpg` | cards de serviço | paisagem 5:4 |
| `ba-kitchen.jpg` `ba-living.jpg` | slider antes/depois | paisagem 16:10 |
| `av-1.jpg` `av-2.jpg` `av-3.jpg` | avatares dos depoimentos | quadrado, 200px |

### 3. Cores

Os tokens ficam no `@theme` de `src/app/globals.css`. Mexer em `--color-brand-*`
reskina o site inteiro. `--color-accent-*` é a cor dos botões de ação.

## Sobre o slider antes/depois

`src/components/BeforeAfter.tsx` usa a **mesma foto** nos dois lados: o "antes" é
a versão com o filtro `.grime` (definido em `globals.css`). Isso mantém os dois
lados perfeitamente alinhados, coisa que duas fotos de banco de imagem não dão.

**Ao usar com um cliente real, troque pelas duas fotos de verdade dele** — são
mais convincentes que qualquer filtro, e aí o `.grime` pode sair.

O arraste é um `<input type="range">` invisível por cima da imagem. Isso dá
mouse, toque e teclado (setas) de graça, sem handler de pointer.

## Idioma

Toggle PT/EN no topo. O idioma inicial vem do navegador e fica salvo no
`localStorage`. Para um cliente só-inglês, remova o `LangToggle` do `Header.tsx`
e fixe `"en"` no `getServerSnapshot` do `LangProvider.tsx`.

## Canal de contato: ligação

Nos EUA o WhatsApp não é o padrão, então **o CTA principal em toda a página é
uma ligação** (`tel:`). O número sai de `business.phone` em formato E.164.

O formulário é o caminho secundário, para quem não quer ligar: não há backend,
o "Enviar por mensagem" monta o texto com as respostas e abre o app de SMS do
aparelho já preenchido — o cliente revisa antes de enviar. iOS e Android usam
separadores diferentes antes do `body`, e `smsLink()` trata os dois casos.

Se um dia precisar de e-mail ou CRM, o ponto de troca é o `handleSubmit` do
`QuoteForm.tsx`.

## Deploy

Site 100% estático. `npx vercel` ou o build no Netlify/Cloudflare Pages resolve.

## Responsividade

Verificado com Chrome headless em 320, 360, 390, 430, 768, 1024 e 1440px:
sem scroll horizontal, sem elemento fora da viewport, sem texto cortado, sem
erro de console e todos os alvos de toque com pelo menos 40px de altura.

O script está em `scripts/check-responsive.mjs`. Requer o dev server rodando:

```bash
npm run dev
node scripts/check-responsive.mjs
```
