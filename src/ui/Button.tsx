function Button({
  children,
  className,
  onClick,
  type,
  icon = true,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: string;
  icon?: boolean;
}) {
  const bg = type
    ? type === "primary"
      ? "bg-primary-custom"
      : "bg-transparent border border-secondary-custom text-secondary-custom"
    : "bg-primary-custom";
  return (
    <button
      className={` text-others-light-1 px-3 py-1  gap-[7px] rounded-2xl flex items-center justify-center ${className} ${bg}`}
      onClick={onClick}
    >
      {children}
      {icon && <img src="/images/arrow-icon.png" alt="" className="w-[8px]" />}
    </button>
  );
}

export default Button;
