let dados = [
  // Jogos originais
  {
    titulo: "Five Nights at Freddy's",
    link: "https://store.steampowered.com/app/319310/Five_Nights_at_Freddy's/",
    descricao:
      "Um segurança noturno em uma pizzaria com animatrônicos que ganham vida à noite.",
    tags: [
      "terror psicológico",
      "survival horror",
      "animais animatrônicos",
      "jump scares",
      "noite",
      "infantil",
      "clássico",
    ],
  },
  {
    titulo: "Five Nights at Freddy's 2",
    link: "https://store.steampowered.com/app/388090/Five_Nights_at_Freddy's_2/",
    descricao:
      "Uma nova pizzaria, novos animatrônicos e um terror ainda maior.",
    tags: [
      "terror psicológico",
      "survival horror",
      "animais animatrônicos",
      "jump scares",
      "noite",
      "sequela",
    ],
  },
  {
    titulo: "Five Nights at Freddy's 3",
    link: "https://store.steampowered.com/app/493520/Five_Nights_at_Freddy's_3/",
    descricao:
      "Retorne à Freddy Fazbear's Pizza em uma nova aventura aterrorizante.",
    tags: [
      "terror psicológico",
      "survival horror",
      "animais animatrônicos",
      "jump scares",
      "noite",
      "sequela",
    ],
  },
  {
    titulo: "Five Nights at Freddy's 4",
    link: "https://store.steampowered.com/app/493520/Five_Nights_at_Freddy's_3/",
    descricao: "Uma história de terror que se passa em uma casa.",
    tags: [
      "terror psicológico",
      "survival horror",
      "animais animatrônicos",
      "jump scares",
      "criança",
      "prequel",
    ],
  },
  {
    titulo: "Five Nights at Freddy's: Sister Location",
    link: "https://store.steampowered.com/app/506660/Five_Nights_at_Freddy's_Sister_Location/",
    descricao:
      "Uma nova instalação, novos animatrônicos e um novo tipo de terror.",
    tags: [
      "terror psicológico",
      "survival horror",
      "animais animatrônicos",
      "jump scares",
      "noite",
      "sequela",
    ],
  },
  {
    titulo: "Bendy and the Ink Machine",
    link: "https://store.steampowered.com/app/605620/Bendy_and_the_Ink_Machine/",
    descricao: "Um estúdio de animação abandonado esconde segredos sombrios.",
    tags: [
      "terror psicológico",
      "mistério",
      "animação",
      "monstros de tinta",
      "abandono",
      "estúdio",
      "noir",
    ],
  },
  {
    titulo: "Little Nightmares",
    link: "https://store.steampowered.com/app/602050/Little_Nightmares/",
    descricao:
      "Uma jornada assustadora por um mundo sombrio e cheio de perigos.",
    tags: [
      "terror psicológico",
      "plataforma",
      "visual novel",
      "atmosfera sombria",
      "crianças",
      "monstros",
    ],
  },
  {
    titulo: "Amnesia: The Dark Descent",
    link: "https://store.steampowered.com/app/20720/Amnesia_The_Dark_Descent/",
    descricao:
      "Explore um castelo medieval assombrado e enfrente seus medos mais profundos.",
    tags: [
      "terror psicológico",
      "sobrenatural",
      "escuridão",
      "horror clássico",
      "medieval",
      "exploração",
      "medo",
    ],
  },
  {
    titulo: "Outlast",
    link: "https://store.steampowered.com/app/220200/Outlast/",
    descricao: "Sobreviva a um asilo abandonado repleto de horrores.",
    tags: [
      "survival horror",
      "primeira pessoa",
      "asilo",
      "loucura",
      "perseguição",
      "susto",
      "tense",
    ],
  },
  {
    titulo: "Dead Space",
    link: "https://store.steampowered.com/app/582010/Dead_Space/",
    descricao: "Enfrente criaturas alienígenas em uma espaçonave abandonada.",
    tags: ["survival horror", "ciência ficção", "espaço", "monstros", "ação"],
  },
  {
    titulo: "Resident Evil",
    link: "https://store.steampowered.com/app/37120/Resident_Evil/",
    descricao: "Sobreviva a um surto zumbi em uma mansão isolada.",
    tags: [
      "survival horror",
      "zumbis",
      "ação",
      "terceira pessoa",
      "mansão",
      "mistério",
    ],
  },
  {
    titulo: "Resident Evil 2",
    link: "https://store.steampowered.com/app/787400/Resident_Evil_2/",
    descricao:
      "Remake do clássico de terror, com gráficos e jogabilidade aprimorados.",
    tags: [
      "survival horror",
      "zumbis",
      "ação",
      "terceira pessoa",
      "policial",
      "remake",
    ],
  },
  {
    titulo: "Resident Evil 3",
    link: "https://store.steampowered.com/app/794220/Resident_Evil_3/",
    descricao: "Fuja da cidade de Raccoon City, infestada por zumbis.",
    tags: [
      "survival horror",
      "zumbis",
      "ação",
      "terceira pessoa",
      "fuga",
      "remake",
    ],
  },
  {
    titulo: "Resident Evil 4",
    link: "https://store.steampowered.com/app/592010/Resident_Evil_4/",
    descricao: "Uma aventura de ação em terceira pessoa em um vilarejo remoto.",
    tags: ["survival horror", "ação", "terceira pessoa", "vila", "parásitos"],
  },
  {
    titulo: "Resident Evil 5",
    link: "https://store.steampowered.com/app/22440/Resident_Cevil_5/",
    descricao: "Enfrente uma nova ameaça biológica em um ambiente africano.",
    tags: [
      "survival horror",
      "ação",
      "terceira pessoa",
      "cooperativo",
      "áfrica",
    ],
  },
  {
    titulo: "Resident Evil 7: Biohazard",
    link: "https://store.steampowered.com/app/391510/Resident_Evil_7_biohazard/",
    descricao:
      "Uma experiência de terror em primeira pessoa em uma mansão sulista.",
    tags: [
      "survival horror",
      "primeira pessoa",
      "mansão",
      "família",
      "mistério",
    ],
  },
  {
    titulo: "Resident Evil Village",
    link: "https://store.steampowered.com/app/1233210/Resident_Evil_Village/",
    descricao: "Uma aventura em uma vila europeia com criaturas grotescas.",
    tags: ["survival horror", "ação", "terceira pessoa", "vila", "monstros"],
  },
  {
    titulo: "Silent Hill 2",
    link: "https://www.mobygames.com/game/silent-hill-2",
    descricao:
      "Uma jornada psicológica em uma cidade nebulosa e aterrorizante.",
    tags: [
      "terror psicológico",
      "mistério",
      "cidade",
      "neblina",
      "monstros",
      "clássico",
    ],
  },
  {
    titulo: "Alien: Isolation",
    link: "https://store.steampowered.com/app/272650/Alien_Isolation/",
    descricao:
      "Sobreviva ao terror do Xenomorfo em uma estação espacial abandonada.",
    tags: [
      "survival horror",
      "ciência ficção",
      "espaço",
      "alienígena",
      "isolamento",
      "tense",
    ],
  },
  {
    titulo: "Phasmophobia",
    link: "https://store.steampowered.com/app/732090/Phasmophobia/",
    descricao:
      "Investigue locais assombrados com seus amigos e enfrente fantasmas.",
    tags: [
      "terror",
      "co-op",
      "multiplayer",
      "fantasmas",
      "investigar",
      "assombrado",
    ],
  },
  {
    titulo: "Poppy Playtime",
    link: "https://store.steampowered.com/app/1721470/Poppy_Playtime/",
    descricao:
      "Explore uma fábrica de brinquedos abandonada e evite criaturas assustadoras.",
    tags: ["terror psicológico", "puzzle", "fábrica", "brinquedos", "monstros"],
  },
  {
    titulo: "Five Nights at Freddy's: Security Breach",
    link: "https://store.steampowered.com/app/1282710/Five_Nights_at_Freddy_s_Security_Breach/",
    descricao:
      "Uma nova aventura em Freddy Fazbear's Mega Pizzaplex, com novos animatrônicos e desafios.",
    tags: [
      "terror psicológico",
      "survival horror",
      "animais animatrônicos",
      "noite",
      "infantil",
      "clássico",
    ],
  },
  {
    titulo: "Baldi's Basics in Education and Learning",
    link: "https://store.steampowered.com/app/767400/Baldis_Basics_in_Education_and_learning/",
    descricao:
      "Um jogo de terror psicológico ambientado em uma escola, com desafios matemáticos e um professor muito estranho.",
    tags: ["terror psicológico", "humor", "escola", "matemática", "monstros"],
  },
  {
    titulo: "Slender: The Eight Pages",
    link: "https://store.steampowered.com/app/268360/Slender_The_Eight_Pages/",
    descricao:
      "Explore uma floresta escura em busca de páginas perdidas, enquanto uma criatura aterrorizante te persegue.",
    tags: [
      "terror psicológico",
      "sobrevivência",
      "exploração",
      "suspense",
      "primeira pessoa",
    ],
  },
  {
    titulo: "Layers of Fear",
    link: "https://store.steampowered.com/app/319620/Layers_of_Fear/",
    descricao:
      "Uma jornada psicológica através de uma mansão assombrada, desvendando os segredos de um pintor perturbado.",
    tags: [
      "terror psicológico",
      "sombrio",
      "horror",
      "sobrenatural",
      "primeira pessoa",
    ],
  },
  {
    titulo: "Visage",
    link: "https://store.steampowered.com/app/646570/Visage/",
    descricao:
      "Um jogo de terror psicológico que explora temas como perda, luto e medo.",
    tags: [
      "terror psicológico",
      "atmosfera sombria",
      "sobrenatural",
      "exploração",
      "isolamento",
      "mistério",
    ],
  },
  {
    titulo: "Soma",
    link: "https://store.steampowered.com/app/247770/SOMA/",
    descricao:
      "Uma aventura de terror psicológico ambientada nas profundezas do oceano.",
    tags: [
      "terror psicológico",
      "sci-fi",
      "sobrenatural",
      "exploração",
      "isolamento",
    ],
  },
  {
    titulo: "The Forest",
    link: "https://store.steampowered.com/app/242760/The_Forest/",
    descricao: "Sobreviva em uma ilha canibal após um acidente de avião.",
    tags: ["survival horror", "mundo aberto", "construção", "multijogador"],
  },
  {
    titulo: "Darkwood",
    link: "https://store.steampowered.com/app/314610/Darkwood/",
    descricao:
      "Explore uma floresta sombria em um mundo aberto, repleto de criaturas e mistérios.",
    tags: [
      "survival horror",
      "pixel art",
      "roguelike",
      "atmosfera sombria",
      "mistério",
    ],
  },
  {
    titulo: "Silent Hill 2",
    link: "https://www.mobygames.com/game/silent-hill-2",
    descricao:
      "Uma jornada psicológica em uma cidade nebulosa e aterrorizante.",
    tags: [
      "terror psicológico",
      "mistério",
      "cidade",
      "neblina",
      "monstros",
      "clássico",
    ],
  },
  {
    titulo: "The Backrooms",
    link: "https://store.steampowered.com/app/1727220/The_Backrooms/",
    descricao:
      "Perca-se em um labirinto infinito de salas amarelas, onde o medo e a solidão te perseguem.",
    tags: [
      "terror psicológico",
      "mistério",
      "sobrenatural",
      "exploração",
      "labirinto",
      "atmosférico",
      "indie",
    ],
  },
  {
    titulo: "Fears to Fathom",
    link: "https://store.steampowered.com/app/tuasegueaqui/Fears_to_Fathom/",
    descricao: "Uma aventura de terror psicológico ambientada em um mundo submarino, explorando os medos mais profundos da humanidade.",
    tags: ["terror psicológico", "submarino", "mistério", "sobrenatural", "exploração", "isolamento"]
}
];
