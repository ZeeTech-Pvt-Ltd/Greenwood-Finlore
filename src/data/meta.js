import { SITE_URL, SITE_NAME } from './content'

/**
 * Shared OpenGraph baseline. Next 16 replaces (not merges) the parent
 * layout's openGraph object when a page defines its own, so the shared
 * type/siteName/image must be spread into every page's openGraph.
 * twitter:image derives from openGraph.images automatically.
 */
export const ogBase = {
  type: 'website',
  siteName: SITE_NAME,
  images: [{ url: `${SITE_URL}og-image.png` }],
}
