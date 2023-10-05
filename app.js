import infos from "./folio.json";

const containerText = document.getElementById("container");

let myname = document.createElement("h2");
myname.textContent = "Je m'appelle " + infos.name +'.';
containerText.appendChild(myname);



let me = document.createElement("p");
me.className = "description"
me.textContent = 
"Actuellement, j'ai " + infos.age +'. ' +
"Je suis en " + infos.formation + ", plus précisément, je suis " + infos.statut + " dans le parcours " + infos.parcours + '. ' +
"Je fais beaucoup de " + infos.passion + " pour le loisir" +'. ' +
"Contacter moi via mon mail: " + infos.mail;
containerText.appendChild(me);

let Pjct = document.createElement("h3");
Pjct.textContent = "Projets"
containerText.appendChild(Pjct);

for (let i = 0; i < infos.projets.length; i++) {
    let div = document.createElement("div");
    let projet = infos.projets;
    let image = document.createElement("img");
    let titre = document.createElement("h5");
    let description = document.createElement("p");

    image.src = projet[i].img;
    titre.textContent =  projet[i].titre;
    description.textContent = projet[i].desc;

    div.appendChild(image);
    div.appendChild(titre);
    div.appendChild(description);
 
    containerText.appendChild(div);
}