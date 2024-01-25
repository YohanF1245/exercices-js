/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let primeTab = [];
let isPrime = true;
function calcPrime() {
      primeTab = [];
      console.log("function loaded")
      let userPrompt = document.getElementById("userInput").value;
      for (i = 1; i <= userPrompt; i++){
            isPrime = true;
            for (j = 2; j <= i; j++){
                  if (i % j === 0 && i!=j) {
                        isPrime = false;
                  }
            }
            if (isPrime) {
                  primeTab.push(i);
            }
      }
      document.getElementById("primeList").innerText = "liste des nombres premiers : " + primeTab;
      console.log(primeTab);
}
