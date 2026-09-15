/**
 * Constrói as três LPs de demonstração como HTML estático e copia cada uma
 * para public/demos/<slug>/, para o portfólio servir tudo num deploy só.
 *
 * Rode localmente (`npm run demos`) sempre que mexer numa das LPs, e commite
 * o public/demos/ resultante. A Vercel só roda `next build` no portfólio — ela
 * não tem os node_modules dos projetos vizinhos, então não conseguiria
 * construir as demos sozinha.
 */
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, rmSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
/* As LPs são pastas irmãs dentro do próprio repositório. */
const workspace = root;

const demos = [
  { slug: "limpeza", dir: "lp-cleaning" },
  { slug: "reformas", dir: "lp-handyman" },
  { slug: "barbearia", dir: "lp-barbearia" },
];

const target = join(root, "public", "demos");
rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });

for (const { slug, dir } of demos) {
  const cwd = join(workspace, dir);

  if (!existsSync(cwd)) {
    console.error(
      `\n✗ Projeto "${dir}" não encontrado em ${workspace}.\n` +
        `  Este script precisa das LPs na pasta irmã. Se você só quer publicar,\n` +
        `  o public/demos/ commitado já basta — não precisa rodar isto.\n`,
    );
    process.exit(1);
  }

  const basePath = `/demos/${slug}`;
  console.log(`→ ${dir} → ${basePath}`);

  execFileSync("npx", ["next", "build"], {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      DEMO_BASE_PATH: basePath,
      NEXT_PUBLIC_DEMO_BASE_PATH: basePath,
    },
  });

  const out = join(cwd, "out");
  if (!existsSync(out)) {
    console.error(`✗ ${dir} não gerou a pasta out/.`);
    process.exit(1);
  }

  cpSync(out, join(target, slug), { recursive: true });
  console.log(`  copiado para public/demos/${slug}/`);
}

console.log("\n✓ demos embutidas em public/demos/ — lembre de commitar");
