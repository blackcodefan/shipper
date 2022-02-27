import * as React from "react";
import { FC } from "react";
import Link from "next/link";

interface Props {
  width?: number;
}

export const AppLogo: FC<Props> = ({ width }) => {
  return (
    <Link href="/">
      <img
        src="/logo/logo.svg"
        alt="Caterhub Logo"
        width={width ? width : 59}
        style={{ cursor: "pointer" }}
      />
    </Link>
  );
};
