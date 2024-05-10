import React, { useEffect, useState } from "react";
import CalculatorDropdown from "./CalculatorDropdown";
import { Currencies, Side } from "../config";
import { CurrenciesData } from "..";

const DEBOUNCER_TIME = 500;

interface CalculatorInputProps {
  label: string;
  value: string;
  currency: Currencies;
  currenciesData: CurrenciesData;
  onCurrencyChange: (currency: Currencies) => void;
  side: Side;
  onPriceChange: (price: number) => void;
}

const CalculatorInput = ({
  label,
  currency,
  onCurrencyChange,
  side,
  currenciesData,
  value,
  onPriceChange,
}: CalculatorInputProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentValue(e.target.value);

  useEffect(() => {
    if (!Number(currentValue) || value === currentValue) {
      return;
    }

    const handler = setTimeout(() => {
      onPriceChange(Number(currentValue));
    }, DEBOUNCER_TIME);

    return () => {
      clearTimeout(handler);
    };
  }, [currentValue]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className="flex gap-4">
      <div className="flex gap-4 flex-col">
        <label className="text-white text-lg" htmlFor="">
          {label}
        </label>

        <input
          placeholder=""
          className="rounded-full p-2"
          title="price"
          type="number"
          value={currentValue}
          onChange={handleChange}
        />
      </div>

      <CalculatorDropdown
        currenciesData={currenciesData}
        onCurrencyChange={onCurrencyChange}
        currency={currency}
        side={side}
      />
    </div>
  );
};

export default CalculatorInput;
