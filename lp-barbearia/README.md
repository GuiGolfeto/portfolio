# Studio Nove Barbearia — LP de portfólio

Landing page para barbearia. Terceira peça do portfólio, feita para não repetir
nenhuma das outras duas: quase-preto frio com latão, display condensada em caixa
alta e hero de imagem cheia (as outras usam duas colunas).

O showpiece é o **fluxo de agendamento em 3 passos**, que nenhuma das outras tem.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Adaptar para um cliente

Tudo em `src/lib/content.ts`:

- `business` — nome, telefone, endereço, Instagram, link do Maps
- `services` — id, preço, duração e o texto em PT/EN. Alimenta a tabela de
  preços **e** o passo 1 do agendamento ao mesmo tempo
- `barbers` — nome, foto e especialidade. Alimenta a seção de time **e** o passo 2
- `slots` — a grade de horários oferecida
- `gallery` — os caminhos das fotos de cortes

Acrescentar um serviço ou um barbeiro aparece nas duas seções sozinho, sem
mexer em componente nenhum.

### Horário de funcionamento

Dois lugares precisam combinar:

- `CLOSED_WEEKDAYS` em `src/components/Booking.tsx` — os dias que a agenda pula
  (`[0, 1]` = domingo e segunda)
- `copy.*.visit.hours` em `content.ts` — a tabela exibida, com a flag `closed`

O sábado fecha mais cedo, então o `Booking` remove o horário das 18:00 quando o
dia escolhido é sábado. Se o cliente tiver outra regra, é ali que se mexe.

### Fotos
`public/images/`: `hero.jpg` (interior, paisagem), `interior.jpg`,
`team-1..3.jpg` (retrato 4:5), `cut-1..6.jpg` (quadrado), `av-1..3.jpg` (200px).

### Cores e tipografia
Tokens no `@theme` de `globals.css`. `--color-brass-*` é o acento,
`--color-night-*` a base. Display é Oswald, corpo é Inter.

## Agendamento

As datas dependem de "hoje", que difere entre servidor e cliente e ficaria
congelada num build estático. Por isso a grade de dias só é montada depois da
hidratação (`useIsClient` com `useSyncExternalStore`), com um espaço reservado
para o layout não pular.

Não há backend nem agenda de verdade: o "Confirmar por mensagem" monta o pedido
(serviço, barbeiro, data, hora, preço) e abre o app de SMS já preenchido. A
confirmação vem na resposta da barbearia. Para plugar um Calendly, Square ou
agenda própria, o ponto de troca é o `handleConfirm`.

## Responsividade

Verificado com Chrome headless em 320, 360, 390, 430, 768, 1024 e 1440px.

```bash
npm run dev
node scripts/check-responsive.mjs
```

## Deploy

Estático. `npx vercel`, Netlify ou Cloudflare Pages.
