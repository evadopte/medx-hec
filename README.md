# Site Medx HEC

Site statique (HTML, CSS, JS), sans étape de build. Ouvrir `index.html` dans un navigateur, ou déposer le dossier tel quel sur GitHub Pages, Netlify ou tout hébergeur statique.

## Fichiers
- `index.html` : les 5 onglets (Actualités, Qui sommes-nous, Missions, Partenariats, Contact), chacun accessible par une ancre (`#missions`, `#contact`…).
- `styles.css` : la charte Medx HEC (8 couleurs + 0B3A73, Anton/Impact pour les titres, Arial pour le texte).
- `data/content.js` : **le contenu à mettre à jour** : fil d'actualité, bureau, partnership officers, adresse e-mail, lien LinkedIn.
- `app.js` : affichage des onglets, du fil d'actualité filtrable et du formulaire de contact.
- `assets/` : logo et photos extraits des PDF du bureau 2026-2027.

## À compléter
- Remplacer les 4 actualités marquées `exemple: true` par de vrais posts LinkedIn.
- Mettre la vraie adresse e-mail dans `data/content.js` (actuellement `contact@medx-hec.fr`, provisoire).
- Ajouter les logos partenaires (section « Nos partenaires » de l'onglet Partenariats).
- Le formulaire de contact prépare le message (copie ou ouverture de la messagerie) ; pour un envoi direct, brancher un service comme Formspree.
