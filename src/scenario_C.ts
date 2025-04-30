//Pattern commande
interface commande {
    execute(param?: string): void;
}

class powerOn implements commande {
    execute() {
        console.log('Démarrage');
    }
}

class powerOff implements commande {
    execute() {
        console.log('Fin de programme');
    }
}

class launchApp implements commande {
    execute(param: string) {
        console.log(`Lancement de l'app ${param}`);
    }
}

class Bouton {
    private readonly _param: string;
    private readonly _commande: commande;

    constructor(com: commande, param?: string) {
        this._commande = com;
        if (param)
            this._param = param;
    }

    get commande() {
        return this._commande;
    }

    get param() {
        return this._param;
    }

    clic() {
        this._commande.execute(this._param);
        Programme.addToLogs(this);
    }
}

class Programme {
    private static _logs: { commande: commande, param?: string }[] = [];

    constructor() {
        Programme._logs = [];

        const allumerCom = new powerOn();
        const eteindreCom = new powerOff();
        const netflixCom = new launchApp();
        const amazonCom = new launchApp();
        const disneyCom = new launchApp();

        const allumerBouton = new Bouton(allumerCom);
        const eteindreBouton = new Bouton(eteindreCom);
        const netflixBouton = new Bouton(netflixCom, 'Netflix');
        const amazonBouton = new Bouton(amazonCom, 'Amazon');
        const disneyBouton = new Bouton(disneyCom, 'Disney');

        allumerBouton.clic();
        netflixBouton.clic();
        amazonBouton.clic();
        disneyBouton.clic();
        eteindreBouton.clic();

        console.log(Programme._logs);
    }

    static addToLogs(bouton: Bouton) {
        let payload = {commande: bouton.commande};
        if (bouton.param)
            payload['param'] = bouton.param;
        this._logs.push(payload);
    }
}

new Programme();