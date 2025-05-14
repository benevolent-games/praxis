
import {css} from "@benev/slate"
export default css`

.menu {
	height: 100%;
	display: flex;
	flex-direction: column;

	> nav {
		background: color-mix(in lch, #000a, var(--offbeat) 10%);
		display: flex;
		justify-content: stretch;
		flex-wrap: wrap;

		> button {
			cursor: pointer;
			flex: 1 1 auto;
			font-size: 1.5em;
			text-align: center;
			padding: 0.5em 1em;
			color: #fff8;
			border-bottom: 0.2em solid color-mix(in lch, transparent, var(--offbeat) 10%);
			transition: border 300ms linear;

			&:hover {
				color: var(--offbeat);
			}

			&:active {
				color: white;
			}

			&[x-active] {
				color: var(--offbeat);
				border-bottom: 0.2em solid var(--offbeat);
				background: color-mix(in lch, transparent, var(--offbeat) 10%);
			}
		}
	}

	> div {
		flex: 1 1 auto;
		overflow: auto;
		padding: 1em 0;
		margin-bottom: 0.5em;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h2 {
			color: #fff8;
		}
	}
}

`

