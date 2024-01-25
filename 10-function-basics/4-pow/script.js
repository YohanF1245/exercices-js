/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let x = prompt("entrez la valeur de x", "valeur");
let y = prompt("entrez la valeur de y","valeur")
alert(powpow(x, y));
function powpow(a, b) {
      //      3 ^ 3
      var tempResult = a;
      for (var i = 1; i < b; i++){
            tempResult = tempResult * a; 
      }
      return (tempResult);
}
//ou alors y'a math.pow