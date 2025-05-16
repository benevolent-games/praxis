
import {css, unsafeCSS} from "@benev/slate"
import {Loader} from "./loader.js"
import {resources} from "../../../logic/resources.js"
export default css`

:host {
	position: relative;

	--loader-time: ${Loader.transitionMs}ms;

	--loader-bg:
		radial-gradient(circle, #0004, #000a),
		#111 url("${unsafeCSS(resources.images.concept1)}") center center / cover;
}

.loadscreen {
	position: absolute;
	z-index: 1;
	inset: 0;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2em;

	background: var(--loader-bg);

	opacity: 0;
	transition: all var(--loader-time) linear;
	&[x-visible] {
		opacity: 1;
	}

	&[x-stage="fade-out"] {
		pointer-events: none;
	}

	.benev {
		width: 10em;
		height: 10em;
		filter:
			drop-shadow(0 0 1em var(--prime))
			drop-shadow(0 0 5em var(--prime));
	}

	.report {
		list-style: none;

		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.7em;

		width: 24em;
		min-height: 11em;
		max-width: 100%;

		padding: 1em;
		border-radius: 0.5em;
		background: color-mix(in lch, #0004, var(--prime) 10%);
		backdrop-filter: blur(0.4em);

		&[x-none] {
			opacity: 0;
		}

		> li {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.2em;

			color: color-mix(in lch, var(--prime), white 50%);

			.label {
				[view="spinner"] {
					opacity: 0.8;
					color: var(--prime);
				}
			}

			.progress {
				--left: 1.2em;
				--thick: 0.2em;

				margin-left: var(--left);
				width: calc(100% - var(--left));
				height: var(--thick);
				border-radius: var(--thick);
				background: color-mix(in lch, transparent, var(--prime) 25%);
				overflow: hidden;

				.juice {
					width: 100%;
					height: 100%;
					background: var(--prime);

					--percent: 0;
					transition: transform 100ms ease;

					transform: scaleX(var(--percent));
					transform-origin: left;
				}
			}
		}
	}
}

`

