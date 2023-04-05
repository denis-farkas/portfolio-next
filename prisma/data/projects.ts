const projects = [
  {
    name: "Boutique panama hats",
    content:
      "Refonte intégrale d'un site commercial des années 2000, dédié à  la vente des chapeaux panamas.",
    created: "01-03-2021",
    frontend: "Wireframes, mockups, Figma, Css 4 , Bootstrap 4 , html5",
    backend:
      "Utilisation d'un MVC light; avec POO.\nProcédure de vente, panier, connexion avec session.\nBase de données MySQL et MCD Jmerise.\nBack office, administration crud du commerce.\nFront administration des adresses, du profil et des commandes du client.",
    image_1: "panama1.png",
    image_2: "panama2.png",
    image_3: "panama3.png",
    image_4: "panama4.png",
    url_live: "https://denis-farkas.students-laplateforme.io/boutique",
    url: "panama",
    integration: false,
  },

  {
    name: "Les petits plats",
    content:
      "Trois fonctions de recherche de recettes imbriquées, en javascript, coté client.",
    created: "15-01-2022",
    frontend:
      "Dropdown à dimensions dynamiques, création de tags. CSS, bootstrap, html5",
    backend:
      "Le tri s'effectue coté client sur un Json, pas de gestion backend dans cet exercice.",
    image_1: "plat1.png",
    image_2: "plat2.png",
    image_3: "plat3.png",
    image_4: "plat4.png",
    url_live: "https://petitsplats.vercel.app/",
    url: "plat",
    integration: true,
  },

  {
    name: "K~Pulse",
    content:
      "Fan site dédié à la culture kpop, kdrama. Projet de site culturel avec actualités, articles et forum. ",
    created: "01-05-2020",
    frontend: "Refonte d'un template html4, css3 et javascript.",
    backend:
      "Formulaires d'inscription, de connexion et de commentaires avec session;\nBase de données correspondante MySQL avec 19 tables;\nBack Office administration CRUD;\nSécurisation des formulaires et de la base, utilisation de PDO.\nPublication sur mon serveur cloudefar.",
    image_1: "kpop1.png",
    image_2: "kpop2.png",
    image_3: "kpop3.png",
    image_4: "kpop4.png",
    url_live: "https://denis-farkas.students-laplateforme.io/kpulse/home",
    url: "kpop",
    integration: false,
  },

  {
    name: "GameOn",
    content:
      "Intégration maquette Figma, responsive et gestion de formulaires en javascript",
    created: "10-01-2021",
    frontend:
      "Exercice d'intégration d'une maquette Figma, html , css avec responsivité.",
    backend: "Sans",
    image_1: "game1.png",
    image_2: "game2.png",
    image_3: "game3.png",
    image_4: "game4.png",
    url_live: "https://gameon-sable.vercel.app/",
    url: "game",
    integration: true,
  },

  {
    name: "Luxury Estate",
    content:
      "Projet de site d'agence immobiliére, ventes, locations et back office d'administration. Interface d'inscription propriétaires et locataires",
    created: "03-12-2020",
    frontend: "Css, Bootstrap 3 Html 4.",
    backend:
      "Création d'un ensemble de pages PHP sous framework Codeigniter selon le modèle MVC avec POO;\nFormulaires de contact, de connexion avec session;\nBase de données correspondante MySQL avec 10 tables;\nBack Office administration CRUD; Front Office actualisation données personnelles\nSécurisation des formulaires et de la base, utilisation PDO;\nPublication sur mon site cloudefar.",
    image_1: "estate1.png",
    image_2: "estate2.png",
    image_3: "estate3.png",
    image_4: "estate4.png",
    url_live: "https://denis-farkas.students-laplateforme.io/agence/home/index",
    url: "estate",
    integration: false,
  },

  {
    name: "Sneakers",
    content: "Intégration d'une interface de vente  avec React",
    created: "22-11-2022",
    frontend:
      "Intégration projet frontend mentor, galerie  lightbox , thumbnail, ,modale et gestion fonctionnelle du panier.",
    backend: "Pas de backend",
    image_1: "sneak1.png",
    image_2: "sneak2.png",
    image_3: "sneak3.png",
    image_4: "sneak4.png",
    url_live: "https://ecommerce-product-page-main-sandy.vercel.app/",
    url: "sneak",
    integration: true,
  },

  {
    name: "Réservation salle",
    content: "Gestion d'utilisateurs pour réservation",
    created: "28-03-2021",
    frontend: "HTML 4, Css, bootstrap 4",
    backend:
      "Exercice sur les timestamp en php, module inscription et connexion, module planning sans doublon avec plages multi-horaires incluses.",
    image_1: "reserve1.png",
    image_2: "reserve2.png",
    image_3: "reserve3.png",
    image_4: "reserve4.png",
    url_live:
      "https://denis-farkas.students-laplateforme.io/reservation-salles/pages/index",
    url: "reserve",
    integration: false,
  },

  {
    name: "Fisheye",
    content:
      "Projet d'intégration à partir de Figma, Responsive , avec accessibilité Aria, menus déroulants et slidebox.",
    created: "25-12-2021",
    frontend:
      "Accessibilité aria pour lecteurs d'écran et navigation clavier, menus déroulants et lightbox.",
    backend: "Utilisation directe de Json",
    image_1: "fish1.png",
    image_2: "fish2.png",
    image_3: "fish3.png",
    image_4: "fish4.png",
    url_live: "https://fisheye-gamma.vercel.app/",
    url: "fish",
    integration: true,
  },

  {
    name: "Space tourism",
    content: "Intégration de maquette Figma, avec React",
    created: "16-11-2022",
    frontend:
      "Intégration de maquette Figma. Traitement des overlays et filter en css. Responsive.",
    backend: "Sans backend",
    image_1: "space1.png",
    image_2: "space2.png",
    image_3: "space3.png",
    image_4: "space4.png",
    url_live: "https://space-tourism-website-main-eight.vercel.app/",
    url: "space",
    integration: true,
  },

  {
    name: "kasa",
    content: "Intégration maquette figma pour agence immobiliére avec React",
    created: "03-04-2022",
    frontend: "Intégration maquette Figma sur react",
    backend: "simple gestion de json avec axios",
    image_1: "kasa1.png",
    image_2: "kasa2.png",
    image_3: "kasa3.png",
    image_4: "kasa4.png",
    url_live: "https://kasa-denis-farkas.vercel.app/",
    url: "kasa",
    integration: true,
  },
];

export { projects };
