importance: 5

---

# Répéter jusqu'à ce que l'entrée soit correcte

Ecrivez une boucle qui demande un nombre supérieur à `100`. Si le visiteur saisit un autre numéro, demandez-lui de le saisir à nouveau.

La boucle doit demander un numéro jusqu'à ce que le visiteur saisisse un nombre supérieur à `100` ou annule l'entrée/entre une ligne vide.

Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres. Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.
let infinite = true;
while (infinite === true) {
      let userPrompt = prompt("entrez un nombre", "");
      console.log(userPrompt);
      if (userPrompt>100 || userPrompt == '') {
            infinite = false;
      }
}
[demo]
