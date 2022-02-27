import { FC, ReactNode } from "react";
import { H4 } from "../heading";
import Icon from "../../assets/icons";
import React from "react";
import { Divider } from "antd";

interface Props {
  children: ReactNode;
  label: string;
  hasInfo?: boolean;
  style?: object;
}

const LabeledWidget: FC<Props> = (props) => {
  return (
    <div style={{ ...props.style, padding: 15 }}>
      <H4 style={{ color: "white" }}>
        {props.label}
        {props.hasInfo ? <Icon icon="info" /> : ""}
      </H4>
      <Divider style={{ margin: 4, border: "none" }} />
      {props.children}
    </div>
  );
};

export default LabeledWidget;
