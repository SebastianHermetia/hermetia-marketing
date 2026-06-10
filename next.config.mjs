/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-Site-Generation: erzeugt rein statisches HTML/CSS/JS in /out.
  // So lässt sich die Marketing-Seite überall (Cloudflare/Netlify/Hetzner) ausliefern
  // und die Domain ist später ohne Code-Änderung umziehbar.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
