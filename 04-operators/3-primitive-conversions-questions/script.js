/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
function fillAnswer() {
      let newDiv = document.createElement("div");
      newDiv.style.backgroundColor = "white";
      newDiv.style.width = "50%";
      newDiv.style.margin = "auto";
      newDiv.style.marginTop = "15%";
      newDiv.style.fontSize = "20px";
      newDiv.style.border = "3px solid red";
      let rep1 = "" + 1 + 0;
      let rep2 = "" - 1 + 0;
      let rep3 = true + false;
      let rep4 = 6 / "3";
      let rep5 = "2" * "3";
      let rep6 = 4 + 5 + "px";
      let rep7 = "$" + 4 + 5;
      let rep8 = "4" - 2;
      let rep9 = "4px" - 2;
      let rep10 = "  -9  " + 5;
      let rep11 = "  -9  " - 5;
      let rep12 =null + 1;
      let rep13 =undefined + 1;
      let rep14 =" \t \n" - 2;
      newDiv.innerHTML = 
            "<p> \"\" + 1 + 0 = " + rep1 + "</p>" +
            "<p> \"\" + 1 - 0 = " + rep2 + "</p>" +
            "<p> true + false = " + rep3 + "</p>" +
            "<p> 6 / \"3\" = " + rep4 + "</p>" + 
            "<p> \"2\" * \"3\" = " + rep5 + "</p>" +
            "<p> 4 + 5 + \"px\" = " + rep6 + "</p>" +
            "<p> \"$\" + 4 + 5  = " + rep7 + "</p>" +
            "<p> \"4\" - 2 = " + rep8 + "</p>" +
            "<p> \"4px\" - 2 = " + rep9 + "</p>" +
            "<p> \" -9 \" + 5 = " + rep10 + "</p>" +
            "<p> \" -9 \" - 5 = " + rep11 + "</p>" +
            "<p>null + 1 = " + rep12+ "</p>" +
            "<p>undefined + 1 = " + rep13 + "</p>" +
            "<p> \" \t \n\" - 2 = " + rep14 + "</p>";
      document.body.appendChild(newDiv);
           
         
      document.body.appendChild(newDiv);
}