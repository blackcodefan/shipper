import React, { FC, useState } from "react";
import { Button, Drawer, PageHeader, Space } from "antd";
import { AppLogo } from "../assets/logo";
import { PrimaryBtn, SecondaryBtn } from "../components/button";
import Container from "components/paper/container";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Icon from "../assets/icons";
import { useRouter } from "next/router";
import { AppAvatar } from "../components";
import { Menu, Dropdown } from "antd";
import { DropDownMenu, DropDownItem } from "../components/header/DropDown";
import { Span2 } from "../components/paragraph";

interface HeaderProps {
  data?: any;
  mode?: string; // guest or user
  actions?: boolean;
}

const AppHeader: FC<HeaderProps> = ({ mode, actions }) => {
  const breakpoints = useBreakpoint();
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const actionArea = () => {
    if (!actions) return [];
    if (mode == "guest")
      if (breakpoints.sm)
        return [
          <Space size={20} key={1}>
            <SecondaryBtn
              onClick={() => {
                router.push("/signin");
              }}
            >
              log in
            </SecondaryBtn>
            <PrimaryBtn
              onClick={() => {
                router.push("/signup");
              }}
            >
              sign up
            </PrimaryBtn>
          </Space>,
        ];
      else
        return [
          <Button
            key={1}
            type="link"
            icon={<Icon icon="hamburger" />}
            onClick={() => setVisible(true)}
          />,
        ];
    else
      return [
        <Dropdown overlay={menu} key={1000} placement="bottomRight" arrow>
          <div>
            <AppAvatar />
          </div>
        </Dropdown>,
      ];
  };

  const draw = () => {
    return (
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  };

  const menu = (
    <DropDownMenu theme="dark" style={{ borderRadius: 10, padding: 10 }}>
      <Menu.Item onClick={() => router.push("/")}>
        <DropDownItem>
          <Icon icon="home" width={20} color="#fff" />
          <Span2>Home</Span2>
        </DropDownItem>
      </Menu.Item>
      <Menu.Item onClick={() => router.push("/dashboard")}>
        <DropDownItem>
          <Icon icon="dashboard" width={20} color="#fff" />
          <Span2>Dashboard</Span2>
        </DropDownItem>
      </Menu.Item>
      <Menu.Item onClick={() => router.push("/profile")}>
        <DropDownItem>
          <Icon icon="edit" width={20} color="#fff" />
          <Span2>Edit Profile</Span2>
        </DropDownItem>
      </Menu.Item>
      <Menu.Item onClick={() => router.push("/")}>
        <DropDownItem>
          <Icon icon="logout" width={20} color="#fff" />
          <Span2>Log Out</Span2>
        </DropDownItem>
      </Menu.Item>
    </DropDownMenu>
  );

  return (
    <Container
      style={{ marginTop: 10, position: "fixed", width: "100%", zIndex: 10 }}
    >
      <PageHeader tags={<AppLogo />} extra={actionArea()} />
      {draw()}
    </Container>
  );
};

export default AppHeader;
