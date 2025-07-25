const fakeNotes = [
  {
    id: 1,
    user_id: 101,
    dateNote: "2025-07-20",
    isOnTheTree: true,
    content: "Aujourd'hui j'ai planté un arbre et j'espère qu'il poussera fort 🌱",
    status: "posted"
  },
  {
    id: 2,
    user_id: 102,
    dateNote: "2025-07-21",
    isOnTheTree: false,
    content: "Petit message du matin ☀️",
    status: "posted"
  },
  {
    id: 3,
    user_id: 101,
    dateNote: "2025-07-22",
    isOnTheTree: true,
    content: "Le soleil brille et je me sens motivé 🌞",
    status: "posted"
  },
  {
    id: 4,
    user_id: 103,
    dateNote: "2025-07-23",
    isOnTheTree: false,
    content: "Message supprimé pour test",
    status: "deleted"
  },
  {
    id: 5,
    user_id: 104,
    dateNote: "2025-07-24",
    isOnTheTree: true,
    content: "Nouvelle pousse 🌱 dans le jardin !",
    status: "posted"
  },
  {
    id: 6,
    user_id: 105,
    dateNote: "2025-07-25",
    isOnTheTree: true,
    content: "Journée de pluie ☔, mais les plantes sont heureuses. J'espère qu'elles pousseront vite et qu'on aura plein de fleurs au printemps 🌸🌼🌻.",
    status: "posted"
  },
  {
    id: 7,
    user_id: 106,
    dateNote: "2025-07-26",
    isOnTheTree: false,
    content: "Rien ne vaut un bon café sous un arbre ☕",
    status: "archived"
  },
  {
    id: 8,
    user_id: 107,
    dateNote: "2025-07-27",
    isOnTheTree: true,
    content: "Le chêne au fond du parc a déjà 100 ans 🌳",
    status: "posted"
  },
  {
    id: 9,
    user_id: 108,
    dateNote: "2025-07-28",
    isOnTheTree: false,
    content: "Une note supprimée pour test",
    status: "deleted"
  },
  {
    id: 10,
    user_id: 109,
    dateNote: "2025-07-29",
    isOnTheTree: true,
    content: "Je me sens en paix sous cet arbre 🕊️",
    status: "posted"
  },
  {
    id: 11,
    user_id: 110,
    dateNote: "2025-07-30",
    isOnTheTree: false,
    content: "J'ai vu un écureuil aujourd'hui 🐿️",
    status: "posted"
  },
  {
    id: 12,
    user_id: 111,
    dateNote: "2025-07-31",
    isOnTheTree: true,
    content: "Une belle journée commence 🌞. Je vais en profiter pour arroser mes plantes et planter quelques nouvelles graines 🌾.",
    status: "posted"
  },
  {
    id: 13,
    user_id: 112,
    dateNote: "2025-08-01",
    isOnTheTree: true,
    content: "Le vent souffle fort aujourd'hui 🍃🍃🍃. J'espère que mes jeunes plants tiendront bon.",
    status: "posted"
  },
  {
    id: 14,
    user_id: 113,
    dateNote: "2025-08-02",
    isOnTheTree: false,
    content: "Un message archivé pour tester l’affichage.",
    status: "archived"
  },
  {
    id: 15,
    user_id: 114,
    dateNote: "2025-08-03",
    isOnTheTree: true,
    content: "J'ai trouvé une nouvelle espèce de plante dans le parc 🌿 ! Elle a des feuilles magnifiques et une odeur incroyable.",
    status: "posted"
  },
  {
    id: 16,
    user_id: 115,
    dateNote: "2025-08-04",
    isOnTheTree: false,
    content: "J'ai supprimé ce message.",
    status: "deleted"
  },
  {
    id: 17,
    user_id: 116,
    dateNote: "2025-08-05",
    isOnTheTree: true,
    content: "Le jardin est en pleine effervescence. Les insectes bourdonnent 🐝, les oiseaux chantent 🎶, et chaque jour apporte une nouvelle surprise.",
    status: "posted"
  },
  {
    id: 18,
    user_id: 117,
    dateNote: "2025-08-06",
    isOnTheTree: true,
    content: "Une petite citation : “Planter un arbre, c'est croire en demain.” 🌳",
    status: "posted"
  },
  {
    id: 19,
    user_id: 118,
    dateNote: "2025-08-07",
    isOnTheTree: false,
    content: "Le ciel est gris, mais je garde le moral ☁️💪",
    status: "posted"
  },
  {
    id: 20,
    user_id: 119,
    dateNote: "2025-08-08",
    isOnTheTree: true,
    content: "Ce soir, barbecue sous les étoiles ✨🔥🌙. Hâte de partager ce moment avec mes amis.",
    status: "posted"
  }
] as const;

export default fakeNotes;
