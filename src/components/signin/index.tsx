import styled from "styled-components";

const FormHolder = styled.div`
  width: 50%;
  min-height: 100vh;
  position: absolute;
  right: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-space-vertical {
    padding: 70px 20px 20px;
    max-height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  > div.ant-space {
    width: 462px;
  }
`;

const Center = styled.div`
  text-align: center;
  position: relative;
`;

export { FormHolder, Center };
