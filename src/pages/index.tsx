import React from "react";
import { Input, Layout, Space } from "antd";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import { Atlas } from "../assets/img";
import Icon from "../assets/icons";
import { PrimaryBtn } from "../components/button";
import { HomeSearchWrapper, VerticalCenter } from "components/home";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import LineImage from "../assets/img/line";
import AppFooter from "../layouts/footer";
import { useRouter } from "next/router";

const { Content } = Layout;

interface HomeProps {
  data?: any;
}

const Home: NextPage<HomeProps> = () => {
  const router = useRouter();
  const breakpoints = useBreakpoint();

  return (
    <AppLayout background="./img/background-1.png" className="static-height">
      <AppHeader mode="guest" actions />
      <Content>
        <VerticalCenter size="large" align="end">
          {breakpoints.md ? (
            <Space direction="vertical" align="center">
              <Atlas />
              <LineImage />
              <HomeSearchWrapper>
                <Input
                  size="large"
                  placeholder="Ship From"
                  prefix={<Icon icon="location" color="#000" />}
                  className="light"
                  suffix={
                    <PrimaryBtn
                      onClick={() => router.push("/search")}
                      size="middle"
                    >
                      schedule
                    </PrimaryBtn>
                  }
                />
              </HomeSearchWrapper>
            </Space>
          ) : (
            <Space direction="vertical" align="center">
              <Atlas width={140} />
              <LineImage width={300} />
              <HomeSearchWrapper>
                <Input
                  size="middle"
                  placeholder="Ship From"
                  prefix={<Icon icon="location" color="#000" />}
                  className="light"
                  suffix={
                    <PrimaryBtn
                      onClick={() => router.push("/search")}
                      size="small"
                    >
                      schedule
                    </PrimaryBtn>
                  }
                />
              </HomeSearchWrapper>
            </Space>
          )}
        </VerticalCenter>
      </Content>
      <AppFooter />
    </AppLayout>
  );
};

export default Home;
