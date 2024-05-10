import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { ActionsButton } from "./components";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ICON_SIZE = 30;

const Actions = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-[25px] flex-col lg:flex-row">
      <ActionsButton
        isNew
        mainText={t("dashboard.balance.actions.credit.mainText")}
        secondaryText={t("dashboard.balance.actions.credit.subText")}
        icon={<RiMoneyDollarCircleFill size={ICON_SIZE} />}
        borderColor="border-black-blue"
      />
      <ActionsButton
        mainText={t("dashboard.balance.actions.sendPayment.mainText")}
        icon={
          <FaMoneyBillTransfer size={ICON_SIZE} className="text-yellow-400" />
        }
        borderColor="border-yellow-400"
      />
    </div>
  );
};

export default Actions;
