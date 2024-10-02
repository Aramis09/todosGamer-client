/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Encuentra la regla que maneja imágenes
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    // Excluye los archivos SVG del manejo predeterminado
    fileLoaderRule.exclude = /\.svg$/;

    // Añade la regla para manejar SVG con @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;