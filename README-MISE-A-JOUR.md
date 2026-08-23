# FACIG Awâllé — mode d'emploi rapide

Cette version est conçue pour GitHub Pages et fonctionne sans serveur ni base de données.

## 1. Mettre le site en ligne

Remplacer le contenu actuel du dépôt par les fichiers et dossiers contenus dans cette archive, en conservant exactement l'arborescence.

Fichiers principaux :
- `index.html` : accueil
- `association.html` : histoire et missions
- `cours.html` : cours hebdomadaires
- `stages.html` : stages et animations
- `guemenedou.html` : village et actions solidaires
- `soutenir.html` : adhésion et dons
- `contact.html` : coordonnées

## 2. Ajouter ou modifier un stage

Ouvrir : `assets/js/events.js`

Chaque événement est un bloc de ce type :

```js
{
  dateISO: '2026-10-24',
  day: '24',
  month: 'OCT',
  year: '2026',
  title: 'Stage de danse africaine',
  location: 'Rosheim',
  description: 'Description du stage',
  status: 'À venir',
  url: 'LIEN_HELLOASSO_SI_DISPONIBLE'
}
```

Pour ajouter un événement, copier un bloc et modifier les informations. Le même événement apparaît automatiquement sur l'accueil et sur la page Stages.

## 3. Mettre à jour les cours chaque été

Modifier directement `cours.html` et la section cours de `index.html` :
- saison
- date de reprise
- horaires si besoin
- tarif
- intervenants
- lien HelloAsso
- nouveau flyer

Remplacer le PDF dans `assets/docs/flyer-cours-2026-2027.pdf` et l'image `assets/images/flyer-cours.jpg`.

## 4. Photos

Toutes les images sont dans `assets/images/`. Les noms ont été simplifiés pour être faciles à retrouver.

## 5. Coordonnées utilisées

- Email : assofacig@outlook.fr
- SMS cours : 06 71 23 48 91
- Facebook : Assofacig Facig (URL directe à ajouter lorsqu'elle est confirmée)

## 6. Liens HelloAsso intégrés

- Adhésion / dons : page d'adhésion FACIG Awâllé
- Cours 2026-2027 : page d'inscription aux cours

## 7. Référencement Google

La page `cours.html` est volontairement centrée sur l'expression « cours de danse africaine à Rosheim ». Les pages comportent aussi des titres et descriptions distincts pour améliorer leur compréhension par les moteurs de recherche.
