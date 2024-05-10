import { useTranslation } from "react-i18next";
import LanguageButton from "./components/LanguageButton";
import { useState } from "react";
import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";

export type Language = "en" | "es";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (lng: Language) => i18n.changeLanguage(lng);

  return (
    <div className="p-1 pb-0 border border-gray relative">
      <LanguageButton
        icon={
          <IoIosArrowDown
            className={clsx(
              isOpen && "rotate-180",
              "transition-transform duration-150"
            )}
          />
        }
        lng={i18n.language}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={clsx(
          "w-fit bg-white border border-gray px-1 py-2",
          isOpen ? "absolute top-10 right-0 w-full" : "hidden"
        )}
      >
        {["en", "es"].map((lng) => (
          <LanguageButton
            key={lng}
            lng={lng}
            onClick={() => {
              changeLanguage(lng as Language);
              setIsOpen(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
