
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../../../../theme.css.js"

export const AccountTab = view(use => () => {
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

