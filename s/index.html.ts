
import {ssg, html} from "@e280/scute"
import injectionsCss from "./demo/styles/injections.css.js"

const domain = "praxis.benevolent.games"
const favicon = "/assets/favicon.png"

export default ssg.page(import.meta.url, async orb => ({
	title: "PRAXIS",
	js: "demo/main.bundle.min.js",
	dark: true,
	favicon,

	head: html`
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet">

		<style>${html.raw(injectionsCss)}</style>
		<style>${html.raw(await orb.io.read("demo/styles/vars.css"))}</style>
		<style>${html.raw(await orb.io.read("demo/styles/standard.css"))}</style>
		<style>${html.raw(await orb.io.read("demo/styles/main.css"))}</style>

		<meta data-version="${orb.packageVersion()}"/>
	`,

	socialCard: {
		themeColor: "#ebb935",
		title: "PRAXIS",
		description: "multiplayer webgame laboratory",
		siteName: domain,
		image: `https://${domain}${favicon}`,
	},

	body: html`
		<praxis-shell>
			<section class=plate>
				<h1>
					<strong>Praxis</strong>
					<small class=version>${orb.packageVersion()}</small>
				</h1>

				<div class=text>
					<p>Multiplayer webgame laboratory</p>
				</div>

				<div class=widget>
					<praxis-play></praxis-play>
					<p>or <a href="https://github.com/benevolent-games/praxis#readme">learn more</a></p>
				</div>
			</section>
		</praxis-shell>
	`,
}))

