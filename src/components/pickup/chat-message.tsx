import styled from "styled-components";

interface MessageBodyProps {
  owner?: "me" | "other";
  first?: boolean;
  last?: boolean;
}

const MessageBody = styled.div<MessageBodyProps>`
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  padding: 12px 20px;
  background: ${(props) => (props.owner == "me" ? "#20A5F5" : "#353535")};
  border-top-left-radius: ${(props) =>
    props.owner == "me" ? "20px" : props.first ? "20px" : "0"};
  border-top-right-radius: ${(props) =>
    props.owner == "other" ? "20px" : props.first ? "20px" : "0"};
  border-bottom-right-radius: ${(props) =>
    props.owner == "other" ? "20px" : props.last ? "20px" : "0"};
  border-bottom-left-radius: ${(props) =>
    props.owner == "me" ? "20px" : props.last ? "20px" : "0"};
`;

export default MessageBody;
