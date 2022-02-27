import styled from "styled-components";
import { Slider } from "antd";
import { FC, useState } from "react";
import React from "react";

interface Props {
  initValue?: number;
  max?: number;
  min?: number;
  marks?: any;
  onChange?: Function;
}

const Range = styled(Slider)`
  .ant-slider-track {
    background-color: #20a5f5;
  }
  .ant-slider-handle {
    width: 32px;
    height: 32px;
    margin-top: -16px;
    border: solid 2px #20a5f5;
    background-color: #20a5f5;
    ::after {
      position: absolute;
      content: "${(props) => props.value}";
      color: white;
      font-size: 14px;
      line-height: 16px;
      font-weight: bold;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  }
  .ant-slider-rail {
    background-color: #353535;
    :hover {
      background-color: #353535;
    }
  }
  .ant-slider-mark-text {
    color: white;
  }
`;

const RangeSlider: FC<Props> = ({ initValue, marks, max, min }) => {
  const [val, setValue] = useState(initValue);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <Range
      tooltipVisible={false}
      onChange={onChange}
      max={max || 100}
      min={min || 0}
      value={val}
      marks={marks}
    />
  );
};

export default RangeSlider;
