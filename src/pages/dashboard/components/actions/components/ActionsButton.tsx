import clsx from "clsx";

interface ActionsButtonProps {
  borderColor: string;
  icon: React.ReactNode;
  isNew?: boolean;
  mainText: string;
  secondaryText?: string;
}

const ActionsButton = ({
  borderColor,
  icon,
  isNew,
  mainText,
  secondaryText,
}: ActionsButtonProps) => {
  return (
    <div
      className={clsx(
        "py-[35px] px-[40px] border border w-full lg:w-1/2 bg-white flex items-center gap-[50px]",
        borderColor
      )}
    >
      <div className="bg-lighter-blue h-[70px] w-[70px] rounded-full overflow-hidden flex justify-center items-center">
        {icon}
      </div>

      <div className="relative">
        <p className="text-xl">{mainText}</p>
        {secondaryText && <p className="text-gray text-sm">{secondaryText}</p>}

        {isNew && (
          <div className="absolute -top-4 -right-14 bg-primary-blue rounded-full h-5 w-fit py-1 px-2 flex items-center justify-center">
            <p className="text-white text-xs">NEW</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionsButton;
