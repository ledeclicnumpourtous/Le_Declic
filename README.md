# Le Déclic - Réduire la fracture numérique

**Le Déclic** est une plateforme web de tutoriels vidéos conçue pour accompagner les jeunes dans l'apprentissage des outils numériques et la réalisation de leurs démarches administratives en ligne.

## Objectif du projet
L'objectif est de simplifier l'accès aux droits et aux services essentiels grâce à des tutoriels vidéos courts, pédagogiques et classés par thématiques.

## ✨ Fonctionnalités principales
* 🔍 **Moteur de recherche intelligent** pour trouver rapidement une démarche ou un outil.
* 📁 **Navigation par catégories** : Santé, Emploi, Logement, Papiers, Aides et Outils numériques.
* ✅ **Suivi de progression** : Possibilité de marquer une vidéo comme "vue" pour suivre son propre avancement (sauvegardé localement).
* 📱 **Interface Responsive** : Le site est entièrement optimisé pour une utilisation sur smartphone.

## 🛠️ Technologies utilisées
* **HTML5 / CSS3** pour une interface moderne et légère.
* **JavaScript (Vanille)** pour la gestion dynamique du catalogue et de la recherche.
* **GitHub Pages** pour un hébergement gratuit et sécurisé.

## 🌐 Accéder au site
Le site est consultable en ligne à l'adresse suivante :
👉 [https://ledeclicnumpourtous.github.io/Le_Declic/](https://ledeclicnumpourtous.github.io/Le_Declic/)

## 📝 Licence
Ce projet est sous licence **MIT** (libre de droit pour un usage solidaire).

## ➕ Ajouter une nouvelle vidéo
Le catalogue des vidéos est géré de manière centralisée dans le fichier data.js. 
Pour ajouter un nouveau tutoriel, suivez ces étapes :

Modifier data.js : Ouvrez le fichier et ajoutez un nouveau bloc dans l'objet catalogue en suivant ce modèle :

"votre-id-unique": {
    titre: "Titre de la vidéo",
    description: "Courte description de la démarche.",
    youtubeId: "CODE_YOUTUBE", // Les lettres à la fin de l'URL YouTube
    duree: "X min",
    categorie: "nom_categorie", // Doit être : sante, emploi, papiers, logement, outils ou aide
    tags: ["Mot-clé1", "Mot-clé2"],
    lienOfficiel: "https://lien-vers-demarche.gouv.fr"
},

Mettre à jour le référencement : Pour que Google trouve cette nouvelle page, ajoutez son lien dans le fichier sitemap.xml :

<url>
  <loc>https://ledeclicnumpourtous.github.io/Le_Declic/video.html?id=votre-id-unique</loc>
  <priority>0.8</priority>
</url>
Enregistrer : Validez vos modifications sur GitHub via un Commit. Le site se mettra à jour automatiquement en quelques minutes.
