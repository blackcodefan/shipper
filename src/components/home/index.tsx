import styled from "styled-components";
import { Space } from "antd";

const HomeSearchWrapper = styled.div`
  min-width: 750px;
  @media screen and (max-width: 976px) {
    min-width: 500px;
  }
  @media screen and (max-width: 600px) {
    min-width: 250px;
  }
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

const VerticalCenter = styled(Space)`
  height: calc(50% + 40px);
  width: 100%;
  justify-content: center;
`;

export { HomeSearchWrapper, VerticalCenter };
