import styled from "styled-components";

interface StatusBoxProps {
  status: "pending" | "picked" | "delivered";
}

const StatusBox = styled.div<StatusBoxProps>`
  width: 123px;
  height: 65px;
  padding: 10px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) =>
    props.status == "pending"
      ? "#353535"
      : props.status == "picked"
      ? "#1F2B3D"
      : "#21321C"};
  .title {
    color: ${(props) =>
      props.status == "pending"
        ? "#aaa"
        : props.status == "picked"
        ? "#20A5F5"
        : "#7EDB5D"};
  }
  .time {
    color: ${(props) =>
      props.status == "pending"
        ? "#fff"
        : props.status == "picked"
        ? "#20A5F5"
        : "#7EDB5D"};
    font-weight: bold;
  }
`;

export default StatusBox;
