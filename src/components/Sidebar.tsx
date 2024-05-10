import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  RiContactsLine,
  RiDashboardLine,
  RiMoneyDollarCircleLine,
  RiMoneyEuroCircleLine,
  RiShieldUserLine,
} from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from ".";

enum Tabs {
  dashboard = "dashboard",
  revenues = "revenues",
  expenses = "expenses",
  contacts = "contacts",
  security = "security",
}

const TABS = [
  Tabs.dashboard,
  Tabs.revenues,
  Tabs.expenses,
  Tabs.contacts,
  Tabs.security,
];

const LOGO_URL = "/logo/white.png";
const LOGO_ALT = "Efex logo";

const REFER_IMAGE_URL = "/refer.png";
const REFER_IMAGE_ALT = "Refer a company";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(Tabs.dashboard);

  const { t } = useTranslation();

  const route = useLocation();

  const tabsIcons = {
    dashboard: <RiDashboardLine className="text-light-blue" size={24} />,
    revenues: <RiMoneyDollarCircleLine className="text-light-blue" size={24} />,
    expenses: <RiMoneyEuroCircleLine className="text-light-blue" size={24} />,
    contacts: <RiContactsLine className="text-light-blue" size={24} />,
    security: <RiShieldUserLine className="text-light-blue" size={24} />,
  };

  useEffect(() => {
    const path = route.pathname.split("/")[2] as Tabs;

    if (TABS.includes(path)) {
      setActiveTab(path);
    }
  }, [route.pathname]);

  return (
    <div className=" w-screen h-screen flex">
      <div className="flex flex-col gap-[30px] min-w-[270px] h-screen border-r-2 border-solid border-light-gray overflow-auto">
        <div className="py-[30px] bg-dark-blue flex items-center justify-center">
          <img src={LOGO_URL} alt={LOGO_ALT} />
        </div>

        <div className=" flex flex-col h-screen">
          {TABS.map((tab) => (
            <Link key={tab} to={`/app/${tab}`}>
              <button
                type="button"
                key={tab}
                className={clsx(
                  "p-5 flex gap-2 items-center w-full justify-start hover:bg-lighter-blue transition-colors duration-150",
                  activeTab === tab ? "bg-lighter-blue font-medium" : ""
                )}
              >
                {tabsIcons[tab]}

                <p className="text-dark-blue">{t(`sidebar.tabs.${tab}`)}</p>
              </button>
            </Link>
          ))}
        </div>

        <div className="bg-primary-blue p-[30px] w-[214px] rounded-2xl self-center mb-6 flex flex-col items-center text-center text-white gap-2 justify-center">
          <img src={REFER_IMAGE_URL} alt={REFER_IMAGE_ALT} />

          <h3>{t("sidebar.refer.title")}</h3>
          <p className="font-thin">{t("sidebar.refer.subtitle")}</p>

          <Button variant="white-ghost" text={t("sidebar.refer.buttonText")} />
        </div>
      </div>

      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
