import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { Button, LanguageSelector } from "../..";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="relative">
      <MdMenu size={24} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="absolute top-8 right-0 bg-white w-fit p-2">
          <LanguageSelector />

          <Link to={"/app"}>
            <Button
              variant="primary"
              text={t("navbar.buttonText")}
              rounded
              className="block sm:hidden text-nowrap"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
