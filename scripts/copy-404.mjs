import { copyFile } from 'fs/promises';
import { resolve } from 'path';

const src = resolve('dist/index.html');
const dest = resolve('dist/404.html');

await copyFile(src, dest);
console.log('SPA fallback created at dist/404.html');
