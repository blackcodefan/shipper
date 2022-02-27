import styled from "styled-components";

interface Props {
  color?: string;
  fontWeight?: string;
  style?: any;
}

const P1 = styled.p<Props>`
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.color || "white"};
`;

const P2 = styled.p<Props>`
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.color || "white"};
`;

const P3 = styled.p<Props>`
  font-size: 13px;
  color: ${(props) => props.color || "white"};
`;

const P4 = styled.p<Props>`
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => props.color || "white"};
`;

const Span1 = styled.span<Props>`
  font-size: 18px;
  line-height: 21px;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "white"};
`;

const Span2 = styled.span<Props>`
  font-size: 14px;
  line-height: 16px;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "white"};
`;

const Span3 = styled.span<Props>`
  font-size: 13px;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "white"};
`;

const Span4 = styled.span<Props>`
  font-size: 10px;
  line-height: 12px;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "white"};
`;

export { P1, P2, P3, P4, Span1, Span2, Span3, Span4 };
