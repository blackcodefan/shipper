import styled from "styled-components";
import { FC } from "react";
import { Col, Divider, Row } from "antd";
import Icon from "../../assets/icons";
import React from "react";

interface Props {
  title: string;
  pos: string;
  date?: string;
  time?: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

const DecorTabBackground = styled.div`
  height: 70px;
  padding: 13px;
  border-radius: 0 10px;
  cursor: pointer;
  &.left,
  &.right {
    border-radius: 0 0 10px 10px;
  }
  @media (max-width: 768px) {
    padding: 10px;
    &.left {
      border-radius: 10px 0 10px 10px;
    }
    &.right {
      border-radius: 0 10px 10px;
    }
  }
  &.dark {
    background: #353535;
  }
  &.light {
    background: linear-gradient(180deg, #1bc8ff 0%, #1f7bd0 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const DatePickerBtn: FC<Props> = (props) => {
  return (
    <DecorTabBackground
      onClick={props.onClick}
      className={`${props.className}} ${props.pos} ${
        props.active ? "light" : "dark"
      }`}
    >
      <div className="title">{props.title}</div>
      {!props.active ? (
        <div>
          <Divider style={{ border: "none", margin: 4 }} />
          <Row>
            <Col span={12} className="info">
              <Icon icon="calendar" width={19} /> {props.date}
            </Col>
            <Col span={12} className="info">
              <Icon icon="clock" width={19} /> {props.time}
            </Col>
          </Row>
        </div>
      ) : (
        <></>
      )}
    </DecorTabBackground>
  );
};

export default DatePickerBtn;
