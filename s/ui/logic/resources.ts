
const cdnRoot = "https://benev-storage.sfo2.cdn.digitaloceanspaces.com/praxis"
// const originRoot = "https://benev-storage.sfo2.digitaloceanspaces.com/praxis"

export const resources = new class Resources {
	storage = (path: string) => cdnRoot + path

	images = {
		concept1: this.storage("/images/concept1.avif"),
		circuitry: this.storage("/images/circuitry.avif"),
		plates: this.storage("/images/plates.avif"),
		bestagons: this.storage("/images/bestagons.avif"),
	}
}

