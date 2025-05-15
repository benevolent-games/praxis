
import {nap} from "@e280/stz"
import {Content, signal} from "@benev/slate"
import {Task} from "./parts/task.js"

const epsilon = 100

export class Loader {
	static transitionMs = 600

	/**
	 * stage to display loading
	 *  - 0 -- loading screen absent
	 *  - 1 -- loading screen rendered invisible (fading)
	 *  - 2 -- loading screen rendered visible (fading)
	 *  - 3 -- loading screen rendered visible (stable)
	 */
	stage = signal(0)

	/** loading tasks underway */
	operation = signal<Set<Task> | undefined>(undefined)

	constructor(
		public render: () => Content,
	) {}

	async load(tasks: Task[], challenger: () => Content) {
		if (this.operation.value) {
			console.error("busy, cannot start load while already loading")
			return undefined
		}

		// turn to stage 1 (cover comes on, but invisible)
		this.stage.value = 1

		// start loading operation
		const set = new Set(tasks)
		this.operation.value = set

		// remove each task as it completes
		for (const task of tasks) {
			task.promise.finally(() => {
				set.delete(task)
				this.operation.publish()
			})
		}

		// fading in
		await nap(epsilon)
		this.stage.value = 2
		await nap(Loader.transitionMs + epsilon)
		this.stage.value = 3

		// wait for all the tasks to complete
		await Promise.all(tasks.map(t => t.promise))

		// replace the incumbent with the challenger
		this.render = challenger

		// fading out
		this.stage.value = 1
		await nap(Loader.transitionMs + epsilon)
		this.stage.value = 0
		await nap(epsilon)

		// formally end the operation
		this.operation.value = undefined
	}
}

