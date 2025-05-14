
import "@benev/slate/x/node.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file, read_json, unsanitized, renderSocialCard} from "@benev/turtle"

const domain = "praxis.benevolent.games"
const favicon = "/assets/favicon.png"
const version = (await read_json("package.json")).version

export default template(async basic => {
	const path = basic.path(import.meta.url)
	const hash = await git_commit_hash()
	const faviconVersioned = await path.version.root(favicon)

	return easypage({
		path,
		dark: true,
		title: "PRAXIS",
		head: html`
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Share+Tech&display=swap" rel="stylesheet">

			<link rel="stylesheet" href="https://authlocal.org/themes/basic.css"/>

			<link rel="icon" href="${faviconVersioned}"/>
			<style>${unsanitized(await read_file("x/demo/styles/vars.css"))}</style>
			<style>${unsanitized(await read_file("x/demo/styles/standard.css"))}</style>
			<style>${unsanitized(await read_file("x/demo/styles/main.css"))}</style>
			<meta data-commit-hash="${hash}"/>
			<meta data-version="${version}"/>

			${renderSocialCard({
				title: "PRAXIS",
				description: "Multiplayer webgame laboratory",
				themeColor: "#ebb935",
				siteName: domain,
				image: `https://${domain}${favicon}`,
				url: `https://${domain}/`,
			})}

			${headScripts({
				devModulePath: await path.version.local("demo/main.bundle.js"),
				prodModulePath: await path.version.local("demo/main.bundle.min.js"),
				importmapContent: await read_file("x/importmap.json"),
			})}
		`,
		body: html`
			<praxis-shell>
				<section class=plate>
					<h1>
						<strong>Praxis</strong>
						<small class=version>v${version}</small>
					</h1>

					<div class=text>
						<p>Multiplayer webgame laboratory</p>
					</div>

					<div class=widget>
						<button std-button=wide>Play Now</button>
						<p>or <a href="https://github.com/benevolent-games/praxis#readme">learn more</a></p>
					</div>
				</section>
			</praxis-shell>
		`,
	})
})
