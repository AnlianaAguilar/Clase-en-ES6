export default class Ciente{
    constructor(nombre, impuestos=[]){
        this._nombre = ()=>nombre
        this._impuestos = () =>impuestos
    }

    get nombre(){
        return this._nombre()
    }

    set nombre(new_nombre){
        return this._nombre =()=>new_nombre
    }

    get impuestos(){
        return this._impuestos()
    }

    set impuestos(new_impuestos){
        return this._impuestos = ()=>new_impuestos
    }

    calcularImpuesto(){
        let calculo = ((this.impuestos.monto_bruto-this.impuestos.deducciones)*0.21)
        return calculo
    }

}