
import {Content} from "@benev/slate"

export class Tab {
	constructor(
		public label: string,
		public title: string,
		public render: () => Content = () => null,
	) {}
}

