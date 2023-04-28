//Objet Thing
class Thing {
    //Constructeur
    constructor (x = 0, y = 0, a = 0, b = 0, name = "") {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
        this.name = name;
        //Si on instancie directement Thing sans passé par une sous classe, il y a une erreur. C'est une classe abstraite
        if(this.constructor == Thing) {
            throw new Error("On ne peut pas créer une instance d'une classe abstraite!!");
        }
    }

    //Getters 
    //Les getters sont private
    #getName() {
        return (`son nom est: ${this.name}!!`);
    }

    #getPosition() {
        return (`${this.x} ${this.y}`);
    }

    //Setters
    //On passe par les setters pour modifier les valeurs ou non et les récupérer en fonction des paramètres
    //Si on ne passe pas de name à setName, elle récupère automatiquement le nom existant.
    setName(name = this.name) {
        this.name = name;
        return(this.#getName());
    }

    //La méthode setPosition de Thing est par défaut, si elle n'est pas implémenté dans une sous classe, c'est celle-ci qui est appelée par défaut
    setPosition() {
        return(`Déplacements impossible pour ce type d'objet, coordonnées: ${this.#getPosition()}`);
    }
}