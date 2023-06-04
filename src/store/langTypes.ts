export type Mission = {
  title: string;
  desc: string;
};

export type Article1 = {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
};

export type Article2 = {
  title: string;
  desc: string;
  missions: Mission[];
};

export type RoadMap = {
  article1: Article1;
  article2: Article2;
};

export type LangCode =
  | "en-US"
  | "en-UK"
  | "en-AU"
  | "en-IN"
  | "en-IE"
  | "fr-CA"
  | "pt-BR"
  | "da"
  | "nl"
  | "fr"
  | "de"
  | "it"
  | "ja"
  | "pl"
  | "pt-PT"
  | "ru"
  | "es-ES"
  | "es-MX"
  | "es-US"
  | "sv"
  | "no"
  | "zh"
  | "ko"
  | "hi";

export type InstructionIds =
  | "0000"
  | "0001"
  | "0002"
  | "0003"
  | "0004"
  | "0005"
  | "0006";

export type InstrucitonType = {
  id: InstructionIds;
  label: string;
  value: string;
};

export type SystemType = {
  search: string;
  desc: string;
  toggle: string;
  view: string;
  voice: string;
  music: string;
  dark: string;
  darkMode: string;
  newChat: string;
  stop: string;
  template: string;
  autoScroll: string;
  counselingMode: string;
  copy: string;
  code: string;
  highlight: string;
  addNew: string;
  save: string;
  delete: string;
  cancel: string;
  writeTitle: string;
  writePrompt: string;
  askAbout: string;
  menu: {
    home: string;
    readmap: string;
    creator: string;
    community: string;
    setting: string;
  };
  customPrompt: string;
  error: {
    bing: {
      session: string;
      limit: string;
    };
    chatgpt: {
      session: string;
    };
    bard: {
      session: string;
    };
    accident: string;
    disconnection: string;
  };
};

export type Translation = {
  [languageCode: string]: {
    lang: string;
    female: {
      id: string;
      type: string;
    };
    male: {
      id: string;
      type: string;
    };
    system: SystemType;
    langs: {
      lang: string;
      code: LangCode;
    }[];
    roadmap: RoadMap;
    instructions: InstrucitonType[];
  };
};
