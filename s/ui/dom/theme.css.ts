
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

[theme-tab] {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;

	h2 {
		color: #fff4;
	}
}

/* authlocal theme, based on authlocal's basic.css */
:is(
		auth-user,
		auth-sigil,
		auth-button,
	) {

	&:is(auth-user)::part(shell) {
		background: color-mix(in lch, transparent, var(--prime) 15%);
	}

	&::part(button) {
		all: unset;
		font: inherit;
		color: inherit;

		cursor: pointer;
		padding: 1em 0.5em;
		border-radius: 0.5em;
		border: 0.1em solid transparent;

		font-weight: bold;
		color: #fff;
		background: #567;
		text-shadow: 0.1em 0.1em 0.1em #0008;
		box-shadow: 0.1em 0.1em 0.3em #0004;
	}
	&::part(button):hover { background: #678; }
	&::part(button):active { background: #456; }

	&::part(button-login) {
		all: unset;
		font: inherit;
		color: inherit;

		cursor: pointer;
		padding: 1em 0.5em;
		border-radius: 0.5em;
		border: 0.1em solid transparent;

		font-weight: bold;
		color: white;
		background: #0a0;
		text-shadow: 0.1em 0.1em 0.1em #0008;
		box-shadow: 0.1em 0.1em 0.3em #0004;
	}
	&::part(button-login):hover { background: #4a4; }
	&::part(button-login):active { background: #080; }
}

`

