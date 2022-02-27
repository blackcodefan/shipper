import styled from "styled-components";

interface LayerProps {
  presentChat?: boolean;
}

const Layer = styled.div<LayerProps>`
  display: grid;
  gap: 10px;
  grid-template-columns: ${(props) =>
    props.presentChat == false ? "2fr 8fr" : "2fr 5fr 3fr"};
  @media (max-width: 1024px) {
    grid-template-columns: ${(props) =>
      props.presentChat == false ? "2fr 6fr" : "2fr 3fr 3fr"};
  }
  @media (max-width: 576px) {
    grid-template-columns: 12fr;
  }
`;

export default Layer;
