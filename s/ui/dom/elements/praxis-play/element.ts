
import {html, shadowComponent} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {brain} from "../../../logic/brain.js"

export const PraxisPlay = shadowComponent(use => {
	use.css(themeCss, styleCss)
	
	return html`
		<button std-button=wide @click="${brain.play}">
			Play Now
		</button>
	`
})

