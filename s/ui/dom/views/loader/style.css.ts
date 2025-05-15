
import {css, unsafeCSS} from "@benev/slate"
import {resources} from "../../../logic/resources.js"
export default css`

.loadscreen {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: #111 url("${unsafeCSS(resources.images.concept1)}") center center / cover;

	.benev {
		width: 6em;
		height: 6em;
	}
}

`

