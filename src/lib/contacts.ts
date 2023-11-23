import { getHighQualityUrl } from "./cloudinary";

export const imageNames = [
	'manga-samurai_cxxzj0',
	'manga-tree-girl_uvto83',
	'manga-snow-girl_rsqiey',
	'manga-coffee-shop_bspkzw',
	'manga-river-2_tdgoe9',
	'bad-apple_cezkac',
	'manga-show_spq88z',
	'manga-vilage_qcipuc',
	'manga-multiple_qcyjji',
	'manga-river-1_we626p',
	'manga-luffy_adewqx',
	'manga-kpop_o3ksbj',
	'manga-owl_fldeao',
	'manga-teddy_sqjs0v',
	'manga-river_foykol',
	'manga-city_rn8ruo',
	'manga-study_djwwri'
] as const;

export const images = imageNames.map((name) => getHighQualityUrl(name));


export function titleToSlug(title: string) {
	return title
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '')
		.slice(0, -1);
}