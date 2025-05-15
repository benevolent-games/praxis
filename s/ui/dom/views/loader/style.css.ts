
import {css, unsafeCSS} from "@benev/slate"
import {Loader} from "./loader.js"
import {resources} from "../../../logic/resources.js"
export default css`

:host {
	position: relative;
}

.loadscreen {
	--transitionMs: ${Loader.transitionMs}ms;

	position: absolute;
	z-index: 1;
	inset: 0;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;

	background: #111 url("${unsafeCSS(resources.images.concept1)}") center center / cover;

	opacity: 0;
	transition: all var(--transitionMs) linear;
	&[x-visible] {
		opacity: 1;
	}

	.benev {
		width: 10em;
		height: 10em;
	}

	.report {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 1em;
		min-height: 6em;
		width: 16em;
		max-width: 100%;
		border-radius: 0.5em;
		background: color-mix(in lch, #0004, var(--prime) 10%);
		backdrop-filter: blur(0.4em);

		&[x-none] {
			opacity: 0;
		}
	}
}

`

