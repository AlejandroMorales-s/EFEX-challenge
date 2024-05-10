import { useTranslation } from "react-i18next";
import { CalculatorInput } from "./components";
import { useState } from "react";
import { Currencies, Side } from "./config";
import { Button } from "../../../../components";
import { RiArrowUpDownLine } from "react-icons/ri";
import exchangeRateClient from "../../../../api/exchangeRateClient";

export interface CurrenciesData {
  send: { currency: Currencies; value: number };
  receive: { currency: Currencies; value: number };
}

const CurrencyExchangeCalculator = () => {
  const [currenciesData, setCurrenciesData] = useState<CurrenciesData>({
    send: { currency: Currencies.mxn, value: 0 },
    receive: { currency: Currencies.usd, value: 0 },
  });

  const { t } = useTranslation();

  const handleSwitchCurrencies = () => {
    const temp = currenciesData.send.currency;

    setCurrenciesData({
      send: {
        currency: currenciesData.receive.currency,
        value: 0,
      },
      receive: { currency: temp, value: 0 },
    });
  };

  const handleCurrencyChange = (props: {
    currency: Currencies;
    side: Side;
  }) => {
    setCurrenciesData({
      ...currenciesData,
      [props.side]: { ...currenciesData[props.side], currency: props.currency },
    });
  };

  const handlePriceChange = async (props: { price: number; side: Side }) => {
    const otherSide = props.side === Side.send ? Side.receive : Side.send;

    const res = await fetchExchangeRate({
      side: props.side,
      price: props.price,
    });

    setCurrenciesData(
      (prev) =>
        ({
          [props.side]: {
            ...prev[props.side],
            value: props.price,
          },
          [otherSide]: {
            ...prev[otherSide],
            value: res,
          },
        } as unknown as CurrenciesData)
    );
  };

  const fetchExchangeRate = async (props: { side: Side; price: number }) => {
    const { side, price } = props;
    let response: number = 0;

    const currentSideCurrency = currenciesData[side].currency;
    const otherSideCurrency =
      currenciesData[side === Side.send ? Side.receive : Side.send].currency;

    await exchangeRateClient
      .get(`pair/${currentSideCurrency}/${otherSideCurrency}/${price}`)
      .then(({ data }) => (response = data.conversion_result))
      .catch((error) => {
        console.error(error);
      });

    return response;
  };

  return (
    <div className="p-8 bg-radial-gradient shadow-white-shadow rounded-3xl flex gap-4 flex-col w-fit">
      <CalculatorInput
        side={Side.send}
        onPriceChange={(price) => handlePriceChange({ price, side: Side.send })}
        onCurrencyChange={(currency) =>
          handleCurrencyChange({ currency, side: Side.send })
        }
        currency={currenciesData.send.currency}
        value={currenciesData.send.value.toString()}
        label={t("home.calculator.send")}
        currenciesData={currenciesData}
      />

      <Button
        variant="primary"
        rounded
        className="self-end w-fit"
        icon={<RiArrowUpDownLine size={22} />}
        onClick={handleSwitchCurrencies}
      />

      <CalculatorInput
        onPriceChange={(price) =>
          handlePriceChange({ price, side: Side.receive })
        }
        currenciesData={currenciesData}
        side={Side.receive}
        value={currenciesData.receive.value.toString()}
        onCurrencyChange={(currency) =>
          handleCurrencyChange({ currency, side: Side.receive })
        }
        currency={currenciesData.receive.currency}
        label={t("home.calculator.receive")}
      />
    </div>
  );
};

export default CurrencyExchangeCalculator;
