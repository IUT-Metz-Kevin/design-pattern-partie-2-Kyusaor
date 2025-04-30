//Pattern Etat
class Personnage {
    private _etat: PersoState;

    constructor() {
        console.log("Création du personnage");
        this._etat = new idlePerso();
    }

    switchState(mode: PersoState) {
        this._etat = mode;
    }

    attaquer() {
        this._etat.attaquer();
    }

    move() {
        this._etat.move();
    }

    jump() {
        this._etat.jump();
    }
}

interface PersoState {
    attaquer: () => void;

    move: () => void;

    jump: () => void;
}

class idlePerso implements PersoState {
    constructor() {
        console.log("Passage du personnage en mode idle")
    }

    attaquer() {
        console.log('Attaque');
    }

    move() {
        console.log('Move');
    }

    jump() {
        console.log('Jump');
    }
}

class attackingPerso implements PersoState {
    constructor() {
        console.log("Passage du personnage en mode attaque")
    }

    move() {
        console.log('Impossible de se déplacer actuellement');
    };

    jump() {
        console.log('Impossible de sauter actuellement');
    };

    attaquer() {
        console.log('Attaque');
    }
}

class movingPerso implements PersoState {
    constructor() {
        console.log("Passage du personnage en mode déplacement")
    }

    move() {
        console.log('Impossible de se déplacer actuellement');
    };

    jump() {
        console.log('Jump');
    };

    attaquer() {
        console.log('Attaque');
    }
}

class jumpingPerso implements PersoState {
    constructor() {
        console.log("Passage du personnage en mode jump")
    }

    move() {
        console.log('Impossible de se déplacer actuellement');
    };

    jump() {
        console.log('Impossible de sauter actuellement');
    };

    attaquer() {
        console.log('Attaque');
    }
}

class stunPerso implements PersoState {
    constructor() {
        console.log("Passage du personnage en mode stun")
    }

    move() {
        console.log('Impossible de se déplacer actuellement');
    };

    jump() {
        console.log('Impossible de sauter actuellement');
    };

    attaquer() {
        console.log("Impossible d'attaquer actuellement");
    }
}

const perso = new Personnage();
perso.attaquer();
perso.move();
perso.jump();

perso.switchState(new attackingPerso());
perso.attaquer();
perso.move();
perso.jump();

perso.switchState(new jumpingPerso());
perso.attaquer();
perso.move();
perso.jump();

perso.switchState(new stunPerso());
perso.attaquer();
perso.move();
perso.jump();

perso.switchState(new movingPerso());
perso.attaquer();
perso.move();
perso.jump();