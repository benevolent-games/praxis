
import {shadowView, html} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {Loader} from "./loader.js"

export const LoaderView = shadowView(use => (loader: Loader) => {
	use.name("loader")
	use.css(themeCss, styleCss)

	const tasks = loader.operation.value
	
	return tasks ? html`
		<div>
			loading tasks ${tasks.size}
		</div>
	` : html`
		${loader.render()}
	`
})

