# Portfolio — Kavin Parthipan

Personal portfolio site for a Year 3 Computer Science undergraduate at the National
University of Singapore. It covers projects, work experience, education,
certifications and technical skills.

**Live site:** https://kpkavin04.github.io/portfolio_website/

## Tech stack

- React 19
- Vite 6
- Tailwind CSS 3
- Swiper (certifications carousel), react-scroll (section navigation), react-icons

## Local development

```bash
npm install
npm run dev        # start the dev server
npm run lint       # eslint
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Images

Source images are committed as WebP, resized to roughly twice their rendered size.
To re-run that conversion after adding new images, drop the originals into
`src/assets/` and run:

```bash
npm run optimize:images
```

Widths per image are configured at the top of `scripts/optimize-images.mjs`.
The social link-preview image is generated separately with `npm run generate:og`.

## Resume

The resume is served as a static file from `public/Kavin_Parthipan_Resume.pdf`.
Replace that file in place to publish an updated version; the filename is
referenced from `src/data/site.js`.

## Deployment

Deployed to GitHub Pages from the `gh-pages` branch:

```bash
npm run deploy     # builds, then publishes dist/ via gh-pages
```

`vite.config.js` sets `base` to `/portfolio_website/` because the site is served
from a repository subpath. That file also documents the steps required to move to
a custom domain.

CI runs lint and build on every push and pull request to `main`
(`.github/workflows/ci.yml`).

## Contact

- Email: kpkavin04@gmail.com
- LinkedIn: https://www.linkedin.com/in/kavin-parthipan/
