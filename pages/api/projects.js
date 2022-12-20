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
    ],
  });
};
