import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const Button = function ({
  title,
  className,
  onClick,
}: {
  onClick: any;
  // DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  title: string;
  className: string;
}) {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};
