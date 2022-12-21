/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
  res.status(200).json({
    projects: [
      {
        id: 1,
        attributes: {
          name: "K~Pulse",
          content:
            "Fan site dédié à la culture kpop, kdrama. Projet de site culturel avec actualités, articles et forum. ",
          created: "2020-05-01",
          frontend: "Refonte d'un template html4, css3 et javascript.",
          backend:
            "Formulaires d'inscription, de connexion et de commentaires avec session;\nBase de données correspondante MySQL avec 19 tables;\nBack Office administration CRUD;\nSécurisation des formulaires et de la base, utilisation de PDO.\nPublication sur mon serveur cloudefar.",
          image_1: "kpop1.png",
          image_2: "kpop2.png",
          image_3: "kpop3.png",
          image_4: "kpop4.png",
          url: "https://cloudefar.fr/kpulse/home",
          createdAt: "2022-12-15T09:44:47.788Z",
          updatedAt: "2022-12-15T10:40:04.754Z",
          publishedAt: "2022-12-15T10:40:04.736Z",
          integration: false,
        },
      },
      {
        id: 2,
        attributes: {
          name: "Luxury Estate",
          content:
            "Projet de site d'agence immobiliére, ventes, locations et back office d'administration. Interface d'inscription propriétaires et locataires",
          created: "2020-12-03",
          frontend: "Css, Bootstrap 3 Html 4.",
          backend:
            "Création d'un ensemble de pages PHP sous framework Codeigniter selon le modèle MVC avec POO;\nFormulaires de contact, de connexion avec session;\nBase de données correspondante MySQL avec 10 tables;\nBack Office administration CRUD; Front Office actualisation données personnelles\nSécurisation des formulaires et de la base, utilisation PDO;\nPublication sur mon site cloudefar.",
          image_1: "estate1.png",
          image_2: "estate2.png",
          image_3: "estate3.png",
          image_4: "estate4.png",
          url: "https://cloudefar.fr/agence/home/index",
          createdAt: "2022-12-15T10:56:47.177Z",
          updatedAt: "2022-12-15T10:57:01.048Z",
          publishedAt: "2022-12-15T10:57:01.030Z",
          integration: false,
        },
      },
      {
        id: 3,
        attributes: {
          name: "Boutique panama hats",
          content:
            "Refonte intégrale d'un site commercial des années 2000, dédié à  la vente des chapeaux panamas.",
          created: "2021-03-01",
          frontend: "Wireframes, mockups, Figma, Css 4 , Bootstrap 4 , html5",
          backend:
            "Utilisation d'un MVC light; avec POO.\nProcédure de vente, panier, connexion avec session.\nBase de données MySQL et MCD Jmerise.\nBack office, administration crud du commerce.\nFront administration des adresses, du profil et des commandes du client.",
          image_1: "panama1.png",
          image_2: "panama2.png",
          image_3: "panama3.png",
          image_4: "panama4.png",
          url: "https://denis-farkas.students-laplateforme.io/boutique/",
          createdAt: "2022-12-15T12:39:44.185Z",
          updatedAt: "2022-12-15T12:39:47.777Z",
          publishedAt: "2022-12-15T12:39:47.762Z",
          integration: false,
        },
      },
      {
        id: 4,
        attributes: {
          name: "Réservation salle",
          content: "Gestion d'utilisateurs pour réservation",
          created: "2021-03-28",
          frontend: "HTML 4, Css, bootstrap 4",
          backend:
            "Exercice sur les timestamp en php, module inscription et connexion, module planning sans doublon avec plages multi-horaires incluses.",
          image_1: "reserve1.png",
          image_2: "reserve2.png",
          image_3: "reserve3.png",
          image_4: "reserve4.png",
          url: "https://denis-farkas.students-laplateforme.io/reservation-salles",
          createdAt: "2022-12-15T15:46:01.165Z",
          updatedAt: "2022-12-15T15:46:03.592Z",
          publishedAt: "2022-12-15T15:46:03.572Z",
          integration: false,
        },
      },
      {
        id: 5,
        attributes: {
          name: "Les petits plats",
          content:
            "Trois fonctions de recherche de recettes imbriquées, en javascript, coté client.",
          created: "2022-01-15",
          frontend:
            "Dropdown à dimensions dynamiques, création de tags. CSS, bootstrap, html5",
          backend:
            "Le tri s'effectue coté client sur un Json, pas de gestion backend dans cet exercice.",
          image_1: "plat1.png",
          image_2: "plat2.png",
          image_3: "plat3.png",
          image_4: "plat4.png",
          url: "https://petitsplats.vercel.app/",
          createdAt: "2022-12-20T17:21:25.208Z",
          updatedAt: "2022-12-20T17:21:29.544Z",
          publishedAt: "2022-12-20T17:21:29.525Z",
          integration: true,
        },
      },
      {
        id: 6,
        attributes: {
          name: "GameOn",
          content:
            "Intégration maquette Figma, responsive et gestion de formulaires en javascript",
          created: "2021-01-10",
          frontend:
            "Exercice d'intégration d'une maquette Figma, html , css avec responsivité.",
          backend: "Sans",
          image_1: "game1.png",
          image_2: "game2.png",
          image_3: "game3.png",
          image_4: "game4.png",
          url: "https://gameon-sable.vercel.app/",
          createdAt: "2022-12-20T19:38:02.841Z",
          updatedAt: "2022-12-20T19:38:05.221Z",
          publishedAt: "2022-12-20T19:38:05.203Z",
          integration: true,
        },
      },
      {
        id: 7,
        attributes: {
          name: "Sneakers",
          content: "Intégration d'une interface de vente  avec React",
          created: "2022-11-22",
          frontend:
            "Intégration projet frontend mentor, galerie  lightbox , thumbnail, ,modale et gestion fonctionnelle du panier.",
          backend: "Pas de backend",
          image_1: "sneak1.png",
          image_2: "sneak2.png",
          image_3: "sneak3.png",
          image_4: "sneak4.png",
          url: "https://ecommerce-product-page-main-sandy.vercel.app/",
          createdAt: "2022-12-21T09:05:11.193Z",
          updatedAt: "2022-12-21T09:05:41.570Z",
          publishedAt: "2022-12-21T09:05:41.555Z",
          integration: true,
        },
      },
      {
        id: 8,
        attributes: {
          name: "Fisheye",
          content:
            "Projet d'intégration à partir de Figma, Responsive , avec accessibilité Aria, menus déroulants et slidebox.",
          created: "2021-12-25",
          frontend:
            "Accessibilité aria pour lecteurs d'écran et navigation clavier, menus déroulants et lightbox.",
          backend: "Utilisation directe de Json",
          image_1: "fish1.png",
          image_2: "fish2.png",
          image_3: "fish3.png",
          image_4: "fish4.png",
          url: "https://fisheye-gamma.vercel.app/",
          createdAt: "2022-12-21T09:29:19.690Z",
          updatedAt: "2022-12-21T09:29:26.413Z",
          publishedAt: "2022-12-21T09:29:26.396Z",
          integration: true,
        },
      },
      {
        id: 9,
        attributes: {
          name: "Space tourism",
          content: "Intégration de maquette Figma, avec React",
          created: "2022-11-16",
          frontend:
            "Intégration de maquette Figma. Traitement des overlays et filter en css. Responsive.",
          backend: "Sans backend",
          image_1: "space1.png",
          image_2: "space2.png",
          image_3: "space3.png",
          image_4: "space4.png",
          url: "https://space-tourism-website-main-eight.vercel.app/",
          createdAt: "2022-12-21T12:18:25.687Z",
          updatedAt: "2022-12-21T12:18:28.387Z",
          publishedAt: "2022-12-21T12:18:28.373Z",
          integration: true,
        },
      },
      {
        id: 10,
        attributes: {
          name: "kasa",
          content:
            "Intégration maquette figma pour agence immobiliére avec React",
          created: "2022-04-03",
          frontend: "Intégration maquette Figma sur react",
          backend: "simple gestion de json avec axios",
          image_1: "kasa1.png",
          image_2: "kasa2.png",
          image_3: "kasa3.png",
          image_4: "kasa4.png",
          url: "https://kasa-denis-farkas.vercel.app/",
          createdAt: "2022-12-21T12:31:04.317Z",
          updatedAt: "2022-12-21T12:31:06.957Z",
          publishedAt: "2022-12-21T12:31:06.940Z",
          integration: true,
        },
      },
    ],
  });
};
