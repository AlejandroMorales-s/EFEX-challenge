import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Button } from "../../../../../components";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as "top" | "left" | "bottom" | "right",
    },
    title: {
      display: false,
    },
  },
};

const IN_COLOR = "#4DB6AC";
const OUT_COLOR = "#F99C46";

interface ChartsProps {
  totalAmount: number;
  variant: "in" | "out";
  chartData: {
    labels: string[];
    data: number[];
  };
}

const ChartsCard = ({ variant, totalAmount, chartData }: ChartsProps) => {
  const { t } = useTranslation();

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "",
        data: chartData.data,
        backgroundColor: variant === "in" ? IN_COLOR : OUT_COLOR,
        borderColor: variant === "in" ? IN_COLOR : OUT_COLOR,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full max-w-[545px] border border-light-gray p-5">
      <div className="flex w-full justify-between">
        <div>
          <h4 className="text-lg">
            {t(`dashboard.balance.charts.payments.${variant}`)}{" "}
            <span
              className={clsx(
                "font-medium",
                variant === "in" ? "text-green" : "text-primary-orange"
              )}
            >
              (Jan)
            </span>
          </h4>

          <p className="text-4xl">${totalAmount.toLocaleString()} USD</p>
        </div>

        <Button
          variant="dark-ghost"
          text="View all"
          className="w-fit self-start"
        />
      </div>
      <Bar data={data} options={OPTIONS} />
    </div>
  );
};

export default ChartsCard;
