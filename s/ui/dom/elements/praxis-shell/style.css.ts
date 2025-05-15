
import {css} from "@benev/slate"
export default css`

:host {
	display: block;
	width: 100%;
	height: 100%;
	--mheight: min(24em, calc(100vh - 3em));
}

.frame {
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;
}

.aspect {
	position: absolute;
	inset: 0;
	margin: auto;

	max-width: 200vh;
	max-width: 64em;
	height: 100%;
}

.menubox {
	overflow: hidden;
	position: relative;
	flex: 0 0 auto;
	--transition: height 300ms ease;

	height: 0;
	transition: var(--transition);

	&[x-open] {
		box-shadow: 0 1em 3em black;
		height: var(--mheight);
	}

	.liner {
		position: absolute;
		bottom: 0;

		width: 100%;
		height: var(--mheight);
		transition: var(--transition);

		border-bottom: 0.3em solid color-mix(in lch, transparent, var(--offbeat) 50%);
		background:
			radial-gradient(
				circle,
				color-mix(in lch, #0004, var(--offbeat) 5%),
				color-mix(in lch, black, var(--offbeat) 1%)
			),
			var(--bg) var(--resources-images-plates) center center / cover;
	}
}

.content {
	overflow: hidden;
	position: relative;
	flex: 1 1 auto;

	.aspect {
		pointer-events: none;
		.buttonzone {
			pointer-events: all;
		}
	}

	[view="loader"] {
		position: absolute;
		inset: 0;
		overflow: auto;
	}
}

.buttonzone {
	position: absolute;
	z-index: 2;
	left: 1em;

	button {
		cursor: pointer;
		display: block;
		padding: 1em;
		opacity: 0.2;

		&:hover {
			opacity: 0.5;
			filter: drop-shadow(0 0 0.5em var(--prime));
		}

		&:active {
			opacity: 1;
		}
	}

	img {
		width: 2em;
		height: 2em;
		pointer-events: none;
	}
}

`

