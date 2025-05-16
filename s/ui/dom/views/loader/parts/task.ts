
import {Hex} from "@e280/stz"
import {Progress} from "./progress.js"

const notDone = Symbol("notDone")

export class Task<T = any> {
	readonly id = Hex.random(32)

	promise: Promise<T>
	#payload: typeof notDone | T = notDone

	constructor(
			public label: string,
			public progress: Progress | undefined,
			promise: Promise<T>,
		) {

		this.promise = promise.then(p => {
			this.#payload = p
			return p
		})
	}

	get payload() {
		if (this.#payload === notDone)
			throw new Error(`task not done "${this.label}"`)
		return this.#payload
	}
}

