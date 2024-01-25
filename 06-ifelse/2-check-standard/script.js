/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let infinite = true;
while (infinite) {
      var userAnswer = prompt("quel est le nom officiel de JavaScript", "Entrez la reponse");
      if (userAnswer === "ECMAScript") {
            infinite = false;
            alert("WIN");
      }
}