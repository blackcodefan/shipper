import styled from "styled-components";
import { Select } from "antd";

interface Props {
  size?: "small" | "middle" | "large";
}

const SingleSelect = styled(Select)<Props>`
  width: 100%;
  .ant-select-selection-item {
    color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 20px !important;
  }
  .ant-select-selector {
    background: #353535;
    border-radius: 5px;
    height: ${(props) => (props.size == "small" ? 44 : 65)}px!important;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
  }
`;

export default SingleSelect;
