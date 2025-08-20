
import {$} from "@e280/sly"
import {resources} from "../ui/logic/resources.js"
import {loadImage} from "../ui/tools/load-image.js"
import {PraxisPlay} from "../ui/dom/elements/praxis-play/element.js"
import {PraxisShell} from "../ui/dom/elements/praxis-shell/element.js"

$.register({PraxisShell, PraxisPlay})

// preload loading screen image
loadImage(resources.images.concept1)

console.log("🦾 P R A X I S")

