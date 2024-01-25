/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let userName = prompt("entez user name", "name");

if (userName === "Admin") {
      continuePass();
} else if (userName === "" || userName === null) {
      alert("Cancelled");
} else {
      alert("idk");
}

function continuePass() {
      let userPass = prompt("entrez pass", "pass")
      if (userPass === "TheMaster") {
            alert("welcome");
      } else if(userPass === "" || userName === null ){
            alert("cancelled");
      } else {
            alert("cancelled");
      }
}