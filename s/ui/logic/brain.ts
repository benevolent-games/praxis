
import {html, nap} from "@benev/slate"
import {Loader} from "../dom/views/loader/loader.js"
import { Task } from "../dom/views/loader/parts/task.js"

export const brain = new class Brain {
	loader = new Loader(() => html`
		<slot></slot>
	`)

	play = async() => {
		const fauxTask = new Task("faux", undefined, nap(3000).then(() => "rofl"))
		await this.loader.load([fauxTask], () => html`
			<h2>omg done loading ${fauxTask.payload}</h2>
		`)
	}
}

