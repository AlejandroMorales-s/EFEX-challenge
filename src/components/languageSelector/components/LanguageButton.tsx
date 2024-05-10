import React from "react";
import { useTranslation } from "react-i18next";
import { Language } from "..";
import { FLAG_ALT, LANGUAGES_FLAGS_URLS } from "../config";

interface LanguageButtonProps {
  lng: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const LanguageButton = ({ lng, onClick, icon }: LanguageButtonProps) => {
  const { t } = useTranslation();

  return (
    <button type="button" className="w-full" onClick={onClick}>
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 flex items-center justify-center h-8 overflow-hidden">
            <img src={LANGUAGES_FLAGS_URLS[lng as Language]} alt={FLAG_ALT} />
          </div>

          {t(`languageSelection.${lng}`)}
        </div>

        {icon}
      </div>
    </button>
  );
};

export default LanguageButton;
