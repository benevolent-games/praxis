
import {shadowView, html} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {Loader} from "./loader.js"
import {Task} from "./parts/task.js"

export const LoaderView = shadowView(use => (loader: Loader) => {
	use.name("loader")
	use.css(themeCss, styleCss)

	const tasks = loader.operation.value

	function renderLoadScreen(tasks: Set<Task>) {
		return html`
			<div class=loadscreen>
				<img class=benev alt="" src="/assets/benev.png"/>
				<p>loading ${tasks.size}</p>
			</div>
		`
	}

	return tasks
		? renderLoadScreen(tasks)
		: loader.render()
})

