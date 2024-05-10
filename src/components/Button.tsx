import clsx from "clsx";

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  rounded?: boolean;
  variant:
    | "primary"
    | "white-ghost"
    | "dark-ghost"
    | "tertiary"
    | "primary-orange";
  className?: string;
  icon?: React.ReactNode;
}

const BUTTON_VARIANTS = {
  primary: "bg-primary-blue text-white",
  "primary-orange": "bg-primary-orange text-white",
  "white-ghost": "bg-none text-white border-2 border-white",
  "dark-ghost": "bg-none text-dark-blue border-2 border-dark-blue",
  tertiary: "bg-none hover:text-primary-blue text-white border-none",
};

const Button = ({
  onClick,
  text,
  rounded,
  variant,
  className,
  icon,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        rounded && "rounded-3xl",
        BUTTON_VARIANTS[variant],
        "px-6 py-2 text-sm select-none text-center",
        className
      )}
      onClick={onClick}
    >
      <div className="flex gap-2 w-full items-center justify-center">
        {text && <p className="w-full text-center">{text}</p>}
        {icon && <div className="w-full">{icon}</div>}
      </div>
    </button>
  );
};

export default Button;
