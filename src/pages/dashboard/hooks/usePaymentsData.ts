import { useEffect, useState } from "react";
import efexClient from "../../../api/efexClient";
import "../../../api/efexClient/mocks";
import { Currencies } from "../../home/components/currencyExchangeCalculator/config";

const usePaymentsData = () => {
  const [paymentsIn, setPaymentsIn] = useState<{
    labels: string[];
    data: number[];
  }>({
    labels: [],
    data: [],
  });
  const [paymentsOut, setPaymentsOut] = useState<{
    labels: string[];
    data: number[];
  }>({
    labels: [],
    data: [],
  });
  const [totalAmountPaymentsIn, setTotalAmountPaymentsIn] = useState(0);
  const [totalAmountPaymentsOut, setTotalAmountPaymentsOut] = useState(0);

  const mapData = (
    data: {
      id: number;
      currency: Currencies;
      date: string;
      amount: number;
    }[]
  ) => {
    const labels = data.map((payment) => payment.date);
    const amounts = data.map((payment) => payment.amount);

    return {
      labels,
      data: amounts,
    };
  };

  useEffect(() => {
    efexClient.get("/payments").then((response) => {
      setPaymentsIn(mapData(response.data.paymentsIn));
      setPaymentsOut(mapData(response.data.paymentsOut));
      setTotalAmountPaymentsIn(response.data.totalAmountPaymentsIn);
      setTotalAmountPaymentsOut(response.data.totalAmountPaymentsOut);
    });
  }, []);

  return {
    paymentsIn,
    paymentsOut,
    totalAmountPaymentsIn,
    totalAmountPaymentsOut,
  };
};

export default usePaymentsData;
