import React from "react";

interface Props {
  color?: string;
  borderRadius?: string;
  children: React.ReactNode;
  shadow?: boolean;
  width?: string;
  height?: string;
}

export const Card = ({
  color = "#fff",
  borderRadius = "8px",
  children,
  shadow = true,
  width = "250px", // default width tetap
  height = "380px"
}: Props) => {
  return (
    <div
      className={`
        rounded overflow-hidden
        ${shadow ? "shadow-md" : ""}
      `}
      style={{
        backgroundColor: color,
        borderRadius: borderRadius,
        width: width,
        minWidth: width, // biar ga mengecil
        maxWidth: width, // biar ga membesar
        height: height
      }}
    >
      {children}
    </div>
  );
};

export default Card;