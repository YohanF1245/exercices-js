importance: 5

---

# Corrigez l'addition

Voici un code qui demande à l'utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l'exemple ci-dessous est `12` (pour les valeurs d'invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être `3`.
a et b sont des Strings, on peut les convertir en int avec la methode parseInt().
```js run
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
alert(parseInt(a) + parseInt(b)); // 3
```
