//Pattern Médiateur
class Tour {
    private readonly _port: Aeroport;

    constructor(port: Aeroport) {
        this._port = port;
    }

    get port() {
        return this._port;
    }

    decollerAvion(avion: Avion) {
        this._port.removeAvion(avion);
        avion.state = "en l'air";
        console.log(`L'avion '${avion.name}' décolle de l'aéroport ${this._port.name}`);
    }

    atterirAvion(avion: Avion) {
        this._port.addAvion(avion);
        avion.state = "au sol";
        console.log(`L'avion '${avion.name}' atterit à l'aéroport ${this._port.name}`);
    }
}

class Aeroport {
    private _name: string;
    private _avions: Avion[];

    constructor(name: string) {
        this.name = name;
        this._avions = [];
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get avions() {
        return this._avions;
    }

    addAvion(avion: Avion) {
        let index = this._avions.indexOf(avion);
        if(index !== -1)
            return console.error("L'avion '" + avion.name + "' est déjà présent");

        this._avions.push(avion);
    }

    removeAvion(avion: Avion) {
        let index = this._avions.indexOf(avion);
        if(index == -1)
            return console.error("L'avion '" + avion.name + "' n'est pas présent");
        this._avions.splice(index, 1);
    }
}

class Avion {
    private _name: string;
    private _state: "au sol" | "en l'air";

    constructor(nom: string) {
        this.name = nom;
        this.state = "au sol";
    }

    get state() {
        return this._state;
    }

    set state(state: "au sol" | "en l'air") {
        this._state = state;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    decoller() {
        this.state = "en l'air";
    }

    atterir() {
        this.state = "au sol";
    }
}

const port = new Aeroport("Saint-Pourçain-sur-Sioule");
const tour = new Tour(port);

const avion1 = new Avion("avion 1");
const avion2 = new Avion("avion 2");
const avion3 = new Avion("avion 3");

tour.atterirAvion(avion1);
tour.atterirAvion(avion2);
tour.decollerAvion(avion2);
tour.atterirAvion(avion3);

console.log(port.avions);
console.log(avion1, avion2, avion3);