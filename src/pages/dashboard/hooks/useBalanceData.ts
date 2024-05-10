import { useEffect, useState } from "react";
import efexClient from "../../../api/efexClient";
import "../../../api/efexClient/mocks";

export interface Balance {
  usdBalance: number | null;
  mxnBalance: number | null;
  copBalance: number | null;
  totalBalance: number | null;
}

const useBalanceData = () => {
  const [balance, setBalance] = useState<Balance>({
    usdBalance: null,
    mxnBalance: null,
    copBalance: null,
    totalBalance: null,
  });

  useEffect(() => {
    efexClient
      .get("/balances")
      .then((res) => {
        setBalance(res.data.balances);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { balance };
};

export default useBalanceData;
