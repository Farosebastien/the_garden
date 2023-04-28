//Création de la sous classe building étendue de la classe Thing
class Building extends Thing {
    //Type est private
    #src;
    #type;
    //Constructeur et appel de la fonction super pour utiliser le constructeur de la classe parente
    constructor(x = 0, y = 0, a = 0, b = 0, src = "", name = "", type = "") {
        super(x, y, a, b, name)
        this.#type = type;
        this.#src = src;
        this.div = document.createElement("img");
        this.div.setAttribute("id", `${this.name}`);
        this.div.setAttribute("src", `${this.#src}`);
        this.div.setAttribute("alt", "image d'une maison");
        this.div.style.width = `${this.a}px`;
        this.div.style.height = `${this.b}px`;
        this.div.style.position = "absolute";
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }

    //Getters
    //Les getters sont private
    #getType() {
        return(`Ceci est un objet de type ${this.#type}!!`);
    }

    //Setters
    //On passe par les setters pour modifier les valeurs en fonction des paramètres qui leur sont passés et ils appels leur getter pour renvoyer les valeurs
    //Si aucun paramètre n'est passé au setter, il récupère par défaut les paramètres actuels
    setType(type = this.#type) {
        this.#type = type;
        return(this.#getType());
    }
}