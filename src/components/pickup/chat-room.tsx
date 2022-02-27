import styled from "styled-components";

const ChatRoom = styled.div`
  border-radius: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatRoomHeader = styled.div`
  width: 100%;
  height: 95px;
  background: #20a5f5;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 5px;
  .left-part {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5px;
  }
`;

const AddUserBtn = styled.div`
  background: #fff;
  padding: 5px;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const ChatBox = styled.div`
  padding: 15px;
  color: white;
  min-height: 300px;
  height: 100%;
  position: relative;
`;

const ChatScrollArea = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export { ChatRoom, ChatRoomHeader, AddUserBtn, ChatBox, ChatScrollArea };
