import styled from "styled-components";

const Container = styled.div`
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  &.remove-header-space {
    margin-top: 100px;
    @media (max-width: 768px) {
      margin-top: 70px;
    }
  }
`;

export default Container;
