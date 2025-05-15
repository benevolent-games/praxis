
import {ev, html, shadowComponent} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {PraxisMenu} from "./menu/view.js"
import {brain} from "../../../logic/brain.js"
import {LoaderView} from "../../views/loader/view.js"

export const PraxisShell = shadowComponent(use => {
	use.css(themeCss, styleCss)

	const open = use.signal(false)
	const toggle = () => open.value = !open.value

	use.mount(() => ev(window, {
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
						${open.value ? PraxisMenu([]) : null}
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

				${LoaderView([brain.loader], {
					content: html`<slot></slot>`,
				})}
			</div>
		</div>
	`
})

