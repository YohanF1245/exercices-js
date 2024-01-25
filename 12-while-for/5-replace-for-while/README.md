importance: 5

---

# Remplacer "for" par "while"

Réécrivez le code en modifiant la boucle `for` en `while` sans modifier son comportement (la sortie doit rester la même).

```js run
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
let i = 0;
while(i<3){
  alert("number"+i+"!");
  i++;
}
```

