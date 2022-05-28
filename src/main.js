import Impuesto from "./impuesto.js";
import Ciente from "./cliente.js";

const impuesto1 = new Impuesto(100, 12)
const impuesto2 = new Impuesto(200, 30)

console.log("impuesto1",impuesto1)

const cliente1 = new Ciente("Jose", impuesto1)
console.log(cliente1)
console.log(cliente1.calcularImpuesto())
