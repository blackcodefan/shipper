import styled from "styled-components";

const ProfileWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 135px 30px 30px;
  margin: 0 50px 50px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 80px 15px 15px;
    margin: 0 20px 20px;
  }
`;

export default ProfileWrapper;
