import styled from "styled-components";
import { Avatar, Badge } from "antd";
import React, { FC } from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

interface Props {
  img?: string;
  border?: boolean;
}

interface BotAvatarProps {
  size: number;
}

const ImageBox = styled.div<Props>`
  width: 110px;
  height: 110px;
  box-sizing: border-box;
  border-radius: 5px;
  border: ${(props) => (props.border === false ? "none" : "3px solid #fff")};
  background-size: cover;
  background-position: center;
  background-image: url("${(props) => props.img}");
  @media (max-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

ImageBox.defaultProps = {
  img: "./avatar/avatar1.png",
};

interface AvatarProps {
  image?: string;
  size?: number;
  badge?: boolean;
  hasBorder?: boolean;
  badgeColor?: string;
}

const AppAvatar: FC<AvatarProps> = ({
  image,
  size,
  badge,
  hasBorder,
  badgeColor,
}) => {
  const breakpoints = useBreakpoint();

  if (badge == false) {
    return (
      <Avatar
        shape="circle"
        src={image ? image : "./avatar/avatar1.png"}
        size={size || (breakpoints.md ? 65 : 54)}
        style={{ border: hasBorder == false ? "none" : "3px solid #FFFFFF" }}
      />
    );
  }

  return (
    <Badge
      dot
      color={badgeColor || "green"}
      offset={breakpoints.sm ? [-26, 52] : [-26, 42]}
    >
      <Avatar
        shape="circle"
        src={image ? image : "./avatar/avatar1.png"}
        size={size || (breakpoints.md ? 65 : 54)}
        style={{ border: hasBorder == false ? "none" : "3px solid #FFFFFF" }}
      />
    </Badge>
  );
};

const BotAvatar = styled.div<BotAvatarProps>`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ToggleBotBtn = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const ModalConfirmMessage = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  padding: 15px;
`;

export { ImageBox, AppAvatar, BotAvatar, ToggleBotBtn, ModalConfirmMessage };
