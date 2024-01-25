/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
function showAnswer(){
      const answerEx = document.createElement("p");
      answerEx.innerText = "Il est possible d'utiliser des masjuscules pour déclarer des variables ou des constantes en JS. Par convention, il est preferable de declarer des constantes en majuscule pour des soucis de lisibilité du code";
      answerEx.style.backgroundColor = "white";
      answerEx.style.width = "50%";
      answerEx.style.margin = "auto";
      answerEx.style.fontSize = "30px";
      answerEx.style.textAlign = "center";
      document.body.appendChild(answerEx);
}