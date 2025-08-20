
import {html} from "lit"
import {ev} from "@e280/stz"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {PraxisMenu} from "./menu/view.js"
import {brain} from "../../../logic/brain.js"
import {LoaderView} from "../../views/loader/view.js"

export const PraxisShell = view.component(use => {
	use.css(themeCss, styleCss)

	const open = use.signal(false)
	const toggle = () => open.value = !open.value

	use.mount(() => ev<any>(window, {
		keydown: (event: KeyboardEvent) => {
			if (event.code === "KeyB")
				toggle()
		},
	}))
	
	return html`
		<div class=frame>
			<div class=menubox ?x-open="${open.value}">
				<div class=liner>
					<div class=aspect>
						${open.value ? PraxisMenu() : null}
					</div>
				</div>
			</div>

			<div class=content>
				<div class=aspect>
					<div class=buttonzone>
						<button @click="${toggle}">
							<img alt="B" src="/assets/benev.png"/>
						</button>
					</div>
				</div>

				${LoaderView
					.children(html`<slot></slot>`)
					.props(brain.loader)}
			</div>
		</div>
	`
})

