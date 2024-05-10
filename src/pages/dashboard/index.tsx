import { useTranslation } from "react-i18next";
import { GeneralWrapper } from "../../components";
import { Actions, Balance, Charts } from "./components";
import useBalanceData from "./hooks/useBalanceData";
import usePaymentsData from "./hooks/usePaymentsData";

const Dashboard = () => {
  const { balance } = useBalanceData();
  const {
    paymentsIn,
    paymentsOut,
    totalAmountPaymentsIn,
    totalAmountPaymentsOut,
  } = usePaymentsData();

  const { t } = useTranslation();

  return (
    <GeneralWrapper sectionName={t("dashboard.title")}>
      <div className="flex flex-col gap-[25px]">
        <Balance
          copBalance={balance.copBalance}
          mxnBalance={balance.mxnBalance}
          usdBalance={balance.usdBalance}
          totalBalance={balance.totalBalance}
        />

        <Actions />

        <Charts
          totalAmountPaymentsIn={totalAmountPaymentsIn}
          totalAmountPaymentsOut={totalAmountPaymentsOut}
          paymentsIn={paymentsIn}
          paymentsOut={paymentsOut}
        />
      </div>
    </GeneralWrapper>
  );
};

export default Dashboard;
