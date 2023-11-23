import { Cloudinary } from '@cloudinary/url-gen'
import { blur } from '@cloudinary/url-gen/actions/effect'
import { fill, scale } from '@cloudinary/url-gen/actions/resize'

const cld = new Cloudinary({
	cloud: {
		cloudName: 'dp7akzaod'
	},
	url: {
		secure: true
	}
})

function getCld() {
	return cld
}

interface ImageData {
	highQualityUrl: string
	lqipUrl: string
}

function getHighQualityUrl(imageId: string, width?: number, height?: number): string {
	const url = cld.image(imageId).quality('auto').format('auto')

	if (width) url.resize(fill(width.toFixed(0)))
	if (height) url.resize(fill(undefined, height.toFixed(0)))
	if (width && height) url.resize(scale(width.toFixed(0), height.toFixed(0)))

	return url.toURL()
}

function getLqipUrl(imageId: string): string {
	return cld.image(imageId).resize(scale(150)).quality('auto:low').toURL()
}

function getImageData(imageId: string, width?: number, height?: number): ImageData {
	console.log(width)
	return {
		highQualityUrl: getHighQualityUrl(imageId, width, height),
		lqipUrl: getLqipUrl(imageId)
	}
}

export { getCld, getHighQualityUrl, getLqipUrl, getImageData }
export type { ImageData }
