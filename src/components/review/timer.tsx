import styled from "styled-components";

const Timer = styled.div`
  width: 146px;
  height: 64px;
  display: flex;
  align-items: center;
  background: #353535;
  border-radius: 10px;
  justify-content: center;
  gap: 10px;
  @media (max-width: 768px) {
    width: 128px;
    height: 54px;
  }
`;

export default Timer;
