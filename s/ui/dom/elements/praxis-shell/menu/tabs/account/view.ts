
import {html, shadowView} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../../../../theme.css.js"

export const AccountTab = shadowView(use => () => {
	use.name("account")
	use.css(themeCss, styleCss)
	
	return html`
		<div theme-tab>
			<h2>Account</h2>
			<div class=accounting>
				<auth-user></auth-user>
				<auth-button></auth-button>
			</div>
		</div>
	`
})

