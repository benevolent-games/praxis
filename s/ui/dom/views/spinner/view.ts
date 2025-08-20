
import {$, view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import spinnerSvg from "../../../icons/svg-spinners/spinner.svg.js"

export const SpinnerView = view(use => () => {
	use.name("spinner")
	use.css(themeCss, styleCss)

	use.wake(() => use.rendered.then(() => {
		const speed = 500 + Math.floor(Math.random() * 1000)
		$("svg, .spin", use.shadow).style.animationDuration = speed + "ms"
	}))

	return spinnerSvg
})

