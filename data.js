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
        lienOfficiel: "https://permisdeconduire.ants.gouv.fr/",
        // --- La FAQ ---
        faq: [
            { 
                question: "C'est quoi le numéro NEPH ?", 
                reponse: "C'est ton numéro de candidat (12 chiffres). Il est obligatoire pour s'inscrire à l'examen du code ou du permis." 
            },
            { 
                question: "Combien de temps faut-il pour le recevoir ?", 
                reponse: "Le délai moyen est de 2 à 4 semaines après la validation de ton dossier sur le site de l'ANTS." 
            }
        ]
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
        lienOfficiel: "https://www.linkedin.com/",
        faq: [
            { 
                question: "Est-ce que l'inscription est payante ?", 
                reponse: "Non, l'utilisation de base pour créer ton profil, chercher des offres et contacter des gens est gratuite." 
            },
            { 
                question: "Les recruteurs voient-ils que je cherche un job ?", 
                reponse: "Oui, si tu actives l'option 'À l'écoute' sur ton profil. Tu peux choisir de ne le montrer qu'aux recruteurs." 
            }
        ]
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
        lienOfficiel: "https://ants.gouv.fr/",
        faq: [
            { 
                question: "Pourquoi utiliser FranceConnect ?", 
                reponse: "Cela permet de se connecter avec tes identifiants Ameli ou Impôts, sans avoir à créer un nouveau mot de passe." 
            },
            { 
                question: "Je ne trouve pas mon dossier en cours ?", 
                reponse: "Regarde dans l'onglet 'Mon compte' puis 'Mes démarches en cours' sur ton tableau de bord ANTS." 
            }
        ]
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
        lienOfficiel: "https://accounts.google.com/",
        faq: [
            { 
                question: "Est-ce que c'est gratuit ?", 
                reponse: "Oui, la création d'un compte Google et l'utilisation de Gmail sont entièrement gratuites." 
            },
            { 
                question: "J'ai oublié mon mot de passe, que faire ?", 
                reponse: "Clique sur 'Mot de passe oublié' lors de la connexion. Google t'enverra un code de récupération par SMS ou sur ton e-mail de secours." 
            }
        ]
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
        lienOfficiel: "https://mail.google.com/",
        faq: [
            { 
                question: "C'est quoi la différence entre CC et CCI ?", 
                reponse: "CC est visible par tous les destinataires. CCI cache les adresses pour que personne ne sache à qui d'autre tu as écrit." 
            },
            { 
                question: "Comment savoir si mon mail est bien parti ?", 
                reponse: "Tu peux vérifier dans le dossier 'Messages envoyés' dans la colonne de gauche de ton compte Gmail." 
            }
        ]
    }
};
