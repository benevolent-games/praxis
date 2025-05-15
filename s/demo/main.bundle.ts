
import {register} from "@benev/slate"
import {install} from "@e280/authlocal"
import {PraxisPlay} from "../ui/dom/elements/praxis-play/element.js"
import {PraxisShell} from "../ui/dom/elements/praxis-shell/element.js"

register({PraxisShell, PraxisPlay})

await install()

console.log("🦾 P R A X I S")

