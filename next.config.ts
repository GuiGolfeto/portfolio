import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * As demos são sites já construídos, servidos como arquivos estáticos de
   * public/demos/<slug>/. O Next não resolve índice de diretório sozinho, então
   * /demos/limpeza precisa apontar explicitamente para o index.html de lá.
   */
  async rewrites() {
    return [
      { source: "/demos/:slug", destination: "/demos/:slug/index.html" },
    ];
  },
};

export default nextConfig;
