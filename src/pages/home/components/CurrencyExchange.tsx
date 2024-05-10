import { useTranslation } from "react-i18next";

const CurrencyExchange = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary-blue py-2 gap-4 justify-center mb-8 flex ">
      <div className="flex gap-2 justify-center items-center">
        <div>
          <img src={"/flag-mex.png"} alt="" />
        </div>

        <p className="text-white">
          <span className="font-bold">
            {t("home.send")} USD-{">"}MXN:
          </span>
          $16.79 <span className="font-bold">MXN-{">"}USD:</span>
          $16.83
        </p>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <div>
          <img src={"/flag-col.png"} alt="" />
        </div>

        <p className="text-white">
          <span className="font-bold">
            {t("home.send")} USD-{">"}COP:
          </span>
          $3,870.55 <span className="font-bold">COP-{">"}USD:</span>
          $3,909.45
        </p>
      </div>
    </div>
  );
};

export default CurrencyExchange;
