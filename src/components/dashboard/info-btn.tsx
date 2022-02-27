import styled from "styled-components";

const InfoBtn = styled.div`
  display: flex;
  padding: 25px 0;
  justify-content: center;
  align-items: center;
  background: #353535;
  border-radius: 10px;
  gap: 5px;
  .info {
    color: #20a5f5;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
  .label {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    .info {
      font-size: 13px;
      line-height: 15px;
    }
    .label {
      font-size: 10px;
      line-height: 12px;
      text-align: center;
    }
  }
`;
export default InfoBtn;
