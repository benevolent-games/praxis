
import {register} from "@benev/slate"
import {install} from "@e280/authlocal"
import {resources} from "../ui/logic/resources.js"
import {loadImage} from "../ui/tools/load-image.js"
import {PraxisPlay} from "../ui/dom/elements/praxis-play/element.js"
import {PraxisShell} from "../ui/dom/elements/praxis-shell/element.js"

register({PraxisShell, PraxisPlay})

await install()

// preload loading screen image
loadImage(resources.images.concept1)

console.log("🦾 P R A X I S")

