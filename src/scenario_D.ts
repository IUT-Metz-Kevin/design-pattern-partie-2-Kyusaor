//Pattern Stratégie
class lavomatic {
    private _mode: ModeTri;

    get mode() {
        return this._mode;
    }

    changeMode(mode: ModeTri) {
        console.log(`Passage en mode: ${mode.name}`);
        this._mode = mode;
    }

    laver() {
        this._mode.laver()
        ;
    }
}

interface ModeTri {
    readonly name: string;

    laver(): void;
}

class ParCouleur implements ModeTri {
    readonly name = 'couleurs';

    laver(): void {
        console.log(`Lavage par couleur initialisé`);
    }
}

class ParType implements ModeTri {
    readonly name = 'type';

    laver(): void {
        console.log(`Lavage par type initialisé`);
    }

}

class ParSalete implements ModeTri {
    readonly name = 'saleté';

    laver(): void {
        console.log(`Lavage par niveau de saleté initialisé`);
    }
}

const lavo = new lavomatic();
lavo.changeMode(new ParCouleur());
lavo.laver();
lavo.changeMode(new ParType());
lavo.laver();
lavo.changeMode(new ParSalete());
lavo.laver();