
import {css} from "@benev/slate"
export default css`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

	scrollbar-width: thin;
	scrollbar-color: #333 transparent;

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 0.2em dashed color-mix(in lch, var(--prime), #fff8 50%);
	}
}

button {
	all: unset;
	user-select: none;
}

`

