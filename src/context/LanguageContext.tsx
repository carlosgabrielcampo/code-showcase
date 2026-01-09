import React, { createContext, useContext, useEffect, useState } from "react";
import languages from '../config/lan/index'

type language = "en_US" | "pt_BR";

interface LanguageContextType {
  language: language;
  setLanguage: (language: language) => void;
  actualLanguage: language;
  page_text: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within languageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setlanguageState] = useState<language>(() => {
    const stored = localStorage.getItem("language") as language;
    return stored || "en_US"; // Default to en_US
  });

  const [actualLanguage, setActualLanguage] = useState<language>("en_US");

  useEffect(() => setActualLanguage(language), [language]);

  const setLanguage = (newlanguage: language) => {
    localStorage.setItem("language", newlanguage);
    setlanguageState(newlanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, actualLanguage, page_text: languages[language].PAGE_DATA }}>
      {children}
    </LanguageContext.Provider>
  );
};
