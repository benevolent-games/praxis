
import {register} from "@benev/slate"
import {install} from "@e280/authlocal"
import {PraxisShell} from "../ui/dom/elements/praxis-shell/element.js"

register({PraxisShell})

const auth = await install()
auth.on(login => console.log("auth", login))

console.log("🦾 P R A X I S")

