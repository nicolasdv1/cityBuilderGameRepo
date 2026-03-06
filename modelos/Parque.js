import { ElementoMapa } from "./ElementoMapa.js";

class Parque extends ElementoMapa{
    #bonoFelicidad = 5; //es constante

    constructor(id) {
        super({id, costo: 1500, costoMantenimiento: 300, subtipo: "P1"});
    }

    get bonoFelicidad() {
        return this.#bonoFelicidad;
    }
}