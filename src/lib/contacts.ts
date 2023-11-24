import { getHighQualityUrl } from './cloudinary';

export const imageNames = [
	'fun-4_buehlx',
	'bad-apple_cezkac',
	'fun-5_n7uxur',
	'fun-2_vpjr5q',
	'fun-3_i7yg3c',
	'maple-wide_zinvwn',
	'fun-1_r2dx5e',
	'manga-snow-girl_rsqiey',
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
