
import {Content} from "@e280/sly"
import {Task} from "./task.js"

export class LoadingOperation {
	tasks: Set<Task>

	constructor(tasks: Task[], public newRender: () => Content) {
		this.tasks = new Set(tasks)
	}
}

