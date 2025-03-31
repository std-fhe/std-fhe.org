import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
type PProps = Props & {
  large?: boolean;
};

export function Section({ children }: Props) {
  return <section className="text-left space-y-4">{children}</section>;
}

export function H1({ children }: Props) {
  return <h1 className="text-4xl md:text-5xl font-bold mb-4">{children}</h1>;
}

export function H2({ children }: Props) {
  return <h2 className="text-2xl md:text-3xl font-semibold mb-2">{children}</h2>;
}

export function P({ children, large = false }: PProps) {
  const baseStyle = large
    ? "text-lg md:text-xl text-gray-600"
    : "text-base md:text-lg text-gray-700";
  return <p className={baseStyle}>{children}</p>;
}
export function Ul({ children }: Props) {
  return <ul className="list-disc list-inside space-y-2 text-left text-base md:text-lg text-gray-700">{children}</ul>;
}

export function Li({ children }: Props) {
  return <li>{children}</li>;
}
