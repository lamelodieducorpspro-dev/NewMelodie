/** @type {import('next').NextConfig} */
const redirects = async () => [
  // Old internal canonical URLs → new SEO-friendly URLs
  { source: "/specialites/sopk", destination: "/sopk-alimentation-guadeloupe", permanent: true },
  { source: "/specialites/endometriose", destination: "/endometriose-alimentation-guadeloupe", permanent: true },
  { source: "/specialites/menopause", destination: "/menopause-alimentation-guadeloupe", permanent: true },
  { source: "/accompagnement", destination: "/mon-accompagnement", permanent: true },
  { source: "/yoga", destination: "/cours-yoga-bouillante-guadeloupe", permanent: true },
  // Legacy Wix-style URLs (accents handled via middleware too)
  { source: "/mentions-légales", destination: "/mentions-legales", permanent: true },
  { source: "/à-propos", destination: "/a-propos", permanent: true },
  { source: "/apropos", destination: "/a-propos", permanent: true },
  { source: "/prise-rdv", destination: "/contact", permanent: true },
  { source: "/prise-de-rdv", destination: "/contact", permanent: true },
  { source: "/prendre-rdv", destination: "/contact", permanent: true },
  { source: "/prendre-rendez-vous", destination: "/contact", permanent: true },
  { source: "/cours-de-yoga", destination: "/cours-yoga-bouillante-guadeloupe", permanent: true },
  { source: "/yoga-bouillante", destination: "/cours-yoga-bouillante-guadeloupe", permanent: true },
  { source: "/sopk", destination: "/sopk-alimentation-guadeloupe", permanent: true },
  { source: "/endometriose", destination: "/endometriose-alimentation-guadeloupe", permanent: true },
  { source: "/menopause", destination: "/menopause-alimentation-guadeloupe", permanent: true },
  { source: "/ménopause", destination: "/menopause-alimentation-guadeloupe", permanent: true },
  { source: "/home", destination: "/", permanent: true },
  { source: "/accueil", destination: "/", permanent: true },
  { source: "/services", destination: "/mon-accompagnement", permanent: true },
  { source: "/about", destination: "/a-propos", permanent: true },
  { source: "/contact-fr", destination: "/contact", permanent: true },
];

const securityHeaders = [
  // X-Frame-Options ALLOWALL pour permettre la preview Emergent dans l'iframe.
  // La sécurité est gérée par Content-Security-Policy frame-ancestors plus bas.
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Content-Security-Policy", value: "frame-ancestors *;" },
];

const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  // Images are all self-hosted under /public/images/ — no remote optimisation needed.
  // unoptimized = true ensures images are served as direct static files,
  // which works reliably with the standalone build output.
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow Elfsight CDN for the Google Reviews widget assets only.
    remotePatterns: [
      { protocol: "https", hostname: "elfsightcdn.com" },
      { protocol: "https", hostname: "static.elfsight.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" }, // Google profile pictures shown in Elfsight reviews
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["mongodb"],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = { poll: 2000, aggregateTimeout: 300, ignored: ["**/node_modules"] };
    }
    return config;
  },
  onDemandEntries: { maxInactiveAge: 10000, pagesBufferLength: 2 },
  redirects,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
      {
        // Long-term cache for static images
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

module.exports = nextConfig;
