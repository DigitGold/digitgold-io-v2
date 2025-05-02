import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => changeLanguage('fr')}>
        <img
          src="/assets/icons/fr.svg"
          alt="Français"
          className="w-6 h-4 rounded-sm hover:scale-105 transition-transform"
        />
      </button>
      <button onClick={() => changeLanguage('en')}>
        <img
          src="/assets/icons/en.svg"
          alt="English"
          className="w-6 h-4 rounded-sm hover:scale-105 transition-transform"
        />
      </button>
    </div>
  );
};

export default LanguageSwitch;
