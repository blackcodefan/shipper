import styled from "styled-components";

const UserItem = styled.div`
  padding: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #737373;
`;

const UserItemMain = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const UserItemDetail = styled.div`
  display: flex;
  gap: 10px;
`;

export { UserItem, UserItemMain, UserItemDetail };
