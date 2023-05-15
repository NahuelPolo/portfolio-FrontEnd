export class Educacion {
    id: number;
    nombreE: string;
    descripcionE: string;
    aniosE1: string;
    aniosE2: string;

    constructor(nombreE: string, descripcionE: string, aniosE1: string, aniosE2: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.aniosE1 = aniosE1;
        this.aniosE2 = aniosE2;
    }
}
