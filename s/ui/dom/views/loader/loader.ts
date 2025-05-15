
import {Content, signal} from "@benev/slate"
import {Task} from "./parts/task.js"

export class Loader {
	operation = signal<Set<Task> | undefined>(undefined)

	constructor(
		public render: () => Content,
	) {}

	async load(tasks: Task[], challenger: () => Content) {
		if (this.operation.value)
			throw new Error("busy, cannot start load while already loading")

		const set = new Set(tasks)
		this.operation.value = set

		// remove each task as it completes
		for (const task of tasks) {
			task.promise.finally(() => {
				set.delete(task)
				this.operation.publish()
			})
		}

		// wait for all the tasks to complete
		await Promise.all(tasks.map(t => t.promise))

		// replace the incumbent with the challenger
		this.render = challenger

		// pulse the signal to trigger rerendering
		this.operation.value = undefined
	}
}

