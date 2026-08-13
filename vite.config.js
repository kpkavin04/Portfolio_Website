import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://kpkavin04.github.io/portfolio_website/, so assets need the
// repository name as a base path.
//
// To move to a custom domain later:
//   1. Point DNS at GitHub Pages (four A records for the apex: 185.199.108.153,
//      185.199.109.153, 185.199.110.153, 185.199.111.153, plus a CNAME for www
//      pointing at kpkavin04.github.io).
//   2. Set the domain under repo Settings -> Pages -> Custom domain.
//   3. Add a `public/CNAME` file containing the bare domain. This matters because
//      `gh-pages -d dist` force-replaces the branch on every deploy and would
//      otherwise delete the CNAME file GitHub creates, silently breaking the domain.
//   4. Change `base` below to "/" and update `homepage` in package.json.
//   5. Enable "Enforce HTTPS" once the certificate has been issued.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio_website/",
})
