import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components";

const INDUSTRIES_LIST = [
  "exports",
  "imports",
  "fintech",
  "ecommerce",
  "logistics",
];

const INTERVAL_TIME = 800;

const Details = () => {
  const [currentIndustry, setCurrentIndustry] = useState(INDUSTRIES_LIST[0]);

  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = INDUSTRIES_LIST.indexOf(currentIndustry);
      const nextIndex =
        currentIndex + 1 >= INDUSTRIES_LIST.length ? 0 : currentIndex + 1;

      setCurrentIndustry(INDUSTRIES_LIST[nextIndex]);
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [currentIndustry]);

  return (
    <div className="flex flex-col w-full lg:w-1/2 gap-6">
      <h1 className="text-white text-4xl font-bold ">{t("home.title")}</h1>

      <h2 className="font-bold text-primary-blue text-4xl">
        {t(`home.industriesList.${currentIndustry}`)}
      </h2>

      <p className="text-white text-lg self-center font-thin">
        {t("home.subtitle")}
      </p>

      <div className="flex gap-28">
        <Button
          rounded
          variant="primary-orange"
          text={t("home.buttons.register")}
        />
        <Button rounded variant="white-ghost" text={t("home.buttons.demo")} />
      </div>
    </div>
  );
};

export default Details;
