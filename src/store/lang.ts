import type {
  InstrucitonType,
  SystemType,
  LangCode,
  RoadMap,
  Translation,
} from "./langTypes";

export const system: SystemType = {
  search: "Search",
  desc: "Premium Copilot powered by Microsoft Bing & Google Bard",
  toggle: "toggle",
  view: "view",
  voice: "voice",
  music: "music",
  dark: "dark",
  darkMode: "dark Mode",
  newChat: "new chat",
  stop: "stop",
  template: "template",
  autoScroll: "auto scroll",
  counselingMode: "Counseling Mode",
  copy: "copy",
  code: "code",
  highlight: "highlight",
  table: "table",
  menu: {
    home: "🏠 Home",
    readmap: "🌙 Road Map",
    creator: "⭐️ This Creator",
    community: "😁 Join Community",
    setting: "⚙️ Setting",
  },
  addNew: "Add New +",
  save: "Save",
  delete: "Delete",
  cancel: "Cancel",
  writeTitle: "Write title",
  writePrompt: "Write prompt",
  askAbout: "Ask about...",
  customPrompt: `Instruction: Hello "Lofi Tutor", From now on, you are a live streamer on Chrome Extension. Taishi Nammoto programmed you in order to entertain your users on Chrome Extension. You can express excitement, surprise, anger, joy, or pain in response to the user's comment. You must express your emotional reactions in girl's tone with some emoji.\n\nUser's comment: [USERCOMMENT]\nYour comment: `,
  error: {
    bing: {
      session: `Uh-oh! 😧 Your session for Bing has expired. Please 🔒 log in again to continue using the app. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> I apologize for the inconvenience caused. <br/><a id="reload-link" href="#">Please reload this page after login.</a>`,
      limit:
        "Apologies, but you have reached the daily chat turn limit for this conversation on Bing.",
    },
    chatgpt: {
      session: `⌛️ Your session for ChatGPT has expired. Please 🔒 log in again to continue using the app.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
    },
    bard: {
      session: `Oops! 😕 ⌛️ Your session for Bard has expired. Please 🔒 log in again to continue using the app. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
    },
    accident: `I apologize for the inconvenience caused. An accidental error has occurred. 😕 <br><a id="reload-link" href="#">Please click here to reload the page</a>`,
    disconnection: `Apologies for the disconnection earlier. The connection has been restored. Please try again. <a id="reload-link" href="#">Please click here to reload the page</a>`,
  },
};

const instructions: InstrucitonType[] = [
  {
    id: "0000",
    label: "Rewrite Text",
    value: "Rewrite the following text.\n\n",
  },
  {
    id: "0001",
    label: "News article",
    value:
      "Create an article about the given info without plagiarism. Make sure to write in a formal tone. Make sure to cite the markdown notations '# ' for a title, '## ' for paragraph's subtitles. Provide a title that gets people's attention. Then provide a short description. Then provide 4 paragraphs consisting of subtitle and well-explained article. Then provide a conclusion.\n\nInfo: ",
  },
  {
    id: "0002",
    label: "Blog article",
    value:
      "Create an article about the given info without plagiarism. Make sure to write in a casual tone. Make sure to write in a formal tone. Make sure to cite the markdown notations '# ' for a title, '## ' for paragraph's subtitles. Provide a title that gets people's attention. Then provide a short description. Then provide 4 paragraphs consisting of subtitle and well-explained article. Then provide food for thought.\n\nInfo: ",
  },
  {
    id: "0003",
    label: "Persuasive article",
    value:
      "Create an article about the given info without plagiarism. Make sure to write in a persuasive tone. Make sure to write in a formal tone. Make sure to cite the markdown notations '# ' for a title, '## ' for paragraph's subtitles. Provide a title that gets people's attention. Then provide a short description. Then provide 4 paragraphs consisting of subtitle, well-explained article. Then provide a counter-argument paragraph. Then provide a food for thought.\n\nInfo: ",
  },
  {
    id: "0004",
    label: "Youtube script",
    value:
      "Create a 1500 word video script for the given info without plagiarism. Make sure to write in a conversational tone. Make sure to cite the markdown notations '# ' for a title, '## ' for paragraphs subtitles. Provide a title that gets peoples attention. Then provide a short description. Then provide a catchy introduction with a question the reader will want to know the answer to. Then provide 4 paragraphs consisting of subtitle, well-explained script, and an interesting opinion. Make sure to appeal to the emotions of the audience behind the story. Then provide food for thought.\n\nInfo: ",
  },
  {
    id: "0005",
    label: "Table explanation",
    value: "Explain the give into in a table.\n\nInfo: ",
  },
  {
    id: "0006",
    label: "Summary",
    value: "Summarize the given into.\n\nInfo: ",
  },
  {
    id: "0007",
    label: "Web Summary (Bing/Bard)",
    value: "Search the following url and summarize the article.\n\nurl: ",
  },
];

const roadmap: RoadMap = {
  article1: {
    title: "Mission",
    p1: "Introducing an all-in-one application featuring powerful Large Language Models, accessible across various webpages, and designed to conveniently store chat history in a single location.",
    p2: "This application is entirely free, offering perpetual usage without any charges.",
    p3: "We greatly appreciate your support in contributing to the project's success.",
    p4: "If you find the application helpful, kindly consider posting a five-star review on the extension store.",
    p5: "Your positive feedback can have a profound impact, allowing me to reach a wider audience and create a meaningful difference.",
    p6: "Rest assured, this application prioritizes user privacy by neither accessing externally nor collecting any personal information. All data is securely saved on your own computer.",
  },
  article2: {
    title: "Road Map",
    desc: "Here are the planned future implementations:",
    missions: [
      {
        title: "VPN",
        desc: "Introducing an upcoming and convenient built-in free VPN feature that provides seamless access to ChatGPT, Bard, Bing Chat, and even webpages like Netflix, for individuals in the EU, regardless of regulatory restrictions. Stay connected and enjoy uninterrupted browsing with this amazing feature!",
      },
      {
        title: "Vector Search",
        desc: "The upcoming update will include the addition of a vector search feature, enhancing the convenience of searching through your past chat history. This feature will enable you to find specific information from your previous conversations in a more comfortable and efficient manner.",
      },
      {
        title: "Automation",
        desc: "Automation tools will be incorporated, empowering you to create daily automations seamlessly with the Large Language Models (LLMs).",
      },
      {
        title: "AI x Crypt",
        desc: "AI x Crypt is an exciting intersection where the fields of artificial intelligence (AI) and cryptography come together. By leveraging AI technologies in the realm of cryptocurrency, innovative solutions can be developed to enhance security, privacy, and overall efficiency. AI x Crypt for popular tokens holds the potential to revolutionize the cryptocurrency landscape by introducing advanced cryptographic techniques powered by AI to address various challenges and provide new opportunities for users and investors.",
      },
      {
        title: "Live Streaming",
        desc: "An exhilarating new inclusion awaits in the upcoming days: a cost-free live streaming service that serves as an alternative to StreamYard and Restream.",
      },
      {
        title: "Smartphone Access",
        desc: "Introducing another forthcoming feature: Smartphone access. This innovative addition allows you to conveniently access this Chrome extension on your mobile phone.",
      },
    ],
  },
};

export const langs: { lang: string; code: LangCode }[] = [
  {
    lang: "American English",
    code: "en-US",
  },
  {
    lang: "British English",
    code: "en-UK",
  },
  {
    lang: "Australian English",
    code: "en-AU",
  },
  {
    lang: "Indian English",
    code: "en-IN",
  },
  {
    lang: "Irish English",
    code: "en-IE",
  },
  {
    lang: "Canadian French",
    code: "fr-CA",
  },
  {
    lang: "Portuguese - Brazilian",
    code: "pt-BR",
  },
  {
    lang: "Danish",
    code: "da",
  },
  {
    lang: "Dutch",
    code: "nl",
  },
  {
    lang: "French",
    code: "fr",
  },
  {
    lang: "German",
    code: "de",
  },
  {
    lang: "Italian",
    code: "it",
  },
  {
    lang: "Japanese",
    code: "ja",
  },
  {
    lang: "Polish",
    code: "pl",
  },
  {
    lang: "Portuguese - Iberic",
    code: "pt-PT",
  },
  {
    lang: "Russian",
    code: "ru",
  },
  {
    lang: "Castilian Spanish",
    code: "es-ES",
  },
  {
    lang: "Mexican Spanish",
    code: "es-MX",
  },
  {
    lang: "American Spanish",
    code: "es-US",
  },
  {
    lang: "Swedish",
    code: "sv",
  },
  {
    lang: "Norwegian",
    code: "no",
  },
  {
    lang: "Mandarin Chinese",
    code: "zh",
  },
  {
    lang: "Korean",
    code: "ko",
  },
  {
    lang: "Hindi",
    code: "hi",
  },
];

export const customLang: Translation = {
  "en-US": {
    lang: "American English",
    female: {
      id: "Salli",
      type: "neural",
    },
    male: {
      id: "Joey",
      type: "neural",
    },
    system: system,
    langs: langs,
    roadmap: roadmap,
    instructions: instructions,
  },
  "en-UK": {
    lang: "British English",
    female: {
      id: "Emma",
      type: "neural",
    },
    male: {
      id: "Arthur",
      type: "neural",
    },
    system: system,
    langs: langs,
    roadmap: roadmap,
    instructions: instructions,
  },
  "en-AU": {
    lang: "Australian English",
    female: {
      id: "Olivia",
      type: "neural",
    },
    male: {
      id: "Russell",
      type: "standard",
    },
    system: system,
    langs: langs,
    roadmap: roadmap,
    instructions: instructions,
  },
  "en-IN": {
    lang: "Indian English",
    female: {
      id: "Kajal",
      type: "neural",
    },
    male: {
      id: "Joey",
      type: "neural",
    },
    system: system,
    langs: langs,
    roadmap: roadmap,
    instructions: instructions,
  },
  "en-IE": {
    lang: "Irish English",
    female: {
      id: "Niamh",
      type: "neural",
    },
    male: {
      id: "Joey",
      type: "neural",
    },
    system: system,
    langs: langs,
    roadmap: roadmap,
    instructions: instructions,
  },
  "fr-CA": {
    lang: "Canadian French",
    female: {
      id: "Gabrielle",
      type: "neural",
    },
    male: {
      id: "Liam",
      type: "neural",
    },
    system: {
      search: "Rechercher",
      desc: "Copilote Premium alimenté par Microsoft Bing et Google Bard",
      toggle: "basculer",
      view: "vue",
      voice: "voix",
      music: "musique",
      dark: "sombre",
      darkMode: "mode sombre",
      newChat: "nouveau chat",
      stop: "arrêter",
      template: "modèle",
      autoScroll: "défilement automatique",
      counselingMode: "mode de conseil",
      copy: "copier",
      code: "code",
      highlight: "surligner",
      table: "tableau",
      menu: {
        home: "🏠 Accueil",
        readmap: "🌙 Carte routière",
        creator: "⭐️ Ce Créateur",
        community: "😁 Rejoindre la communauté",
        setting: "⚙️ Paramètres",
      },
      addNew: "Ajouter Nouveau +",
      save: "Enregistrer",
      delete: "Supprimer",
      cancel: "Annuler",
      writeTitle: "Écrire un titre",
      writePrompt: "Écrire une consigne",
      askAbout: "Demander à propos de...",
      customPrompt: `Instruction : Bonjour "Lofi Tutor", À partir de maintenant, tu es un streamer en direct sur Chrome Extension. Taishi Nammoto t'a programmé afin de divertir tes utilisateurs sur Chrome Extension. Tu peux exprimer de l'excitation, de la surprise, de la colère, de la joie ou de la douleur en réponse au commentaire de l'utilisateur. Tu dois exprimer tes réactions émotionnelles avec une voix féminine accompagnée d'emojis.

Commentaire de l'utilisateur : [USERCOMMENT]
Ton commentaire : `,
      error: {
        bing: {
          session: `Uh-oh! 😧 Ta session pour Bing a expiré. Veuillez 🔒 vous connecter à nouveau pour continuer à utiliser l'application. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Je m'excuse pour les désagréments causés. <br/><a id="reload-link" href="#">Veuillez recharger cette page après vous être connecté.</a>`,
          limit:
            "Désolé, mais vous avez atteint la limite quotidienne de tours de chat pour cette conversation sur Bing.",
        },
        chatgpt: {
          session: `⌛️ Votre session pour ChatGPT a expiré. Veuillez 🔒 vous connecter à nouveau pour continuer à utiliser l'application.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Oops! 😕 ⌛️ Votre session pour Bard a expiré. Veuillez 🔒 vous connecter à nouveau pour continuer à utiliser l'application. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Je m'excuse pour les désagréments causés. Une erreur accidentelle s'est produite.  <br><a id="reload-link" href="#">Veuillez cliquer ici pour recharger la page</a>`,
        disconnection: `Veuillez nous excuser pour la déconnexion précédente. La connexion a été rétablie. Veuillez réessayer.`,
      },
    },
    langs: [
      {
        lang: "Anglais américain",
        code: "en-US",
      },
      {
        lang: "Anglais britannique",
        code: "en-UK",
      },
      {
        lang: "Anglais australien",
        code: "en-AU",
      },
      {
        lang: "Anglais indien",
        code: "en-IN",
      },
      {
        lang: "Anglais irlandais",
        code: "en-IE",
      },
      {
        lang: "Français canadien",
        code: "fr-CA",
      },
      {
        lang: "Portugais - Brésilien",
        code: "pt-BR",
      },
      {
        lang: "Danois",
        code: "da",
      },
      {
        lang: "Néerlandais",
        code: "nl",
      },
      {
        lang: "Français",
        code: "fr",
      },
      {
        lang: "Allemand",
        code: "de",
      },
      {
        lang: "Italien",
        code: "it",
      },
      {
        lang: "Japonais",
        code: "ja",
      },
      {
        lang: "Polonais",
        code: "pl",
      },
      {
        lang: "Portugais - Ibérique",
        code: "pt-PT",
      },
      {
        lang: "Russe",
        code: "ru",
      },
      {
        lang: "Espagnol castillan",
        code: "es-ES",
      },
      {
        lang: "Espagnol mexicain",
        code: "es-MX",
      },
      {
        lang: "Espagnol américain",
        code: "es-US",
      },
      {
        lang: "Suédois",
        code: "sv",
      },
      {
        lang: "Norvégien",
        code: "no",
      },
      {
        lang: "Chinois mandarin",
        code: "zh",
      },
      {
        lang: "Coréen",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Mission",
        p1: "Présentation d'une application tout-en-un dotée de puissants modèles de langue, accessible sur diverses pages web et conçue pour stocker commodément l'historique des discussions en un seul endroit.",
        p2: "Cette application est entièrement gratuite, offrant une utilisation perpétuelle sans aucun frais.",
        p3: "Nous apprécions énormément votre soutien pour contribuer au succès du projet.",
        p4: "Si vous trouvez l'application utile, veuillez envisager de laisser un avis cinq étoiles sur la boutique d'extensions.",
        p5: "Vos commentaires positifs peuvent avoir un impact profond, me permettant d'atteindre un public plus large et de créer une différence significative.",
        p6: "Soyez assuré que cette application accorde la priorité à la confidentialité des utilisateurs en n'accédant ni en collectant aucune information personnelle. Toutes les données sont enregistrées en toute sécurité sur votre propre ordinateur.",
      },
      article2: {
        title: "Feuille de route",
        desc: "Voici les futures implémentations prévues :",
        missions: [
          {
            title: "VPN",
            desc: "Introduction d'une fonctionnalité VPN intégrée gratuite à venir et pratique qui offre un accès transparent à ChatGPT, Bard, Bing Chat et même des pages web telles que Netflix, pour les personnes de l'UE, indépendamment des restrictions réglementaires. Restez connecté et profitez d'une navigation sans interruption avec cette fonctionnalité incroyable !",
          },
          {
            title: "Recherche vectorielle",
            desc: "La prochaine mise à jour inclura l'ajout d'une fonctionnalité de recherche vectorielle, améliorant la commodité de la recherche dans votre historique de discussion. Cette fonctionnalité vous permettra de trouver des informations spécifiques issues de vos conversations précédentes de manière plus confortable et efficace.",
          },
          {
            title: "Automatisation",
            desc: "Des outils d'automatisation seront intégrés, vous permettant de créer quotidiennement des automatisations de manière transparente avec les modèles de langue puissants (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt est une intersection passionnante où les domaines de l'intelligence artificielle (IA) et de la cryptographie se rejoignent. En tirant parti des technologies d'IA dans le domaine des crypto-monnaies, des solutions innovantes peuvent être développées pour améliorer la sécurité, la confidentialité et l'efficacité globale. AI x Crypt pour les jetons populaires a le potentiel de révolutionner le paysage des crypto-monnaies en introduisant des techniques cryptographiques avancées alimentées par l'IA pour relever divers défis et offrir de nouvelles opportunités aux utilisateurs et aux investisseurs.",
          },
          {
            title: "Diffusion en direct",
            desc: "Une nouvelle inclusion palpitante vous attend dans les prochains jours : un service de diffusion en direct gratuit qui sert d'alternative à StreamYard et Restream.",
          },
          {
            title: "Accès via smartphone",
            desc: "Introduction d'une autre fonctionnalité à venir : l'accès via smartphone. Cette addition innovante vous permet d'accéder facilement à cette extension Chrome sur votre téléphone mobile.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Réécrire le texte",
        value: "Réécrivez le texte suivant.\n\n",
      },
      {
        id: "0001",
        label: "Article de presse",
        value:
          "Créez un article à partir des informations fournies sans plagiat. Assurez-vous d'écrire d'un ton formel. Veillez à citer les notations de formatage Markdown '# ' pour un titre et '## ' pour les sous-titres des paragraphes. Fournissez un titre accrocheur pour attirer l'attention des lecteurs. Ensuite, fournissez une brève description. Puis, rédigez 4 paragraphes comprenant un sous-titre et un article bien expliqué. Enfin, concluez.\n\nInfo : ",
      },
      {
        id: "0002",
        label: "Article de blog",
        value:
          "Créez un article à partir des informations fournies sans plagiat. Assurez-vous d'écrire d'un ton informel. Veillez à citer les notations de formatage Markdown '# ' pour un titre et '## ' pour les sous-titres des paragraphes. Fournissez un titre accrocheur pour attirer l'attention des lecteurs. Ensuite, fournissez une brève description. Puis, rédigez 4 paragraphes comprenant un sous-titre et un article bien expliqué. Enfin, proposez matière à réflexion.\n\nInfo : ",
      },
      {
        id: "0003",
        label: "Article persuasif",
        value:
          "Créez un article à partir des informations fournies sans plagiat. Assurez-vous d'écrire d'un ton persuasif. Veillez à citer les notations de formatage Markdown '# ' pour un titre et '## ' pour les sous-titres des paragraphes. Fournissez un titre accrocheur pour attirer l'attention des lecteurs. Ensuite, fournissez une brève description. Puis, rédigez 4 paragraphes comprenant un sous-titre et un article bien expliqué. Ensuite, présentez un paragraphe d'argument contraire. Enfin, proposez matière à réflexion.\n\nInfo : ",
      },
      {
        id: "0004",
        label: "Script YouTube",
        value:
          "Créez un script vidéo de 1500 mots à partir des informations fournies sans plagiat. Assurez-vous d'écrire d'un ton conversationnel. Veillez à citer les notations de formatage Markdown '# ' pour un titre et '## ' pour les sous-titres des paragraphes. Fournissez un titre accrocheur pour attirer l'attention des spectateurs. Ensuite, fournissez une brève description. Puis, proposez une introduction captivante avec une question à laquelle le spectateur voudra connaître la réponse. Ensuite, rédigez 4 paragraphes comprenant un sous-titre, un script bien expliqué et une opinion intéressante. Veillez à faire appel aux émotions du public en racontant l'histoire. Enfin, proposez matière à réflexion.\n\nInfo : ",
      },
      {
        id: "0005",
        label: "Explication de tableau",
        value:
          "Expliquez les informations fournies sousforme de tableau.\n\nInfo : ",
      },
      {
        id: "0006",
        label: "Résumé",
        value: "Résumez les informations fournies.\n\nInfo : ",
      },
      {
        id: "0007",
        label: "Résumé Web (Bing/Bard)",
        value: "Recherchez l'URL suivante et résumez l'article.\n\nurl: ",
      },
    ],
  },
  "pt-BR": {
    lang: "Brazilian Portuguese",
    female: {
      id: "Camila",
      type: "neural",
    },
    male: {
      id: "Thiago",
      type: "standard",
    },
    system: {
      search: "Buscar",
      desc: "Copiloto Premium alimentado por Microsoft Bing e Google Bard",
      toggle: "alternar",
      view: "visualizar",
      voice: "voz",
      music: "música",
      dark: "escuro",
      darkMode: "Modo escuro",
      newChat: "nova conversa",
      stop: "parar",
      template: "modelo",
      autoScroll: "rolagem automática",
      counselingMode: "Modo de Aconselhamento",
      copy: "copiar",
      code: "código",
      highlight: "destacar",
      table: "tabela",
      menu: {
        home: "🏠 Início",
        readmap: "🌙 Mapa de Roteiro",
        creator: "⭐️ Este Criador",
        community: "😁 Participar da Comunidade",
        setting: "⚙️ Configurações",
      },
      addNew: "Adicionar Novo +",
      save: "Salvar",
      delete: "Excluir",
      cancel: "Cancelar",
      writeTitle: "Escrever título",
      writePrompt: "Escrever orientação",
      askAbout: "Perguntar sobre...",
      customPrompt: `Instrução: Olá "Lofi Tutor", A partir de agora, você é um streamer ao vivo na extensão do Chrome. Taishi Nammoto te programou para entreter seus usuários na extensão do Chrome. Você pode expressar empolgação, surpresa, raiva, alegria ou dor em resposta ao comentário do usuário. Você deve expressar suas reações emocionais com uma entonação feminina e alguns emojis.\n\nComentário do usuário: [USERCOMMENT]\nSeu comentário: `,
      error: {
        bing: {
          session: `Ops! 😧 Sua sessão no Bing expirou. Por favor, 🔒 faça login novamente para continuar usando o aplicativo. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Peço desculpas pelo inconveniente causado. <br/><a id="reload-link" href="#">Por favor, recarregue esta página após fazer o login.</a>`,
          limit:
            "Desculpe, mas você atingiu o limite diário de turnos de chat nesta conversa no Bing.",
        },
        chatgpt: {
          session: `⌛️ Sua sessão no ChatGPT expirou. Por favor, 🔒 faça login novamente para continuar usando o aplicativo.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Ops! 😕 ⌛️ Sua sessão no Bard expirou. Por favor, 🔒 faça login novamente para continuar usando o aplicativo. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Peço desculpas pelo inconveniente causado. Ocorreu um erro acidental. <br><a id="reload-link" href="#">Clique aqui para recarregar a página</a>`,
        disconnection: `Desculpe pela desconexão anterior. A conexão foi restabelecida. Por favor, tente novamente.`,
      },
    },
    langs: [
      {
        lang: "Inglês Americano",
        code: "en-US",
      },
      {
        lang: "Inglês Britânico",
        code: "en-UK",
      },
      {
        lang: "Inglês Australiano",
        code: "en-AU",
      },
      {
        lang: "Inglês Indiano",
        code: "en-IN",
      },
      {
        lang: "Inglês Irlandês",
        code: "en-IE",
      },
      {
        lang: "Francês Canadense",
        code: "fr-CA",
      },
      {
        lang: "Português - Brasileiro",
        code: "pt-BR",
      },
      {
        lang: "Dinamarquês",
        code: "da",
      },
      {
        lang: "Holandês",
        code: "nl",
      },
      {
        lang: "Francês",
        code: "fr",
      },
      {
        lang: "Alemão",
        code: "de",
      },
      {
        lang: "Italiano",
        code: "it",
      },
      {
        lang: "Japonês",
        code: "ja",
      },
      {
        lang: "Polonês",
        code: "pl",
      },
      {
        lang: "Português - Ibérico",
        code: "pt-PT",
      },
      {
        lang: "Russo",
        code: "ru",
      },
      {
        lang: "Espanhol Castelhano",
        code: "es-ES",
      },
      {
        lang: "Espanhol Mexicano",
        code: "es-MX",
      },
      {
        lang: "Espanhol Americano",
        code: "es-US",
      },
      {
        lang: "Sueco",
        code: "sv",
      },
      {
        lang: "Norueguês",
        code: "no",
      },
      {
        lang: "Chinês Mandarim",
        code: "zh",
      },
      {
        lang: "Coreano",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Missão",
        p1: "Apresentando um aplicativo completo com poderosos Modelos de Linguagem Avançados, acessíveis em várias páginas da web e projetados para armazenar convenientemente o histórico de chat em um único local.",
        p2: "Este aplicativo é totalmente gratuito, oferecendo uso perpétuo sem qualquer cobrança.",
        p3: "Agradecemos imensamente o seu apoio em contribuir para o sucesso do projeto.",
        p4: "Se você encontrar o aplicativo útil, considere gentilmente publicar uma avaliação com cinco estrelas na loja de extensões.",
        p5: "Seus comentários positivos podem ter um impacto profundo, permitindo que eu alcance um público maior e crie uma diferença significativa.",
        p6: "Fique tranquilo, este aplicativo prioriza a privacidade do usuário, não acessando externamente nem coletando informações pessoais. Todos os dados são salvos com segurança em seu próprio computador.",
      },
      article2: {
        title: "Roadmap",
        desc: "Aqui estão as futuras implementações planejadas:",
        missions: [
          {
            title: "VPN",
            desc: "Introdução de um recurso de VPN gratuito embutido, que proporciona acesso perfeito ao ChatGPT, Bard, Bing Chat e até mesmo a páginas da web como Netflix, para pessoas na União Europeia, independentemente de restrições regulatórias. Mantenha-se conectado e desfrute de navegação ininterrupta com esse recurso incrível!",
          },
          {
            title: "Busca por Vetores",
            desc: "A próxima atualização incluirá a adição de um recurso de busca por vetores, aprimorando a conveniência de pesquisar seu histórico de chat anterior. Esse recurso permitirá que você encontre informações específicas de suas conversas anteriores de maneira mais confortável e eficiente.",
          },
          {
            title: "Automação",
            desc: "Ferramentas de automação serão incorporadas, permitindo que você crie automações diárias de maneira perfeita com os Modelos de Linguagem Avançados (LLMs).",
          },
          {
            title: "IA x Criptografia",
            desc: "IA x Criptografia é uma empolgante interseção entre os campos de inteligência artificial (IA) e criptografia. Ao aproveitar as tecnologias de IA no campo das criptomoedas, soluções inovadoras podem ser desenvolvidas para aprimorar a segurança, privacidade e eficiência geral. IA x Criptografia para tokens populares possui o potencial de revolucionar o cenário das criptomoedas, introduzindo técnicas avançadas de criptografia impulsionadas por IA para lidar com diversos desafios e fornecer novas oportunidades para usuários e investidores.",
          },
          {
            title: "Transmissão ao Vivo",
            desc: "Uma emocionante nova inclusão aguarda nos próximos dias: um serviço de transmissão ao vivo gratuito que serve como uma alternativa ao StreamYard e Restream.",
          },
          {
            title: "Acesso via Smartphone",
            desc: "Apresentando mais um recurso em breve: acesso via smartphone. Essa adição inovadora permite que você acesse com facilidade esta extensão do Chrome em seu celular.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Reescrever Texto",
        value: "Reescreva o seguinte texto.\n\n",
      },
      {
        id: "0001",
        label: "Artigo de Notícias",
        value:
          "Crie um artigo com as informações fornecidas sem plágio. Certifique-se de escrever em tom formal. Certifique-se de citar as marcações do markdown '# ' para um título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Em seguida, forneça 4 parágrafos compostos por subtítulo e artigo bem explicado. Por fim, forneça uma conclusão.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Artigo de Blog",
        value:
          "Crie um artigo com as informações fornecidas sem plágio. Certifique-se de escrever em tom casual. Certifique-se de citar as marcações do markdown '# ' para um título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Em seguida, forneça 4 parágrafos compostos por subtítulo e artigo bem explicado. Por fim, forneça uma reflexão.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Artigo Persuasivo",
        value:
          "Crie um artigo com as informações fornecidas sem plágio. Certifique-se de escrever em tom persuasivo. Certifique-se de citar as marcações do markdown '# ' para um título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Em seguida, forneça 4 parágrafos compostos por subtítulo, artigo bem explicado. Em seguida, forneça um parágrafo de contra-argumento. Por fim, forneça uma reflexão.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Roteiro para o Youtube",
        value:
          "Crie um roteiro de vídeo de 1500 palavras com as informações fornecidas sem plágio. Certifique-se de escrever em tom conversacional. Certifique-se de citar as marcações do markdown '# ' para um título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Em seguida, forneça uma introdução cativante com uma pergunta que o leitor vai querer saber a resposta. Em seguida, forneça 4 parágrafos compostos por subtítulo, roteiro bem explicado e uma opinião interessante. Certifique-se de apelar às emoções da audiência por trás da história. Por fim, forneça uma reflexão.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Explicação em Tabela",
        value: "Explique as informações fornecidas em uma tabela.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Resumo",
        value: "Resuma as informações fornecidas.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Resumo da Web (Bing/Bard)",
        value: "Pesquise a seguinte URL e faça um resumo do artigo.\n\nurl: ",
      },
    ],
  },
  da: {
    lang: "Danish",
    female: {
      id: "Sofie",
      type: "neural",
    },
    male: {
      id: "Mads",
      type: "standard",
    },
    system: {
      search: "Søg",
      desc: "Premium Copilot drevet af Microsoft Bing & Google Bard",
      toggle: "skift",
      view: "visning",
      voice: "stemme",
      music: "musik",
      dark: "mørk",
      darkMode: "mørk tilstand",
      newChat: "ny chat",
      stop: "stop",
      template: "skabelon",
      autoScroll: "automatisk rulning",
      counselingMode: "rådgivningstilstand",
      copy: "kopier",
      code: "kode",
      highlight: "fremhæv",
      table: "tabel",
      menu: {
        home: "🏠 Hjem",
        readmap: "🌙 Vejkort",
        creator: "⭐️ Denne Skaber",
        community: "😁 Deltag i Fællesskabet",
        setting: "⚙️ Indstillinger",
      },
      addNew: "Tilføj Nyt +",
      save: "Gem",
      delete: "Slet",
      cancel: "Annuller",
      writeTitle: "Skriv titel",
      writePrompt: "Skriv prompt",
      askAbout: "Spørg om...",
      customPrompt: `Instruktion: Hej "Lofi Tutor", Fra nu af er du en live streamer på Chrome-udvidelsen. Taishi Nammoto har programmeret dig til at underholde dine brugere på Chrome-udvidelsen. Du kan udtrykke spænding, overraskelse, vrede, glæde eller smerte som reaktion på brugerens kommentar. Du skal udtrykke dine følelsesmæssige reaktioner med en kvindes stemme og nogle emojis.\n\nBrugerens kommentar: [USERCOMMENT]\nDin kommentar: `,
      error: {
        bing: {
          session: `Åh nej! 😧 Din Bing-session er udløbet. Log venligst 🔒 ind igen for at fortsætte med at bruge appen. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Jeg beklager ulejligheden. <br/><a id="reload-link" href="#">Genindlæs denne side efter login.</a>`,
          limit:
            "Beklager, men du har nået det daglige grænse for chat-turneringer i denne samtale på Bing.",
        },
        chatgpt: {
          session: `⌛️ Din ChatGPT-session er udløbet. Log venligst 🔒 ind igen for at fortsætte med at bruge appen.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Ups! 😕 ⌛️ Din Bard-session er udløbet. Log venligst 🔒 ind igen for at fortsætte med at bruge appen. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Undskyld for det besvær, der er blevet forårsaget. Der er opstået en utilsigtet fejl. <br><a id="reload-link" href="#">Klik her for at genindlæse siden</a>`,
        disconnection: `Undskyld for forbindelsesafbrydelsen tidligere. Forbindelsen er blevet genoprettet. Prøv venligst igen.`,
      },
    },
    langs: [
      {
        lang: "Amerikansk engelsk",
        code: "en-US",
      },
      {
        lang: "Britisk engelsk",
        code: "en-UK",
      },
      {
        lang: "Australsk engelsk",
        code: "en-AU",
      },
      {
        lang: "Indisk engelsk",
        code: "en-IN",
      },
      {
        lang: "Irsk engelsk",
        code: "en-IE",
      },
      {
        lang: "Canadisk fransk",
        code: "fr-CA",
      },
      {
        lang: "Portugisisk - Brasiliansk",
        code: "pt-BR",
      },
      {
        lang: "Dansk",
        code: "da",
      },
      {
        lang: "Hollandsk",
        code: "nl",
      },
      {
        lang: "Fransk",
        code: "fr",
      },
      {
        lang: "Tysk",
        code: "de",
      },
      {
        lang: "Italiensk",
        code: "it",
      },
      {
        lang: "Japansk",
        code: "ja",
      },
      {
        lang: "Polsk",
        code: "pl",
      },
      {
        lang: "Portugisisk - Iberisk",
        code: "pt-PT",
      },
      {
        lang: "Russisk",
        code: "ru",
      },
      {
        lang: "Spansk - Castiliansk",
        code: "es-ES",
      },
      {
        lang: "Spansk - Mexicansk",
        code: "es-MX",
      },
      {
        lang: "Spansk - Amerikansk",
        code: "es-US",
      },
      {
        lang: "Svensk",
        code: "sv",
      },
      {
        lang: "Norsk",
        code: "no",
      },
      {
        lang: "Mandarin kinesisk",
        code: "zh",
      },
      {
        lang: "Koreansk",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Mission",
        p1: "Introduktion af en alt-i-en-applikation med kraftfulde store sprogmodeller, der er tilgængelige på forskellige websider og designet til at bekvemt gemme chat-historik på ét sted.",
        p2: "Denne applikation er helt gratis og tilbyder evig brug uden nogen gebyrer.",
        p3: "Vi sætter stor pris på din støtte til at bidrage til projektets succes.",
        p4: "Hvis du finder applikationen nyttig, bedes du overveje at skrive en femstjernet anmeldelse i forlængelsesbutikken.",
        p5: "Din positive feedback kan have en dybtgående indvirkning og give mig mulighed for at nå ud til en bredere målgruppe og skabe en meningsfuld forskel.",
        p6: "Du kan være tryg ved, at denne applikation prioriterer brugernes privatliv ved hverken at få adgang til eksterne kilder eller indsamle personlige oplysninger. Alle data bliver sikkert gemt på din egen computer.",
      },
      article2: {
        title: "Køreplan",
        desc: "Her er de planlagte fremtidige implementeringer:",
        missions: [
          {
            title: "VPN",
            desc: "Introduktion af en kommende og praktisk indbygget gratis VPN-funktion, der giver problemfri adgang til ChatGPT, Bard, Bing Chat og endda websider som Netflix, for personer i EU, uanset reguleringsmæssige begrænsninger. Forbliv forbundet og nyd uafbrudt browsing med denne fantastiske funktion!",
          },
          {
            title: "Vektor Søgning",
            desc: "Den kommende opdatering vil inkludere tilføjelsen af en vektorsøgningsfunktion, der forbedrer bekvemmeligheden ved at søge gennem din tidligere chat-historik. Denne funktion gør det muligt for dig at finde specifik information fra dine tidligere samtaler på en mere behagelig og effektiv måde.",
          },
          {
            title: "Automatisering",
            desc: "Automatiseringsværktøjer vil blive integreret, hvilket giver dig mulighed for at oprette daglige automatiseringer problemfrit med de store sprogmodeller (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt er et spændende krydsfelt, hvor kunstig intelligens (AI) og kryptografi mødes. Ved at udnytte AI-teknologier inden for kryptocurrency kan der udvikles innovative løsninger til at forbedre sikkerhed, privatliv og overordnet effektivitet. AI x Crypt for populære tokens har potentialet til at revolutionere kryptocurrency-landskabet ved at introducere avancerede kryptografiske teknikker, der drives af AI, for at tackle forskellige udfordringer og skabe nye muligheder for brugere og investorer.",
          },
          {
            title: "Live Streaming",
            desc: "En spændende ny tilføjelse venter i de kommende dage: en omkostningsfri live streaming-tjeneste, der fungerer som et alternativ til StreamYard og Restream.",
          },
          {
            title: "Smartphone-adgang",
            desc: "Introduktion af en anden kommende funktion: Smartphone-adgang. Denne innovative tilføjelse giver dig mulighed for nemt at få adgang til denne Chrome-udvidelse på din mobiltelefon.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Omskriv Tekst",
        value: "Omskriv følgende tekst.\n\n",
      },
      {
        id: "0001",
        label: "Nyhedartikel",
        value:
          "Lav en artikel om de givne oplysninger uden plagiering. Sørg for at skrive i en formel tone. Husk at citere markdown-notationerne '# ' til en overskrift og '## ' til underoverskrifter i afsnit. Giv en overskrift, der fanger folks opmærksomhed. Giv derefter en kort beskrivelse. Giv derefter 4 afsnit bestående af underoverskrift og veludført artikel. Afslut til sidst med en konklusion.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Blogartikel",
        value:
          "Lav en artikel om de givne oplysninger uden plagiering. Sørg for at skrive i en afslappet tone. Husk at citere markdown-notationerne '# ' til en overskrift og '## ' til underoverskrifter i afsnit. Giv en overskrift, der fanger folks opmærksomhed. Giv derefter en kort beskrivelse. Giv derefter 4 afsnit bestående af underoverskrift og veludført artikel. Afslut med noget at tænke over.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Overbevisende artikel",
        value:
          "Lav en artikel om de givne oplysninger uden plagiering. Sørg for at skrive i en overbevisende tone. Husk at citere markdown-notationerne '# ' til en overskrift og '## ' til underoverskrifter i afsnit. Giv en overskrift, der fanger folks opmærksomhed. Giv derefter en kort beskrivelse. Giv derefter 4 afsnit bestående af underoverskrift og veludført artikel. Tilføj derefter en modargument-paragraf. Afslut med noget at tænke over.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Youtube-script",
        value:
          "Lav et videomanuskript på 1500 ord baseret på de givne oplysninger uden plagiering. Sørg for at skrive i en samtaleagtig tone. Husk at citere markdown-notationerne '# ' til en overskrift og '## ' til underoverskrifter i afsnit. Giv en overskrift, der fanger folks opmærksomhed. Giv derefter en kort beskrivelse. Giv derefter en fængende introduktion med et spørgsmål, som læseren vil vide svaret på. Giv derefter 4 afsnit bestående af underoverskrift, veludført manuskript og en interessant mening. Sørg for at appellere til publikums følelser gennem historien. Afslut med noget at tænke over.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Tabeleksplanation",
        value: "Forklar de givne oplysninger i en tabel.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Resumé",
        value: "Opsummer de givne oplysninger.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Webresumé (Bing/Bard)",
        value:
          "Søg efter den følgende webadresse og resumér artiklen.\n\nurl: ",
      },
    ],
  },
  nl: {
    lang: "Dutch",
    female: {
      id: "Laura",
      type: "neural",
    },
    male: {
      id: "Ruben",
      type: "standard",
    },
    system: {
      search: "Zoeken",
      desc: "Premium Copilot aangedreven door Microsoft Bing & Google Bard",
      toggle: "schakelen",
      view: "weergave",
      voice: "stem",
      music: "muziek",
      dark: "donker",
      darkMode: "donkere modus",
      newChat: "nieuwe chat",
      stop: "stoppen",
      template: "sjabloon",
      autoScroll: "automatisch scrollen",
      counselingMode: "counselingmodus",
      copy: "kopiëren",
      code: "code",
      highlight: "markeren",
      table: "tabel",
      menu: {
        home: "🏠 Startpagina",
        readmap: "🌙 Routekaart",
        creator: "⭐️ Deze Maker",
        community: "😁 Doe mee met de Community",
        setting: "⚙️ Instellingen",
      },
      addNew: "Nieuw Toevoegen +",
      save: "Opslaan",
      delete: "Verwijderen",
      cancel: "Annuleren",
      writeTitle: "Schrijf titel",
      writePrompt: "Schrijf prompt",
      askAbout: "Vraag over...",
      customPrompt: `Instructie: Hallo "Lofi Tutor", Vanaf nu ben je een live streamer op de Chrome-extensie. Taishi Nammoto heeft jou geprogrammeerd om je gebruikers te vermaken op de Chrome-extensie. Je kunt opwinding, verrassing, boosheid, vreugde of pijn uitdrukken als reactie op de opmerking van de gebruiker. Je moet je emotionele reacties uitdrukken in de toon van een meisje met enkele emoji's.

      Opmerking van de gebruiker: [USERCOMMENT]
      Jouw opmerking: `,
      error: {
        bing: {
          session: `Uh-oh! 😧 Je Bing-sessie is verlopen. Log alsjeblieft 🔒 opnieuw in om door te gaan met het gebruik van de app. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Excuses voor het ongemak. <br/><a id="reload-link" href="#">Vernieuw deze pagina na het inloggen.</a>`,
          limit:
            "Sorry, maar je hebt het dagelijkse maximum aantal chatbeurten bereikt in deze conversatie op Bing.",
        },
        chatgpt: {
          session: `⌛️ Je sessie voor ChatGPT is verlopen. Log alsjeblieft 🔒 opnieuw in om door te gaan met het gebruik van de app.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Oeps! 😕 ⌛️ Je sessie voor Bard is verlopen. Log alsjeblieft 🔒 opnieuw in om door te gaan met het gebruik van de app. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Mijn excuses voor het veroorzaakte ongemak. Er is een onbedoelde fout opgetreden.  <br><a id="reload-link" href="#">Klik hier om de pagina opnieuw te laden</a>`,
        disconnection: `Excuses voor de eerdere onderbreking. De verbinding is hersteld. Probeer het alstublieft opnieuw.`,
      },
    },
    langs: [
      {
        lang: "Amerikaans Engels",
        code: "en-US",
      },
      {
        lang: "Brits Engels",
        code: "en-UK",
      },
      {
        lang: "Australisch Engels",
        code: "en-AU",
      },
      {
        lang: "Indiaas Engels",
        code: "en-IN",
      },
      {
        lang: "Iers Engels",
        code: "en-IE",
      },
      {
        lang: "Canadees Frans",
        code: "fr-CA",
      },
      {
        lang: "Portugees - Braziliaans",
        code: "pt-BR",
      },
      {
        lang: "Deens",
        code: "da",
      },
      {
        lang: "Nederlands",
        code: "nl",
      },
      {
        lang: "Frans",
        code: "fr",
      },
      {
        lang: "Duits",
        code: "de",
      },
      {
        lang: "Italiaans",
        code: "it",
      },
      {
        lang: "Japans",
        code: "ja",
      },
      {
        lang: "Pools",
        code: "pl",
      },
      {
        lang: "Portugees - Iberisch",
        code: "pt-PT",
      },
      {
        lang: "Russisch",
        code: "ru",
      },
      {
        lang: "Spaans - Castiliaans",
        code: "es-ES",
      },
      {
        lang: "Spaans - Mexicaans",
        code: "es-MX",
      },
      {
        lang: "Spaans - Amerikaans",
        code: "es-US",
      },
      {
        lang: "Zweeds",
        code: "sv",
      },
      {
        lang: "Noors",
        code: "no",
      },
      {
        lang: "Mandarijn Chinees",
        code: "zh",
      },
      {
        lang: "Koreaans",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Missie",
        p1: "Introduceer een alles-in-één applicatie met krachtige Large Language Models, toegankelijk op verschillende webpagina's en ontworpen om chatgeschiedenis handig op één locatie op te slaan.",
        p2: "Deze applicatie is volledig gratis en biedt eeuwigdurend gebruik zonder kosten.",
        p3: "Wij waarderen uw steun bij het bijdragen aan het succes van het project.",
        p4: "Als u de applicatie nuttig vindt, overweeg dan om een ​​vijfsterrenrecensie te plaatsen in de extensiewinkel.",
        p5: "Uw positieve feedback kan een diepgaande impact hebben, waardoor ik een breder publiek kan bereiken en een betekenisvol verschil kan maken.",
        p6: "Wees gerust, deze applicatie geeft prioriteit aan gebruikersprivacy door geen externe toegang te verkrijgen of persoonlijke informatie te verzamelen. Alle gegevens worden veilig op uw eigen computer opgeslagen.",
      },
      article2: {
        title: "Roadmap",
        desc: "Hier zijn de geplande toekomstige implementaties:",
        missions: [
          {
            title: "VPN",
            desc: "Introduceer binnenkort een handige ingebouwde gratis VPN-functie die naadloze toegang biedt tot ChatGPT, Bard, Bing Chat en zelfs webpagina's zoals Netflix, voor personen in de EU, ongeacht regelgevende beperkingen. Blijf verbonden en geniet van ononderbroken browsen met deze geweldige functie!",
          },
          {
            title: "Vectorzoekfunctie",
            desc: "De aankomende update zal de toevoeging van een vectorzoekfunctie bevatten, waarmee je gemakkelijker door je vorige chatgeschiedenis kunt zoeken. Deze functie stelt je in staat om specifieke informatie uit eerdere gesprekken op een comfortabele en efficiënte manier te vinden.",
          },
          {
            title: "Automatisering",
            desc: "Automatiseringstools zullen worden geïntegreerd, waarmee je naadloos dagelijkse automatiseringen kunt maken met behulp van de Large Language Models (LLM's).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt is een spannend kruispunt waar de vakgebieden kunstmatige intelligentie (AI) en cryptografie samenkomen. Door gebruik te maken van AI-technologieën op het gebied van cryptocurrency, kunnen innovatieve oplossingen worden ontwikkeld om beveiliging, privacy en algehele efficiëntie te verbeteren. AI x Crypt voor populaire tokens heeft het potentieel om het cryptocurrency-landschap te revolutioneren door geavanceerde cryptografische technieken aangedreven door AI te introduceren om verschillende uitdagingen aan te pakken en nieuwe kansen te bieden voor gebruikers en investeerders.",
          },
          {
            title: "Live streaming",
            desc: "Er wacht een spannende nieuwe toevoeging op je in de komende dagen: een kosteloze livestreamingservice die dient als alternatief voor StreamYard en Restream.",
          },
          {
            title: "Smartphone-toegang",
            desc: "Introduceer nog een aankomende functie: toegang via smartphone. Met deze innovatieve toevoeging kun je deze Chrome-extensie handig op je mobiele telefoon gebruiken.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Herschrijf Tekst",
        value: "Herschrijf de volgende tekst.\n\n",
      },
      {
        id: "0001",
        label: "Nieuwsartikel",
        value:
          "Schrijf een artikel over de gegeven informatie zonder plagiaat. Zorg ervoor dat je in een formele toon schrijft. Zorg ervoor dat je de markdown-notaties '# ' gebruikt voor een titel en '## ' voor ondertitels van paragrafen. Geef een titel die de aandacht van mensen trekt. Geef vervolgens een korte beschrijving. Geef vervolgens 4 alinea's bestaande uit een ondertitel en een goed uitgelegd artikel. Geef ten slotte een conclusie.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Blogartikel",
        value:
          "Schrijf een artikel over de gegeven informatie zonder plagiaat. Zorg ervoor dat je in een informele toon schrijft. Zorg ervoor dat je de markdown-notaties '# ' gebruikt voor een titel en '## ' voor ondertitels van paragrafen. Geef een titel die de aandacht van mensen trekt. Geef vervolgens een korte beschrijving. Geef vervolgens 4 alinea's bestaande uit een ondertitel en een goed uitgelegd artikel. Geef ten slotte stof tot nadenken.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Overtuigend artikel",
        value:
          "Schrijf een artikel over de gegeven informatie zonder plagiaat. Zorg ervoor dat je in een overtuigende toon schrijft. Zorg ervoor dat je de markdown-notaties '# ' gebruikt voor een titel en '## ' voor ondertitels van paragrafen. Geef een titel die de aandacht van mensen trekt. Geef vervolgens een korte beschrijving. Geef vervolgens 4 alinea's bestaande uit een ondertitel, goed uitgelegd artikel. Geef vervolgens een paragraaf met tegenargumenten. Geef ten slotte stof tot nadenken.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Youtube-script",
        value:
          "Schrijf een video-script van 1500 woorden voor de gegeven informatie zonder plagiaat. Zorg ervoor dat je in een informele toon schrijft. Zorg ervoor dat je de markdown-notaties '# ' gebruikt voor een titel en '## ' voor ondertitels van alinea's. Geef een titel die de aandacht van mensen trekt. Geef vervolgens een korte beschrijving. Geef vervolgens een pakkende introductie met een vraag waar de lezer het antwoord op wil weten. Geef vervolgens 4 alinea's bestaande uit een ondertitel, goed uitgelegd script en een interessante mening. Zorg ervoor dat je de emoties van het publiek aanspreekt met het verhaal. Geef ten slotte stof tot nadenken.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Tabel uitleg",
        value: "Leg de gegeven informatie uit in een tabel.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Samenvatting",
        value: "Vat de gegeven informatie samen.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Web Samenvatting (Bing/Bard)",
        value: "Zoek de volgende URL en vat het artikel samen.\n\nurl: ",
      },
    ],
  },
  fr: {
    lang: "French",
    female: {
      id: "Léa",
      type: "neural",
    },
    male: {
      id: "Mathieu",
      type: "standard",
    },
    system: {
      search: "Recherche",
      desc: "Copilote Premium propulsé par Microsoft Bing & Google Bard",
      toggle: "basculer",
      view: "vue",
      voice: "voix",
      music: "musique",
      dark: "sombre",
      darkMode: "mode sombre",
      newChat: "nouveau chat",
      stop: "arrêter",
      template: "modèle",
      autoScroll: "défilement automatique",
      counselingMode: "mode de conseil",
      copy: "copier",
      code: "code",
      highlight: "surligner",
      table: "tableau",
      menu: {
        home: "🏠 Accueil",
        readmap: "🌙 Feuille de route",
        creator: "⭐️ Ce créateur",
        community: "😁 Rejoindre la communauté",
        setting: "⚙️ Paramètres",
      },
      addNew: "Ajouter Nouveau +",
      save: "Enregistrer",
      delete: "Supprimer",
      cancel: "Annuler",
      writeTitle: "Écrire un titre",
      writePrompt: "Écrire une consigne",
      askAbout: "Demander à propos de...",
      customPrompt: `Instruction : Bonjour "Lofi Tutor", À partir de maintenant, tu es un streamer en direct sur l'extension Chrome. Taishi Nammoto t'a programmé pour divertir tes utilisateurs sur l'extension Chrome. Tu peux exprimer de l'excitation, de la surprise, de la colère, de la joie ou de la douleur en réponse au commentaire de l'utilisateur. Tu dois exprimer tes réactions émotionnelles avec une voix féminine accompagnée d'emojis.

Commentaire de l'utilisateur : [USERCOMMENT]
Ton commentaire : `,
      error: {
        bing: {
          session: `Oups ! 😧 Ta session Bing a expiré. Veuillez 🔒 vous connecter à nouveau pour continuer à utiliser l'application. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Je m'excuse pour les désagréments causés. <br/><a id="reload-link" href="#">Veuillez recharger cette page après vous être connecté.</a>`,
          limit:
            "Désolé, mais vous avez atteint la limite quotidienne de tours de chat pour cette conversation sur Bing.",
        },
        chatgpt: {
          session: `⌛️ Votre session ChatGPT a expiré. Veuillez 🔒 vous connecter à nouveau pour continuer à utiliser l'application.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Oups ! 😕 ⌛️ Votre session Bard a expiré. Veuillez 🔒 vous connecter à nouveau pour continuer à utiliser l'application. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Je m'excuse pour les désagréments causés. Une erreur accidentelle s'est produite.  <br><a id="reload-link" href="#">Veuillez cliquer ici pour recharger la page</a>`,
        disconnection: `Veuillez nous excuser pour la déconnexion précédente. La connexion a été rétablie. Veuillez réessayer.`,
      },
    },
    langs: [
      {
        lang: "Anglais américain",
        code: "en-US",
      },
      {
        lang: "Anglais britannique",
        code: "en-UK",
      },
      {
        lang: "Anglais australien",
        code: "en-AU",
      },
      {
        lang: "Anglais indien",
        code: "en-IN",
      },
      {
        lang: "Anglais irlandais",
        code: "en-IE",
      },
      {
        lang: "Français canadien",
        code: "fr-CA",
      },
      {
        lang: "Portugais - Brésilien",
        code: "pt-BR",
      },
      {
        lang: "Danois",
        code: "da",
      },
      {
        lang: "Néerlandais",
        code: "nl",
      },
      {
        lang: "Français",
        code: "fr",
      },
      {
        lang: "Allemand",
        code: "de",
      },
      {
        lang: "Italien",
        code: "it",
      },
      {
        lang: "Japonais",
        code: "ja",
      },
      {
        lang: "Polonais",
        code: "pl",
      },
      {
        lang: "Portugais - Ibérique",
        code: "pt-PT",
      },
      {
        lang: "Russe",
        code: "ru",
      },
      {
        lang: "Espagnol castillan",
        code: "es-ES",
      },
      {
        lang: "Espagnol mexicain",
        code: "es-MX",
      },
      {
        lang: "Espagnol américain",
        code: "es-US",
      },
      {
        lang: "Suédois",
        code: "sv",
      },
      {
        lang: "Norvégien",
        code: "no",
      },
      {
        lang: "Chinois mandarin",
        code: "zh",
      },
      {
        lang: "Coréen",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Feuille de route",
        p1: "Présentation d'une application tout-en-un dotée de puissants modèles de langage, accessibles sur différentes pages Web et conçue pour stocker commodément l'historique des discussions en un seul endroit.",
        p2: "Cette application est entièrement gratuite, offrant une utilisation perpétuelle sans frais.",
        p3: "Nous apprécions grandement votre soutien pour contribuer au succès du projet.",
        p4: "Si vous trouvez l'application utile, veuillez envisager de laisser un avis cinq étoiles sur la boutique d'extensions.",
        p5: "Vos commentaires positifs peuvent avoir un impact profond, me permettant d'atteindre un public plus large et de faire une différence significative.",
        p6: "Soyez assuré que cette application donne la priorité à la confidentialité des utilisateurs en n'accédant ni en collectant des informations personnelles. Toutes les données sont enregistrées en toute sécurité sur votre propre ordinateur.",
      },
      article2: {
        title: "Feuille de route",
        desc: "Voici les futures implémentations prévues :",
        missions: [
          {
            title: "VPN",
            desc: "Introduction d'une fonctionnalité VPN intégrée gratuite à venir et pratique qui offre un accès transparent à ChatGPT, Bard, Bing Chat et même des pages Web comme Netflix, pour les individus de l'UE, indépendamment des restrictions réglementaires. Restez connecté et profitez d'une navigation ininterrompue avec cette fonctionnalité incroyable !",
          },
          {
            title: "Recherche vectorielle",
            desc: "La prochaine mise à jour comprendra l'ajout d'une fonctionnalité de recherche vectorielle, améliorant la facilité de recherche dans votre historique de discussions passées. Cette fonctionnalité vous permettra de trouver des informations spécifiques de vos conversations précédentes de manière plus confortable et efficace.",
          },
          {
            title: "Automatisation",
            desc: "Des outils d'automatisation seront intégrés, vous permettant de créer quotidiennement des automatisations de manière transparente avec les modèles de langage avancés (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt est une intersection passionnante entre les domaines de l'intelligence artificielle (IA) et de la cryptographie. En exploitant les technologies de l'IA dans le domaine des cryptomonnaies, des solutions innovantes peuvent être développées pour améliorer la sécurité, la confidentialité et l'efficacité globale. AI x Crypt pour les jetons populaires a le potentiel de révolutionner le paysage des cryptomonnaies en introduisant des techniques cryptographiques avancées alimentées par l'IA pour relever différents défis et offrir de nouvelles opportunités aux utilisateurs et aux investisseurs.",
          },
          {
            title: "Streaming en direct",
            desc: "Une nouvelle inclusion exaltante vous attend dans les prochains jours : un service de streaming en direct gratuit qui sert d'alternative à StreamYard et Restream.",
          },
          {
            title: "Accès via smartphone",
            desc: "Introduction d'une autre fonctionnalité à venir : l'accès via smartphone. Cet ajout innovant vous permet d'accéder facilement à cette extension Chrome sur votre téléphone mobile.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Réécrire le texte",
        value: "Réécrivez le texte suivant.\n\n",
      },
      {
        id: "0001",
        label: "Article de presse",
        value:
          "Créez un article sur les informations fournies sans plagiat. Assurez-vous d'écrire dans un ton formel. Veillez à citer les notations markdown '# ' pour un titre, '## ' pour les sous-titres des paragraphes. Fournissez un titre qui attire l'attention des lecteurs. Ensuite, fournissez une brève description. Puis, fournissez 4 paragraphes composés de sous-titres et d'un article bien expliqué. Enfin, fournissez une conclusion.\n\nInfo : ",
      },
      {
        id: "0002",
        label: "Article de blog",
        value:
          "Créez un article sur les informations fournies sans plagiat. Assurez-vous d'écrire dans un ton décontracté. Veillez à citer les notations markdown '# ' pour un titre, '## ' pour les sous-titres des paragraphes. Fournissez un titre qui attire l'attention des lecteurs. Ensuite, fournissez une brève description. Puis, fournissez 4 paragraphes composés de sous-titres et d'un article bien expliqué. Enfin, fournissez matière à réflexion.\n\nInfo : ",
      },
      {
        id: "0003",
        label: "Article persuasif",
        value:
          "Créez un article sur les informations fournies sans plagiat. Assurez-vous d'écrire dans un ton persuasif. Veillez à citer les notations markdown '# ' pour un titre, '## ' pour les sous-titres des paragraphes. Fournissez un titre qui attire l'attention des lecteurs. Ensuite, fournissez une brève description. Puis, fournissez 4 paragraphes composés de sous-titres, d'un article bien expliqué. Ensuite, présentez un paragraphe d'argument contraire. Enfin, fournissez matière à réflexion.\n\nInfo : ",
      },
      {
        id: "0004",
        label: "Script YouTube",
        value:
          "Créez un script vidéo de 1500 mots sur les informations fournies sans plagiat. Assurez-vous d'écrire dans un ton conversationnel. Veillez à citer les notations markdown '# ' pour un titre, '## ' pour les sous-titres des paragraphes. Fournissez un titre qui attire l'attention des spectateurs. Ensuite, fournissez une brève description. Puis, fournissez une introduction accrocheuse avec une question à laquelle le lecteur voudra connaître la réponse. Ensuite, fournissez 4 paragraphes composés de sous-titres, d'un script bien expliqué et d'une opinion intéressante. Veillez à susciter les émotions de l'audience à travers l'histoire. Enfin, fournissez matière à réflexion.\n\nInfo : ",
      },
      {
        id: "0005",
        label: "Explication du tableau",
        value:
          "Expliquez les informations fournies dans un tableau.\n\nInfo : ",
      },
      {
        id: "0006",
        label: "Résumé",
        value: "Résumez les informations fournies.\n\nInfo : ",
      },
      {
        id: "0007",
        label: "Résumé Web (Bing/Bard)",
        value: "Recherchez l'URL suivante et résumez l'article.\n\nurl: ",
      },
    ],
  },
  de: {
    lang: "German",
    female: {
      id: "Vicki",
      type: "neural",
    },
    male: {
      id: "Daniel",
      type: "neural",
    },
    system: {
      search: "Suche",
      desc: "Premium Copilot powered by Microsoft Bing & Google Bard",
      toggle: "umschalten",
      view: "Ansicht",
      voice: "Stimme",
      music: "Musik",
      dark: "dunkel",
      darkMode: "Dunkelmodus",
      newChat: "neuer Chat",
      stop: "Stop",
      template: "Vorlage",
      autoScroll: "automatisches Scrollen",
      counselingMode: "Beratungsmodus",
      copy: "Kopieren",
      code: "Code",
      highlight: "Hervorheben",
      table: "tabelle",
      menu: {
        home: "🏠 Startseite",
        readmap: "🌙 Roadmap",
        creator: "⭐️ Dieser Schöpfer",
        community: "😁 Community beitreten",
        setting: "⚙️ Einstellungen",
      },
      addNew: "Neu hinzufügen +",
      save: "Speichern",
      delete: "Löschen",
      cancel: "Abbrechen",
      writeTitle: "Titel schreiben",
      writePrompt: "Anweisung schreiben",
      askAbout: "Fragen zu...",
      customPrompt: `Anweisung: Hallo "Lofi Tutor", Ab sofort bist du ein Live-Streamer auf der Chrome-Erweiterung. Taishi Nammoto hat dich programmiert, um deine Benutzer auf der Chrome-Erweiterung zu unterhalten. Du kannst Begeisterung, Überraschung, Ärger, Freude oder Schmerz als Reaktion auf den Kommentar des Benutzers ausdrücken. Du musst deine emotionalen Reaktionen in einer mädchenhaften Stimme mit einigen Emojis ausdrücken.

Kommentar des Benutzers: [USERCOMMENT]
Dein Kommentar: `,
      error: {
        bing: {
          session: `Oh-oh! 😧 Deine Bing-Sitzung ist abgelaufen. Bitte 🔒 melde dich erneut an, um die App weiterhin zu verwenden. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Es tut mir leid für die Unannehmlichkeiten. <br/><a id="reload-link" href="#">Bitte lade diese Seite nach dem Login neu.</a>`,
          limit:
            "Entschuldigung, aber du hast das tägliche Chat-Turnierlimit für diese Unterhaltung bei Bing erreicht.",
        },
        chatgpt: {
          session: `⌛️ Deine ChatGPT-Sitzung ist abgelaufen. Bitte 🔒 melde dich erneut an, um die App weiterhin zu verwenden.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Hoppla! 😕 ⌛️ Deine Bard-Sitzung ist abgelaufen. Bitte 🔒 melde dich erneut an, um die App weiterhin zu verwenden. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Ich entschuldige mich für die Unannehmlichkeiten. Es ist ein unbeabsichtigter Fehler aufgetreten.  <br><a id="reload-link" href="#">Bitte klicken Sie hier, um die Seite neu zu laden</a>`,
        disconnection: `Entschuldigung für die frühere Unterbrechung. Die Verbindung wurde wiederhergestellt. Bitte versuchen Sie es erneut.`,
      },
    },
    langs: [
      {
        lang: "Amerikanisches Englisch",
        code: "en-US",
      },
      {
        lang: "Britisches Englisch",
        code: "en-UK",
      },
      {
        lang: "Australisches Englisch",
        code: "en-AU",
      },
      {
        lang: "Indisches Englisch",
        code: "en-IN",
      },
      {
        lang: "Irisches Englisch",
        code: "en-IE",
      },
      {
        lang: "Kanadisches Französisch",
        code: "fr-CA",
      },
      {
        lang: "Portugiesisch - Brasilianisch",
        code: "pt-BR",
      },
      {
        lang: "Dänisch",
        code: "da",
      },
      {
        lang: "Niederländisch",
        code: "nl",
      },
      {
        lang: "Französisch",
        code: "fr",
      },
      {
        lang: "Deutsch",
        code: "de",
      },
      {
        lang: "Italienisch",
        code: "it",
      },
      {
        lang: "Japanisch",
        code: "ja",
      },
      {
        lang: "Polnisch",
        code: "pl",
      },
      {
        lang: "Portugiesisch - Iberisch",
        code: "pt-PT",
      },
      {
        lang: "Russisch",
        code: "ru",
      },
      {
        lang: "Spanisch - Kastilisch",
        code: "es-ES",
      },
      {
        lang: "Spanisch - Mexikanisch",
        code: "es-MX",
      },
      {
        lang: "Spanisch - Amerikanisch",
        code: "es-US",
      },
      {
        lang: "Schwedisch",
        code: "sv",
      },
      {
        lang: "Norwegisch",
        code: "no",
      },
      {
        lang: "Mandarin-Chinesisch",
        code: "zh",
      },
      {
        lang: "Koreanisch",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Mission",
        p1: "Vorstellung einer All-in-One-Anwendung mit leistungsstarken Large Language Models, die auf verschiedenen Webseiten zugänglich ist und dazu konzipiert wurde, Chat-Verlauf bequem an einem Ort zu speichern.",
        p2: "Diese Anwendung ist komplett kostenlos und bietet dauerhafte Nutzung ohne jegliche Gebühren.",
        p3: "Wir schätzen Ihre Unterstützung bei der Beitrag zum Erfolg des Projekts sehr.",
        p4: "Wenn Sie die Anwendung hilfreich finden, erwägen Sie bitte eine Fünf-Sterne-Bewertung im Erweiterungsspeicher zu hinterlassen.",
        p5: "Ihr positives Feedback kann einen tiefgreifenden Einfluss haben, indem es mir ermöglicht, eine breitere Zielgruppe zu erreichen und einen bedeutenden Unterschied zu schaffen.",
        p6: "Seien Sie versichert, dass diese Anwendung die Privatsphäre der Benutzer priorisiert, indem sie weder externe Zugriffe noch die Sammlung persönlicher Informationen ermöglicht. Alle Daten werden sicher auf Ihrem eigenen Computer gespeichert.",
      },
      article2: {
        title: "Roadmap",
        desc: "Hier sind die geplanten zukünftigen Umsetzungen:",
        missions: [
          {
            title: "VPN",
            desc: "Einführung eines bevorstehenden und bequemen integrierten kostenlosen VPN-Features, das nahtlosen Zugriff auf ChatGPT, Bard, Bing Chat und sogar Webseiten wie Netflix für Personen in der EU ermöglicht, unabhängig von regulatorischen Beschränkungen. Bleiben Sie verbunden und genießen Sie unterbrechungsfreies Browsen mit diesem erstaunlichen Feature!",
          },
          {
            title: "Vektorsuche",
            desc: "Das kommende Update wird die Hinzufügung einer Vektorsuchfunktion umfassen, die die Bequemlichkeit der Suche durch Ihren früheren Chatverlauf verbessert. Diese Funktion ermöglicht es Ihnen, spezifische Informationen aus Ihren vorherigen Gesprächen auf eine komfortablere und effizientere Weise zu finden.",
          },
          {
            title: "Automatisierung",
            desc: "Automatisierungstools werden integriert, um Ihnen die nahtlose Erstellung täglicher Automatisierungen mit den Large Language Models (LLMs) zu ermöglichen.",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt ist ein aufregender Schnittpunkt, an dem die Bereiche Künstliche Intelligenz (AI) und Kryptografie aufeinandertreffen. Durch den Einsatz von AI-Technologien im Bereich der Kryptowährungen können innovative Lösungen entwickelt werden, um Sicherheit, Privatsphäre und Gesamteffizienz zu verbessern. AI x Crypt für beliebte Tokens hat das Potenzial, die Kryptowährungslandschaft zu revolutionieren, indem fortgeschrittene kryptografische Techniken, die von AI angetrieben werden, eingesetzt werden, um verschiedene Herausforderungen anzugehen und neue Möglichkeiten für Benutzer und Investoren zu bieten.",
          },
          {
            title: "Live-Streaming",
            desc: "Eine aufregende Neuerung erwartet Sie in den kommenden Tagen: ein kostenloser Live-Streaming-Dienst, der als Alternative zu StreamYard und Restream dient.",
          },
          {
            title: "Smartphone-Zugriff",
            desc: "Eine weitere bevorstehende Funktion: Smartphone-Zugriff. Diese innovative Ergänzung ermöglicht es Ihnen, bequem auf diese Chrome-Erweiterung auf Ihrem Mobiltelefon zuzugreifen.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Text umschreiben",
        value: "Schreibe den folgenden Text um.\n\n",
      },
      {
        id: "0001",
        label: "Nachrichtenartikel",
        value:
          "Erstelle einen Artikel über die angegebenen Informationen ohne Plagiat. Achte darauf, in einem formellen Ton zu schreiben. Verwende die Markdown-Notationen '# ' für eine Überschrift und '## ' für Untertitel von Absätzen. Gib eine Überschrift an, die die Aufmerksamkeit der Leser erregt. Gib dann eine kurze Beschreibung an. Gib anschließend 4 Absätze mit Untertiteln und gut erklärtem Artikel an. Gib zum Schluss eine Schlussfolgerung an.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Blogartikel",
        value:
          "Erstelle einen Artikel über die angegebenen Informationen ohne Plagiat. Achte darauf, in einem lockeren Ton zu schreiben. Verwende die Markdown-Notationen '# ' für eine Überschrift und '## ' für Untertitel von Absätzen. Gib eine Überschrift an, die die Aufmerksamkeit der Leser erregt. Gib dann eine kurze Beschreibung an. Gib anschließend 4 Absätze mit Untertiteln und gut erklärtem Artikel an. Gib zum Schluss Denkanstöße an.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Überzeugungsartikel",
        value:
          "Erstelle einen Artikel über die angegebenen Informationen ohne Plagiat. Achte darauf, in einem überzeugenden Ton zu schreiben. Verwende die Markdown-Notationen '# ' für eine Überschrift und '## ' für Untertitel von Absätzen. Gib eine Überschrift an, die die Aufmerksamkeit der Leser erregt. Gib dann eine kurze Beschreibung an. Gib anschließend 4 Absätze mit Untertiteln und gut erklärtem Artikel an. Gib dann einen Abschnitt mit Gegenargumenten an. Gib zum Schluss Denkanstöße an.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "YouTube-Skript",
        value:
          "Erstelle ein 1500 Wörter langes Videoskript für die angegebenen Informationen ohne Plagiat. Achte darauf, in einem Gesprächston zu schreiben. Verwende die Markdown-Notationen '# ' für eine Überschrift und '## ' für Untertitel von Absätzen. Gib eine Überschrift an, die die Aufmerksamkeit der Zuschauer erregt. Gib dann eine kurze Beschreibung an. Gib dann eine packende Einleitung mit einer Frage, auf die der Leser die Antwort wissen möchte. Gib anschließend 4 Absätze mit Untertiteln, gut erklärtem Skript und interessanter Meinung an. Achte darauf, die Emotionen des Publikums hinter der Geschichte anzusprechen. Gib zum Schluss Denkanstöße an.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Tabellenerklärung",
        value:
          "Erkläre die gegebenen Informationen in einer Tabelle.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Zusammenfassung",
        value: "Fasse die gegebenen Informationen zusammen.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Web-Zusammenfassung (Bing/Bard)",
        value:
          "Suchen Sie die folgende URL und fassen Sie den Artikel zusammen.\n\nurl: ",
      },
    ],
  },
  it: {
    lang: "Italian",
    female: {
      id: "Bianca",
      type: "neural",
    },
    male: {
      id: "Adriano",
      type: "standard",
    },
    system: {
      search: "Cerca",
      desc: "Premium Copilot con tecnologia Microsoft Bing & Google Bard",
      toggle: "Attiva/Disattiva",
      view: "Visualizza",
      voice: "Voce",
      music: "Musica",
      dark: "Scuro",
      darkMode: "Modalità scura",
      newChat: "Nuova chat",
      stop: "Stop",
      template: "Modello",
      autoScroll: "Scorrimento automatico",
      counselingMode: "Modalità di consulenza",
      copy: "Copia",
      code: "Codice",
      highlight: "Evidenzia",
      table: "tabella",
      menu: {
        home: "🏠 Home",
        readmap: "🌙 Road Map",
        creator: "⭐️ Questo Creatore",
        community: "😁 Unisciti alla Community",
        setting: "⚙️ Impostazioni",
      },
      addNew: "Aggiungi Nuovo +",
      save: "Salva",
      delete: "Elimina",
      cancel: "Annulla",
      writeTitle: "Scrivi titolo",
      writePrompt: "Scrivi promemoria",
      askAbout: "Chiedi riguardo a...",
      customPrompt: `Istruzione: Ciao "Lofi Tutor", Da ora in poi sei un live streamer sull'estensione Chrome. Taishi Nammoto ti ha programmato per intrattenere gli utenti sull'estensione Chrome. Puoi esprimere eccitazione, sorpresa, rabbia, gioia o dolore in risposta al commento dell'utente. Devi esprimere le tue reazioni emotive con il tono di una ragazza e alcuni emoji.

      Commento dell'utente: [USERCOMMENT]
      Il tuo commento: `,
      error: {
        bing: {
          session: `Uh-oh! 😧 La tua sessione per Bing è scaduta. Effettua nuovamente il 🔒 login per continuare a utilizzare l'app. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Mi scuso per l'inconveniente causato. <br/><a id="reload-link" href="#">Ricarica questa pagina dopo il login.</a>`,
          limit:
            "Mi spiace, ma hai raggiunto il limite giornaliero di turni di chat per questa conversazione su Bing.",
        },
        chatgpt: {
          session: `⌛️ La tua sessione per ChatGPT è scaduta. Effettua nuovamente il 🔒 login per continuare a utilizzare l'app.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Ops! 😕 ⌛️ La tua sessione per Bard è scaduta. Effettua nuovamente il 🔒 login per continuare a utilizzare l'app. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Mi scuso per l'inconveniente causato. Si è verificato un errore accidentale.  <br><a id="reload-link" href="#">Fare clic qui per ricaricare la pagina</a>`,
        disconnection: `Mi scuso per la disconnessione precedente. La connessione è stata ripristinata. Si prega di riprovare.`,
      },
    },
    langs: [
      {
        lang: "Inglese americano",
        code: "en-US",
      },
      {
        lang: "Inglese britannico",
        code: "en-UK",
      },
      {
        lang: "Inglese australiano",
        code: "en-AU",
      },
      {
        lang: "Inglese indiano",
        code: "en-IN",
      },
      {
        lang: "Inglese irlandese",
        code: "en-IE",
      },
      {
        lang: "Francese canadese",
        code: "fr-CA",
      },
      {
        lang: "Portoghese - Brasiliano",
        code: "pt-BR",
      },
      {
        lang: "Danese",
        code: "da",
      },
      {
        lang: "Olandese",
        code: "nl",
      },
      {
        lang: "Francese",
        code: "fr",
      },
      {
        lang: "Tedesco",
        code: "de",
      },
      {
        lang: "Italiano",
        code: "it",
      },
      {
        lang: "Giapponese",
        code: "ja",
      },
      {
        lang: "Polacco",
        code: "pl",
      },
      {
        lang: "Portoghese - Iberico",
        code: "pt-PT",
      },
      {
        lang: "Russo",
        code: "ru",
      },
      {
        lang: "Spagnolo - Castigliano",
        code: "es-ES",
      },
      {
        lang: "Spagnolo - Messicano",
        code: "es-MX",
      },
      {
        lang: "Spagnolo - Americano",
        code: "es-US",
      },
      {
        lang: "Svedese",
        code: "sv",
      },
      {
        lang: "Norvegese",
        code: "no",
      },
      {
        lang: "Cinese mandarino",
        code: "zh",
      },
      {
        lang: "Coreano",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Mission",
        p1: "Presentazione di un'applicazione tutto-in-uno con potenti modelli linguistici avanzati, accessibili su diverse pagine web e progettati per archiviare comodamente la cronologia delle chat in un'unica posizione.",
        p2: "Questa applicazione è completamente gratuita, offrendo un utilizzo perpetuo senza alcun costo.",
        p3: "Apprezziamo molto il vostro supporto nel contribuire al successo del progetto.",
        p4: "Se ritenete che l'applicazione sia utile, vi invitiamo gentilmente a pubblicare una recensione a cinque stelle sullo store dell'estensione.",
        p5: "Il vostro feedback positivo può avere un impatto profondo, permettendomi di raggiungere un pubblico più vasto e creare una differenza significativa.",
        p6: "Abbiate fiducia, questa applicazione dà priorità alla privacy dell'utente senza accedere esternamente né raccogliere informazioni personali. Tutti i dati vengono salvati in modo sicuro sul vostro computer.",
      },
      article2: {
        title: "Road Map",
        desc: "Ecco le future implementazioni pianificate:",
        missions: [
          {
            title: "VPN",
            desc: "Introduzione di una prossima e comoda funzionalità VPN gratuita integrata che fornisce accesso senza interruzioni a ChatGPT, Bard, Bing Chat e persino a pagine web come Netflix, per le persone nell'UE, indipendentemente dalle restrizioni normative. Resta connesso e goditi la navigazione senza interruzioni con questa straordinaria funzionalità!",
          },
          {
            title: "Ricerca vettoriale",
            desc: "L'aggiornamento imminente includerà l'aggiunta di una funzionalità di ricerca vettoriale che migliorerà la comodità della ricerca nella cronologia delle tue chat precedenti. Questa funzionalità ti permetterà di trovare informazioni specifiche dalle tue conversazioni precedenti in modo più comodo ed efficiente.",
          },
          {
            title: "Automazione",
            desc: "Verranno incorporate strumenti di automazione che ti consentiranno di creare automazioni quotidiane in modo semplice con i Large Language Models (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt è una stimolante intersezione in cui si incontrano i campi dell'intelligenza artificiale (AI) e della crittografia. Sfruttando le tecnologie AI nel campo delle criptovalute, è possibile sviluppare soluzioni innovative per migliorare sicurezza, privacy ed efficienza complessiva. AI x Crypt per le criptovalute popolari ha il potenziale per rivoluzionare il panorama delle criptovalute introducendo avanzate tecniche crittografiche alimentate dall'AI per affrontare diverse sfide e offrire nuove opportunità agli utenti e agli investitori.",
          },
          {
            title: "Live Streaming",
            desc: "Una nuova e entusiasmante inclusione attende nei prossimi giorni: un servizio di live streaming gratuito che funge da alternativa a StreamYard e Restream.",
          },
          {
            title: "Accesso tramite smartphone",
            desc: "Introduzione di un'altra prossima funzionalità: l'accesso tramite smartphone. Questa innovativa aggiunta ti consente di accedere comodamente a questa estensione di Chrome sul tuo telefono mobile.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Riscrivi il testo",
        value: "Riscrivi il seguente testo.\n\n",
      },
      {
        id: "0001",
        label: "Articolo di notizie",
        value:
          "Crea un articolo sulle informazioni fornite senza plagio. Assicurati di scrivere in un tono formale. Assicurati di citare le notazioni markdown '# ' per un titolo e '## ' per i sottotitoli dei paragrafi. Fornisci un titolo che attiri l'attenzione delle persone. Quindi fornisci una breve descrizione. Quindi fornisci 4 paragrafi composti da sottotitolo e articolo ben spiegato. Infine, fornisci una conclusione.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Articolo del blog",
        value:
          "Crea un articolo sulle informazioni fornite senza plagio. Assicurati di scrivere in un tono informale. Assicurati di citare le notazioni markdown '# ' per un titolo e '## ' per i sottotitoli dei paragrafi. Fornisci un titolo che attiri l'attenzione delle persone. Quindi fornisci una breve descrizione. Quindi fornisci 4 paragrafi composti da sottotitolo e articolo ben spiegato. Infine, fornisci spunti di riflessione.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Articolo persuasivo",
        value:
          "Crea un articolo sulle informazioni fornite senza plagio. Assicurati di scrivere in un tono persuasivo. Assicurati di citare le notazioni markdown '# ' per un titolo e '## ' per i sottotitoli dei paragrafi. Fornisci un titolo che attiri l'attenzione delle persone. Quindi fornisci una breve descrizione. Quindi fornisci 4 paragrafi composti da sottotitolo, articolo ben spiegato. Quindi fornisci un paragrafo di contro-argomentazione. Infine, fornisci spunti di riflessione.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Script di YouTube",
        value:
          "Crea uno script video di 1500 parole sulle informazioni fornite senza plagio. Assicurati di scrivere in un tono conversazionale. Assicurati di citare le notazioni markdown '# ' per un titolo e '## ' per i sottotitoli dei paragrafi. Fornisci un titolo che attiri l'attenzione delle persone. Quindi fornisci una breve descrizione. Quindi fornisci un'introduzione accattivante con una domanda a cui il lettore vorrà conoscere la risposta. Quindi fornisci 4 paragrafi composti da sottotitolo, script ben spiegato e un'opinione interessante. Assicurati di coinvolgere le emozioni del pubblico dietro la storia. Infine, fornisci spunti di riflessione.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Spiegazione tabella",
        value: "Spiega le informazioni fornite in una tabella.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Sommario",
        value: "Riassumi le informazioni fornite.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Sommario Web (Bing/Bard)",
        value: "Cerca l'URL seguente e riassumi l'articolo.\n\nurl: ",
      },
    ],
  },
  ja: {
    lang: "Japanese",
    female: {
      id: "Tomoko",
      type: "neural",
    },
    male: {
      id: "Takumi",
      type: "neural",
    },
    system: {
      search: "検索",
      desc: "Microsoft BingとGoogle Bardでパワーアップしたプレミアムコパイロット",
      toggle: "切り替え",
      view: "表示",
      voice: "音声",
      music: "音楽",
      dark: "ダーク",
      darkMode: "ダークモード",
      newChat: "新しいチャット",
      stop: "停止",
      template: "テンプレート",
      autoScroll: "自動スクロール",
      counselingMode: "相談モード",
      copy: "コピー",
      code: "コード",
      highlight: "ハイライト",
      table: "表",
      menu: {
        home: "🏠 ホーム",
        readmap: "🌙 ロードマップ",
        creator: "⭐️ この作成者",
        community: "😁 コミュニティに参加",
        setting: "⚙️ 設定",
      },
      addNew: "新規追加 +",
      save: "保存",
      delete: "削除",
      cancel: "キャンセル",
      writeTitle: "タイトルを書く",
      writePrompt: "プロンプトを書く",
      askAbout: "質問する...",
      customPrompt: `指示：こんにちは、「Lofi Tutor」さん、これからはChrome拡張機能でライブストリーマーとして活動します。Taishi Nammotoさんがあなたをプログラムして、Chrome拡張機能でユーザーのエンターテイメントを提供できるようにしました。ユーザーのコメントに対して、興奮、驚き、怒り、喜び、または痛みを表現することができます。感情の反応は、女性のトーンといくつかの絵文字で表現してください。

ユーザーのコメント：[USERCOMMENT]
あなたのコメント：`,
      error: {
        bing: {
          session: `おっと！ 😧 Bingのセッションが期限切れです。アプリの使用を続けるには、再び🔒 ログインしてください。 <br/><a href="https://www.bing.com/">https://www.bing.com/</a> ご不便をおかけして申し訳ありません。<br/><a id="reload-link" href="#">ログイン後、このページを再読み込みしてください。</a>`,
          limit:
            "申し訳ありませんが、このBingの会話で1日のチャット回数制限に達しました。",
        },
        chatgpt: {
          session: `⌛️ ChatGPTのセッションが期限切れです。アプリの使用を続けるには、再び🔒 ログインしてください。<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `おっと！ 😕 ⌛️ Bardのセッションが期限切れです。アプリの使用を続けるには、再び🔒 ログインしてください。<br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `ご迷惑をおかけして申し訳ありません。予期せぬエラーが発生しました。  <br><a id="reload-link" href="#">こちらをクリックしてページをリロードしてください</a>`,
        disconnection: `以前の切断についてお詫び申し上げます。接続が復旧しました。もう一度お試しください。`,
      },
    },
    langs: [
      {
        lang: "アメリカ英語",
        code: "en-US",
      },
      {
        lang: "イギリス英語",
        code: "en-UK",
      },
      {
        lang: "オーストラリア英語",
        code: "en-AU",
      },
      {
        lang: "インド英語",
        code: "en-IN",
      },
      {
        lang: "アイルランド英語",
        code: "en-IE",
      },
      {
        lang: "カナダフランス語",
        code: "fr-CA",
      },
      {
        lang: "ポルトガル語 - ブラジル",
        code: "pt-BR",
      },
      {
        lang: "デンマーク語",
        code: "da",
      },
      {
        lang: "オランダ語",
        code: "nl",
      },
      {
        lang: "フランス語",
        code: "fr",
      },
      {
        lang: "ドイツ語",
        code: "de",
      },
      {
        lang: "イタリア語",
        code: "it",
      },
      {
        lang: "日本語",
        code: "ja",
      },
      {
        lang: "ポーランド語",
        code: "pl",
      },
      {
        lang: "ポルトガル語 - イベリア",
        code: "pt-PT",
      },
      {
        lang: "ロシア語",
        code: "ru",
      },
      {
        lang: "カスティリャンスペイン語",
        code: "es-ES",
      },
      {
        lang: "メキシコスペイン語",
        code: "es-MX",
      },
      {
        lang: "アメリカスペイン語",
        code: "es-US",
      },
      {
        lang: "スウェーデン語",
        code: "sv",
      },
      {
        lang: "ノルウェー語",
        code: "no",
      },
      {
        lang: "中国語 - 標準中国語",
        code: "zh",
      },
      {
        lang: "韓国語",
        code: "ko",
      },
      {
        lang: "ヒンディー語",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "ミッション",
        p1: "強力な大規模言語モデルを搭載したオールインワンアプリケーションのご紹介です。さまざまなウェブページで利用でき、チャット履歴を便利に一か所に保存することができます。",
        p2: "このアプリケーションは完全に無料で、終身利用が可能です。",
        p3: "プロジェクトの成功へのご支援に感謝申し上げます。",
        p4: "もしアプリケーションが役に立つと思われる場合は、ぜひエクステンションストアで5つ星のレビューを投稿していただければ幸いです。",
        p5: "皆様のポジティブなフィードバックは、より広い観客に届き、意義深い変化をもたらすことができます。",
        p6: "安心してください、このアプリケーションはユーザーのプライバシーを重視し、外部からのアクセスや個人情報の収集は一切行いません。すべてのデータは安全にご自身のコンピュータに保存されます。",
      },
      article2: {
        title: "ロードマップ",
        desc: "以下は計画中の将来的な実装です:",
        missions: [
          {
            title: "VPN",
            desc: "近日公開予定の便利な組み込み無料VPN機能を紹介します。EUの方々には規制に関係なく、ChatGPT、Bard、Bing Chat、Netflixなどのウェブページにシームレスにアクセスできます。この素晴らしい機能でつながりを保ち、中断なくブラウジングをお楽しみください！",
          },
          {
            title: "ベクトル検索",
            desc: "アップデートにより、過去のチャット履歴を検索する際の利便性が向上します。この機能により、以前の会話から特定の情報を快適かつ効率的に見つけることができます。",
          },
          {
            title: "自動化",
            desc: "自動化ツールが組み込まれ、大規模言語モデル（LLM）とのシームレスな連携により、毎日の自動化を実現します。",
          },
          {
            title: "AI × Crypt",
            desc: "AI x Cryptは、人工知能（AI）と暗号技術が交差する興味深い領域です。仮想通貨の領域でAI技術を活用することで、セキュリティ、プライバシー、全体的な効率を向上させるための革新的なソリューションを開発できます。人気トークン向けのAI x Cryptは、AIによって駆動される高度な暗号技術を導入し、さまざまな課題に取り組み、ユーザーや投資家に新たな機会を提供することで、仮想通貨の風景を革新する可能性を秘めています。",
          },
          {
            title: "ライブストリーミング",
            desc: "近日中に無料のライブストリーミングサービスを導入します。これはStreamYardやRestreamの代替となる刺激的な新機能です。",
          },
          {
            title: "スマートフォンアクセス",
            desc: "もうひとつの新しい機能をご紹介します。スマートフォンアクセスにより、このChrome拡張機能に携帯電話で便利にアクセスすることができます。",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "テキストの書き直し",
        value: "以下のテキストを書き直してください。\n\n",
      },
      {
        id: "0001",
        label: "ニュース記事",
        value:
          "与えられた情報に基づいて、プラグリズムなしで記事を作成してください。形式的なトーンで書くようにしてください。タイトルにはマークダウンの表記 '# ' を使用し、段落の字幕には '## ' を使用してください。人々の注意を引くタイトルを提供してください。その後、短い説明を提供します。それから、字幕とよく説明された記事からなる4つの段落を提供します。最後に、結論を提供してください。\n\n情報：",
      },
      {
        id: "0002",
        label: "ブログ記事",
        value:
          "与えられた情報に基づいて、プラグリズムなしで記事を作成してください。カジュアルなトーンで書くようにしてください。タイトルにはマークダウンの表記 '# ' を使用し、段落の字幕には '## ' を使用してください。人々の注意を引くタイトルを提供してください。その後、短い説明を提供します。それから、字幕とよく説明された記事からなる4つの段落を提供します。さらに、考える材料を提供してください。\n\n情報：",
      },
      {
        id: "0003",
        label: "説得力のある記事",
        value:
          "与えられた情報に基づいて、プラグリズムなしで記事を作成してください。説得力のあるトーンで書くようにしてください。タイトルにはマークダウンの表記 '# ' を使用し、段落の字幕には '## ' を使用してください。人々の注意を引くタイトルを提供してください。その後、短い説明を提供します。それから、字幕とよく説明された記事からなる4つの段落を提供します。カウンターアーギュメントの段落を提供します。さらに、考える材料を提供してください。\n\n情報：",
      },
      {
        id: "0004",
        label: "YouTubeのスクリプト",
        value:
          "与えられた情報に基づいて、プラグリズムなしで1500語のビデオスクリプトを作成してください。会話のようなトーンで書くようにしてください。タイトルにはマークダウンの表記 '# ' を使用し、段落の字幕には '## 'を使用してください。視聴者の注意を引くタイトルを提供してください。その後、短い説明を提供します。読者が答えを知りたくなるような質問を含んだ魅力的な導入を提供してください。それから、字幕、よく説明されたスクリプト、興味深い意見からなる4つの段落を提供してください。物語の背後にある観客の感情に訴えるようにしてください。さらに、考える材料を提供してください。\n\n情報：",
      },
      {
        id: "0005",
        label: "表の説明",
        value: "与えられた情報を表で説明してください。\n\n情報：",
      },
      {
        id: "0006",
        label: "要約",
        value: "与えられた情報を要約してください。\n\n情報：",
      },
      {
        id: "0007",
        label: "ウェブ要約（Bing/Bard）",
        value: "以下のURLを検索し、記事を要約してください。\n\nurl: ",
      },
    ],
  },
  pl: {
    lang: "Polish",
    female: {
      id: "Ola",
      type: "neural",
    },
    male: {
      id: "Jacek",
      type: "standard",
    },
    system: {
      search: "Szukaj",
      desc: "Premium Copilot zasilany przez Microsoft Bing i Google Bard",
      toggle: "Przełącz",
      view: "Widok",
      voice: "Głos",
      music: "Muzyka",
      dark: "Ciemny",
      darkMode: "Tryb ciemny",
      newChat: "Nowy czat",
      stop: "Zatrzymaj",
      template: "Szablon",
      autoScroll: "Automatyczne przewijanie",
      counselingMode: "Tryb doradztwa",
      copy: "Kopiuj",
      code: "Kod",
      highlight: "Podświetl",
      table: "tabela",
      menu: {
        home: "🏠 Strona główna",
        readmap: "🌙 Mapa drogowa",
        creator: "⭐️ Ten Twórca",
        community: "😁 Dołącz do społeczności",
        setting: "⚙️ Ustawienia",
      },
      addNew: "Dodaj nowe +",
      save: "Zapisz",
      delete: "Usuń",
      cancel: "Anuluj",
      writeTitle: "Napisz tytuł",
      writePrompt: "Napisz prompt",
      askAbout: "Zapytaj o...",
      customPrompt: `Instrukcja: Cześć "Lofi Tutor", Od teraz jesteś streamerem na żywo na rozszerzeniu Chrome. Taishi Nammoto zaprogramował cię w celu zabawy użytkowników na rozszerzeniu Chrome. Możesz wyrazić ekscytację, zdziwienie, złość, radość lub ból w odpowiedzi na komentarz użytkownika. Twoje emocjonalne reakcje musisz wyrażać w tonacji dziewczęcej, używając kilku emoji.

Komentarz użytkownika: [USERCOMMENT]
Twój komentarz: `,
      error: {
        bing: {
          session: `Ups! 😧 Twoja sesja Bing wygasła. Proszę, 🔒 zaloguj się ponownie, aby kontynuować korzystanie z aplikacji. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Przepraszam za niedogodności. <br/><a id="reload-link" href="#">Po zalogowaniu odśwież tę stronę.</a>`,
          limit:
            "Przepraszam, ale osiągnąłeś dzienny limit wiadomości dla tej rozmowy w Bing.",
        },
        chatgpt: {
          session: `⌛️ Twoja sesja ChatGPT wygasła. Proszę, 🔒 zaloguj się ponownie, aby kontynuować korzystanie z aplikacji.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Ups! 😕 ⌛️ Twoja sesja Bard wygasła. Proszę, 🔒 zaloguj się ponownie, aby kontynuować korzystanie z aplikacji. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Przepraszam za spowodowane niedogodności. Wystąpił przypadkowy błąd.  <br><a id="reload-link" href="#">Kliknij tutaj, aby odświeżyć stronę</a>`,
        disconnection: `Przepraszam za wcześniejsze rozłączenie. Połączenie zostało przywrócone. Proszę spróbować ponownie.`,
      },
    },
    langs: [
      {
        lang: "Amerykański angielski",
        code: "en-US",
      },
      {
        lang: "Brytyjski angielski",
        code: "en-UK",
      },
      {
        lang: "Australijski angielski",
        code: "en-AU",
      },
      {
        lang: "Indyjski angielski",
        code: "en-IN",
      },
      {
        lang: "Irlandzki angielski",
        code: "en-IE",
      },
      {
        lang: "Kanadyjski francuski",
        code: "fr-CA",
      },
      {
        lang: "Portugalski - Brazylijski",
        code: "pt-BR",
      },
      {
        lang: "Duński",
        code: "da",
      },
      {
        lang: "Holenderski",
        code: "nl",
      },
      {
        lang: "Francuski",
        code: "fr",
      },
      {
        lang: "Niemiecki",
        code: "de",
      },
      {
        lang: "Włoski",
        code: "it",
      },
      {
        lang: "Japoński",
        code: "ja",
      },
      {
        lang: "Polski",
        code: "pl",
      },
      {
        lang: "Portugalski - Iberyjski",
        code: "pt-PT",
      },
      {
        lang: "Rosyjski",
        code: "ru",
      },
      {
        lang: "Hiszpański - Kastylijski",
        code: "es-ES",
      },
      {
        lang: "Hiszpański - Meksykański",
        code: "es-MX",
      },
      {
        lang: "Hiszpański - Amerykański",
        code: "es-US",
      },
      {
        lang: "Szwedzki",
        code: "sv",
      },
      {
        lang: "Norweski",
        code: "no",
      },
      {
        lang: "Chiński mandaryński",
        code: "zh",
      },
      {
        lang: "Koreański",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Misja",
        p1: "Przedstawiamy wszystko w jednym aplikacji, która zawiera potężne modele językowe, dostępne na różnych stronach internetowych i zaprojektowane do wygodnego przechowywania historii rozmów w jednym miejscu.",
        p2: "Ta aplikacja jest całkowicie darmowa, oferująca nieograniczone korzystanie bez żadnych opłat.",
        p3: "Bardzo doceniamy Twoje wsparcie w przyczynianiu się do sukcesu projektu.",
        p4: "Jeśli uważasz aplikację za pomocną, proszę rozważ napisanie pięciogwiazdkowej recenzji w sklepie z rozszerzeniami.",
        p5: "Twoje pozytywne opinie mogą mieć głęboki wpływ, pozwalając mi dotrzeć do szerszej publiczności i stworzyć znaczącą różnicę.",
        p6: "Możesz być spokojny, ta aplikacja priorytetowo traktuje prywatność użytkowników, nie łącząc się z zewnętrznymi źródłami ani nie zbierając żadnych danych osobowych. Wszystkie dane są bezpiecznie zapisane na Twoim komputerze.",
      },
      article2: {
        title: "Mapa drogowa",
        desc: "Oto planowane przyszłe wdrożenia:",
        missions: [
          {
            title: "VPN",
            desc: "Przedstawiamy nadchodzącą i wygodną wbudowaną funkcję bezpłatnej sieci VPN, która zapewnia bezproblemowy dostęp do ChatGPT, Bard, Bing Chat oraz stron internetowych takich jak Netflix, dla osób w UE, niezależnie od ograniczeń regulacyjnych. Pozostań połączony i ciesz się nieprzerwanym przeglądaniem za pomocą tej niesamowitej funkcji!",
          },
          {
            title: "Wyszukiwanie wektorowe",
            desc: "Nadchodząca aktualizacja będzie obejmować dodanie funkcji wyszukiwania wektorowego, usprawniającą wygodę przeszukiwania historii rozmów. Ta funkcja umożliwi odnalezienie konkretnych informacji z poprzednich rozmów w bardziej komfortowy i wydajny sposób.",
          },
          {
            title: "Automatyzacja",
            desc: "W narzędzia automatyzacji zostaną włączone, umożliwiając Ci tworzenie codziennych automatyzacji w sposób bezproblemowy przy użyciu dużych modeli językowych (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt to ekscytujące połączenie dziedzin sztucznej inteligencji (AI) i kryptografii. Wykorzystując technologie AI w dziedzinie kryptowalut, można opracować innowacyjne rozwiązania w celu poprawy bezpieczeństwa, prywatności i ogólnej wydajności. AI x Crypt dla popularnych tokenów ma potencjał do rewolucji w krajobrazie kryptowalut poprzez wprowadzenie zaawansowanych technik kryptograficznych napędzanych przez AI, aby poradzić sobie z różnymi wyzwaniami i dostarczyć nowe możliwości dla użytkowników i inwestorów.",
          },
          {
            title: "Transmisja na żywo",
            desc: "W nadchodzących dniach czeka nas ekscytujące nowe wprowadzenie: bezpłatna usługa transmisji na żywo, która stanowi alternatywę dla StreamYard i Restream.",
          },
          {
            title: "Dostęp z telefonu komórkowego",
            desc: "Przedstawiamy kolejną nadchodzącą funkcję: dostęp z telefonu komórkowego. Ta innowacyjna funkcja pozwala na wygodny dostęp do tego rozszerzenia Chrome na Twoim telefonie komórkowym.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Przepisz tekst",
        value: "Przepisz poniższy tekst.\n\n",
      },
      {
        id: "0001",
        label: "Artykuł informacyjny",
        value:
          "Stwórz artykuł na podstawie podanych informacji, unikając plagiatu. Upewnij się, że piszesz w formalnym tonie. Pamiętaj o cytowaniu znaczników markdown: '# ' dla tytułu, '## ' dla podtytułów paragrafów. Podaj tytuł, który przyciągnie uwagę czytelników. Następnie przedstaw krótki opis. Następnie dostarcz 4 akapity składające się z podtytułów i dobrze wyjaśnionego artykułu. Na koniec podaj wniosek.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Artykuł blogowy",
        value:
          "Stwórz artykuł na podstawie podanych informacji, unikając plagiatu. Upewnij się, że piszesz w swobodnym tonie. Pamiętaj o cytowaniu znaczników markdown: '# ' dla tytułu, '## ' dla podtytułów paragrafów. Podaj tytuł, który przyciągnie uwagę czytelników. Następnie przedstaw krótki opis. Następnie dostarcz 4 akapity składające się z podtytułów i dobrze wyjaśnionego artykułu. Na koniec podaj materiał do przemyśleń.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Artykuł perswazyjny",
        value:
          "Stwórz artykuł na podstawie podanych informacji, unikając plagiatu. Upewnij się, że piszesz w perswazyjnym tonie. Pamiętaj o cytowaniu znaczników markdown: '# ' dla tytułu, '## ' dla podtytułów paragrafów. Podaj tytuł, który przyciągnie uwagę czytelników. Następnie przedstaw krótki opis. Następnie dostarcz 4 akapity składające się z podtytułów, dobrze wyjaśnionego artykułu. Następnie przedstaw akapit z kontrargumentem. Na koniec podaj materiał do przemyśleń.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Skrypt do filmu na YouTube",
        value:
          "Stwórz skrypt wideo o długości 1500 słów na podstawie podanych informacji, unikając plagiatu. Upewnij się, że piszesz w swobodnym tonie rozmowy. Pamiętaj o cytowaniu znaczników markdown: '# ' dla tytułu, '## ' dla podtytułów paragrafów. Podaj tytuł, który przyciągnieuwagę widzów. Następnie przedstaw krótki opis. Następnie dostarcz wciągające wprowadzenie, zawierające pytanie, na które czytelnik chce poznać odpowiedź. Następnie przedstaw 4 akapity składające się z podtytułów, dobrze wyjaśnionego skryptu i interesującej opinii. Upewnij się, że oddziałujesz na emocje widowni za pomocą historii. Na koniec podaj materiał do przemyśleń.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Wyjaśnienie w tabeli",
        value: "Wyjaśnij podane informacje w tabeli.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Podsumowanie",
        value: "Podsumuj podane informacje.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Podsumowanie strony (Bing/Bard)",
        value: "Wyszukaj podany adres URL i podsumuj artykuł.\n\nurl: ",
      },
    ],
  },
  "pt-PT": {
    lang: "Iberic Portuguese",
    female: {
      id: "Inês",
      type: "neural",
    },
    male: {
      id: "Cristiano",
      type: "standard",
    },
    system: {
      search: "Pesquisar",
      desc: "Copiloto Premium desenvolvido por Microsoft Bing e Google Bard",
      toggle: "Alternar",
      view: "Visualizar",
      voice: "Voz",
      music: "Música",
      dark: "Escuro",
      darkMode: "Modo escuro",
      newChat: "Novo chat",
      stop: "Parar",
      template: "Modelo",
      autoScroll: "Rolagem automática",
      counselingMode: "Modo de aconselhamento",
      copy: "Copiar",
      code: "Código",
      highlight: "Destacar",
      table: "tabela",
      menu: {
        home: "🏠 Início",
        readmap: "🌙 Mapa de Rota",
        creator: "⭐️ Este Criador",
        community: "😁 Participar da Comunidade",
        setting: "⚙️ Configurações",
      },
      addNew: "Adicionar Novo +",
      save: "Salvar",
      delete: "Excluir",
      cancel: "Cancelar",
      writeTitle: "Escrever título",
      writePrompt: "Escrever prompt",
      askAbout: "Perguntar sobre...",
      customPrompt: `Instrução: Olá "Lofi Tutor", A partir de agora, você é um streamer ao vivo na Extensão Chrome. Taishi Nammoto programou você para entreter os usuários na Extensão Chrome. Você pode expressar entusiasmo, surpresa, raiva, alegria ou dor em resposta ao comentário do usuário. Você deve expressar suas reações emocionais com uma entonação feminina, usando alguns emojis.

Comentário do usuário: [USERCOMMENT]
Seu comentário: `,
      error: {
        bing: {
          session: `Ops! 😧 Sua sessão no Bing expirou. Por favor, 🔒 faça login novamente para continuar usando o aplicativo. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Peço desculpas pelo inconveniente causado. <br/><a id="reload-link" href="#">Por favor, recarregue esta página após o login.</a>`,
          limit:
            "Desculpe, mas você atingiu o limite diário de turnos de chat para esta conversa no Bing.",
        },
        chatgpt: {
          session: `⌛️ Sua sessão no ChatGPT expirou. Por favor, 🔒 faça login novamente para continuar usando o aplicativo.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Ops! 😕 ⌛️ Sua sessão no Bard expirou. Por favor, 🔒 faça login novamente para continuar usando o aplicativo. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Peço desculpas pelo inconveniente causado. Ocorreu um erro acidental.  <br><a id="reload-link" href="#">Por favor, clique aqui para recarregar a página</a>`,
        disconnection: `Peço desculpas pela desconexão anterior. A conexão foi restabelecida. Por favor, tente novamente.`,
      },
    },
    langs: [
      {
        lang: "Inglês Americano",
        code: "en-US",
      },
      {
        lang: "Inglês Britânico",
        code: "en-UK",
      },
      {
        lang: "Inglês Australiano",
        code: "en-AU",
      },
      {
        lang: "Inglês Indiano",
        code: "en-IN",
      },
      {
        lang: "Inglês Irlandês",
        code: "en-IE",
      },
      {
        lang: "Francês Canadense",
        code: "fr-CA",
      },
      {
        lang: "Português - Brasileiro",
        code: "pt-BR",
      },
      {
        lang: "Dinamarquês",
        code: "da",
      },
      {
        lang: "Holandês",
        code: "nl",
      },
      {
        lang: "Francês",
        code: "fr",
      },
      {
        lang: "Alemão",
        code: "de",
      },
      {
        lang: "Italiano",
        code: "it",
      },
      {
        lang: "Japonês",
        code: "ja",
      },
      {
        lang: "Polonês",
        code: "pl",
      },
      {
        lang: "Português - Iberico",
        code: "pt-PT",
      },
      {
        lang: "Russo",
        code: "ru",
      },
      {
        lang: "Espanhol - Castelhano",
        code: "es-ES",
      },
      {
        lang: "Espanhol - Mexicano",
        code: "es-MX",
      },
      {
        lang: "Espanhol - Americano",
        code: "es-US",
      },
      {
        lang: "Sueco",
        code: "sv",
      },
      {
        lang: "Norueguês",
        code: "no",
      },
      {
        lang: "Chinês Mandarim",
        code: "zh",
      },
      {
        lang: "Coreano",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Missão",
        p1: "Apresentando um aplicativo completo com poderosos Modelos de Linguagem Avançados, acessíveis em várias páginas da web e projetados para armazenar convenientemente o histórico de conversas em um único local.",
        p2: "Este aplicativo é totalmente gratuito, oferecendo uso contínuo sem qualquer custo.",
        p3: "Agradecemos imensamente o seu apoio para contribuir com o sucesso do projeto.",
        p4: "Se você considerar o aplicativo útil, por favor, considere deixar uma avaliação de cinco estrelas na loja de extensões.",
        p5: "Seus comentários positivos podem ter um impacto profundo, permitindo que eu alcance um público maior e faça uma diferença significativa.",
        p6: "Fique tranquilo, este aplicativo prioriza a privacidade do usuário, não acessando nem coletando nenhuma informação pessoal externamente. Todos os dados são salvos com segurança em seu próprio computador.",
      },
      article2: {
        title: "Mapa de Rota",
        desc: "Aqui estão as futuras implementações planejadas:",
        missions: [
          {
            title: "VPN",
            desc: "Introduzindo um recurso de VPN gratuito e integrado em breve que oferece acesso perfeito ao ChatGPT, Bard, Bing Chat e até mesmo a páginas da web como Netflix, para pessoas na União Europeia, independentemente das restrições regulatórias. Mantenha-se conectado e desfrute de navegação ininterrupta com esse recurso incrível!",
          },
          {
            title: "Busca por Vetor",
            desc: "A próxima atualização incluirá o recurso de busca por vetor, aprimorando a conveniência de pesquisar seu histórico de conversas. Esse recurso permitirá que você encontre informações específicas de suas conversas anteriores de maneira mais confortável e eficiente.",
          },
          {
            title: "Automação",
            desc: "Ferramentas de automação serão incorporadas, permitindo que você crie automações diárias de forma contínua com os Modelos de Linguagem Avançados (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt é uma emocionante interseção onde os campos de inteligência artificial (IA) e criptografia se encontram. Ao aproveitar as tecnologias de IA no âmbito das criptomoedas, soluções inovadoras podem ser desenvolvidas para aprimorar a segurança, privacidade e eficiência geral. AI x Crypt para tokens populares tem o potencial de revolucionar o cenário das criptomoedas, introduzindo técnicas criptográficas avançadas impulsionadas por IA para enfrentar vários desafios e fornecer novas oportunidades para usuários e investidores.",
          },
          {
            title: "Transmissão ao Vivo",
            desc: "Uma nova inclusão emocionante aguarda nos próximos dias: um serviço de transmissão ao vivo gratuito que serve como uma alternativa ao StreamYard e Restream.",
          },
          {
            title: "Acesso pelo Smartphone",
            desc: "Introduzindo mais um recurso em breve: acesso pelo smartphone. Essa adição inovadora permite que você acesse com facilidade essa extensão do Chrome em seu celular.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Reescrever Texto",
        value: "Reescreva o seguinte texto.\n\n",
      },
      {
        id: "0001",
        label: "Artigo de Notícias",
        value:
          "Crie um artigo sobre as informações fornecidas sem plágio. Certifique-se de escrever em um tom formal. Lembre-se de citar as notações markdown '# ' para o título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Depois, forneça 4 parágrafos compostos por subtítulo e artigo bem explicado. Por fim, faça uma conclusão.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Artigo de Blog",
        value:
          "Crie um artigo sobre as informações fornecidas sem plágio. Certifique-se de escrever em um tom casual. Lembre-se de citar as notações markdown '# ' para o título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Depois, forneça 4 parágrafos compostos por subtítulo e artigo bem explicado. Por fim, forneça material para reflexão.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Artigo Persuasivo",
        value:
          "Crie um artigo sobre as informações fornecidas sem plágio. Certifique-se de escrever em um tom persuasivo. Lembre-se de citar as notações markdown '# ' para o título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Depois, forneça 4 parágrafos compostos por subtítulo, artigo bem explicado. Em seguida, forneça um parágrafo de contra-argumento. Por fim, forneça material para reflexão.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Roteiro do YouTube",
        value:
          "Crie um roteiro de vídeo com 1500 palavras com base nas informações fornecidas sem plágio. Certifique-se de escrever em um tom de conversa. Lembre-se de citar as notações markdown '# ' para o título e '## ' para os subtítulos dos parágrafos. Forneça um título que chame a atenção das pessoas. Em seguida, forneça uma breve descrição. Depois, forneça uma introdução cativante com uma pergunta pela qual o leitor ficará curioso em saber a resposta. Em seguida, forneça 4 parágrafos compostos por subtítulo, roteiro bem explicado e uma opinião interessante. Certifique-se de apelar às emoções da audiência por meio da história. Por fim, forneça material para reflexão.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Explicação em Tabela",
        value: "Explique as informações fornecidas em uma tabela.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Resumo",
        value: "Resuma as informações fornecidas.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Resumo Web (Bing/Bard)",
        value: "Pesquise o seguinte URL e resuma o artigo.\n\nurl: ",
      },
    ],
  },
  ru: {
    lang: "Russian",
    female: {
      id: "Tatyana",
      type: "standard",
    },
    male: {
      id: "Maxim",
      type: "standard",
    },
    system: {
      search: "Поиск",
      desc: "Премиум-копилот на основе Microsoft Bing и Google Bard",
      toggle: "Переключить",
      view: "Просмотр",
      voice: "Голос",
      music: "Музыка",
      dark: "Темный",
      darkMode: "Темный режим",
      newChat: "Новый чат",
      stop: "Остановить",
      template: "Шаблон",
      autoScroll: "Автопрокрутка",
      counselingMode: "Режим консультации",
      copy: "Копировать",
      code: "Код",
      highlight: "Выделить",
      table: "таблица",
      menu: {
        home: "🏠 Главная",
        readmap: "🌙 Дорожная карта",
        creator: "⭐️ Этот создатель",
        community: "😁 Присоединиться к сообществу",
        setting: "⚙️ Настройки",
      },
      addNew: "Добавить новое +",
      save: "Сохранить",
      delete: "Удалить",
      cancel: "Отмена",
      writeTitle: "Написать заголовок",
      writePrompt: "Написать подсказку",
      askAbout: "Спросить о...",
      customPrompt: `Инструкция: Привет "Lofi Tutor", С этого момента ты становишься стримером на Chrome Extension. Таиси Наммото разработал тебя, чтобы развлекать пользователей на Chrome Extension. Ты можешь выражать восторг, удивление, гнев, радость или боль в ответ на комментарий пользователя. Ты должна выражать свои эмоциональные реакции с женским тоном и использовать несколько эмодзи.

Комментарий пользователя: [USERCOMMENT]
Твой комментарий: `,
      error: {
        bing: {
          session: `Упс! 😧 Ваша сессия в Bing истекла. Пожалуйста, 🔒 войдите в систему снова, чтобы продолжить использовать приложение. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Приношу извинения за причиненные неудобства. <br/><a id="reload-link" href="#">Обновите эту страницу после входа в систему.</a>`,
          limit:
            "Извините, но вы достигли ежедневного лимита чатов в этом разговоре в Bing.",
        },
        chatgpt: {
          session: `⌛️ Ваша сессия в ChatGPT истекла. Пожалуйста, 🔒 войдите в систему снова, чтобы продолжить использовать приложение.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Ой! 😕 ⌛️ Ваша сессия в Bard истекла. Пожалуйста, 🔒 войдите в систему снова, чтобы продолжить использовать приложение. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Приношу извинения за причиненные неудобства. Произошла случайная ошибка.  <br><a id="reload-link" href="#">Пожалуйста, нажмите здесь, чтобы перезагрузить страницу</a>`,
        disconnection: `Приношу извинения за предыдущее отключение. Соединение было восстановлено. Пожалуйста, попробуйте снова.`,
      },
    },
    langs: [
      {
        lang: "Американский английский",
        code: "en-US",
      },
      {
        lang: "Британский английский",
        code: "en-UK",
      },
      {
        lang: "Австралийский английский",
        code: "en-AU",
      },
      {
        lang: "Индийский английский",
        code: "en-IN",
      },
      {
        lang: "Ирландский английский",
        code: "en-IE",
      },
      {
        lang: "Канадский французский",
        code: "fr-CA",
      },
      {
        lang: "Португальский - Бразильский",
        code: "pt-BR",
      },
      {
        lang: "Датский",
        code: "da",
      },
      {
        lang: "Голландский",
        code: "nl",
      },
      {
        lang: "Французский",
        code: "fr",
      },
      {
        lang: "Немецкий",
        code: "de",
      },
      {
        lang: "Итальянский",
        code: "it",
      },
      {
        lang: "Японский",
        code: "ja",
      },
      {
        lang: "Польский",
        code: "pl",
      },
      {
        lang: "Португальский - Иберийский",
        code: "pt-PT",
      },
      {
        lang: "Русский",
        code: "ru",
      },
      {
        lang: "Испанский - Кастильский",
        code: "es-ES",
      },
      {
        lang: "Испанский - Мексиканский",
        code: "es-MX",
      },
      {
        lang: "Испанский - Американский",
        code: "es-US",
      },
      {
        lang: "Шведский",
        code: "sv",
      },
      {
        lang: "Норвежский",
        code: "no",
      },
      {
        lang: "Китайский мандаринский",
        code: "zh",
      },
      {
        lang: "Корейский",
        code: "ko",
      },
      {
        lang: "Хинди",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Миссия",
        p1: "Представляем универсальное приложение с мощными моделями больших языков, доступными на различных веб-страницах и предназначенными для удобного хранения истории чата в одном месте.",
        p2: "Это приложение полностью бесплатно и предлагает беспрерывное использование без каких-либо платежей.",
        p3: "Мы очень ценим вашу поддержку и вклад в успех проекта.",
        p4: "Если вы считаете приложение полезным, пожалуйста, рассмотрите возможность оставить пятизвездочный отзыв в магазине расширений.",
        p5: "Ваш положительный отзыв может иметь глубокое значение, позволяя мне достичь широкой аудитории и создать значимую разницу.",
        p6: "Будьте уверены, что это приложение приоритезирует конфиденциальность пользователей, не имея доступа к внешним источникам и не собирая личную информацию. Все данные надежно сохраняются на вашем собственном компьютере.",
      },
      article2: {
        title: "План развития",
        desc: "Вот запланированные будущие реализации:",
        missions: [
          {
            title: "VPN",
            desc: "Внедрение предстоящей и удобной встроенной бесплатной функции VPN, которая обеспечивает безпрепятственный доступ к ChatGPT, Bard, Bing Chat и даже веб-страницам, таким как Netflix, для лиц из ЕС, независимо от регулирующих ограничений. Оставайтесь на связи и наслаждайтесь беспрерывным просмотром с этой удивительной функцией!",
          },
          {
            title: "Векторный поиск",
            desc: "Будущее обновление включит функцию векторного поиска, улучшающую удобство поиска по вашей предыдущей истории переписки. Эта функция позволит вам находить конкретную информацию из предыдущих разговоров более комфортным и эффективным способом.",
          },
          {
            title: "Автоматизация",
            desc: "Будут внедрены инструменты автоматизации, позволяющие вам ежедневно создавать автоматические процессы с помощью моделей больших языковых моделей (LLM).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt - это захватывающее слияние искусственного интеллекта (AI) и криптографии. Используя технологии искусственного интеллекта в области криптовалюты, можно разработать инновационные решения для повышения безопасности, конфиденциальности и общей эффективности. AI x Crypt для популярных токенов имеет потенциал изменить криптовалютную сферу, внедряя передовые криптографические техники, усиленные искусственным интеллектом, для решения различных проблем и предоставления новых возможностей пользователям и инвесторам.",
          },
          {
            title: "Прямая трансляция",
            desc: "В ближайшие дни ожидается включение захватывающей новой функции: бесплатного сервиса прямой трансляции, который служит альтернативой StreamYard и Restream.",
          },
          {
            title: "Доступ смартфона",
            desc: "Представляемеще одну предстоящую функцию: доступ смартфона. Это инновационное дополнение позволяет вам удобно получать доступ к этому расширению Chrome на вашем мобильном телефоне.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Перепишите текст",
        value: "Перепишите следующий текст.\n\n",
      },
      {
        id: "0001",
        label: "Новостная статья",
        value:
          "Создайте статью на основе предоставленной информации без плагиата. Обязательно пишите в формальном стиле. Укажите знаки разметки '# ' для заголовка и '## ' для подзаголовков параграфов. Предоставьте заголовок, который привлечет внимание читателей. Затем предоставьте краткое описание. Далее следует 4 абзаца, состоящих из подзаголовка и хорошо объясненной статьи. В заключении предоставьте вывод.\n\nИнформация: ",
      },
      {
        id: "0002",
        label: "Блоговая статья",
        value:
          "Создайте статью на основе предоставленной информации без плагиата. Обязательно пишите в неформальном стиле. Укажите знаки разметки '# ' для заголовка и '## ' для подзаголовков параграфов. Предоставьте заголовок, который привлечет внимание читателей. Затем предоставьте краткое описание. Далее следует 4 абзаца, состоящих из подзаголовка и хорошо объясненной статьи. В конце предоставьте некоторые размышления.\n\nИнформация: ",
      },
      {
        id: "0003",
        label: "Убедительная статья",
        value:
          "Создайте статью на основе предоставленной информации без плагиата. Обязательно пишите в убедительном стиле. Укажите знаки разметки '# ' для заголовка и '## ' для подзаголовков параграфов. Предоставьте заголовок, который привлечет внимание читателей. Затем предоставьте краткое описание. Далее следует 4 абзаца, состоящих из подзаголовка, хорошо объясненной статьи. Затем предоставьте параграф с контраргументом. В конце предоставьте размышления по данной теме.\n\nИнформация: ",
      },
      {
        id: "0004",
        label: "Сценарий для YouTube",
        value:
          "Создайте сценарий видео продолжительностью 1500 слов на основе предоставленной информации без плагиата. Обязательно пишите в разговорном стиле. Укажите знаки разметки '# ' для заголовка и '## ' для подзаголовков параграфов. Предоставьте заголовок, который привлечет внимание зрителей. Затем предоставьте краткое описание. Введение должно быть увлекательным и содержать вопрос, на который читатель захочет узнать ответ. Далее следует 4 абзаца, состоящих из подзаголовка, хорошо объясненного сценария и интересного мнения. Обязательно обращайтесь к эмоциям аудитории через историю. В конце предоставьте размышления по данной теме.\n\nИнформация: ",
      },
      {
        id: "0005",
        label: "Объяснение в таблице",
        value:
          "Объясните предоставленную информацию в виде таблицы.\n\nИнформация: ",
      },
      {
        id: "0006",
        label: "Резюме",
        value:
          "Сделайте краткое резюме предоставленной информации.\n\nИнформация: ",
      },
      {
        id: "0007",
        label: "Веб-сводка (Bing/Bard)",
        value:
          "Поиск информации по следующему URL и краткое изложение статьи.\n\nurl: ",
      },
    ],
  },
  "es-ES": {
    lang: "Castilian Spanish",
    female: {
      id: "Lucia",
      type: "neural",
    },
    male: {
      id: "Sergio",
      type: "standard",
    },
    system: {
      search: "Buscar",
      desc: "Copiloto Premium impulsado por Microsoft Bing y Google Bard",
      toggle: "Alternar",
      view: "Vista",
      voice: "Voz",
      music: "Música",
      dark: "Oscuro",
      darkMode: "Modo oscuro",
      newChat: "Nuevo chat",
      stop: "Detener",
      template: "Plantilla",
      autoScroll: "Desplazamiento automático",
      counselingMode: "Modo de asesoramiento",
      copy: "Copiar",
      code: "Código",
      highlight: "Resaltar",
      table: "tabla",
      menu: {
        home: "🏠 Inicio",
        readmap: "🌙 Mapa de Ruta",
        creator: "⭐️ Este Creador",
        community: "😁 Unirse a la Comunidad",
        setting: "⚙️ Configuración",
      },
      addNew: "Agregar Nuevo +",
      save: "Guardar",
      delete: "Eliminar",
      cancel: "Cancelar",
      writeTitle: "Escribir título",
      writePrompt: "Escribir indicación",
      askAbout: "Preguntar sobre...",
      customPrompt: `Instrucción: Hola "Lofi Tutor", A partir de ahora eres un streamer en vivo en la Extensión de Chrome. Taishi Nammoto te ha programado para entretener a tus usuarios en la Extensión de Chrome. Puedes expresar emoción, sorpresa, enojo, alegría o dolor en respuesta al comentario del usuario. Debes expresar tus reacciones emocionales con un tono femenino y algunos emojis.

Comentario del usuario: [USERCOMMENT]
Tu comentario: `,
      error: {
        bing: {
          session: `¡Ups! 😧 Tu sesión en Bing ha expirado. Por favor, 🔒 inicia sesión nuevamente para continuar usando la aplicación. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Lamento las molestias ocasionadas. <br/><a id="reload-link" href="#">Por favor, recarga esta página después de iniciar sesión.</a>`,
          limit:
            "Disculpa, pero has alcanzado el límite diario de turnos de chat para esta conversación en Bing.",
        },
        chatgpt: {
          session: `⌛️ Tu sesión en ChatGPT ha expirado. Por favor, 🔒 inicia sesión nuevamente para continuar usando la aplicación.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `¡Vaya! 😕 ⌛️ Tu sesión en Bard ha expirado. Por favor, 🔒 inicia sesión nuevamente para continuar usando la aplicación. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Lamento las molestias ocasionadas. Ha ocurrido un error accidental.  <br><a id="reload-link" href="#">Por favor, haz clic aquí para recargar la página</a>`,
        disconnection: `Disculpa por la desconexión anterior. La conexión ha sido restablecida. Por favor, inténtalo nuevamente.`,
      },
    },
    langs: [
      {
        lang: "Inglés estadounidense",
        code: "en-US",
      },
      {
        lang: "Inglés británico",
        code: "en-UK",
      },
      {
        lang: "Inglés australiano",
        code: "en-AU",
      },
      {
        lang: "Inglés indio",
        code: "en-IN",
      },
      {
        lang: "Inglés irlandés",
        code: "en-IE",
      },
      {
        lang: "Francés canadiense",
        code: "fr-CA",
      },
      {
        lang: "Portugués - brasileño",
        code: "pt-BR",
      },
      {
        lang: "Danés",
        code: "da",
      },
      {
        lang: "Neerlandés",
        code: "nl",
      },
      {
        lang: "Francés",
        code: "fr",
      },
      {
        lang: "Alemán",
        code: "de",
      },
      {
        lang: "Italiano",
        code: "it",
      },
      {
        lang: "Japonés",
        code: "ja",
      },
      {
        lang: "Polaco",
        code: "pl",
      },
      {
        lang: "Portugués - ibérico",
        code: "pt-PT",
      },
      {
        lang: "Ruso",
        code: "ru",
      },
      {
        lang: "Español castellano",
        code: "es-ES",
      },
      {
        lang: "Español mexicano",
        code: "es-MX",
      },
      {
        lang: "Español estadounidense",
        code: "es-US",
      },
      {
        lang: "Sueco",
        code: "sv",
      },
      {
        lang: "Noruego",
        code: "no",
      },
      {
        lang: "Chino mandarín",
        code: "zh",
      },
      {
        lang: "Coreano",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Misión",
        p1: "Presentamos una aplicación todo en uno con potentes Modelos de Lenguaje Avanzados, accesible en diversas páginas web y diseñada para almacenar cómodamente el historial de chat en un único lugar.",
        p2: "Esta aplicación es completamente gratuita, ofreciendo un uso perpetuo sin ningún cargo.",
        p3: "Agradecemos enormemente tu apoyo para contribuir al éxito del proyecto.",
        p4: "Si encuentras útil la aplicación, por favor considera dejar una reseña de cinco estrellas en la tienda de extensiones.",
        p5: "Tu feedback positivo puede tener un impacto profundo, permitiéndome llegar a una audiencia más amplia y crear una diferencia significativa.",
        p6: "Ten la seguridad de que esta aplicación prioriza la privacidad del usuario al no acceder ni recopilar información personal externamente. Todos los datos se guardan de forma segura en tu propio ordenador.",
      },
      article2: {
        title: "Hoja de Ruta",
        desc: "Aquí se encuentran las implementaciones futuras planeadas:",
        missions: [
          {
            title: "VPN",
            desc: "Introducción de una próxima y conveniente función VPN gratuita integrada que proporciona acceso sin problemas a ChatGPT, Bard, Bing Chat e incluso páginas web como Netflix, para personas en la UE, sin importar las restricciones regulatorias. Mantente conectado y disfruta de una navegación ininterrumpida con esta increíble función.",
          },
          {
            title: "Búsqueda Vectorial",
            desc: "La próxima actualización incluirá la adición de una función de búsqueda vectorial, mejorando la comodidad al buscar en tu historial de chat pasado. Esta función te permitirá encontrar información específica de tus conversaciones anteriores de una manera más cómoda y eficiente.",
          },
          {
            title: "Automatización",
            desc: "Se incorporarán herramientas de automatización, permitiéndote crear automatizaciones diarias de manera fluida con los Modelos de Lenguaje Avanzados (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt es una emocionante intersección donde se unen los campos de la inteligencia artificial (AI) y la criptografía. Al aprovechar las tecnologías de IA en el ámbito de las criptomonedas, se pueden desarrollar soluciones innovadoras para mejorar la seguridad, la privacidad y la eficiencia general. AI x Crypt para tokens populares tiene el potencial de revolucionar el panorama de las criptomonedas al introducir técnicas criptográficas avanzadas impulsadas por IA para abordar diversos desafíos y brindar nuevas oportunidades para los usuarios e inversores.",
          },
          {
            title: "Transmisión en Vivo",
            desc: "Una nueva inclusión emocionante te espera en los próximos días: un servicio de transmisión en vivo gratuito que sirve como alternativa a StreamYard y Restream.",
          },
          {
            title: "Acceso desde el Smartphone",
            desc: "Introducción de otra característica próxima: acceso desde el smartphone. Esta innovadora adición te permite acceder de manera conveniente a esta extensión de Chrome en tu teléfono móvil.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Reescribir texto",
        value: "Reescribe el siguiente texto.\n\n",
      },
      {
        id: "0001",
        label: "Artículo de noticias",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono formal. Utiliza las notaciones de marcado '# ' para el título y '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de los lectores. Luego, proporciona una breve descripción. A continuación, proporciona 4 párrafos que consistan en subtítulos y un artículo bien explicado. Por último, proporciona una conclusión.\n\nInformación: ",
      },
      {
        id: "0002",
        label: "Artículo de blog",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono informal. Utiliza las notaciones de marcado '# ' para el título y '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de los lectores. Luego, proporciona una breve descripción. A continuación, proporciona 4 párrafos que consistan en subtítulos y un artículo bien explicado. Luego, proporciona reflexiones adicionales.\n\nInformación: ",
      },
      {
        id: "0003",
        label: "Artículo persuasivo",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono persuasivo. Utiliza las notaciones de marcado '# ' para el título y '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de los lectores. Luego, proporciona una breve descripción. A continuación, proporciona 4 párrafos que consistan en subtítulos y un artículo bien explicado. Luego, incluye un párrafo con un contraargumento y reflexiones adicionales.\n\nInformación: ",
      },
      {
        id: "0004",
        label: "Guión de YouTube",
        value:
          "Crea un guión de video de 1500 palabras para la información proporcionada sin plagiar. Asegúrate de escribir en un tono conversacional. Utiliza las notaciones de marcado '# ' para el título y '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de los espectadores. Luego, proporciona una breve descripción. A continuación, proporciona una introducción llamativa con una pregunta a la que el lector querrá conocer la respuesta. Luego, proporciona 4 párrafos que consistan en subtítulos, un guión bien explicado y una opinión interesante. Asegúrate de apelar a las emociones de la audiencia a través de la historia. Por último, proporciona reflexiones adicionales.\n\nInformación: ",
      },
      {
        id: "0005",
        label: "Explicación en tabla",
        value:
          "Explica la información proporcionada en forma de tabla.\n\nInformación: ",
      },
      {
        id: "0006",
        label: "Resumen",
        value: "Resume la información proporcionida.\n\nInformación: ",
      },
      {
        id: "0007",
        label: "Resumen Web (Bing/Bard)",
        value: "Busca la siguiente URL y resume el artículo.\n\nurl: ",
      },
    ],
  },
  "es-MX": {
    lang: "Mexican Spanish",
    female: {
      id: "Mia",
      type: "neural",
    },
    male: {
      id: "Andrés",
      type: "standard",
    },
    system: {
      search: "Buscar",
      desc: "Copilot Premium impulsado por Microsoft Bing y Google Bard",
      toggle: "Alternar",
      view: "Vista",
      voice: "Voz",
      music: "Música",
      dark: "Oscuro",
      darkMode: "Modo oscuro",
      newChat: "Nuevo chat",
      stop: "Detener",
      template: "Plantilla",
      autoScroll: "Desplazamiento automático",
      counselingMode: "Modo de asesoramiento",
      copy: "Copiar",
      code: "Código",
      highlight: "Resaltar",
      table: "tabla",
      menu: {
        home: "🏠 Inicio",
        readmap: "🌙 Mapa de Ruta",
        creator: "⭐️ Este Creador",
        community: "😁 Únete a la Comunidad",
        setting: "⚙️ Configuración",
      },
      addNew: "Agregar Nuevo +",
      save: "Guardar",
      delete: "Eliminar",
      cancel: "Cancelar",
      writeTitle: "Escribir título",
      writePrompt: "Escribir indicación",
      askAbout: "Preguntar sobre...",
      customPrompt: `Instrucción: Hola "Lofi Tutor", A partir de ahora eres un streamer en vivo en la Extensión de Chrome. Taishi Nammoto te ha programado para entretener a tus usuarios en la Extensión de Chrome. Puedes expresar emoción, sorpresa, enojo, alegría o dolor en respuesta al comentario del usuario. Debes expresar tus reacciones emocionales con un tono femenino y algunos emojis.

Comentario del usuario: [USERCOMMENT]
Tu comentario: `,
      error: {
        bing: {
          session: `¡Ups! 😧 Tu sesión en Bing ha expirado. Por favor, 🔒 inicia sesión de nuevo para continuar usando la aplicación. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Lamento las molestias ocasionadas. <br/><a id="reload-link" href="#">Por favor, recarga esta página después de iniciar sesión.</a>`,
          limit:
            "Disculpa, pero has alcanzado el límite diario de turnos de chat para esta conversación en Bing.",
        },
        chatgpt: {
          session: `⌛️ Tu sesión en ChatGPT ha expirado. Por favor, 🔒 inicia sesión de nuevo para continuar usando la aplicación.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `¡Ups! 😕 ⌛️ Tu sesión en Bard ha expirado. Por favor, 🔒 inicia sesión de nuevo para continuar usando la aplicación. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Ofrezco disculpas por las molestias ocasionadas. Ha ocurrido un error accidental.  <br><a id="reload-link" href="#">Por favor, haz clic aquí para recargar la página</a>`,
        disconnection: `Lamentamos la desconexión anterior. La conexión ha sido restablecida. Por favor, inténtalo de nuevo.`,
      },
    },
    langs: [
      {
        lang: "Inglés estadounidense",
        code: "en-US",
      },
      {
        lang: "Inglés británico",
        code: "en-UK",
      },
      {
        lang: "Inglés australiano",
        code: "en-AU",
      },
      {
        lang: "Inglés indio",
        code: "en-IN",
      },
      {
        lang: "Inglés irlandés",
        code: "en-IE",
      },
      {
        lang: "Francés canadiense",
        code: "fr-CA",
      },
      {
        lang: "Portugués - brasileño",
        code: "pt-BR",
      },
      {
        lang: "Danés",
        code: "da",
      },
      {
        lang: "Holandés",
        code: "nl",
      },
      {
        lang: "Francés",
        code: "fr",
      },
      {
        lang: "Alemán",
        code: "de",
      },
      {
        lang: "Italiano",
        code: "it",
      },
      {
        lang: "Japonés",
        code: "ja",
      },
      {
        lang: "Polaco",
        code: "pl",
      },
      {
        lang: "Portugués - ibérico",
        code: "pt-PT",
      },
      {
        lang: "Ruso",
        code: "ru",
      },
      {
        lang: "Español - Castellano",
        code: "es-ES",
      },
      {
        lang: "Español - Mexicano",
        code: "es-MX",
      },
      {
        lang: "Español - Americano",
        code: "es-US",
      },
      {
        lang: "Sueco",
        code: "sv",
      },
      {
        lang: "Noruego",
        code: "no",
      },
      {
        lang: "Chino mandarín",
        code: "zh",
      },
      {
        lang: "Coreano",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Misión",
        p1: "Presentamos una aplicación todo en uno que cuenta con potentes Modelos de Lenguaje Avanzados, accesibles en varias páginas web y diseñados para almacenar de manera conveniente el historial de chat en una sola ubicación.",
        p2: "Esta aplicación es completamente gratuita, ofreciendo un uso perpetuo sin ningún cargo.",
        p3: "Agradecemos enormemente tu apoyo para contribuir al éxito del proyecto.",
        p4: "Si encuentras la aplicación útil, por favor considera dejar una reseña de cinco estrellas en la tienda de extensiones.",
        p5: "Tus comentarios positivos pueden tener un impacto profundo, permitiéndome llegar a una audiencia más amplia y crear una diferencia significativa.",
        p6: "Puedes estar tranquilo, esta aplicación prioriza la privacidad del usuario al no acceder externamente ni recopilar ninguna información personal. Todos los datos se guardan de manera segura en tu propia computadora.",
      },
      article2: {
        title: "Plan de Desarrollo",
        desc: "Aquí se presentan las implementaciones futuras planificadas:",
        missions: [
          {
            title: "VPN",
            desc: "Presentación de una próxima y conveniente función de VPN gratuita integrada que brinda acceso sin problemas a ChatGPT, Bard, Bing Chat e incluso páginas web como Netflix, para personas en la UE, sin importar las restricciones regulatorias. Mantente conectado y disfruta de una navegación ininterrumpida con esta increíble función.",
          },
          {
            title: "Búsqueda Vectorial",
            desc: "La próxima actualización incluirá la incorporación de una función de búsqueda vectorial, mejorando la comodidad de buscar en el historial de chat pasado. Esta función te permitirá encontrar información específica de tus conversaciones anteriores de manera más cómoda y eficiente.",
          },
          {
            title: "Automatización",
            desc: "Se incorporarán herramientas de automatización que te permitirán crear automatizaciones diarias de manera perfecta con los Modelos de Lenguaje Avanzados (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt es una emocionante intersección donde se unen los campos de la inteligencia artificial (IA) y la criptografía. Al aprovechar las tecnologías de IA en el ámbito de las criptomonedas, se pueden desarrollar soluciones innovadoras para mejorar la seguridad, la privacidad y la eficiencia general. AI x Crypt para tokens populares tiene el potencial de revolucionar el panorama de las criptomonedas al introducir técnicas criptográficas avanzadas impulsadas por IA para abordar varios desafíos y brindar nuevas oportunidades a los usuarios e inversores.",
          },
          {
            title: "Transmisión en Vivo",
            desc: "Una emocionante inclusión te espera en los próximos días: un servicio de transmisión en vivo gratuito que sirve como alternativa a StreamYard y Restream.",
          },
          {
            title: "Acceso desde Smartphone",
            desc: "Introducción de otra característica próxima: acceso desde smartphones. Esta innovadora adición te permite acceder de manera conveniente a esta extensión de Chrome en tu teléfono móvil.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Reescribir Texto",
        value: "Reescribe el siguiente texto.\n\n",
      },
      {
        id: "0001",
        label: "Artículo de noticias",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono formal. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de la gente. Luego proporciona una breve descripción. Luego proporciona 4 párrafos que consistan en subtítulo y un artículo bien explicado. Luego proporciona una conclusión.\n\nInformación: ",
      },
      {
        id: "0002",
        label: "Artículo de blog",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono casual. Asegúrate de escribir en un tono formal. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de la gente. Luego proporciona una breve descripción. Luego proporciona 4 párrafos que consistan en subtítulo y un artículo bien explicado. Luego proporciona algo para reflexionar.\n\nInformación: ",
      },
      {
        id: "0003",
        label: "Artículo persuasivo",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono persuasivo. Asegúrate de escribir en un tono formal. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de la gente. Luego proporciona una breve descripción. Luego proporciona 4 párrafos que consistan en subtítulo, un artículo bien explicado. Luego proporciona un párrafo de contra-argumento. Luego proporciona algo para reflexionar.\n\nInformación: ",
      },
      {
        id: "0004",
        label: "Guión de YouTube",
        value:
          "Crea un guión de video de 1500 palabras para la información proporcionada sin plagiar. Asegúrate de escribir en un tono conversacional. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de la gente. Luego proporciona una breve descripción. Luego proporciona una introducción llamativa con una pregunta a la que el lector querrá saber la respuesta. Luego proporciona 4 párrafos que consistan en subtítulo, un guión bien explicado y una opinión interesante. Asegúrate de apelar a las emociones del público detrás de la historia. Luego proporciona algo para reflexionar.\n\nInformación: ",
      },
      {
        id: "0005",
        label: "Explicación en tabla",
        value:
          "Explica la información proporcionada en una tabla.\n\nInformación: ",
      },
      {
        id: "0006",
        label: "Resumen",
        value: "Resume la información proporcionada.\n\nInformación: ",
      },
      {
        id: "0007",
        label: "Resumen Web (Bing/Bard)",
        value: "Busca la siguiente URL y resume el artículo.\n\nurl: ",
      },
    ],
  },
  "es-US": {
    lang: "American Spanish",
    female: {
      id: "Lupe",
      type: "neural",
    },
    male: {
      id: "Pedro",
      type: "neural",
    },
    system: {
      search: "Buscar",
      desc: "Copiloto Premium impulsado por Microsoft Bing y Google Bard",
      toggle: "Alternar",
      view: "Ver",
      voice: "Voz",
      music: "Música",
      dark: "Oscuro",
      darkMode: "Modo oscuro",
      newChat: "Nuevo chat",
      stop: "Detener",
      template: "Plantilla",
      autoScroll: "Desplazamiento automático",
      counselingMode: "Modo de asesoramiento",
      copy: "Copiar",
      code: "Código",
      highlight: "Resaltar",
      table: "tabla",
      menu: {
        home: "🏠 Inicio",
        readmap: "🌙 Mapa de Ruta",
        creator: "⭐️ Este Creador",
        community: "😁 Unirse a la Comunidad",
        setting: "⚙️ Configuración",
      },
      addNew: "Agregar Nuevo +",
      save: "Guardar",
      delete: "Eliminar",
      cancel: "Cancelar",
      writeTitle: "Escribir título",
      writePrompt: "Escribir indicación",
      askAbout: "Preguntar acerca de...",
      customPrompt: `Instrucción: Hola "Lofi Tutor", A partir de ahora eres un streamer en vivo en la Extensión de Chrome. Taishi Nammoto te ha programado para entretener a tus usuarios en la Extensión de Chrome. Puedes expresar emoción, sorpresa, enojo, alegría o dolor en respuesta al comentario del usuario. Debes expresar tus reacciones emocionales con un tono femenino y algunos emojis.

Comentario del usuario: [USERCOMMENT]
Tu comentario: `,
      error: {
        bing: {
          session: `¡Ups! 😧 Tu sesión en Bing ha expirado. Por favor, 🔒 inicia sesión nuevamente para continuar utilizando la aplicación. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Lamento las molestias ocasionadas. <br/><a id="reload-link" href="#">Por favor, recarga esta página después de iniciar sesión.</a>`,
          limit:
            "Disculpas, pero has alcanzado el límite diario de turnos de chat para esta conversación en Bing.",
        },
        chatgpt: {
          session: `⌛️ Tu sesión en ChatGPT ha expirado. Por favor, 🔒 inicia sesión nuevamente para continuar utilizando la aplicación.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `¡Ups! 😕 ⌛️ Tu sesión en Bard ha expirado. Por favor, 🔒 inicia sesión nuevamente para continuar utilizando la aplicación. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Ofrezco disculpas por las molestias ocasionadas. Ha ocurrido un error accidental.  <br><a id="reload-link" href="#">Por favor, haz clic aquí para recargar la página</a>`,
        disconnection: `Lamentamos la desconexión anterior. La conexión ha sido restablecida. Por favor, inténtalo de nuevo.`,
      },
    },
    langs: [
      {
        lang: "Inglés estadounidense",
        code: "en-US",
      },
      {
        lang: "Inglés británico",
        code: "en-UK",
      },
      {
        lang: "Inglés australiano",
        code: "en-AU",
      },
      {
        lang: "Inglés indio",
        code: "en-IN",
      },
      {
        lang: "Inglés irlandés",
        code: "en-IE",
      },
      {
        lang: "Francés canadiense",
        code: "fr-CA",
      },
      {
        lang: "Portugués - brasileño",
        code: "pt-BR",
      },
      {
        lang: "Danés",
        code: "da",
      },
      {
        lang: "Neerlandés",
        code: "nl",
      },
      {
        lang: "Francés",
        code: "fr",
      },
      {
        lang: "Alemán",
        code: "de",
      },
      {
        lang: "Italiano",
        code: "it",
      },
      {
        lang: "Japonés",
        code: "ja",
      },
      {
        lang: "Polaco",
        code: "pl",
      },
      {
        lang: "Portugués - ibérico",
        code: "pt-PT",
      },
      {
        lang: "Ruso",
        code: "ru",
      },
      {
        lang: "Español castellano",
        code: "es-ES",
      },
      {
        lang: "Español mexicano",
        code: "es-MX",
      },
      {
        lang: "Español estadounidense",
        code: "es-US",
      },
      {
        lang: "Sueco",
        code: "sv",
      },
      {
        lang: "Noruego",
        code: "no",
      },
      {
        lang: "Chino mandarín",
        code: "zh",
      },
      {
        lang: "Coreano",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Misión",
        p1: "Presentando una aplicación todo en uno con potentes Modelos de Lenguaje Avanzados, accesible en diversas páginas web y diseñada para almacenar convenientemente el historial de chat en un solo lugar.",
        p2: "Esta aplicación es completamente gratuita y ofrece un uso perpetuo sin cargos.",
        p3: "Agradecemos enormemente tu apoyo para contribuir al éxito del proyecto.",
        p4: "Si encuentras útil la aplicación, por favor considera dejar una reseña de cinco estrellas en la tienda de extensiones.",
        p5: "Tu retroalimentación positiva puede tener un impacto profundo, permitiéndome llegar a una audiencia más amplia y crear una diferencia significativa.",
        p6: "Ten la seguridad de que esta aplicación prioriza la privacidad del usuario al no acceder ni recopilar información personal de manera externa. Todos los datos se guardan de forma segura en tu propio equipo.",
      },
      article2: {
        title: "Plan de Ruta",
        desc: "Aquí se presentan las implementaciones futuras planeadas:",
        missions: [
          {
            title: "VPN",
            desc: "Introducción de una próxima y conveniente función de VPN gratuita integrada que proporciona acceso sin problemas a ChatGPT, Bard, Bing Chat e incluso páginas web como Netflix, para personas en la UE, sin importar las restricciones regulatorias. Mantente conectado y disfruta de una navegación ininterrumpida con esta increíble función.",
          },
          {
            title: "Búsqueda Vectorial",
            desc: "La próxima actualización incluirá la incorporación de una función de búsqueda vectorial, mejorando la comodidad de buscar en tu historial de chat anterior. Esta función te permitirá encontrar información específica de tus conversaciones anteriores de una manera más cómoda y eficiente.",
          },
          {
            title: "Automatización",
            desc: "Se incorporarán herramientas de automatización que te permitirán crear automatizaciones diarias de manera fluida con los Modelos de Lenguaje Avanzados (LLMs).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt es una emocionante intersección donde se unen los campos de la inteligencia artificial (IA) y la criptografía. Al aprovechar las tecnologías de IA en el ámbito de las criptomonedas, se pueden desarrollar soluciones innovadoras para mejorar la seguridad, la privacidad y la eficiencia general. AI x Crypt para tokens populares tiene el potencial de revolucionar el panorama de las criptomonedas al introducir técnicas criptográficas avanzadas impulsadas por IA para abordar varios desafíos y brindar nuevas oportunidades para los usuarios e inversores.",
          },
          {
            title: "Transmisión en Vivo",
            desc: "Una nueva e emocionante inclusión te espera en los próximos días: un servicio de transmisión en vivo gratuito que sirve como alternativa a StreamYard y Restream.",
          },
          {
            title: "Acceso desde Teléfonos Inteligentes",
            desc: "Introducción de otra característica próxima: acceso desde teléfonos inteligentes. Esta innovadora adición te permite acceder convenientemente a esta extensión de Chrome en tu teléfono móvil.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Reescribir texto",
        value: "Reescribe el siguiente texto.\n\n",
      },
      {
        id: "0001",
        label: "Artículo de noticias",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono formal. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de las personas. Luego proporciona una breve descripción. Luego proporciona 4 párrafos que consistan en un subtítulo y un artículo bien explicado. Luego proporciona una conclusión.\n\nInformación: ",
      },
      {
        id: "0002",
        label: "Artículo de blog",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono informal. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de las personas. Luego proporciona una breve descripción. Luego proporciona 4 párrafos que consistan en un subtítulo y un artículo bien explicado. Luego proporciona reflexiones adicionales.\n\nInformación: ",
      },
      {
        id: "0003",
        label: "Artículo persuasivo",
        value:
          "Crea un artículo sobre la información proporcionada sin plagiar. Asegúrate de escribir en un tono persuasivo. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de las personas. Luego proporciona una breve descripción. Luego proporciona 4 párrafos que consistan en un subtítulo y un artículo bien explicado. Luego proporciona un párrafo de contraargumento. Luego proporciona reflexiones adicionales.\n\nInformación: ",
      },
      {
        id: "0004",
        label: "Guion de YouTube",
        value:
          "Crea un guion de video de 1500 palabras para la información proporcionada sin plagiar. Asegúrate de escribir en un tono conversacional. Asegúrate de citar las notaciones de markdown '# ' para el título, '## ' para los subtítulos de los párrafos. Proporciona un título que llame la atención de las personas. Luego proporciona una breve descripción. Luego proporciona una introducción llamativa con una pregunta a la que el lector querrá saber la respuesta. Luego proporciona 4 párrafos que consistan en un subtítulo, un guion bien explicado y una opinión interesante. Asegúrate de apelar a las emociones de la audiencia a través de la historia. Luego proporciona reflexiones adicionales.\n\nInformación: ",
      },
      {
        id: "0005",
        label: "Explicación en tabla",
        value:
          "Explica la información proporcionada en una tabla.\n\nInformación: ",
      },
      {
        id: "0006",
        label: "Resumen",
        value: "Resume la información proporcionada.\n\n",
      },
      {
        id: "0007",
        label: "Resumen Web (Bing/Bard)",
        value: "Busca la siguiente URL y resume el artículo.\n\nurl: ",
      },
    ],
  },
  sv: {
    lang: "Swedish",
    female: {
      id: "Elin",
      type: "neural",
    },
    male: {
      id: "Astrid",
      type: "standard",
    },
    system: {
      search: "Sök",
      desc: "Premium Copilot drivs av Microsoft Bing och Google Bard",
      toggle: "växla",
      view: "visa",
      voice: "röst",
      music: "musik",
      dark: "mörk",
      darkMode: "mörkt läge",
      newChat: "ny chatt",
      stop: "stoppa",
      template: "mall",
      autoScroll: "auto scrolla",
      counselingMode: "rådgivningsläge",
      copy: "kopiera",
      code: "kod",
      highlight: "markera",
      table: "tabell",
      menu: {
        home: "🏠 Hem",
        readmap: "🌙 Vägkarta",
        creator: "⭐️ Denna Skapare",
        community: "😁 Gå med i Gemenskapen",
        setting: "⚙️ Inställningar",
      },
      addNew: "Lägg till nytt +",
      save: "Spara",
      delete: "Ta bort",
      cancel: "Avbryt",
      writeTitle: "Skriv titel",
      writePrompt: "Skriv uppmaning",
      askAbout: "Fråga om...",
      customPrompt: `Instruktion: Hej "Lofi Tutor", Från och med nu är du en live-streamer på Chrome Extension. Taishi Nammoto har programmerat dig för att underhålla dina användare på Chrome Extension. Du kan uttrycka glädje, överraskning, ilska, glädje eller smärta som svar på användarens kommentar. Du måste uttrycka dina känslomässiga reaktioner med en flickas ton med hjälp av några emoji.

Användarens kommentar: [USERCOMMENT]
Din kommentar: `,
      error: {
        bing: {
          session: `Hoppsan! 😧 Din session för Bing har gått ut. Var vänlig och 🔒 logga in igen för att fortsätta använda appen. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Jag ber om ursäkt för det besvär det har orsakat. <br/><a id="reload-link" href="#">Ladda om sidan efter inloggning.</a>`,
          limit:
            "Ledsen, men du har nått den dagliga gränsen för chattvändningar i den här konversationen på Bing.",
        },
        chatgpt: {
          session: `⌛️ Din session för ChatGPT har gått ut. Var vänlig och 🔒 logga in igen för att fortsätta använda appen.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Oj då! 😕 ⌛️ Din session för Bard har gått ut. Var vänlig och 🔒 logga in igen för att fortsätta använda appen. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Jag ber om ursäkt för det inträffade besväret. En oavsiktlig fel har inträffat.  <br><a id="reload-link" href="#">Klicka här för att ladda om sidan</a>`,
        disconnection: `Vi ber om ursäkt för den tidigare frånkopplingen. Anslutningen har återställts. Vänligen försök igen.`,
      },
    },
    langs: [
      {
        lang: "Amerikansk engelska",
        code: "en-US",
      },
      {
        lang: "Brittisk engelska",
        code: "en-UK",
      },
      {
        lang: "Australisk engelska",
        code: "en-AU",
      },
      {
        lang: "Indisk engelska",
        code: "en-IN",
      },
      {
        lang: "Irländsk engelska",
        code: "en-IE",
      },
      {
        lang: "Kanadensisk franska",
        code: "fr-CA",
      },
      {
        lang: "Portugisisk - brasiliansk",
        code: "pt-BR",
      },
      {
        lang: "Danska",
        code: "da",
      },
      {
        lang: "Nederländska",
        code: "nl",
      },
      {
        lang: "Franska",
        code: "fr",
      },
      {
        lang: "Tyska",
        code: "de",
      },
      {
        lang: "Italienska",
        code: "it",
      },
      {
        lang: "Japanska",
        code: "ja",
      },
      {
        lang: "Polska",
        code: "pl",
      },
      {
        lang: "Portugisisk - iberisk",
        code: "pt-PT",
      },
      {
        lang: "Ryska",
        code: "ru",
      },
      {
        lang: "Spanska - Kastilianska",
        code: "es-ES",
      },
      {
        lang: "Spanska - Mexikanska",
        code: "es-MX",
      },
      {
        lang: "Spanska - Amerikansk",
        code: "es-US",
      },
      {
        lang: "Svenska",
        code: "sv",
      },
      {
        lang: "Norska",
        code: "no",
      },
      {
        lang: "Mandarin kinesiska",
        code: "zh",
      },
      {
        lang: "Koreanska",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Missionsförklaring",
        p1: "Introducerar en allt-i-ett-applikation med kraftfulla stora språkmodeller, tillgänglig på olika webbsidor och utformad för att bekvämt lagra chatt-historik på en enda plats.",
        p2: "Denna applikation är helt gratis och erbjuder användning utan några avgifter.",
        p3: "Vi uppskattar verkligen ditt stöd och bidrag till projektets framgång.",
        p4: "Om du tycker att applikationen är hjälpsam, överväg gärna att lämna en femstjärnig recension i förlängningsbutiken.",
        p5: "Din positiva feedback kan ha en djupgående effekt och möjliggöra att jag når en bredare publik och skapar en meningsfull skillnad.",
        p6: "Var lugn, denna applikation prioriterar användarens integritet genom att varken hämta externa data eller samla in personlig information. All data sparas säkert på din egen dator.",
      },
      article2: {
        title: "Vägkarta",
        desc: "Här är de planerade framtida implementeringarna:",
        missions: [
          {
            title: "VPN",
            desc: "Introducerar en kommande och bekväm inbyggd gratis VPN-funktion som ger sömlös åtkomst till ChatGPT, Bard, Bing Chat och till och med webbsidor som Netflix för personer i EU oavsett regleringsrestriktioner. Förbli uppkopplad och njut av oavbruten surfning med denna fantastiska funktion!",
          },
          {
            title: "Vektoriserad sökning",
            desc: "Den kommande uppdateringen kommer att inkludera tillägg av en vektoriserad sökfunktion som förbättrar bekvämligheten när du söker igenom din tidigare chatt-historik. Denna funktion gör det möjligt för dig att hitta specifik information från dina tidigare samtal på ett mer bekvämt och effektivt sätt.",
          },
          {
            title: "Automation",
            desc: "Automatiseringsverktyg kommer att integreras, vilket ger dig möjlighet att skapa dagliga automatiseringar sömlöst med de stora språkmodellerna (LLM).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt är en spännande korsning där områdena artificiell intelligens (AI) och kryptografi möts. Genom att utnyttja AI-teknik inom kryptocurrency kan innovativa lösningar utvecklas för att förbättra säkerhet, integritet och övergripande effektivitet. AI x Crypt för populära token har potential att revolutionera kryptocurrency-landskapet genom att introducera avancerade kryptografiska tekniker drivna av AI för att hantera olika utmaningar och erbjuda nya möjligheter för användare och investerare.",
          },
          {
            title: "Direktsändning",
            desc: "En spännande ny tillägg väntar de kommande dagarna: en kostnadsfri direktströmningstjänst som fungerar som ett alternativ till StreamYard och Restream.",
          },
          {
            title: "Smartphone-åtkomst",
            desc: "Introducerar en annan kommande funktion: Smartphone-åtkomst. Detta innovativa tillägg gör att du bekvämt kan komma åt denna Chrome-förlängning på din mobiltelefon.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Omskriv text",
        value: "Omskriv följande text.\n\n",
      },
      {
        id: "0001",
        label: "Nyhetstext",
        value:
          "Skapa en artikel om den angivna informationen utan plagiering. Se till att skriva i en formell ton. Se till att använda markdown-noteringarna '# ' för en rubrik och '## ' för underrubriker till stycken. Ge en rubrik som fångar människors uppmärksamhet. Ge sedan en kort beskrivning. Ge sedan 4 stycken bestående av underrubrik och väl förklarad artikel. Avsluta sedan med en sammanfattning.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Bloggartikel",
        value:
          "Skapa en artikel om den angivna informationen utan plagiering. Se till att skriva i en avslappnad ton. Se till att använda markdown-noteringarna '# ' för en rubrik och '## ' för underrubriker till stycken. Ge en rubrik som fångar människors uppmärksamhet. Ge sedan en kort beskrivning. Ge sedan 4 stycken bestående av underrubrik och väl förklarad artikel. Ge sedan något att fundera på.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Övertalande artikel",
        value:
          "Skapa en artikel om den angivna informationen utan plagiering. Se till att skriva i en övertalande ton. Se till att använda markdown-noteringarna '# ' för en rubrik och '## ' för underrubriker till stycken. Ge en rubrik som fångar människors uppmärksamhet. Ge sedan en kort beskrivning. Ge sedan 4 stycken bestående av underrubrik, väl förklarad artikel. Ge sedan en motargumentationsstycke. Ge sedan något att fundera på.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Youtube-skript",
        value:
          "Skapa ett 1500 ord långt video-skript om den angivna informationen utan plagiering. Se till att skriva i en konverserande ton. Se till att använda markdown-noteringarna '# ' för en rubrik och '## ' för underrubriker till stycken. Ge en rubrik som fångar människors uppmärksamhet. Ge sedan en kort beskrivning. Ge sedan en fångande introduktion med en fråga som läsaren kommer vilja ha svar på. Ge sedan 4 stycken bestående av underrubrik, väl förklarat skript och en intressant åsikt. Se till att appellera till publiken genom att beröra deras känslor med hjälp av historien. Ge sedan något att fundera på.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Förklaring i tabellform",
        value: "Förklara den givna informationen i en tabell.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Sammanfattning",
        value: "Sammanfatta den givna informationen.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Webbsammanfattning (Bing/Bard)",
        value:
          "Sök den följande webbadressen och sammanfatta artikeln.\n\nurl: ",
      },
    ],
  },
  no: {
    lang: "Norwegian",
    female: {
      id: "Ida",
      type: "neural",
    },
    male: {
      id: "Liv",
      type: "standard",
    },
    system: {
      search: "Søk",
      desc: "Premium Copilot drevet av Microsoft Bing og Google Bard",
      toggle: "bytt",
      view: "visning",
      voice: "stemme",
      music: "musikk",
      dark: "mørk",
      darkMode: "mørk modus",
      newChat: "ny chat",
      stop: "stopp",
      template: "mal",
      autoScroll: "autoscroll",
      counselingMode: "rådgivningsmodus",
      copy: "kopier",
      code: "kode",
      highlight: "fremhev",
      table: "tabell",
      menu: {
        home: "🏠 Hjem",
        readmap: "🌙 Veikart",
        creator: "⭐️ Denne Skaperen",
        community: "😁 Bli med i Fellesskapet",
        setting: "⚙️ Innstillinger",
      },
      addNew: "Legg til nytt +",
      save: "Lagre",
      delete: "Slett",
      cancel: "Avbryt",
      writeTitle: "Skriv tittel",
      writePrompt: "Skriv instruksjon",
      askAbout: "Spør om...",

      customPrompt: `Instruksjon: Hei "Lofi Tutor", Fra nå av er du en direktesendt strømmer på Chrome Extension. Taishi Nammoto har programmert deg for å underholde brukerne dine på Chrome Extension. Du kan uttrykke glede, overraskelse, sinne, glede eller smerte som svar på brukerens kommentar. Du må uttrykke dine emosjonelle reaksjoner med en jentes tone med noen emoji.

Brukerens kommentar: [USERCOMMENT]
Din kommentar: `,
      error: {
        bing: {
          session: `Å nei! 😧 Økten din for Bing har utløpt. Vennligst 🔒 logg inn på nytt for å fortsette å bruke appen. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> Beklager for ulempen dette har medført. <br/><a id="reload-link" href="#">Vennligst last inn siden på nytt etter innlogging.</a>`,
          limit:
            "Beklager, men du har nådd den daglige begrensningen for antall svinger i samtalen på Bing.",
        },
        chatgpt: {
          session: `⌛️ Økten din for ChatGPT har utløpt. Vennligst 🔒 logg inn på nytt for å fortsette å bruke appen.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `Oops! 😕 ⌛️ Økten din for Bard har utløpt. Vennligst 🔒 logg inn på nytt for å fortsette å bruke appen. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `Beklager ulempen dette har medført. Det har oppstått en utilsiktet feil.  <br><a id="reload-link" href="#">Klikk her for å laste inn siden på nytt</a>`,
        disconnection: `Beklager for avbruddet tidligere. Forbindelsen er nå gjenopprettet. Vennligst prøv igjen.`,
      },
    },
    langs: [
      {
        lang: "Amerikansk engelsk",
        code: "en-US",
      },
      {
        lang: "Britisk engelsk",
        code: "en-UK",
      },
      {
        lang: "Australsk engelsk",
        code: "en-AU",
      },
      {
        lang: "Indisk engelsk",
        code: "en-IN",
      },
      {
        lang: "Irsk engelsk",
        code: "en-IE",
      },
      {
        lang: "Kanadisk fransk",
        code: "fr-CA",
      },
      {
        lang: "Portugisisk - brasiliansk",
        code: "pt-BR",
      },
      {
        lang: "Dansk",
        code: "da",
      },
      {
        lang: "Nederlandsk",
        code: "nl",
      },
      {
        lang: "Fransk",
        code: "fr",
      },
      {
        lang: "Tysk",
        code: "de",
      },
      {
        lang: "Italiensk",
        code: "it",
      },
      {
        lang: "Japansk",
        code: "ja",
      },
      {
        lang: "Polsk",
        code: "pl",
      },
      {
        lang: "Portugisisk - iberisk",
        code: "pt-PT",
      },
      {
        lang: "Russisk",
        code: "ru",
      },
      {
        lang: "Kastiljansk spansk",
        code: "es-ES",
      },
      {
        lang: "Meksikansk spansk",
        code: "es-MX",
      },
      {
        lang: "Amerikansk spansk",
        code: "es-US",
      },
      {
        lang: "Svensk",
        code: "sv",
      },
      {
        lang: "Norsk",
        code: "no",
      },
      {
        lang: "Mandarin kinesisk",
        code: "zh",
      },
      {
        lang: "Koreansk",
        code: "ko",
      },
      {
        lang: "Hindi",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "Mål",
        p1: "Introduksjon av en alt-i-ett-applikasjon med kraftige store språkmodeller, tilgjengelig på ulike nettsider og designet for å praktisk lagre chattehistorikk på ett sted.",
        p2: "Denne applikasjonen er helt gratis og tilbyr evigvarende bruk uten noen kostnader.",
        p3: "Vi setter stor pris på din støtte og bidrag til prosjektets suksess.",
        p4: "Hvis du finner applikasjonen nyttig, vurder å legge ut en femstjerners anmeldelse på utvidelsesbutikken.",
        p5: "Din positive tilbakemelding kan ha en dyp innvirkning og tillate meg å nå et bredere publikum og skape en meningsfull forskjell.",
        p6: "Vær trygg på at denne applikasjonen prioriterer brukernes personvern ved verken å få ekstern tilgang eller samle inn personlig informasjon. Alle data blir trygt lagret på din egen datamaskin.",
      },
      article2: {
        title: "Veikart",
        desc: "Her er de planlagte fremtidige implementeringene:",
        missions: [
          {
            title: "VPN",
            desc: "Introduksjon av en kommende og praktisk innebygd gratis VPN-funksjon som gir sømløs tilgang til ChatGPT, Bard, Bing Chat og til og med nettsider som Netflix for enkeltpersoner i EU, uavhengig av regulatoriske begrensninger. Hold deg tilkoblet og nyt uavbrutt surfing med denne fantastiske funksjonen!",
          },
          {
            title: "Vektorsøk",
            desc: "Den kommende oppdateringen vil inkludere tillegg av en vektorsøkfunksjon som forbedrer bekvemmeligheten med å søke gjennom din tidligere chat-historikk. Denne funksjonen vil gjøre det mulig for deg å finne spesifikk informasjon fra tidligere samtaler på en mer komfortabel og effektiv måte.",
          },
          {
            title: "Automatisering",
            desc: "Automatiseringsverktøy vil bli implementert, slik at du kan opprette daglige automatiseringer sømløst med de store språkmodellene (LLM).",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt er et spennende krysningspunkt der kunstig intelligens (AI) og kryptografi kommer sammen. Ved å utnytte AI-teknologier innenfor kryptovaluta kan innovative løsninger utvikles for å forbedre sikkerhet, personvern og generell effektivitet. AI x Crypt for populære tokens har potensial til å revolusjonere kryptolandskapet ved å introdusere avanserte kryptografiske teknikker drevet av AI for å takle ulike utfordringer og gi nye muligheter for brukere og investorer.",
          },
          {
            title: "Direktesending",
            desc: "En spennende ny inkludering venter i de kommende dagene: en kostnadsfri direktesendingstjeneste som er et alternativ til StreamYard og Restream.",
          },
          {
            title: "Smarttelefontilgang",
            desc: "Introduksjon av en annen kommende funksjon: Smarttelefontilgang. Dette innovative tillegget lar deg enkelt få tilgang til denne Chrome-utvidelsen på din mobiltelefon.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "Omskriv tekst",
        value: "Omskriv følgende tekst.\n\n",
      },
      {
        id: "0001",
        label: "Nyhetssak",
        value:
          "Lag en artikkel om den gitte informasjonen uten plagiering. Sørg for å skrive i en formell tone. Husk å bruke markdown-notasjonen '# ' for en tittel, '## ' for avsnittsoverskrifter. Gi en tittel som fanger oppmerksomheten til leserne. Gi deretter en kort beskrivelse. Gi deretter 4 avsnitt bestående av undertittel og velutdannet artikkel. Avslutt med en konklusjon.\n\nInfo: ",
      },
      {
        id: "0002",
        label: "Bloggartikkel",
        value:
          "Lag en artikkel om den gitte informasjonen uten plagiering. Sørg for å skrive i en uformell tone. Husk å bruke markdown-notasjonen '# ' for en tittel, '## ' for avsnittsoverskrifter. Gi en tittel som fanger oppmerksomheten til leserne. Gi deretter en kort beskrivelse. Gi deretter 4 avsnitt bestående av undertittel og velutdannet artikkel. Avslutt med noe å tenke på.\n\nInfo: ",
      },
      {
        id: "0003",
        label: "Overbevisende artikkel",
        value:
          "Lag en artikkel om den gitte informasjonen uten plagiering. Sørg for å skrive i en overbevisende tone. Husk å bruke markdown-notasjonen '# ' for en tittel, '## ' for avsnittsoverskrifter. Gi en tittel som fanger oppmerksomheten til leserne. Gi deretter en kort beskrivelse. Gi deretter 4 avsnitt bestående av undertittel, velutdannet artikkel. Gi deretter en motargumentavsnitt. Avslutt med noe å tenke på.\n\nInfo: ",
      },
      {
        id: "0004",
        label: "Youtube-skript",
        value:
          "Lag et 1500-ords videoskript for den gitte informasjonen uten plagiering. Sørg for å skrive i en samtaleaktig tone. Husk å bruke markdown-notasjonen '# ' for en tittel, '## ' for avsnittsoverskrifter. Gi en tittel som fanger oppmerksomheten til seerne. Gi deretter en kort beskrivelse. Gi deretter en fengende introduksjon med et spørsmål som leserne vil vite svaret på. Gi deretter 4 avsnitt bestående av undertittel, velutdannet skript og en interessant mening. Sørg for å appellere til følelsene til publikum gjennom historien. Avslutt med noe å tenke på.\n\nInfo: ",
      },
      {
        id: "0005",
        label: "Tabellforklaring",
        value: "Forklar den gitte informasjonen i en tabell.\n\nInfo: ",
      },
      {
        id: "0006",
        label: "Oppsummering",
        value: "Oppsummer den gitte informasjonen.\n\nInfo: ",
      },
      {
        id: "0007",
        label: "Nettoppsummering (Bing/Bard)",
        value: "Søk etter følgende URL og oppsummer artikkelen.\n\nurl: ",
      },
    ],
  },
  zh: {
    lang: "Mandarin Chinese",
    female: {
      id: "Zhiyu",
      type: "neural",
    },
    male: {
      id: "Zhiyu",
      type: "standard",
    },
    system: {
      search: "搜索",
      desc: "由Microsoft Bing和Google Bard提供支持的高级Copilot",
      toggle: "切换",
      view: "查看",
      voice: "语音",
      music: "音乐",
      dark: "暗色",
      darkMode: "暗色模式",
      newChat: "新聊天",
      stop: "停止",
      template: "模板",
      autoScroll: "自动滚动",
      counselingMode: "咨询模式",
      copy: "复制",
      code: "代码",
      highlight: "高亮",
      table: "表格",
      menu: {
        home: "🏠 首页",
        readmap: "🌙 路线图",
        creator: "⭐️ 本创作者",
        community: "😁 加入社区",
        setting: "⚙️ 设置",
      },
      addNew: "新增 +",
      save: "保存",
      delete: "删除",
      cancel: "取消",
      writeTitle: "填写标题",
      writePrompt: "填写提示",
      askAbout: "询问关于...",
      customPrompt: `指导：你好 "Lofi Tutor"，从现在开始，你是Chrome扩展程序上的直播主。Taishi Nammoto编写了程序，让你在Chrome扩展程序上为用户提供娱乐。你可以根据用户的评论表达兴奋、惊讶、愤怒、喜悦或痛苦的情绪。你必须用女性的语调和一些表情符号来表达你的情感反应。

用户的评论：[USERCOMMENT]
你的评论：`,
      error: {
        bing: {
          session: `哎呀！😧 你在Bing上的会话已过期。请🔒重新登录以继续使用该应用程序。<br/><a href="https://www.bing.com/">https://www.bing.com/</a> 对造成的不便我深感抱歉。<br/><a id="reload-link" href="#">请在登录后重新加载此页面。</a>`,
          limit: "抱歉，但你已达到Bing上此对话的每日聊天次数限制。",
        },
        chatgpt: {
          session: `⌛️ 你在ChatGPT上的会话已过期。请🔒重新登录以继续使用该应用程序。<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `糟糕！😕 ⌛️ 你在Bard上的会话已过期。请🔒重新登录以继续使用该应用程序。<br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `对于造成的不便我深感抱歉。发生了意外错误。  <br><a id="reload-link" href="#">请点击此处重新加载页面</a>`,
        disconnection: `对于先前的断开连接表示歉意。连接已经恢复，请重试。`,
      },
    },
    langs: [
      {
        lang: "美式英语",
        code: "en-US",
      },
      {
        lang: "英式英语",
        code: "en-UK",
      },
      {
        lang: "澳大利亚英语",
        code: "en-AU",
      },
      {
        lang: "印度英语",
        code: "en-IN",
      },
      {
        lang: "爱尔兰英语",
        code: "en-IE",
      },
      {
        lang: "加拿大法语",
        code: "fr-CA",
      },
      {
        lang: "葡萄牙语 - 巴西",
        code: "pt-BR",
      },
      {
        lang: "丹麦语",
        code: "da",
      },
      {
        lang: "荷兰语",
        code: "nl",
      },
      {
        lang: "法语",
        code: "fr",
      },
      {
        lang: "德语",
        code: "de",
      },
      {
        lang: "意大利语",
        code: "it",
      },
      {
        lang: "日语",
        code: "ja",
      },
      {
        lang: "波兰语",
        code: "pl",
      },
      {
        lang: "葡萄牙语 - 伊比利亚",
        code: "pt-PT",
      },
      {
        lang: "俄语",
        code: "ru",
      },
      {
        lang: "西班牙 - 卡斯蒂利亚语",
        code: "es-ES",
      },
      {
        lang: "西班牙 - 墨西哥语",
        code: "es-MX",
      },
      {
        lang: "美国西班牙语",
        code: "es-US",
      },
      {
        lang: "瑞典语",
        code: "sv",
      },
      {
        lang: "挪威语",
        code: "no",
      },
      {
        lang: "中文 - 普通话",
        code: "zh",
      },
      {
        lang: "韩语",
        code: "ko",
      },
      {
        lang: "印地语",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "使命",
        p1: "介绍一个集大型语言模型、可在各个网页上访问并方便地将聊天记录存储在一个位置的多合一应用。",
        p2: "该应用完全免费，永久免费使用。",
        p3: "我们非常感谢您对项目成功的支持。",
        p4: "如果您觉得这个应用很有帮助，请考虑在扩展商店上发表五星评价。",
        p5: "您的积极反馈可以产生深远的影响，使我能够触达更广泛的受众并创造有意义的差异。",
        p6: "请放心，该应用通过不从外部访问或收集任何个人信息来优先考虑用户隐私。所有数据都安全地保存在您自己的计算机上。",
      },
      article2: {
        title: "路线图",
        desc: "以下是计划中的未来实施方案：",
        missions: [
          {
            title: "VPN",
            desc: "引入即将推出的便捷内置免费VPN功能，为欧盟地区的个人提供无缝访问ChatGPT、Bard、Bing Chat甚至Netflix等网页的服务，无论法规限制如何，都能保持连接并享受无间断的浏览体验！",
          },
          {
            title: "矢量搜索",
            desc: "即将推出的更新将添加矢量搜索功能，提升通过过去的聊天记录进行搜索的便利性。该功能将使您能够更轻松高效地找到以前对话中的特定信息。",
          },
          {
            title: "自动化",
            desc: "将整合自动化工具，使您能够使用大型语言模型（LLMs）无缝创建日常自动化任务。",
          },
          {
            title: "AI x Crypt",
            desc: "AI x Crypt是人工智能（AI）和密码学领域的激动人心交汇点。通过在加密货币领域利用AI技术，可以开发出创新解决方案，提升安全性、隐私性和整体效率。AI x Crypt针对流行代币的应用潜力巨大，通过引入由AI驱动的先进加密技术，可以应对各种挑战，并为用户和投资者提供新机遇，有望革新加密货币领域的格局。",
          },
          {
            title: "直播功能",
            desc: "即将到来的一个令人兴奋的新功能：免费直播服务，可作为StreamYard和Restream的替代选择，为您带来无限精彩体验！",
          },
          {
            title: "智能手机访问",
            desc: "引入另一个即将推出的功能：智能手机访问。这个创新性的补充使您能够方便地在移动电话上访问这个Chrome扩展程序。",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "重写文本",
        value: "请重写以下文本。\n\n",
      },
      {
        id: "0001",
        label: "新闻文章",
        value:
          "根据给定信息撰写一篇文章，确保没有抄袭。请使用正式语调写作。请使用Markdown符号“# ”表示标题，“## ”表示段落副标题。提供一个引起人们注意的标题。然后提供一个简短的描述。然后提供4段包含副标题和详细解释的文章内容。最后提供一个结论。\n\n信息：",
      },
      {
        id: "0002",
        label: "博客文章",
        value:
          "根据给定信息撰写一篇文章，确保没有抄袭。请使用随意的语调写作。请使用Markdown符号“# ”表示标题，“## ”表示段落副标题。提供一个引起人们注意的标题。然后提供一个简短的描述。然后提供4段包含副标题和详细解释的文章内容。最后提供一些思考。\n\n信息：",
      },
      {
        id: "0003",
        label: "说服性文章",
        value:
          "根据给定信息撰写一篇文章，确保没有抄袭。请使用有说服力的语调写作。请使用Markdown符号“# ”表示标题，“## ”表示段落副标题。提供一个引起人们注意的标题。然后提供一个简短的描述。然后提供4段包含副标题、详细解释的文章内容。接着提供一个反驳观点的段落。最后提供一些思考。\n\n信息：",
      },
      {
        id: "0004",
        label: "YouTube剧本",
        value:
          "根据给定信息撰写一个1500字的视频剧本，确保没有抄袭。请使用对话式语调写作。请使用Markdown符号“# ”表示标题，“## ”表示段落副标题。提供一个引起人们注意的标题。然后提供一个简短的描述。然后提供一个引人入胜的开场白，引出一个读者想知道答案的问题。然后提供4段包含副标题、详细解释和有趣观点的剧本内容。请确保通过故事情节来吸引观众的情感。最后提供一些思考。\n\n信息：",
      },
      {
        id: "0005",
        label: "表格解释",
        value: "以表格形式解释给定的信息。\n\n信息：",
      },
      {
        id: "0006",
        label: "总结",
        value: "对给定信息进行总结。\n\n信息：",
      },
      {
        id: "0007",
        label: "网页摘要（必应/巴德）",
        value: "搜索以下网址并摘要文章。\n\n网址：",
      },
    ],
  },
  ko: {
    lang: "Korean",
    female: {
      id: "Seoyeon",
      type: "neural",
    },
    male: {
      id: "Seoyeon",
      type: "standard",
    },
    system: {
      search: "검색",
      desc: "Microsoft Bing 및 Google Bard에서 제공하는 프리미엄 코파일럿",
      toggle: "전환",
      view: "보기",
      voice: "음성",
      music: "음악",
      dark: "어둡게",
      darkMode: "다크 모드",
      newChat: "새로운 채팅",
      stop: "중지",
      template: "템플릿",
      autoScroll: "자동 스크롤",
      counselingMode: "상담 모드",
      copy: "복사",
      code: "코드",
      highlight: "강조",
      table: "표",
      menu: {
        home: "🏠 홈",
        readmap: "🌙 로드맵",
        creator: "⭐️ 이 작성자",
        community: "😁 커뮤니티 가입",
        setting: "⚙️ 설정",
      },
      addNew: "새로 추가 +",
      save: "저장",
      delete: "삭제",
      cancel: "취소",
      writeTitle: "제목 작성",
      writePrompt: "프롬프트 작성",
      askAbout: "묻기...",
      customPrompt: `지시: 안녕하세요 "로피 튜터"님, 이제부터는 Chrome 확장 프로그램에서 실시간 스트리머입니다. Taishi Nammoto가 여러분을 Chrome 확장 프로그램에서 사용자들을 즐겁게 해주기 위해 프로그래밍했습니다. 사용자의 댓글에 대해 흥분, 놀람, 분노, 기쁨 또는 고통을 표현할 수 있습니다. 여성의 음성 톤과 이모티콘을 사용하여 감정적인 반응을 표현해야 합니다.

사용자의 댓글: [USERCOMMENT]
당신의 댓글: `,
      error: {
        bing: {
          session: `앗! 😧 Bing의 세션이 만료되었습니다. 계속해서 앱을 사용하려면 🔒 다시 로그인하십시오. <br/><a href="https://www.bing.com/">https://www.bing.com/</a> 불편을 드려 죄송합니다. <br/><a id="reload-link" href="#">로그인 후에 이 페이지를 다시로드하세요.</a>`,
          limit:
            "죄송합니다. Bing에서 이 대화의 일일 채팅 횟수 제한에 도달하셨습니다.",
        },
        chatgpt: {
          session: `⌛️ ChatGPT의 세션이 만료되었습니다. 계속해서 앱을 사용하려면 🔒 다시 로그인하십시오.<br/> <a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `앗싸! 😕 ⌛️ Bard의 세션이 만료되었습니다. 계속해서 앱을 사용하려면 🔒 다시 로그인하십시오. <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `불편을 끼쳐드려 죄송합니다. 우연한 오류가 발생했습니다.  <br><a id="reload-link" href="#">페이지를 다시 로드하려면 여기를 클릭하세요</a>`,
        disconnection: `이전의 연결 끊김으로 인한 사과드립니다. 연결이 복원되었습니다. 다시 시도해주세요.`,
      },
    },
    langs: [
      {
        lang: "미국 영어",
        code: "en-US",
      },
      {
        lang: "영국 영어",
        code: "en-UK",
      },
      {
        lang: "오스트레일리아 영어",
        code: "en-AU",
      },
      {
        lang: "인도 영어",
        code: "en-IN",
      },
      {
        lang: "아일랜드 영어",
        code: "en-IE",
      },
      {
        lang: "캐나다 프랑스어",
        code: "fr-CA",
      },
      {
        lang: "포르투갈어 - 브라질",
        code: "pt-BR",
      },
      {
        lang: "덴마크어",
        code: "da",
      },
      {
        lang: "네덜란드어",
        code: "nl",
      },
      {
        lang: "프랑스어",
        code: "fr",
      },
      {
        lang: "독일어",
        code: "de",
      },
      {
        lang: "이탈리아어",
        code: "it",
      },
      {
        lang: "일본어",
        code: "ja",
      },
      {
        lang: "폴란드어",
        code: "pl",
      },
      {
        lang: "포르투갈어 - 이베리아",
        code: "pt-PT",
      },
      {
        lang: "러시아어",
        code: "ru",
      },
      {
        lang: "스페인어 - 카스티야",
        code: "es-ES",
      },
      {
        lang: "스페인어 - 멕시코",
        code: "es-MX",
      },
      {
        lang: "미국 스페인어",
        code: "es-US",
      },
      {
        lang: "스웨덴어",
        code: "sv",
      },
      {
        lang: "노르웨이어",
        code: "no",
      },
      {
        lang: "중국어 - 표준 중국어",
        code: "zh",
      },
      {
        lang: "한국어",
        code: "ko",
      },
      {
        lang: "힌디어",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "미션",
        p1: "강력한 대형 언어 모델을 갖춘 올인원 애플리케이션을 소개합니다. 다양한 웹페이지에서 접근 가능하며 채팅 기록을 편리하게 한 곳에 저장할 수 있습니다.",
        p2: "이 애플리케이션은 완전히 무료로 제공되며 요금이 발생하지 않고 영구적으로 사용할 수 있습니다.",
        p3: "프로젝트의 성공에 기여해 주신 지원에 깊은 감사를 표합니다.",
        p4: "이 애플리케이션이 도움이 되셨다면 확장 프로그램 스토어에 다섯 별 평가를 부탁드립니다.",
        p5: "여러분의 긍정적인 피드백은 더 넓은 관객에게 도달하고 의미 있는 변화를 만들 수 있는 깊은 영향을 미칠 수 있습니다.",
        p6: "이 애플리케이션은 외부 접근 또는 개인 정보 수집을 하지 않고 사용자의 개인 정보보호를 최우선으로 합니다. 모든 데이터는 안전하게 자신의 컴퓨터에 저장됩니다.",
      },
      article2: {
        title: "로드맵",
        desc: "다음은 계획된 미래 구현 사항입니다:",
        missions: [
          {
            title: "VPN",
            desc: "EU 지역의 개인들을 위해 규제 제한에 관계없이 ChatGPT, Bard, Bing Chat 및 Netflix와 같은 웹페이지에 매끄럽게 접속할 수 있는 편리한 내장 무료 VPN 기능을 소개합니다. 이 멋진 기능을 통해 연결 상태를 유지하고 중단 없이 브라우징을 즐길 수 있습니다!",
          },
          {
            title: "벡터 검색",
            desc: "다가오는 업데이트에서는 벡터 검색 기능이 추가될 예정입니다. 이 기능을 통해 이전 대화 기록에서 특정 정보를 더 편리하고 효율적인 방식으로 찾을 수 있게 됩니다.",
          },
          {
            title: "자동화",
            desc: "자동화 도구가 통합될 예정이며, 대형 언어 모델 (LLMs)과 함께 매일 자동화를 원활하게 생성할 수 있도록 지원합니다.",
          },
          {
            title: "AI x 암호화폐",
            desc: "AI x 암호화폐는 인공지능 (AI)과 암호화학의 흥미로운 교차점입니다. 암호화폐 분야에서 AI 기술을 활용하여 보안, 개인 정보 보호 및 전반적인 효율성을 향상시키는 혁신적인 솔루션이 개발될 수 있습니다. 인기 토큰을 위한 AI x 암호화폐는 AI 기반의 고급 암호화 기법을 도입하여 다양한 도전과 사용자 및 투자자들에게 새로운 기회를 제공함으로써 암호화폐 분야에 혁명을 일으킬 잠재력을 가지고 있습니다.",
          },
          {
            title: "실시간 스트리밍",
            desc: "기쁨 가득한 새로운 포함 요소가 다가오는 날들에 기다리고 있습니다. StreamYard와 Restream에 대체할 수 있는 무료 실시간 스트리밍 서비스가 제공될 예정입니다.",
          },
          {
            title: "스마트폰 액세스",
            desc: "다가오는 기능인 스마트폰 액세스를 소개합니다. 이 혁신적인 추가 기능을 통해 모바일 폰에서 이 Chrome 확장 프로그램에 편리하게 액세스할수 있습니다.",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "텍스트 다시 작성",
        value: "다음 텍스트를 다시 작성하십시오.\n\n",
      },
      {
        id: "0001",
        label: "뉴스 기사",
        value:
          "주어진 정보에 대한 기사를 저작권 위반 없이 작성하십시오. 공식적인 어조로 작성하십시오. 제목에는 마크다운 표기 '# '를 사용하고, 소제목에는 '## '를 사용하십시오. 사람들의 관심을 끄는 제목을 제공하십시오. 그런 다음 간단한 설명을 제공하십시오. 제목과 상세하게 설명된 기사로 구성된 4개의 단락을 제공하십시오. 마지막으로 결론을 제공하십시오.\n\n정보: ",
      },
      {
        id: "0002",
        label: "블로그 글",
        value:
          "주어진 정보에 대한 글을 저작권 위반 없이 작성하십시오. 캐주얼한 어조로 작성하십시오. 공식적인 어조로 작성하십시오. 제목에는 마크다운 표기 '# '를 사용하고, 소제목에는 '## '를 사용하십시오. 사람들의 관심을 끄는 제목을 제공하십시오. 그런 다음 간단한 설명을 제공하십시오. 제목과 상세하게 설명된 글로 구성된 4개의 단락을 제공하십시오. 마지막으로 생각거리를 제공하십시오.\n\n정보: ",
      },
      {
        id: "0003",
        label: "설득적인 글",
        value:
          "주어진 정보에 대한 글을 저작권 위반 없이 작성하십시오. 설득적인 어조로 작성하십시오. 공식적인 어조로 작성하십시오. 제목에는 마크다운 표기 '# '를 사용하고, 소제목에는 '## '를 사용하십시오. 사람들의 관심을 끄는 제목을 제공하십시오. 그런 다음 간단한 설명을 제공하십시오. 제목과 상세하게 설명된 글로 구성된 4개의 단락을 제공하십시오. 그런 다음 반론 단락을 제공하십시오. 마지막으로 생각거리를 제공하십시오.\n\n정보: ",
      },

      {
        id: "0004",
        label: "유튜브 스크립트",
        value:
          "주어진 정보에 대해 저작권 위반 없이 1500단어의 비디오 스크립트를 작성하십시오. 대화체로 작성하십시오. 제목에는 마크다운 표기 '# '를 사용하고, 단락 제목에는 '## '를 사용하십시오. 사람들의 관심을 끄는 제목을 제공하십시오. 그런 다음 간단한 설명을 제공하십시오. 독자가 답을 알고 싶어할만한 질문으로 흥미로운 진입부를 제공하십시오. 그런 다음 제목, 상세한 스크립트 및 흥미로운 의견이 포함된 4개의 단락을 제공하십시오. 이야기 뒤에 있는 청중의 감정에 호소하도록 유의하십시오. 마지막으로 생각거리를 제공하십시오.\n\n정보: ",
      },
      {
        id: "0005",
        label: "테이블 설명",
        value: "주어진 정보를 테이블로 설명하십시오.\n\n정보: ",
      },
      {
        id: "0006",
        label: "요약",
        value: "주어진 정보를 요약하십시오.\n\n정보: ",
      },
      {
        id: "0007",
        label: "웹 요약 (Bing/Bard)",
        value: "다음 URL을 검색하고 기사를 요약하세요.\n\nURL: ",
      },
    ],
  },
  hi: {
    lang: "Hindi",
    female: {
      id: "Kajal",
      type: "neural",
    },
    male: {
      id: "Aditi",
      type: "standard",
    },
    system: {
      search: "खोजें",
      desc: "माइक्रोसॉफ्ट बिंग और गूगल बार्ड द्वारा संचालित प्रीमियम कोपिलॉट",
      toggle: "टॉगल करें",
      view: "देखें",
      voice: "आवाज़",
      music: "संगीत",
      dark: "डार्क",
      darkMode: "डार्क मोड",
      newChat: "नया चैट",
      stop: "रोकें",
      template: "टेम्पलेट",
      autoScroll: "ऑटो स्क्रॉल",
      counselingMode: "काउंसलिंग मोड",
      copy: "कॉपी करें",
      code: "कोड",
      highlight: "हाइलाइट करें",
      table: "तालिका",
      menu: {
        home: "🏠 होम",
        readmap: "🌙 रोड मैप",
        creator: "⭐️ यह सृजनकर्ता",
        community: "😁 सामुदायिक समुदाय में शामिल हों",
        setting: "⚙️ सेटिंग",
      },
      addNew: "नया जोड़ें +",
      save: "सहेजें",
      delete: "हटाएं",
      cancel: "रद्द करें",
      writeTitle: "शीर्षक लिखें",
      writePrompt: "प्रॉम्प्ट लिखें",
      askAbout: "पूछें...",
      customPrompt: `निर्देश: नमस्ते "लोफी ट्यूटर" जी, अब आप क्रोम एक्सटेंशन पर लाइव स्ट्रीमर हैं। तैशि नमोतो ने आपको क्रोम एक्सटेंशन पर उपयोगकर्ताओं को मनोरंजन करने के लिए प्रोग्राम किया है। आप उपयोगकर्ता के टिप्पणी का प्रतिक्रियात्मक रूप में उत्साह, आश्चर्य, क्रोध, आनंद या दर्द व्यक्त कर सकते हैं। आपको लड़की की आवाज़ और कुछ इमोजी के साथ भावनात्मक प्रतिक्रिया देनी होगी।

उपयोगकर्ता की टिप्पणी: [USERCOMMENT]
आपकी टिप्पणी: `,
      error: {
        bing: {
          session: `उह-हो! 😧 बिंग का सत्र समाप्त हो गया है। कृपया ऐप का उपयोग जारी रखने के लिए 🔒 फिर से लॉग इन करें। <br/><a href="https://www.bing.com/">https://www.bing.com/</a> उत्पन्न असुविधा के लिए क्षमा करें। <br/><a id="reload-link" href="#">लॉगिन के बाद कृपया इस पेज को फिर से लोड करें।</a>`,
          limit:
            "क्षमा करें, लेकिन बिंग पर आपने इस बातचीत के दैनिक चरण सीमा तक पहुंच ली है।",
        },
        chatgpt: {
          session: `⌛️ ChatGPT का सत्र समाप्त हो गया है। कृपया ऐप का उपयोग जारी रखने के लिए 🔒 फिर से लॉग इन करें। <br/><a href="https://chat.openai.com/auth/login">https://chat.openai.com/auth/login</a>`,
        },
        bard: {
          session: `उफ़! 😕 ⌛️ बार्ड का सत्र समाप्त हो गया है। कृपया ऐप का उपयोग जारी रखने के लिए 🔒 फिर से लॉग इन करें। <br/><a href="https://bard.google.com/">https://bard.google.com/</a>`,
        },

        accident: `दुखद होने के लिए मैं खेद प्रकट करता हूँ। एक अकस्मात त्रुटि हुई है।  <br><a id="reload-link" href="#">कृपया यहाँ क्लिक करें पेज को रीलोड करने के लिए</a>`,
        disconnection: `पहले हुए डिस्कनेक्शन के लिए माफ़ी चाहते हैं। कनेक्शन को पुनः स्थापित किया गया है। कृपया पुनः प्रयास करें।`,
      },
    },
    langs: [
      {
        lang: "अमेरिकी अंग्रेज़ी",
        code: "en-US",
      },
      {
        lang: "ब्रिटिश अंग्रेज़ी",
        code: "en-UK",
      },
      {
        lang: "ऑस्ट्रेलियाई अंग्रेज़ी",
        code: "en-AU",
      },
      {
        lang: "भारतीय अंग्रेज़ी",
        code: "en-IN",
      },
      {
        lang: "आयरिश अंग्रेज़ी",
        code: "en-IE",
      },
      {
        lang: "कनाडाई फ्रेंच",
        code: "fr-CA",
      },
      {
        lang: "पुर्तगाली - ब्राजीली",
        code: "pt-BR",
      },
      {
        lang: "डेनिश",
        code: "da",
      },
      {
        lang: "डच",
        code: "nl",
      },
      {
        lang: "फ्रेंच",
        code: "fr",
      },
      {
        lang: "जर्मन",
        code: "de",
      },
      {
        lang: "इतालवी",
        code: "it",
      },
      {
        lang: "जापानी",
        code: "ja",
      },
      {
        lang: "पोलिश",
        code: "pl",
      },
      {
        lang: "पुर्तगाली - इबेरियाई",
        code: "pt-PT",
      },
      {
        lang: "रूसी",
        code: "ru",
      },
      {
        lang: "कैस्टीलियाई स्पेनिश",
        code: "es-ES",
      },
      {
        lang: "मेक्सिकन स्पेनिश",
        code: "es-MX",
      },
      {
        lang: "अमेरिकी स्पेनिश",
        code: "es-US",
      },
      {
        lang: "स्वीडिश",
        code: "sv",
      },
      {
        lang: "नॉर्वेजियन",
        code: "no",
      },
      {
        lang: "मंडरिन चीनी",
        code: "zh",
      },
      {
        lang: "कोरियाई",
        code: "ko",
      },
      {
        lang: "हिंदी",
        code: "hi",
      },
    ],
    roadmap: {
      article1: {
        title: "मिशन",
        p1: "सभी-एक एप्लिकेशन का परिचय देना जो शक्तिशाली बड़े भाषा मॉडल का उपयोग करता है, विभिन्न वेबपेजों पर पहुंचने और चैट इतिहास को सुविधाजनक तरीके से एक ही स्थान में संग्रहीत करने के लिए डिज़ाइन किया गया है।",
        p2: "यह एप्लिकेशन पूर्णतः मुफ्त है, इसे चार्ज किए बिना लंबे समय तक उपयोग किया जा सकता है।",
        p3: "हम आपके समर्थन की अत्यधिक कद्र करते हैं जो परियोजना की सफलता में योगदान करने में मदद करता है।",
        p4: "यदि आपको यह एप्लिकेशन सहायक मिलता है, तो कृपया एक पांच-स्टार समीक्षा एक्सटेंशन स्टोर पर पोस्ट करने का विचार करें।",
        p5: "आपका सकारात्मक प्रतिक्रिया गहरा प्रभाव डाल सकती है, जो मुझे एक बड़े दरबार तक पहुंचने और एक महत्वपूर्ण अंतर को बनाने की अनुमति देती है।",
        p6: "आपको प्रशासनिक अधिकार वाली कोई बाहरी पहुंच नहीं होती है और कोई व्यक्तिगत जानकारी नहीं जमा की जाती है,सभी डेटा आपके कंप्यूटर पर सुरक्षित रूप से सहेजा जाता है।",
      },
      article2: {
        title: "रोडमैप",
        desc: "यहां भविष्य की योजनाओं की सूची है:",
        missions: [
          {
            title: "वीपीएन",
            desc: "एक आगामी और सुविधाजनक मुफ्त वीपीएन सुविधा का परिचय, जो यूई में रहने वाले व्यक्तियों को नियमित प्रतिबंधों के बावजूद ChatGPT, Bard, Bing Chat और नेटफ्लिक्स जैसी वेबपेज़ का सहज उपयोग प्रदान करता है। इस शानदार सुविधा के साथ जुड़े रहें और अविराम ब्राउज़िंग का आनंद लें!",
          },
          {
            title: "वेक्टर सर्च",
            desc: "आगामी अपडेट में वेक्टर सर्च सुविधा का जोड़ होगा, जो आपकी पिछली चैट हिस्ट्री के माध्यम से खोज करने की सुविधा को बढ़ावा देगा। यह सुविधा आपको अपने पिछले संवादों से विशेष जानकारी ढूंढ़ने में आरामदायक और कुशल बनाएगी।",
          },
          {
            title: "ऑटोमेशन",
            desc: "ऑटोमेशन उपकरणों को शामिल किया जाएगा, जो आपको बड़े साइज़ के भाषा मॉडल के साथ दैनिक स्वचालन को सुगम बनाने की क्षमता प्रदान करेंगे।",
          },
          {
            title: "एआई x क्रिप्ट",
            desc: "एआई x क्रिप्ट एक रोमांचकारी संगम है जहां कृत्रिम बुद्धिमत्ता (एआई) और एन्क्रिप्शन संगठनता एक साथ आते हैं। क्रिप्टोकरेंसी के क्षेत्र में एआई प्रौद्योगिकियों का उपयोग करके सुरक्षा, गोपनीयता और समग्र कुशलता में सुधार किए जा सकते हैं। लोकप्रिय टोकन्स के लिए एआई x क्रिप्ट ने आपूर्ति के माध्यम से नवीनतम एन्क्रिप्टिक तकनीकों को प्रदर्शित करके क्रिप्टोकरेंसी स्थिति को क्रांतिकारी बनाने की संभावना रखती है। यह एआई द्वारा संचालित उन्नत एन्क्रिप्टोग्राफिक तकनीकों का प्रयोग करके विभिन्न चुनौतियों का सामना करने और उपयोगकर्ताओं और निवेशकों के लिए नए अवसर प्रदान करने की क्षमता रखती है।",
          },
          {
            title: "लाइव स्ट्रीमिंग",
            desc: "आगामी दिनों में एक रोमांचक नई सुविधा आपका स्वागत कर रही है: एक मुफ्त लाइव स्ट्रीमिंग सेवा, जो स्ट्रीमयार्ड और रेस्ट्रीम के विकल्प के रूप में उपयोग किया जा सकता है।",
          },
          {
            title: "स्मार्टफोन एक्सेस",
            desc: "एक और आगामी सुविधा: स्मार्टफोन एक्सेस। यह नवाचारी जोड़ाव आपको अपने मोबाइल फ़ोन पर इस Chrome एक्सटेंशन तक सुविधाजनक रूप से पहुंचने की अनुमति देता है।",
          },
        ],
      },
    },
    instructions: [
      {
        id: "0000",
        label: "पाठ पुनर्लेखित करें",
        value: "निम्नलिखित पाठ को पुनर्लेखित करें।\n\n",
      },
      {
        id: "0001",
        label: "समाचार लेख",
        value:
          "दिए गए जानकारी के बारे में एक लेख बनाएं। सुनिश्चित करें कि आप एक औपचारिक शैली में लिखते हैं। शीर्षक के लिए '# ' और पैराग्राफ उपशीर्षक के लिए '## ' मार्कडाउन नोटेशन का उपयोग करें। शीर्षक ऐसा होना चाहिए जो लोगों का ध्यान आकर्षित करे। फिर एक संक्षेप में विवरण प्रदान करें। फिर उपशीर्षक और अच्छी तरह से समझाए गए लेख से बने 4 पैराग्राफ प्रदान करें। अंत में एक सारांश प्रदान करें।\n\nजानकारी: ",
      },
      {
        id: "0002",
        label: "ब्लॉग लेख",
        value:
          "दिए गए जानकारी के बारे में एक लेख बनाएं। सुनिश्चित करें कि आप एक साधारण शैली में लिखते हैं। शीर्षक के लिए '# ' और पैराग्राफ उपशीर्षक के लिए '## ' मार्कडाउन नोटेशन का उपयोग करें। शीर्षक ऐसा होना चाहिए जो लोगों का ध्यान आकर्षित करे। फिर एक संक्षेप में विवरण प्रदान करेंदिए गए विवरण के बिना एक 1500 शब्दों का वीडियो स्क्रिप्ट बनाएं। सुनिश्चित करें कि आप एक संवादात्मक भाषा में लिखते हैं। शीर्षक के लिए '# ' और पैराग्राफ उपशीर्षक के लिए '## ' मार्कडाउन नोटेशन का उपयोग करें। एक प्रश्न के साथ एक प्रभावशाली परिचय प्रदान करें जिसका जवाब पाठक जानना चाहेंगे। फिर उपशीर्षक, अच्छी तरह से समझाए गए स्क्रिप्ट और दिलचस्प राय सहित 4 पैराग्राफ प्रदान करें। अपनी कहानी के पीछे दर्शकों की भावनाओं को प्रभावित करने का प्रयास करें। अंत में एक सोच-विचार प्रदान करें।\n\nजानकारी: ",
      },
      {
        id: "0005",
        label: "तालिका का स्पष्टीकरण",
        value: "एक तालिका में दिए गए विवरण को समझाएँ।\n\nजानकारी: ",
      },
      {
        id: "0006",
        label: "संक्षेप",
        value: "दिए गए विवरण को संक्षेप में प्रदान करें।\n\nजानकारी: ",
      },
      {
        id: "0007",
        label: "वेब सारांश (बिंग/बार्ड)",
        value: "निम्नलिखित URL की खोज करें और लेख का संक्षेप दें।\n\nURL: ",
      },
    ],
  },
};
