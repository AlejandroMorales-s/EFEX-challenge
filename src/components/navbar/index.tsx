import { useTranslation } from "react-i18next";
import Dropdown from "./components/Dropdown";
import { Link } from "react-router-dom";
import { LOGO_ALT, LOGO_URL } from "./config";
import { Button } from "..";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="flex justify-center bg-white p-2">
      <div className="max-w-[1200px] w-full flex justify-between">
        <Link className="select-none" to={"/"}>
          <img width={90} src={LOGO_URL} alt={LOGO_ALT} />
        </Link>

        <div className="flex gap-6 items-center justify-center">
          <p className="text-sm select-none text-gray hidden sm:block">
            {t("navbar.text")}
          </p>

          <Link to={"/app"}>
            <Button
              variant="primary"
              text={t("navbar.buttonText")}
              rounded
              className="hidden sm:block"
            />
          </Link>

          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
