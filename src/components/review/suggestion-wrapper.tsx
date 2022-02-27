import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

const SuggestionWrapper = styled(ScrollContainer)`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ::after {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    width: 70px;
    background: linear-gradient(90deg, #00000011 0%, rgba(0, 0, 0, 0.9) 100%);
    right: 0;
    bottom: 0;
  }
`;

export default SuggestionWrapper;
