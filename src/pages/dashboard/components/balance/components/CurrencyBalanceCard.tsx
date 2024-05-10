import { Currencies } from "../../../../home/components/currencyExchangeCalculator/config";
import { FLAGS } from "../../../../home/components/currencyExchangeCalculator/components/CalculatorDropdown";
import { useTranslation } from "react-i18next";

const FLAG_IMG_WIDTH = 30;
const FLAG_IMG_ALT = "flag";

interface CurrencyBalanceCardProps {
  currency: Currencies;
  balance: number | null;
}

const CurrencyBalanceCard = ({
  currency,
  balance,
}: CurrencyBalanceCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="border border-light-gray w-[330px] p-[25px] flex justify-between">
      <div>
        <p className="text-lg">{t(`dashboard.balance.${currency}Balance`)}</p>
        <p className="text-2xl">
          <span className="text-dark-blue">
            ${balance?.toLocaleString() ?? "0.00"}{" "}
          </span>
          <span className="text-light-gray">{currency.toUpperCase()}</span>
        </p>
      </div>

      <div className="h-fit self-end">
        <img
          width={FLAG_IMG_WIDTH}
          src={FLAGS[currency.toUpperCase() as Currencies]}
          alt={FLAG_IMG_ALT}
        />
      </div>
    </div>
  );
};

export default CurrencyBalanceCard;
