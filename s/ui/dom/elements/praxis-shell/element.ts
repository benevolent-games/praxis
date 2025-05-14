
import {Content, ev, html, shadowComponent} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"

class Tab {
	constructor(
		public label: string,
		public render: () => Content = () => null,
	) {}
}

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

	const activeIndex = use.signal(0)
	const tabs = use.once(() => [
		new Tab("Account"),
		new Tab("Settings"),
		new Tab("Controls"),
		new Tab("Rendering"),
		new Tab("Friends"),
	])

	function renderMenu() {
		return html`
			<div class=menu>
				<nav>
					${tabs.map((tab, index) => html`
						<button
							?x-active="${activeIndex.value === index}"
							@click="${() => activeIndex.value = index}">
								${tab.label}
						</button>
					`)}
				</nav>
			</div>
		`
	}
	
	return html`
		<div class=frame>
			<div class=menubox ?x-open="${open.value}">
				<div class=liner>
					<div class=aspect>
						${open.value ? renderMenu() : null}
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
				<slot></slot>
			</div>
		</div>
	`
})

