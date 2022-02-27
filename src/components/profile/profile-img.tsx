import styled from "styled-components";

interface Props {
  url?: string;
}

const ProfileImage = styled.div<Props>`
  width: 290px;
  height: 250px;
  border-radius: 5px;
  background: url("${(props) => props.url || "./avatar/avatar1.png"}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: auto;
  position: relative;
  .upload-btn {
    width: 150px;
    height: 40px;
    //padding: 12px;
    color: white;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    border-radius: 10px;
  }
`;

export default ProfileImage;
