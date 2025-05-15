
import {html, nap} from "@benev/slate"
import {Loader} from "../dom/views/loader/loader.js"
import {Task} from "../dom/views/loader/parts/task.js"

export const brain = new class Brain {
	loader = new Loader(() => html`
		<slot></slot>
	`)

	play = async() => {
		const task1 = new Task("calibrating neutrons", undefined, nap(10_000).then(() => "rofl"))
		const task2 = new Task("gauging fibers", undefined, nap(1234).then(() => "rofl"))
		const task3 = new Task("precalculating etherics", undefined, nap(1000).then(() => "rofl"))
		const task4 = new Task("redirecting flows", undefined, nap(2000).then(() => "rofl"))
		const task5 = new Task("ionizing capacitors", undefined, nap(500).then(() => "rofl"))
		await this.loader.load([task1, task2, task3, task4, task5], this.loader.render)
	}
}

