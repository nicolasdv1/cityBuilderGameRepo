import { ElementoMapa } from "./ElementoMapa.js";

class Via extends ElementoMapa{
    constructor(id) {
        super({id, costo: 100, costoMantenimiento: 10, subtipo: "r"});
    }
}