const catalogue = { //création d'une variable, fonctionne comme un dictionnaire
    //video permis de conduire
    "permis-conduire": { //Clé/ID pour identifier la vidéo
        titre: "ANTS - Démarche Permis de conduire",
        description: "Obtenir son numéro NEPH et s'inscrire au permis sur l'ANTS.",
        youtubeId: "WDu6ABl7Ksg",
        duree: "5 min",
        categorie: "papiers",  // Doit correspondre à l'ID dans le HTML
        image: "https://via.placeholder.com/300x180", //image miniature
        tags: ["Permis", "ANTS", "NEPH"], // les badges
        lienOfficiel: "https://permisdeconduire.ants.gouv.fr/"
    },
    //video LinkedIn
    "compte-linkedin": {
        titre: "Tout savoir sur LinkedIn",
        description: "Apprenez à créer votre compte, optimiser votre profil et utiliser le réseau pour trouver un emploi.",
        youtubeId: "0a6GMlbIONc",
        duree: "3 min",
        categorie: "emploi",
        image: "https://via.placeholder.com/300x180",
        tags: ["LinkedIn", "Emploi", "Réseau"],
        lienOfficiel: "https://www.linkedin.com/"
    },
    //Compte ANTS
    "connexion-ants": {
        titre: "Connexion à ANTS",
        description: "Se connecter à l'ANTS via FranceConnect et découvrir le tableau de bord.",
        youtubeId: "9rgX9UpG4M4",
        duree: "2 min",
        categorie: "papiers",
        image: "https://via.placeholder.com/300x180",
        tags: ["ANTS", "FranceConnect", "Démarches", "Compte"],
        lienOfficiel: "https://ants.gouv.fr/"
    },
    //compte google
    "compte-google": {
        titre: "Compte Google et Applications",
        description: "Créer une adresse Gmail et découvrir les applications Google.",
        youtubeId: "dOQfeTfStL8",
        duree: "2 min",
        categorie: "outils",
        image: "https://via.placeholder.com/300x180",
        tags: ["Google", "Gmail", "Bureautique"],
        lienOfficiel: "https://accounts.google.com/"
    },
    //video rédiger un mail
    "rediger-mail-gmail": {
        titre: "Rédiger un Mail (Gmail)",
        description: "Apprendre à rédiger et envoyer correctement un e-mail avec Gmail (Destinataire, CC, CCI, Objet et pièces jointes).",
        youtubeId: "aZ3A3s-_JDg", 
        duree: "3 min",
        categorie: "outils",
        image: "https://via.placeholder.com/300x180",
        tags: ["Google", "Gmail", "Bureautique", "Email"],
        lienOfficiel: "https://mail.google.com/"
    }
};
