export default class Impuesto {
    constructor(monto_bruto, deducciones=0){
        this._monto_bruto = ()=>monto_bruto
        this._deducciones = ()=>deducciones 
    }

    get monto_bruto(){
        return this._monto_bruto()
    }

    set monto_bruto(new_monto_bruto){
        return this._monto_bruto = ()=>new_monto_bruto
    }

    get deducciones(){
        return this._deducciones()
    }

    set deducciones(new_deducciones){
        return this._deducciones = ()=>new_deducciones
    }
}