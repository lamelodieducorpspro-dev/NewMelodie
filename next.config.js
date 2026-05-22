/** @type {import('next').NextConfig} */
const redirects = async () => [
  // Old internal canonical URLs → new SEO-friendly URLs
  { source: "/specialites/sopk", destination: "/sopk-alimentation-guadeloupe", permanent: true },
  { source: "/specialites/endometriose", destination: "/endometriose-alimentation-guadeloupe", permanent: true },
  { source: "/specialites/menopause", destination: "/menopause-alimentation-guadeloupe", permanent: true },
  { source: "/accompagnement", destination: "/mon-accompagnement", permanent: true },
  { source: "/yoga", destination: "/cours-yoga-bouillante-guadeloupe", permanent: true },
  // Legacy Wix-style URLs
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

const nextConfig = {
  output: "standalone",
  images: { unoptimized: true },
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
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Content-Security-Policy", value: "frame-ancestors *;" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
