import { useTranslation } from "react-i18next";
import { CurrencyExchange, DetailsSection } from "./components";
import { Button, Navbar } from "../../components";

const HOME_SECTIONS = [
  "home",
  "solutions",
  "supportAndSecurity",
  "aboutUs",
  "faqs",
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-home-bg-image bg-no-repeat bg-center bg-cover">
      <Navbar />

      <CurrencyExchange />

      <div className="w-full flex flex-col max-w-[1200px] self-center">
        <div className="gap-6 w-full flex flex-col">
          <p className="text-gray text-sm self-center">{t("home.note")}</p>

          <div className="self-center flex justify-between w-fit">
            {HOME_SECTIONS.map((section) => (
              <Button
                key={section}
                variant="tertiary"
                className={section === "home" ? "!text-primary-blue" : ""}
                text={t(`home.sections.${section}`)}
              />
            ))}
          </div>

          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
