
import {shadowView, html} from "@benev/slate"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"

import {Loader} from "./loader.js"
import {SpinnerView} from "../spinner/view.js"
import {LoadingOperation} from "./parts/operation.js"

export const LoaderView = shadowView(use => (loader: Loader) => {
	use.name("loader")
	use.css(themeCss, styleCss)

	const stage = loader.stage.value
	const curtain = loader.curtain.value
	const operation = loader.operation.value

	function renderLoadScreen({tasks}: LoadingOperation, visible: boolean) {
		const count = 3
		const remaining = tasks.size - count
		const focustasks = [...tasks].slice(0, count)
		return html`
			<div
				class=loadscreen
				?x-visible="${visible}"
				x-stage="${stage}">

				<img class=benev alt="" src="/assets/benev.png"/>

				<ol class=report ?x-none="${tasks.size === 0}">
					${focustasks.map(task => html`
						<li x-id="${task.id}">
							<div class=label>
								${SpinnerView([])}
								${task.label}...
							</div>
							${task.progress ?html`
								<div class=progress>
									<div class=juice style="--percent: ${task.progress.fraction.value * 100}%;"></div>
								</div>
							`: null}
						</li>
					`)}

					${tasks.size > count ? html`
						<li>
							<div class=label>
								${SpinnerView([])}
								...and ${remaining} more ${remaining === 1 ?"task" :"tasks"}...
							</div>
						</li>
					` : null}
				</ol>
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

