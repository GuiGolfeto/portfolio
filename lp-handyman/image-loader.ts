"use client";

/**
 * Loader usado só quando a LP é empacotada como demo dentro do portfólio.
 *
 * O Next aplica o basePath aos chunks de _next, mas não ao `src` de imagens
 * vindas de /public. Sem este loader elas dariam 404 em /demos/<slug>/.
 */
const basePath = process.env.NEXT_PUBLIC_DEMO_BASE_PATH ?? "";

export default function demoImageLoader({ src }: { src: string }) {
  return `${basePath}${src}`;
}
