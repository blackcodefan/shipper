import styled from "styled-components";

const MessageInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 5px 15px;
  .dark {
    background: #353535;
    border-radius: 10px;
    border: none !important;
    color: white;
  }
  .ant-btn {
    height: 65px !important;
    width: 65px !important;
    background: linear-gradient(180deg, #1bc8ff 0%, #1f7bd0 100%);
    border-radius: 10px !important;
  }
`;

export { MessageInput };
