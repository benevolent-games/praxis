
import {shadowView, html} from "@benev/slate"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"

import {Loader} from "./loader.js"
import {LoadingOperation} from "./parts/operation.js"

export const LoaderView = shadowView(use => (loader: Loader) => {
	use.name("loader")
	use.css(themeCss, styleCss)

	const stage = loader.stage.value
	const curtain = loader.curtain.value
	const operation = loader.operation.value

	function renderLoadScreen({tasks}: LoadingOperation, visible: boolean) {
		const count = 2
		return html`
			<div class=loadscreen ?x-visible="${visible}" x-stage="${stage}">
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

	const loadScreenEnabled = curtain >= 1
	const loadScreenVisible = curtain >= 2
	const shouldRenderContent = curtain <= 2

	return html`
		${loadScreenEnabled && operation
			? renderLoadScreen(operation, loadScreenVisible)
			: null}

		${shouldRenderContent
			? loader.render()
			: null}
	`
})

