
import {html, nap} from "@benev/slate"
import {Loader} from "../dom/views/loader/loader.js"
import {Task} from "../dom/views/loader/parts/task.js"

export const brain = new class Brain {
	loader = new Loader(() => html`
		<slot></slot>
	`)

	play = async() => {
		const r = () => Math.random() * 6_000
		const task1 = new Task("calibrating flux", undefined, nap(r()).then(() => "rofl"))
		const task2 = new Task("gauging fibers", undefined, nap(r()).then(() => "rofl"))
		const task3 = new Task("precalculating etherics", undefined, nap(r()).then(() => "rofl"))
		const task4 = new Task("redirecting flows", undefined, nap(r()).then(() => "rofl"))
		const task5 = new Task("ionizing capacitors", undefined, nap(r()).then(() => "rofl"))
		await this.loader.load([task1, task2, task3, task4, task5], this.loader.render)
	}
}

