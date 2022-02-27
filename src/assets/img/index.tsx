import * as React from "react";
import { FC } from "react";

interface Props {
  width?: number;
}

export const Atlas: FC<Props> = ({ width }) => {
  return <img src="./img/atlas.svg" alt="Atlas" width={width ? width : 237} />;
};
