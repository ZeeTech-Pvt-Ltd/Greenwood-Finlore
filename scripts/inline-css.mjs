// Post-build step: inline the main CSS bundle into index.html so the
// first paint doesn't wait on a render-blocking stylesheet request.
// (The lazy intl-tel-input CSS stays as a separate file - it loads with
// the phone widget chunk, not on the critical path.)
import { readFileSync, writeFileSync } from 'node:fs'

const indexHtml = 'dist/index.html'
let html = readFileSync(indexHtml, 'utf8')

const linkRe = /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/
const match = html.match(linkRe)

if (!match) {
  console.log('inline-css: no main stylesheet link found - skipping')
} else {
  const cssPath = 'dist' + match[1]
  let css = readFileSync(cssPath, 'utf8')
  // The sourcemap reference points at a file that isn't copied to dist.
  css = css.replace(/\/\*# sourceMappingURL=.*?\*\/\s*$/, '')
  html = html.replace(linkRe, `<style>\n${css}\n</style>`)
  writeFileSync(indexHtml, html)
  console.log(`inline-css: inlined ${cssPath} (${(css.length / 1024).toFixed(1)}KB) into index.html`)
}
