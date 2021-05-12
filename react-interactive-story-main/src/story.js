const story = [
  {
    "id" : 1,
    "title" : "A Story of Swamp & Mud",
    "chapter": "An unexpected journey",
    "content" : "Cela fait maintenant 1 heure que vous suivez un papillon. Que voulez-vous, être distrait est tout un art ! Votre course poursuite vous a mené à travers champs, rivières (vous avez toujours les pieds mouillés d'ailleurs) et marais, marais dans lequel vous vous retrouvez à présent, pantois, face à une immense arche de pierre trônant sur une motte de boue. Le doute s'installe en vous tandis que vous retrouvez vos esprits et oubliez l'existence du papillon, évaporé depuis plusieurs secondes déjà dans la moiteur et puanteur de votre nouvel environnement. Le temps semble s'arrêter alors que plusieurs choix logiques émergent à la surface de votre esprit embrumé...",
    "choices": [
      {
        "content" : "Vous avez une envie pressante de toucher cette arche !",
        "target" : 2
      },
      {
        "content" : "Prudent, vous décidez de toucher avec les yeux les moindres recoins de l'arche, qui sait, elle pourrait être plus dangereuse qu'elle n'y paraît.",
        "target" : 3
      },
      {
        "content" : "Vous choisissez de la traverser, après tout, il ne vous est jamais rien arrivé de dangereux en traversant l'arc de triomphe.",
        "target" : 4
      },
      {
        "content" : "Courage, fuyons !",
        "target" : 5
      }
    ]
  },
  {
    "id" : 2,
    "title": "A Story of Swamp & Mud",
    "chapter" : "Whispers in the dark",
    "content" : "C'est plus fort que vous, votre main se pose sur la pierre étonnamment tiède et vous vous retrouvez projeté en arrière mais ne retombez pas sur le sol poisseux du marais. Impossible d'ouvrir les yeux ceci dit de toute façon, vous ne les sentez plus. Le réflexe de battre des paupières est envolé, tout ce qu'il reste est l'impression d'être vivant. Soudain, un vrombissement vous saisit, un son sourd caresse votre conscience et s'empare de votre être. Plus vous vous concentrez sur ce son, plus vous commencez à discerner ce qui ressemble à des mots...",
    "choices": [
      {
        "content" : "Aie confiance...",
        "target" : 6
      },
      {
        "content" : "Ne résiste pas...",
        "target" : 7
      },
      {
        "content" : "Que fais-tu là, cafard ?",
        "target" : 8
      }
    ]
  },
  {
    "id" : 3,
    "title" : "A Story of Swamp & Mud",
    "chapter" : "Within Temptation",
    "content" : "L'arche semble vrombir, vibrer à chaque oeillade que vous lui jetez. Il semble en jaillir des vagues de chaleur vous intimant de lui faire confiance. Allez-vous vous laisser séduire par son appel silencieux ?",
    "choices": [
      {
        "content" : "Sûrement pas, cette main ne touchera pas cette pierre même si elle semble se lever d'elle-même.",
        "target" : 6
      },
      {
        "content" : "Pourquoi pas, après tout, pourquoi avoir peur d'une arche de pierre ?",
        "target" : 7
      },
      {
        "content" : "Grave, let's go!",
        "target" : 8
      }
    ]
  },
  {
    "id" : 4,
    "title" : "A Story of Swamp & Mud",
    "chapter" : "Welcome to Burlesque!",
    "content" : "Aveuglé par une lumière transcendante, vous vous retrouvez incapable d'ouvrir les yeux. Le silence vous entoure tandis que votre corps ne vous semble plus exister. Vous entendez une petite voix à vos oreilles parler d'une voix posée, presque robotique : « ... dans 3, 2, 1 ». VIOUM, vous avez l'impression d'atterrir, vos pieds s'ancrent soudainement dans le sol vous faisant à moitié perdre l'équilibre sous la surprise du pseudo choc que vous venez de vivre. Vos oreilles bourdonnent, un son strident prend le dessus sur l'ambiance de votre nouvel environnement. Alors que vous plissez les yeux, tentant d'apercevoir le nouveau décor qui vous accueille, la première chose que vous voyez est ...",
    "choices": [
      {
        "content" : "Un piano bar.",
        "target" : 6
      },
      {
        "content" : "Un clown triste, une bouteille de verre à la main.",
        "target" : 7
      },
      {
        "content" : "Une danseuse de French Cancan.",
        "target" : 8
      }
    ]
  },
  {
    "id" : 5,
    "title" : "A Story of Swamp & Mud",
    "chapter" : "You coward... get back here!",
    "content" : "Pleutre que vous êtes, avoir peur d'une arche, êtes-vous sérieux ? Rofl... allez-y, rentrez chez vous sous les ricanements des corbeaux qui vous accompagnent dans votre fuite. Vous parvenez à sortir du marais pour vous retrouver ...",
    "choices": [
      {
        "content" : "Dans une forêt, un son d'ocarina familier vous y accueille.",
        "target" : 6
      },
      {
        "content" : "Face à une licorne.",
        "target" : 7
      },
      {
        "content" : "« Cerveaux ... Cerveaux ... » vous n'allez pas tarder à regretter votre choix car oui, c'est bien une horde de zombie qui s'approche de vous à une vitesse anormale. Le karma vous guette, si vous continuez de fuir, qui sait où vous allez finir ? Vous avez une chance sur trois, voulez-vous revenir en arrière et retourner au marais ?",
        "target" : 8
      }
    ]
  }
]

export default story