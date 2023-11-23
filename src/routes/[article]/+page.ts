import articles from '$lib/articles.json';
import { images } from '$lib/contacts';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const load: PageLoad = ({ params })=> {
	try {
		const articleIndex = articles.findIndex((article) => article.slug === params.article);
        const article = articles[articleIndex];
        const image = images[articleIndex];

		return {
			...article,
			image
		}
	} catch {
		throw error(404, ` Could not find  ${params.article}`)
	}
}
