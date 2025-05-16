
import {shadowView} from "@benev/slate"

import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import spinnerSvg from "../../../icons/svg-spinners/spinner.svg.js"

export const SpinnerView = shadowView(use => () => {
	use.name("spinner")
	use.css(themeCss, styleCss)

	use.deferOnce(() => {
		const speed = 500 + Math.floor(Math.random() * 1000)
		use.shadow.querySelector<SVGPathElement>("svg .spin")!.style.animationDuration = speed + "ms"
	})

	return spinnerSvg
})

