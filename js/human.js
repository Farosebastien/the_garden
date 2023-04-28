//Création de la sous classe Human étendue de la classe Thing
class Human extends Thing{
    //Gender et language sont private
    #src;
    #gender;
    #language;
    //Constructeur et appel de la fonction super pour utiliser le constructeur de la classe parente
    constructor(x = 0, y = 0, a = 0, b = 0, src = "", name = "", gender = "", language = ""){
        super(x, y, a, b, name);
        this.#gender = gender;
        this.#language = language;
        this.#src = src;
        this.div = document.createElement("img");
        this.div.setAttribute("id", `${this.name}`);
        this.div.setAttribute("src", `${this.#src}`);
        this.div.setAttribute("alt", "image d'un homme");
        this.div.style.width = `${this.a}px`;
        this.div.style.height = `${this.b}px`;
        this.div.style.position = "relative";
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
        this.div.style.zIndex = "1";
    }

    //Getters
    //Les getters sont private
    #getPosition() {
        return(`position de ${this.name}: ${this.x} ${this.y}`);
    }

    #getLanguage() {
        if(this.#gender === "homme") {
            return(`il parle ${this.#language}!!`);
        } else {
            return(`elle parle ${this.#language}!!`);
        }
        
    }

    #getGender() {
        if(this.#gender === "homme") {
            return (`${this.name} est un ${this.#gender}!!`);;
        } else {
            return (`${this.name} est une ${this.#gender}!!`);;
        }
    }

    //Setters
    //On passe par les setters pour modifier les valeurs en fonction des paramètres qui leur sont passés et ils appels leur getter pour renvoyer les valeurs
    //Si aucun paramètre n'est passé au setter, il récupère par défaut les paramètres actuels
    setUp() {
        if(this.y > 4) {
            this.y = this.y - 2;
            this.div.style.top = `${this.y}px`;
        }
        return(this.#getPosition());
    }

    setDown() {
        if(this.y < 896) {
            this.y = this.y + 2;
            this.div.style.top = `${this.y}px`;
        }
        return(this.#getPosition());
    }

    setLeft() {
        if(this.x > -24) {
            this.x = this.x - 2;
            this.div.style.left = `${this.x}px`;
        }
        return(this.#getPosition());
    }

    setRight() {
        if(this.x < 924) {
            this.x = this.x + 2;
            this.div.style.left = `${this.x}px`;
        }
        return(this.#getPosition());
    }

    setLanguage(language = this.#language) {
        this.#language = language;
        return(this.#getLanguage());
    }

    setGender(gender = this.#gender) {
        this.#gender = gender;
        return(this.#getGender());
    }
}