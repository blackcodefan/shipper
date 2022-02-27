import styled from "styled-components";

interface MessageItemProps {
  owner: "me" | "other";
}

const MessageItem = styled.div<MessageItemProps>`
  display: flex;
  margin: 5px;
  gap: 10px;
  grid-template-columns: 50px auto 24px;
  align-items: flex-end;
  justify-content: ${(props) =>
    props.owner == "other" ? "left" : "space-between"};
  .placeholder {
    width: ${(props) => (props.owner == "me" ? "100px" : "40px")};
  }
`;

export default MessageItem;
