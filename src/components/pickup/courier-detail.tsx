import styled from "styled-components";

const CourierDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  .courier-summary {
    text-align: center;
  }
  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: left;
    .courier-summary {
      text-align: left;
    }
  }
`;

export default CourierDetail;
