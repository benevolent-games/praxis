
import {loop} from "@e280/stz"
import {html, nap} from "@benev/slate"

import {Loader} from "../dom/views/loader/loader.js"
import {Task} from "../dom/views/loader/parts/task.js"
import {Progress} from "../dom/views/loader/parts/progress.js"

function mockTask(label: string, hasProgress: boolean, maxTime: number) {
	const time = Math.random() * maxTime
	const promise = nap(time)
	const progress = hasProgress
		? new Progress()
		: undefined

	if (progress) {
		for (const t of [...loop(100)]) {
			const fraction = t / 100
			setTimeout(() => { progress.fraction.value = fraction }, time * fraction)
		}
	}

	return new Task(label, progress, promise)
}

function shuffle<T>(array: T[]): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

export const brain = new class Brain {
	loader = new Loader(() => html`
		<slot></slot>
	`)

	play = async() => {
		const tasks = shuffle([
			"calibrating flux",
			"gauging fibers",
			"precalculating entities",
			"indexing pathways",
			"redirecting flows",
			"priming capacitors",
			"integrating memcores",
			"unfolding overlays",
			"determining stacks",
		]).map(s => mockTask(s, Math.random() > 0.3, 10_000))
		await this.loader.load(tasks, this.loader.render)
	}
}

