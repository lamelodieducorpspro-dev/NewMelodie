/** @type {import('next').NextConfig} */
const redirects = async () => [
  // Anciennes URLs Wix
  { source: "/mon-accompagnement", destination: "/accompagnement", permanent: true },
  { source: "/mentions-légales", destination: "/mentions-legales", permanent: true },
  { source: "/à-propos", destination: "/a-propos", permanent: true },
  { source: "/apropos", destination: "/a-propos", permanent: true },
  { source: "/prise-rdv", destination: "/contact", permanent: true },
  { source: "/prise-de-rdv", destination: "/contact", permanent: true },
  { source: "/prendre-rdv", destination: "/contact", permanent: true },
  { source: "/prendre-rendez-vous", destination: "/contact", permanent: true },
  { source: "/cours-de-yoga", destination: "/yoga", permanent: true },
  { source: "/yoga-bouillante", destination: "/yoga", permanent: true },
  { source: "/sopk", destination: "/specialites/sopk", permanent: true },
  { source: "/endometriose", destination: "/specialites/endometriose", permanent: true },
  { source: "/menopause", destination: "/specialites/menopause", permanent: true },
  { source: "/ménopause", destination: "/specialites/menopause", permanent: true },
  { source: "/home", destination: "/", permanent: true },
  { source: "/accueil", destination: "/", permanent: true },
  { source: "/services", destination: "/accompagnement", permanent: true },
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
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules"],
      };
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
