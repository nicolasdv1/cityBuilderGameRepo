export class ElementoMapa{

    #id;
    #costo;
    #costoMantenimiento;
    #subtipo

    constructor({id, costo = 0, costoMantenimiento = 0, subtipo= "g"}) {
        this.id = id;
        this.costo = costo;
        this.costoMantenimiento = costoMantenimiento;
        this.subtipo = subtipo;
    }

    get id(){
        return this.#id;
    }

    get costo(){
        return this.#costo;
    }

    get costoMantenimiento(){
        return this.#costoMantenimiento;
    }

    get subtipo(){
        return this.#subtipo;
    }

    set id(id){
        if(id === ""){
            throw new Error("El id no puede ser vacío");
        }
        this.#id = id;
    }

    set costo(costo){
        if(costo < 0){
            throw new Error("El costo no puede ser negativo");
        }
        this.#costo = costo;
    }

    set costoMantenimiento(costoMantenimiento){
        if(costoMantenimiento < 0){
            throw new Error("El costo de mantenimiento no puede ser negativo");
        }
        this.#costoMantenimiento = costoMantenimiento;
    }

    set subtipo(subtipo){
        if(subtipo === ""){
            throw new Error("El subtipo no puede ser vacío");
        }
        this.#subtipo = subtipo;
    }
}