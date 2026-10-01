import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const path of ['index.html', 'styles.css', 'src', 'data']) await cp(path, `dist/${path}`, { recursive: true });
console.log('Static site copied to dist/');
