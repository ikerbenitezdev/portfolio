/** @type {import('next').NextConfig} */
const nextConfig = {
  // Una carpeta de build aparte (NEXT_DIST_DIR) deja que `next dev` y una build de prueba convivan.
  distDir: process.env.NEXT_DIST_DIR || '.next',
};

export default nextConfig;
