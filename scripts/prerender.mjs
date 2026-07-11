import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p) => path.resolve(__dirname, '..', p);

// Define ALL your routes here
const routes = [
  '/',
  '/formatters/json-formatter',
  '/formatters/css-formatter',
  '/formatters/css-minifier',
  '/formatters/html-beautifier',
  '/formatters/html-minifier',
  '/formatters/js-beautifier',
  '/formatters/js-minifier',
  '/encoders/base64-encoder-decoder',
  '/encoders/url-encoder',
  '/encoders/html-encoder',
  '/testers/regex-tester',
  '/cheatsheets/regex-cheats',
  '/generators/uuid-generator',
  '/security/jwt-decoder',
  '/converters/timestamp-converter',
  '/converters/text-case',
  '/generators/lorem-ipsum',
  '/converters/text-diff',
  '/converters/color-converter',
  '/seo/meta-tags',
  '/seo/robots-txt',
  '/seo/sitemap-xml',
  '/seo/open-graph',
  '/encoders/image-to-base64',
  '/encoders/base64-to-image',
  '/design/css-gradient',
  '/design/box-shadow',
  '/converters/json-to-csv',
  '/converters/csv-to-json',
  '/converters/xml-to-json',
  '/generators/password-generator',
  '/generators/hash-generator',
  '/misc/minify-all',
  '/misc/code-snippets',
  '/testers/api-tester',
  '/cheatsheets/http-status',
  '/converters/md-to-html',
  '/converters/html-to-md',
  '/formatters/sql-formatter',
  '/generators/cron-generator',
];

async function generate() {
  console.log('🚀 Starting Pre-rendering...');
  
  // Create a temporary vite server to bundle the server entry
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const template = await fs.readFile(toAbs('dist/index.html'), 'utf-8');
  
  // Load the server entry
  const { render } = await vite.ssrLoadModule('/entry-server.tsx');

  for (const url of routes) {
    try {
      const helmetContext = {};
      const { html: appHtml } = await render(url, helmetContext);
      const { helmet } = helmetContext;

      // Inject Helmet tags (title, meta) and App HTML
      const html = template
        .replace('<!--helmet-tags-->', `
          ${helmet?.title?.toString() || ''}
          ${helmet?.meta?.toString() || ''}
          ${helmet?.link?.toString() || ''}
        `)
        .replace('<!--app-html-->', appHtml);

      const filePath = `dist${url === '/' ? '/index' : url}.html`;
      await fs.ensureDir(path.dirname(toAbs(filePath)));
      await fs.writeFile(toAbs(filePath), html);
      console.log(`✅ Rendered: ${url}`);
    } catch (e) {
      console.error(`❌ Error rendering ${url}:`, e);
    }
  }

  // Generate sitemap.xml
  console.log('🗺️ Generating Sitemap...');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://devminitools.xyz${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  await fs.writeFile(toAbs('dist/sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated at dist/sitemap.xml');

  await vite.close();
  console.log('✨ Build complete!');
}

generate();
