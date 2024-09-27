import { SEOHandle } from '@nasa-gcn/remix-seo'

/**
 * Without this code, the location will be added to your sitemap.xml
 * e.g.
 * ...
 * 	<url>
 *  	<loc>https://www.example.com/*</loc>
	* </url>
	* ...
	*/
export const handle: SEOHandle = {
  getSitemapEntries: () => null,
}

export default function Route() {
	return <div>Not found</div>
}