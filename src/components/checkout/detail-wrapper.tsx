import styled from "styled-components";

const DetailPad = styled.div`
  border: 1px solid #353535;
  padding: 40px;
  @media (max-width: 1024px) {
    border: none;
    border-bottom: 1px solid #353535;
  }
`;

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: none;
  }
`;

export { DetailPad, DetailWrapper };
