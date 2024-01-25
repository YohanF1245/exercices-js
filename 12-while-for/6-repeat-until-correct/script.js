/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let infinite = true;
while (infinite === true) {
      let userPrompt = prompt("entrez un nombre", "");
      console.log(userPrompt);
      if (userPrompt>100 || userPrompt == '') {
            infinite = false;
      }
}