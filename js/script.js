//Instanciation des classes
const sam = new Human(20, 50, 100, 100, "./images/homme.png", "sam", "homme", "français");
const shifu = new Animal(80, 500, 30, 30, "./images/chat.png", "shifumi", "chat", "miaule");
const maison = new Building(700, -30, 300, 300,"./images/house.png","maison", "bâtiment");
const arbre = new Building(200, 20, 150, 150, "./images/arbre.png","chêne", "arbre");
const arbre2 = new Building(650, 400, 150, 150, "./images/arbre.png","chêne", "arbre");
const arbre3 = new Building(100, 800, 100, 100, "./images/arbre.png","bouleau", "arbre");
const arbre4 = new Building(400, 300, 100, 100, "./images/arbre.png","bouleau", "arbre");
const arbre5 = new Building(800, 800, 150, 150, "./images/arbre.png","chêne", "arbre");

//Récupération des éléments HTML
const area = document.getElementById("area");
const objName = document.getElementById("name");
const objType = document.getElementById("type");
const objLanguage = document.getElementById("language");
const btn = document.getElementById("btn")

//Ajout des objets dans la zone de jeu
area.appendChild(sam.div);
area.appendChild(shifu.div);
area.appendChild(maison.div);
area.appendChild(arbre.div);
area.appendChild(arbre2.div);
area.appendChild(arbre3.div);
area.appendChild(arbre4.div);
area.appendChild(arbre5.div);

//EventListeners pour l'affichage des infos des objets
sam.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = sam.setName();
    objType.innerText = sam.setGender();
    objLanguage.innerText = sam.setLanguage();
});

shifu.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = shifu.setName();
    objType.innerText = shifu.setGender();
    objLanguage.innerText = shifu.setLanguage();
});

maison.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = maison.setName();
    objType.innerText = maison.setType();
    objLanguage.innerText = "";
});

arbre.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = arbre.setName();
    objType.innerText = arbre.setType();
    objLanguage.innerText = "";
});

arbre2.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = arbre2.setName();
    objType.innerText = arbre2.setType();
    objLanguage.innerText = "";
});

arbre3.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = arbre3.setName();
    objType.innerText = arbre3.setType();
    objLanguage.innerText = "";
});

arbre4.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = arbre4.setName();
    objType.innerText = arbre4.setType();
    objLanguage.innerText = "";
});

arbre5.div.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = arbre5.setName();
    objType.innerText = arbre5.setType();
    objLanguage.innerText = "";
});

//EventListener sur le bouton de vidage des infos
btn.addEventListener("click", function(e) {
    e.preventDefault();
    objName.innerText = "";
    objType.innerText = "";
    objLanguage.innerText = "";
});

//EventListener sur le clavier pour les mouvements des personnages
document.addEventListener("keydown", function(e) {
    e.preventDefault();
    switch(e.code) {
        case "KeyW":
            sam.setUp();
            if (sam.x == shifu.x + 10 && sam.y == shifu.y + 10) {
                shifu.setUp();
                shifu.setRight();
            }
            break;
        case "KeyS":
            sam.setDown();
            console.log(shifu.x, sam.x)
            console.log(shifu.y, sam.y)
            if (sam.x == shifu.x + 10 && sam.y == shifu.y + 10) {
                shifu.setDown();
                shifu.setLeft();
                
            }
            break;
        case "KeyD":
            sam.setRight();
            if (sam.x == shifu.x + 10 && sam.y == shifu.y + 10) {
                shifu.setUp();
                shifu.setRight();
            }
            break;
        case "KeyA":
            sam.setLeft();
            if (sam.x == shifu.x + 10 && sam.y == shifu.y + 10) {
                shifu.setDown();
                shifu.setLeft();
            }
            break;
        default:
            break;
    }
})