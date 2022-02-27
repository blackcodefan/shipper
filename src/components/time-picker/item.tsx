import React from "react";
import { TimeItem } from "./navigator";

interface Props {
  selected?: boolean;
  time?: any;
  onSelect?: (value) => void;
}

const NavigatorItem: React.FC<Props> = ({ selected, time, onSelect }) => {
  return (
    <TimeItem
      className={selected ? "selected" : ""}
      onClick={() => {
        onSelect(time.id);
      }}
    >
      {time.time}&nbsp;<span className="ap">{time.aa}</span>
    </TimeItem>
  );
};

export default NavigatorItem;
