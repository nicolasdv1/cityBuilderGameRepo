import { ElementoMapa } from "./ElementoMapa.js";

export class Edificio extends ElementoMapa{

    #consumoElectricidad;
    #consumoAgua;

    constructor({id, costo, costoMantenimiento,
                consumoElectricidad = 0, consumoAgua = 0, subtipo}) {
        super({id, costo, costoMantenimiento, subtipo});
        this.consumoElectricidad = consumoElectricidad;
        this.consumoAgua = consumoAgua;
    }

    get consumoElectricidad(){
        return this.#consumoElectricidad;
    }

    get consumoAgua(){
        return this.#consumoAgua;
    }

    set consumoElectricidad(consumoElectricidad){
        this.#consumoElectricidad = consumoElectricidad;
    }

    set consumoAgua(consumoAgua){
        this.#consumoAgua = consumoAgua;
    }
}