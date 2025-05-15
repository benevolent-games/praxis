
const cors = true

export function loadImage(url: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image()
		if (cors) img.crossOrigin = "anonymous"
		img.onload = () => resolve(img)
		img.onerror = err => reject(err)
		img.src = url
		if (img.complete) resolve(img)
	})
}

