import React, { FC } from "react";
import Container from "components/paper/container/index";
import { Button, Space } from "antd";
import Icon from "../assets/icons/index";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

interface FooterProps {
  data?: any;
}

const HomeFooter: FC<FooterProps> = () => {
  const breakpoints = useBreakpoint();

  return (
    <Container style={{ marginBottom: 10 }}>
      <Space
        style={{ justifyContent: breakpoints.xs ? "center" : "space-between" }}
      >
        <Space size={40}>
          <Icon icon="round-question-mark" />
          <Icon icon="folder-open" />
          <Icon icon="building" />
        </Space>
        {breakpoints.sm ? (
          <Space size={40}>
            <Button type="link" size="small" style={{ color: "#fff" }}>
              Privacy
            </Button>
            <Button type="link" size="small" style={{ color: "#fff" }}>
              Terms
            </Button>
            <Space align="center" style={{ justifyContent: "center" }}>
              <Icon icon="gear" />
              <Button type="link" size="small" style={{ color: "#fff" }}>
                Settings
              </Button>
            </Space>
          </Space>
        ) : (
          <></>
        )}
      </Space>
    </Container>
  );
};

export default HomeFooter;
