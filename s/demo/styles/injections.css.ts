
import {resources} from "../../ui/logic/resources.js"
export default `

@layer injections {
	:root {
		${Object.entries(resources.images)
			.map(([key, value]) => `--resources-images-${key}: url("${value}");`)
			.join("")}
	}
}

`

