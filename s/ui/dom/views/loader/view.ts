
import {shadowView, html} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {Loader} from "./loader.js"
import {Task} from "./parts/task.js"

export const LoaderView = shadowView(use => (loader: Loader) => {
	use.name("loader")
	use.css(themeCss, styleCss)

	const stage = loader.stage.value
	const tasks = loader.operation.value

	function renderLoadScreen(tasks: Set<Task>, visible: boolean) {
		const count = 2
		return html`
			<div class=loadscreen ?x-visible="${visible}">
				<img class=benev alt="" src="/assets/benev.png"/>

				<div class=report ?x-none="${tasks.size === 0}">
					${[...tasks].slice(0, count).map(task => html`
						<p>${task.label}...</p>
					`)}
					${tasks.size > count
						? html`<p>...and ${tasks.size - count} more tasks</p>`
						: null}
				</div>
			</div>
		`
	}

	const loadScreenEnabled = stage >= 1
	const loadScreenVisible = stage >= 2
	const shouldRenderContent = stage <= 2

	return html`
		${loadScreenEnabled && tasks
			? renderLoadScreen(tasks, loadScreenVisible)
			: null}

		${shouldRenderContent
			? loader.render()
			: null}
	`
})

