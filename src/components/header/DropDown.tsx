import styled from "styled-components";
import { Menu } from "antd";

const DropDownMenu = styled(Menu)`
  border-radius: 10px;
  padding: 10px;
  background: #353535;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
`;

const DropDownItem = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
`;

export { DropDownMenu, DropDownItem };
