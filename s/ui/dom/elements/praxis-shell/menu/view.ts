
import {shadowView, html} from "@benev/slate"
import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {Tab} from "./tab.js"

export const PraxisMenu = shadowView(use => () => {
	use.name("menu")
	use.css(themeCss, styleCss)
	
	const activeIndex = use.signal(0)

	const tabs = use.once(() => [
		new Tab("👤", "Account", () => html`
			<div>
				<h2>Account</h2>
				<div hidden>
					<auth-user></auth-user>
					<auth-button></auth-button>
				</div>
			</div>
		`),

		new Tab("📡", "Multiplayer Lobby", () => html`
			<div>
				<h2>Multiplayer Lobby</h2>
			</div>
		`),

		new Tab("⚙️", "Settings", () => html`
			<div>
				<h2>Settings</h2>
			</div>
		`),

		new Tab("🎮", "Controls", () => html`
			<div>
				<h2>Controls</h2>
			</div>
		`),

		new Tab("🖥️", "Graphics", () => html`
			<div>
				<h2>Graphics</h2>
			</div>
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
			${tabs.at(activeIndex.value)?.render()}
		</div>
	`
})

