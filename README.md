# Cabinet Safiou Radji — site vitrine

Site statique (HTML / CSS / JS sans dépendance) du Cabinet Safiou Radji : conseil stratégique, finance, investissement et développement durable.

## Structure

- `index.html` — structure de la page (une seule page, ancres de navigation)
- `styles.css` — charte « ivoire + or + brun », typographies Marcellus / Hanken Grotesk
- `main.js` — contenus bilingues FR / EN, rendu des listes, accordéon des expertises, formulaire
- `assets/logo-csr.png` — logo officiel

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```
python3 -m http.server 8000
```

## Contenu

Les six domaines d'expertise reprennent la plaquette « CSR – Domaines d'expertises ». Les textes se modifient dans `main.js` (objets `I18N` et `DATA`).
