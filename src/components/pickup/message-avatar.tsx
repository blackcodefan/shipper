import styled from "styled-components";

interface Props {
  img?: string;
  show?: boolean;
}

const MessageAvatar = styled.div<Props>`
  width: 39px;
  height: 39px;

  img {
    height: 39px;
    border-radius: 5px;
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
  }
`;

export default MessageAvatar;
