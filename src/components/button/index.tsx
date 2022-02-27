import styled from "styled-components";
import { Button } from "antd";

const PrimaryBtn = styled(Button)`
  background: linear-gradient(180deg, #1bc8ff 0%, #1f7bd0 100%);
  color: #fff;
  :hover {
    background: linear-gradient(180deg, #1bc8ff 0%, #1f7bd0 80%);
    color: #fff;
  }
  :focus {
    background: linear-gradient(180deg, #1bc8ff 0%, #1f7bd0 100%);
    color: #fff;
  }
`;

const SecondaryBtn = styled(Button)`
  background: linear-gradient(180deg, #ffffff 0%, #cecece 100%);
  color: #000;
  :hover {
    background-image: linear-gradient(180deg, #ffffff 0%, #cecece 80%);
    color: #000;
  }
  :focus {
    background-image: linear-gradient(180deg, #ffffff 0%, #cecece 100%);
    color: #000;
  }
`;

const UnavailableBtn = styled(Button)`
  background: linear-gradient(180deg, #ffffff 0%, #cecece 100%);
  color: #000;
  opacity: 0.3;
  :hover {
    background: linear-gradient(180deg, #ffffff 0%, #cecece 80%);
    color: #fff;
  }
  :focus {
    background: linear-gradient(180deg, #ffffff 0%, #cecece 100%);
    color: #fff;
  }
`;

const BackButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  height: auto;
  min-height: 0;
  grid-gap: 25px;
  padding: 0;
  font-size: 18px;
  color: #aaaaaa;
  :focus,
  :hover {
    color: #888888;
  }
`;

const IconButton = styled(Button)`
  background: #20a5f5;
  width: 57px;
  height: 57px !important;
  :hover {
    background: #20a5f5;
  }
  :focus {
    background: #20a5f5;
  }
`;

const IconButtonDisabled = styled(Button)`
  background: #353535;
  width: 57px;
  height: 57px !important;
  color: white;
  :hover,
  :focus {
    background: #353535;
    color: white;
  }
`;

const DoubleCircleButton = styled(Button)`
  &.ant-btn {
    width: 65px;
    background: #20a5f5;
    outline: 12px solid rgba(32, 165, 245, 0.2);
    box-sizing: content-box;
    :hover,
    :focus {
      background: #20a5f5;
      outline: 16px solid rgba(32, 165, 245, 0.2);
    }
  }
`;

const IconCircleButton = styled(Button)`
  background: #20a5f5;
  width: 48px;
  height: 48px !important;
  :hover,
  :focus {
    background: #20a5f5;
  }
`;

const LoadMoreBtn = styled(Button)`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  width: 130px;
  height: 40px !important;
  color: white;
  text-transform: none !important;
  :focus,
  :hover {
    color: white;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const EraseBtn = styled(Button)`
  background: #000;
  color: #fff;
  height: 35px !important;
  font-weight: normal;
  font-size: 10px !important;
  line-height: 12px;
  text-transform: none !important;
  padding: 10px !important;
  :hover,
  :focus {
    background: #000;
    color: #fff;
  }
`;

export {
  PrimaryBtn,
  SecondaryBtn,
  BackButton,
  IconButton,
  IconButtonDisabled,
  DoubleCircleButton,
  IconCircleButton,
  UnavailableBtn,
  LoadMoreBtn,
  EraseBtn,
};
