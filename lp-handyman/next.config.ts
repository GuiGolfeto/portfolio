import type { NextConfig } from "next";

/**
 * Em dev e build normal, roda como site independente com o otimizador de
 * imagens do Next.
 *
 * Com DEMO_BASE_PATH definido, a saída vira HTML estático prefixado naquele
 * caminho, para ser servida de dentro do /public do portfólio.
 */
const demoBasePath = process.env.DEMO_BASE_PATH;

const nextConfig: NextConfig = demoBasePath
  ? {
      output: "export",
      basePath: demoBasePath,
      trailingSlash: true,
      images: { loader: "custom", loaderFile: "./image-loader.ts" },
    }
  : {};

export default nextConfig;
