
import {shadowView, html} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {Tab} from "./tab.js"
import {AccountTab} from "./tabs/account/view.js"

export const PraxisMenu = shadowView(use => () => {
	use.name("menu")
	use.css(themeCss, styleCss)
	
	const activeIndex = use.signal(0)

	const tabs = use.once(() => [
		new Tab("👤", "Account", () => AccountTab([])),

		new Tab("📡", "Multiplayer Lobby", () => html`
			<h2>Multiplayer Lobby</h2>
		`),

		new Tab("⚙️", "Settings", () => html`
			<h2>Settings</h2>
		`),

		new Tab("🎮", "Controls", () => html`
			<h2>Controls</h2>
		`),

		new Tab("🖥️", "Graphics", () => html`
			<h2>Graphics</h2>
		`),
	])

	return html`
		<div class=menu>
			<nav>
				${tabs.map((tab, index) => html`
					<button
						title="${tab.title}"
						?x-active="${activeIndex.value === index}"
						@click="${() => activeIndex.value = index}">
							${tab.label}
					</button>
				`)}
			</nav>
			<div class=tab>
				${tabs.at(activeIndex.value)?.render()}
			</div>
		</div>
	`
})

