import styled from "styled-components";

interface Props {
  color?: string;
  style?: any;
}

const H1 = styled.h1<Props>`
  font-size: 48px;
  line-height: 56px;
  color: ${(props) => props.color || "white"};
`;

const H2 = styled.h2<Props>`
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.color || "white"};
`;

const H3 = styled.h3<Props>`
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.color || "white"};
`;

const H4 = styled.h4<Props>`
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.color || "white"};
`;

const H5 = styled.h5<Props>`
  font-size: 13px;
  line-height: 15px;
  color: ${(props) => props.color || "white"};
`;

export { H1, H2, H3, H4, H5 };
