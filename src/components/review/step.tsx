import { Steps } from "antd";
import styled from "styled-components";
const { Step } = Steps;

interface AppStepProps {
  size?: "small" | "normal";
  tailcolor?: string;
}

const StepsWrapper = styled.div`
  border-radius: 10px;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const AppStep = styled(Step)<AppStepProps>`
  color: white;
  &.justify-tail .ant-steps-item-title::after {
    @media (min-width: 769px) {
      top: 9px !important;
    }
    left: -7px !important;
    background: ${(props) => props.tailcolor || "#353535"} !important;
  }
  .ant-steps-item-icon {
    width: ${(props) => (props.size ? "14" : "32")}px !important;
    height: ${(props) => (props.size ? "14" : "32")}px !important;
    margin-top: ${(props) => (props.size ? "10px" : "0")};
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  background: #fff;
  line-height: 1;
`;

export { StepsWrapper, AppStep, Dot };
