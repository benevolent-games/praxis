
import {css} from "@benev/slate"
export default css`

:host {
	display: block;
	width: 100%:
	height: 100%:
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

.menu {
	overflow: hidden;
	position: relative;
	flex: 0 0 auto;

	height: 0%;
	transition: height 300ms ease;

	&[x-open] {
		box-shadow: 0 1em 3em black;
		height: min(24em, calc(100% - 5em));
	}

	.liner {
		width: 100%;
		height: 100%;

		background:
			radial-gradient(
				circle,
				color-mix(in lch, #0004, var(--offbeat) 5%),
				color-mix(in lch, black, var(--offbeat) 1%)
			),
			var(--bg) url("https://i.imgur.com/dZL17sX.jpeg") center top / cover;

		border-bottom: 0.5em solid color-mix(in lch, transparent, var(--offbeat) 10%);
		xxx-box-shadow: inset 0 5em 10em #0f04;
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

	slot {
		overflow: auto;
		height: 100%;
	}
}

.buttonzone {
	position: absolute;
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

