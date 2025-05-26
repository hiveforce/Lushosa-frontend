function Button({
  children,
  className,
  onClick,
  type = "primary",
  icon = true,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  icon?: boolean;
}) {
  const bg = type
    ? type === "primary"
      ? "bg-primary-custom"
      : type === "others"
      ? "bg-secondary-custom"
      : "bg-transparent border border-secondary-custom text-secondary-custom"
    : "bg-primary-custom";
  return (
    <button
      className={` text-others-light-1 px-3 py-1  gap-[5px] rounded-2xl flex items-center justify-center ${className} ${bg}`}
      onClick={onClick}
    >
      {children}
      {((icon && type === "primary") || type === "others") && (
        <img src="/images/arrow-icon.png" alt="" className="w-[8px]" />
      )}
      {icon && type === "secondary" && (
        <img src="/images/arrow-black-icon.png" alt="" className="w-[8px]" />
      )}
      {icon && type === "others" && (
        <img src="/images/arrow-pink-icon.png" alt="" className="w-[8px]" />
      )}
    </button>
  );
}

export default Button;
