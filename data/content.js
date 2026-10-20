// Contenu éditable du site Medx HEC.
// Pour ajouter une actualité : copier un bloc dans ACTUS, le mettre en haut de la liste.
// exemple: true affiche le badge « Exemple » ; le passer à false (ou supprimer la ligne) pour un vrai post.
window.MEDX = {
  linkedin: "https://www.linkedin.com/company/medx-hec/",
  email: "contact@medx-hec.fr", // À REMPLACER par l'adresse officielle de l'association

  bureau: [
    { nom: "Téa Cohen", role: "Co-présidente", cursus: "PharmD Candidate, Université de Marseille", photo: "tea-cohen" },
    { nom: "Alexandra Gilles", role: "Co-présidente", cursus: "MD Candidate, Université Paris Cité", photo: "alexandra-gilles" },
    { nom: "Antoine Salah", role: "Head of Partnerships", cursus: "Ingénieur, UC Berkeley & ESTP", photo: "antoine-salah" },
    { nom: "Eva Lebel", role: "Head of Operations", cursus: "Biomedical Engineering (BS) & Génétique (Magistère), Amsterdam University College & Université Paris Cité", photo: "eva-lebel" },
    { nom: "Robin Tordjemann", role: "Head of Legal", cursus: "Ingénierie contractuelle, Université Panthéon-Assas", photo: "robin-tordjemann" },
    { nom: "Julia Le Gall", role: "Head of Events", cursus: "Prépa ECG", photo: "julia-le-gall" },
    { nom: "Juliette Boutin", role: "Head of Communications", cursus: "Prépa ECG", photo: "juliette-boutin" },
    { nom: "Louis Dorlencourt", role: "Trésorier", cursus: "Ingénieur, Institut d'Optique", photo: "louis-dorlencourt" },
    { nom: "Matthias Lee", role: "Head of International", cursus: "BS Health & Medical Sciences, University of Warwick", photo: "matthias-lee" }
  ],

  officers: [
    { nom: "Antoine Salah", role: "Private Equity", cursus: "Ingénieur, UC Berkeley & ESTP", photo: "antoine-salah" },
    { nom: "Eva Lebel", role: "Startups", cursus: "Amsterdam University College & Université Paris Cité", photo: "eva-lebel" },
    { nom: "Julia Le Gall", role: "Medtech", cursus: "Prépa ECG", photo: "julia-le-gall" },
    { nom: "Nicolas Martin", role: "Consulting", cursus: "Master Innovation & Transformation, CentraleSupélec", photo: "nicolas-martin" },
    { nom: "Paul Hervo", role: "Pharma", cursus: "Prépa ECG", photo: "paul-hervo" },
    { nom: "Robin Sage", role: "M&A", cursus: "Prépa ECG", photo: "robin-sage" },
    { nom: "Yusuf Yilmaz", role: "Market", cursus: "Prépa ECG", photo: "yusuf-yilmaz" },
    { nom: "Sara Hadjadj", role: "Venture Capital", cursus: "Prépa ECG", photo: "sara-hadjadj" }
  ],

  // Catégories : annonce, visite, voyage, evenement
  actus: [
    {
      categorie: "annonce", date: "Septembre 2026", une: true,
      titre: "Le bureau 2026-2027 est en place",
      texte: "Neuf membres au bureau et huit partnership officers, chacun dédié à un secteur : private equity, startups, medtech, conseil, pharma, M&A, marchés et venture capital. Une équipe majoritairement issue de parcours médicaux et scientifiques, prête à ouvrir les portes de la santé aux étudiants HEC.",
      visuel: "Nouveau bureau",
      visages: ["tea-cohen", "alexandra-gilles", "antoine-salah", "eva-lebel", "matthias-lee"]
    },
    {
      categorie: "visite", date: "Octobre 2026", exemple: true,
      titre: "Visite d'un fonds VC spécialisé en santé",
      texte: "Une après-midi dans les locaux d'un fonds early-stage : thèse d'investissement, revue d'un dossier medtech et échanges avec l'équipe.",
      visuel: "Company visit"
    },
    {
      categorie: "evenement", date: "Octobre 2026", exemple: true,
      titre: "Table ronde : financer l'innovation en santé",
      texte: "Investisseurs, fondateurs et médecins partagent leur regard sur le parcours d'une startup santé, de la preuve clinique à la levée de fonds.",
      visuel: "Roundtable"
    },
    {
      categorie: "visite", date: "Novembre 2026", exemple: true,
      titre: "Immersion chez un laboratoire pharmaceutique",
      texte: "Rencontre avec les équipes stratégie et accès au marché pour comprendre comment un médicament passe du pipeline au patient.",
      visuel: "Big Pharma"
    },
    {
      categorie: "voyage", date: "Printemps 2027", exemple: true,
      titre: "Study trip : à la découverte d'un écosystème santé international",
      texte: "Plusieurs jours de rencontres avec des hôpitaux, des biotechs et des investisseurs pour comparer les modèles d'innovation.",
      visuel: "Study trip"
    }
  ]
};
