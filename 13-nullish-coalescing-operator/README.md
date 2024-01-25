# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ?

```js
let banane;

alert(banane ?? "pomme"); //pomme

```

## Quelle est la valeur de retour ce code ?

```js
let banane = "Trop bon";

alert(banane ?? "pomme"); //trop bon

```

# Comparison with "||"

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon."); trop bon
```


## Après avoir effectué les exercices précédent pouvez vous dire:

### Ce que retourne, par définition, l'opérateur "||" ?
|| renvoie la première valeur vraie.
### Ce que retourne, par définition, l'opérateur "??" ?
?? renvoie la première valeur définie.

# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (prioritée) ?
meme prio (tableau mdn de predecence)

### Faut il:
 #### utiliser ?? avec tous les autres opérateurs ? 
 #### ne jamais utiliser ??? avec tous les autres opérateurs ? 
 #### quelques fois utiliser ?? avec les autres opérateurs ? <---

### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane" //ne comiple pas (on peut pas mixer && et ?? sans parentheses)
```

```js
let fruit = ("poire" && "pomme") ?? "banane" // pomme

alert(fruit)
```