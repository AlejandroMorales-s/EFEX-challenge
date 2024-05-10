import CurrencyExchangeCalculator from "./currencyExchangeCalculator";
import Details from "./Details";

const DetailsSection = () => {
  return (
    <div className="w-full flex gap-16 flex-col lg:flex-row justify-center mt-16 px-4 items-center">
      <Details />
      <CurrencyExchangeCalculator />
    </div>
  );
};

export default DetailsSection;
