import { useState } from "react";
import { Currencies, Side } from "../config";
import { IoMdArrowDropdown } from "react-icons/io";
import clsx from "clsx";
import { CurrenciesData } from "..";

export const FLAGS = {
  [Currencies.mxn]: "/flags/rounded/mx-flag.png",
  [Currencies.usd]: "/flags/rounded/us-flag.png",
  [Currencies.cop]: "/flags/rounded/co-flag.png",
};

const FLAG_IMG_WIDTH = 24;

interface CalculatorDropdownProps {
  currency: Currencies;
  onCurrencyChange: (currency: Currencies) => void;
  side: Side;
  currenciesData: CurrenciesData;
}

const CalculatorDropdown = ({
  currency,
  onCurrencyChange,
  side,
  currenciesData,
}: CalculatorDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentSideCurrency = currenciesData[side].currency;
  const otherSideCurrency =
    currenciesData[side === Side.send ? Side.receive : Side.send].currency;

  return (
    <div className="self-end relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className="flex gap-2 items-center justify-center">
          <img
            width={FLAG_IMG_WIDTH}
            src={FLAGS[currency]}
            alt={`${currency} flag`}
          />
          <p className="text-white">{currency}</p>
          <IoMdArrowDropdown
            className={clsx(isOpen ? "rotate-180" : "", "text-white ")}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-8 right-0 bg-white w-fit z-[100]">
          <div className="flex flex-col">
            {Object.values(Currencies).map((currency) => (
              <button
                type="button"
                onClick={() => {
                  onCurrencyChange(currency);
                  setIsOpen(false);
                }}
                key={currency}
                disabled={
                  currentSideCurrency === currency ||
                  currency === otherSideCurrency
                }
                className={clsx(
                  "w-full p-2",
                  currentSideCurrency === currency && "bg-blue-100",
                  currency === otherSideCurrency && "opacity-40"
                )}
              >
                <div className="flex gap-2 items-center justify-center">
                  <img
                    width={FLAG_IMG_WIDTH}
                    src={FLAGS[currency]}
                    alt={`${currency} flag`}
                  />
                  <p>{currency}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorDropdown;
