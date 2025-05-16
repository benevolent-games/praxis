
import {css} from "@benev/slate"
export default css`

:host {
	display: inline-block;
	width: max-content;
	height: max-content;
}

svg {
	width: 1em;
	height: 1em;
}

.spin {
	transform-origin: center;
	animation: spin .75s infinite linear;
}

@keyframes spin{
	100%{
		transform:rotate(360deg);
	}
}

`

