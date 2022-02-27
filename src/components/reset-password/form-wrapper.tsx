import styled from "styled-components";

const FormWrapper = styled.div`
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 448px;
  padding: 135px 30px 30px;
  margin: auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 315px;
    padding: 80px 15px 15px;
  }
`;

export default FormWrapper;
