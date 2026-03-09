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
        documents: [
            "Une e-photo (avec le code à 22 caractères)",
            "Ta pièce d'identité (recto-verso)",
            "Un justificatif de domicile de moins de 6 mois",
            "Ton ASSR ou un justificatif de SNU",
            "Si tu es hébergé(e) : Pièce d'identité de l'hébergeur, son justificatif de domicile et une attestation d'hébergement"
        ],
        lexique: [
            { mot: "NEPH", definition: "Numéro d'Enregistrement Préfectoral Harmonisé. C'est ton numéro de candidat à 12 chiffres." },
            { mot: "PRIMATA", definition: "C'est le terme administratif pour dire que c'est ton tout premier permis." },
            { mot: "E-photo", definition: "Photo d'identité faite dans un photomaton agréé, qui envoie directement ta signature à l'État." },
            { mot: "Attestation d'hébergement", definition: "Une lettre signée par la personne chez qui tu vis (tes parents, un proche), pour prouver que tu habites bien à cette adresse." }
        ],
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
        documents: [
            "Un CV à jour (idéalement au format PDF)", 
            "Une photo de profil professionnelle", 
            "Une adresse e-mail valide"
        ],
        lexique: [
            { mot: "Relations", definition: "Sur LinkedIn, ce sont tes contacts. On ne dit pas 'followers' car c'est un réseau professionnel pour le travail." },
            { mot: "Alternance", definition: "Un contrat où tu partages ton temps entre l'école (pour étudier) et une entreprise (pour travailler)." },
        ],
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
        documents: [
            "Tes identifiants FranceConnect (compte Ameli, Impôts ou l'Identité Numérique)", 
            "Ou une adresse e-mail valide (pour créer un compte classique)"
        ],
        lexique: [
            { mot: "ANTS", definition: "Agence Nationale des Titres Sécurisés. C'est le site officiel de l'État pour faire tes papiers importants." },
            { mot: "FranceConnect", definition: "Un bouton magique qui te permet de te connecter avec tes identifiants Ameli ou Impôts, sans créer de nouveau compte." },
            { mot: "Duplicata", definition: "C'est un mot administratif qui veut dire 'une copie' ou 'un double' (à demander si tu as perdu l'original)." }
        ],
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
        documents: [
            "Un numéro de téléphone portable (obligatoire pour recevoir le SMS de sécurité)"
        ],
        lexique: [
            { mot: "Navigateur", definition: "Le logiciel que tu utilises pour aller sur internet (comme Google Chrome, Safari ou Firefox)." },
            { mot: "Suite bureautique", definition: "Un ensemble d'outils pour travailler sur ordinateur (écrire des textes, faire des tableaux de calcul, etc.)." }
        ],
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
        documents: [
            "L'adresse e-mail exacte de la personne à qui tu écris (le destinataire)", 
            "Le document à envoyer en pièce jointe (comme ton CV, si besoin)"
        ],
        lexique: [
            { mot: "Destinataire", definition: "La personne à qui tu envoies ton e-mail (celle qui se trouve dans la ligne 'À')." },
            { mot: "Pièce jointe", definition: "Un fichier (comme ton CV en PDF ou une photo) que tu accroches à ton e-mail en cliquant sur le petit trombone." }
        ],
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
