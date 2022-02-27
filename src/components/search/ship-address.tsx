import React, { FC } from "react";
import styled from "styled-components";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Form, Input } from "antd";
import Icon from "../../assets/icons";
import { IconCircleButton, PrimaryBtn } from "../button";

interface Props {
  from?: string;
  to?: string;
  onFinish?: Function;
}

const ShipAddressInputWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 1000px;
  margin: auto;
  .ant-input-affix-wrapper,
  .ant-input-affix-wrapper:focus {
    border: none !important;
    box-shadow: none;
    --webkit-box-shadow: none;
    &.from {
      border-radius: 5px 0 0 5px;
    }
    &.to {
      border-radius: 0 5px 5px 0;
    }
  }
  .submit-wrapper {
    display: none;
    margin-top: 10px;
    text-align: center;
  }
  .refresh-wrapper {
    display: none;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 5px;
    .submit-wrapper {
      display: block;
    }
    .refresh-wrapper {
      display: block;
      position: absolute;
      z-index: 10;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 54px;
    }
    .ant-input-affix-wrapper,
    .ant-input-affix-wrapper:focus {
      &.from,
      &.to {
        border-radius: 5px;
      }
    }
  }
`;

const ShipAddressInput: FC<Props> = () => {
  const breakpoints = useBreakpoint();

  return (
    <Form>
      <ShipAddressInputWrapper>
        <Input
          size={breakpoints.md ? "large" : "middle"}
          placeholder="Ship From"
          prefix={<Icon icon="ship-from" />}
          suffix={
            breakpoints.md ? (
              <IconCircleButton icon={<Icon icon="refresh" />} shape="circle" />
            ) : (
              <></>
            )
          }
          className="light from"
        />
        <Input
          size={breakpoints.md ? "large" : "middle"}
          placeholder="Ship To"
          prefix={<Icon icon="flag-outline" color="#000" />}
          suffix={
            breakpoints.md ? (
              <PrimaryBtn size="middle">schedule</PrimaryBtn>
            ) : (
              <></>
            )
          }
          className="light to"
        />
        <div className="submit-wrapper">
          <PrimaryBtn size="small">schedule</PrimaryBtn>
        </div>
        <div className="refresh-wrapper">
          <IconCircleButton icon={<Icon icon="refresh" />} shape="circle" />
        </div>
      </ShipAddressInputWrapper>
    </Form>
  );
};

export default ShipAddressInput;
