
import {nap} from "@e280/stz"
import {Content, signal} from "@benev/slate"

import {Task} from "./parts/task.js"
import {LoadingOperation} from "./parts/operation.js"

const epsilon = 100

export class Loader {
	static transitionMs = 600

	/**
	 * curtain state
	 *  - 0 -- loading screen absent
	 *  - 1 -- loading screen rendered invisible (fading)
	 *  - 2 -- loading screen rendered visible (fading)
	 *  - 3 -- loading screen rendered visible (stable)
	 */
	curtain = signal(0)

	/**
	 * indicates which part of a loading operation we're in
	 */
	stage = signal<"none" | "fade-in" | "loading" | "fade-out">("none")

	/** loading tasks underway */
	operation = signal<LoadingOperation | undefined>(undefined)

	#queue: LoadingOperation[] = []

	constructor(public render: () => Content) {}

	async #execute() {
		if (this.operation.value) { return undefined }

		const operation = this.#queue.shift()
		if (!operation) { return undefined }

		// start loading operation
		this.operation.value = operation

		// initiate fade-in
		this.stage.value = "fade-in"
		this.curtain.value = 1

		// remove each task as it completes
		for (const task of operation.tasks) {
			task.promise.finally(() => {
				operation.tasks.delete(task)
				this.operation.publish()
			})
		}

		// fading in
		await nap(epsilon)
		this.curtain.value = 2
		await nap(Loader.transitionMs + epsilon)

		// loading
		this.curtain.value = 3
		this.stage.value = "loading"

		// wait for all the tasks to complete
		await Promise.all([...operation.tasks].map(t => t.promise))

		// replace the incumbent with the challenger
		this.render = operation.newRender

		// fading out
		this.stage.value = "fade-out"
		this.curtain.value = 1
		await nap(Loader.transitionMs + epsilon)
		this.curtain.value = 0
		await nap(epsilon)

		// formally end the operation
		this.stage.value = "none"
		this.operation.value = undefined

		// execute more stuff in the queue
		await this.#execute()
	}

	async load(tasks: Task[], challenger: () => Content) {

		// ignore load prompts that happen during fade-in.
		// we actually like load prompts that happen during fade-out,
		// which keeps the anim from getting in the way of the eager user.
		if (this.stage.value === "fade-in")
			return undefined

		const operation = new LoadingOperation(tasks, challenger)
		this.#queue.push(operation)
		await this.#execute()
	}
}

