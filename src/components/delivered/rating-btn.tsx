import styled from "styled-components";

interface RatingBtnProps {
  type?: "like" | "dislike";
}

const RatingWidget = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
`;

const RatingBtn = styled.div<RatingBtnProps>`
  background: ${(props) => (props.type == "like" ? "#21321C" : "#321C1C")};
  border-radius: 5px;
  cursor: pointer;
  width: 118px;
  height: 118px;
  padding: 35px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    padding: 25px;
  }
`;

export { RatingBtn, RatingWidget };
