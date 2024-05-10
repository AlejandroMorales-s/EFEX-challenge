import { useTranslation } from "react-i18next";
import { Button } from "../../../../components";
import { CurrencyBalanceCard } from "./components";
import { Currencies } from "../../../home/components/currencyExchangeCalculator/config";
import { Balance } from "../../hooks/useBalanceData";

const CURRENCIES = ["usd", "mxn", "cop"];

const BalanceSection = ({ totalBalance, ...balances }: Balance) => {
  const { t } = useTranslation();

  return (
    <div className="border border-light-gray max-w-full p-[30px] bg-white flex flex-col gap-[30px]">
      <div className="flex justify-between items-center flex-col gap-4 lg:flex-row">
        <div>
          <h4 className="text-lg">{t("dashboard.balance.title")}</h4>
          <p className="text-4xl">
            <span className="text-primary-blue">
              ${totalBalance?.toLocaleString() ?? "0.00"}
            </span>{" "}
            <span className="text-light-gray">USD</span>
          </p>
        </div>

        <div className="w-fit flex flex-col gap-4">
          <Button
            variant="dark-ghost"
            text={t("dashboard.balance.buttons.sendPayment")}
            className="w-full"
          />
          <div className="flex gap-4">
            <Button
              variant="dark-ghost"
              text={t("dashboard.balance.buttons.addFunds")}
            />
            <Button
              variant="dark-ghost"
              text={t("dashboard.balance.buttons.convert")}
            />
            <Button
              variant="dark-ghost"
              text={t("dashboard.balance.buttons.withdraw")}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-[35px] flex-wrap justify-center">
        {CURRENCIES.map((currency) => (
          <CurrencyBalanceCard
            key={currency}
            balance={
              balances[
                `${currency}Balance` as keyof Omit<Balance, "totalBalance">
              ]
            }
            currency={currency as Currencies}
          />
        ))}
      </div>
    </div>
  );
};

export default BalanceSection;
