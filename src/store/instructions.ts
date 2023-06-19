import { customLang } from "./lang";
import type { LangCode } from "./langTypes";

export const checkLocale = (): LangCode => {
  const defaultVal =
    navigator?.language &&
    Object.keys(customLang).some((lang) =>
      lang.toLocaleLowerCase().includes(navigator.language.toLocaleLowerCase())
    )
      ? (Object.keys(customLang).filter((lang) =>
          lang
            .toLocaleLowerCase()
            .includes(navigator.language.toLocaleLowerCase())
        )[0] as LangCode)
      : "en-US";
  return defaultVal;
};

export const defaultTemplateItems = customLang[checkLocale()].instructions;
