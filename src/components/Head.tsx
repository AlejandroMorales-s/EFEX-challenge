import { format } from "date-fns";
import { es } from "date-fns/locale";
import { LanguageSelector, UserData } from ".";

const Head = () => {
  const getFormattedDate = (date: Date) => {
    return format(date, "d 'de' MMMM 'de' yyyy, HH:mm:ss 'GMT'XXX", {
      locale: es,
    });
  };

  const currentDate = new Date();
  const formattedDate = getFormattedDate(currentDate);

  return (
    <div className="py-3.5 px-[30px] border-b flex items-center justify-between bg-white border-light-gray w-full">
      <p className="text-gray text-sm">{formattedDate}</p>
      <div className="flex gap-8 items-center justify-center">
        <UserData />

        <div className="w-[140px]">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default Head;
