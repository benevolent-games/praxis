
import {Content} from "@e280/sly"

export class Tab {
	constructor(
		public label: string,
		public title: string,
		public render: () => Content = () => null,
	) {}
}

