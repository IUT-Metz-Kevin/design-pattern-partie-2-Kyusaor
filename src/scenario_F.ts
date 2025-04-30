//Pattern chaine de responsabilité
class Pret {
    private _montant: number;

    constructor(montant: number) {
        this.montant = montant;
    }

    get montant() {
        return this._montant;
    }

    set montant(value: number) {
        this._montant = value;
    }

    getResponsibilityRequired() {
        if (this.montant < 100000)
            return 0;
        else if (this.montant < 500000)
            return 1;
        else if (this.montant < 10000000)
            return 2;
        else
            return 3;
    }
}

enum NiveauxEmployes {
    'EMPLOYE', 'MANAGER', 'CHEF', 'DIRECTEUR'
}

class Employe {
    private _name: string;
    private _superieur: Employe;
    private _niveau: NiveauxEmployes;

    constructor(name: string, niveau: NiveauxEmployes, superieur?: Employe) {
        this.name = name;
        this.niveau = niveau;
        this.superieur = superieur;

        if (!superieur && niveau < NiveauxEmployes.DIRECTEUR)
            throw new Error('Un employé doit avoir un supérieur');
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get niveau(): NiveauxEmployes {
        return this._niveau;
    }

    set niveau(niveau: NiveauxEmployes) {
        this._niveau = niveau;
    }

    get superieur(): Employe {
        return this._superieur;
    }

    set superieur(value: Employe) {
        this._superieur = value;
    }

    validePret(pret: Pret) {
        if (pret.getResponsibilityRequired() > this.niveau) {
            console.log(`${this.name}: je suis ${NiveauxEmployes[this.niveau]}, je ne peux pas valider ce prêt`);
            return this.superieur.validePret(pret);
        }
        console.log(`${this.name}, de grade ${NiveauxEmployes[this.niveau]} valide le prêt d'un montant de ${pret.montant}`);
    }
}

const dir = new Employe('Dumbledore', NiveauxEmployes.DIRECTEUR);
const chef = new Employe('Le chat', NiveauxEmployes.CHEF, dir);
const manager = new Employe('Percy', NiveauxEmployes.MANAGER, chef);
const employe = new Employe('Ron', NiveauxEmployes.EMPLOYE, manager);

const pret1 = new Pret(50000);
const pret2 = new Pret(200000);
const pret3 = new Pret(750000);
const pret4 = new Pret(20000000);

employe.validePret(pret1);
employe.validePret(pret2);
employe.validePret(pret3);
employe.validePret(pret4);