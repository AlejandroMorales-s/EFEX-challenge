import { ChartsCard } from "./components";

interface ChartsProps {
  paymentsIn: {
    labels: string[];
    data: number[];
  };
  paymentsOut: {
    labels: string[];
    data: number[];
  };
  totalAmountPaymentsIn: number;
  totalAmountPaymentsOut: number;
}

const Charts = ({
  paymentsIn,
  paymentsOut,
  totalAmountPaymentsIn,
  totalAmountPaymentsOut,
}: ChartsProps) => {
  return (
    <div className="flex gap-[30px] flex-wrap justify-between">
      <ChartsCard
        totalAmount={totalAmountPaymentsIn}
        chartData={paymentsIn}
        variant="in"
      />
      <ChartsCard
        totalAmount={totalAmountPaymentsOut}
        chartData={paymentsOut}
        variant="out"
      />
    </div>
  );
};

export default Charts;
