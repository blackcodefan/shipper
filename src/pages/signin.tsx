import React from "react";
import { Button, Form, Input, Layout, Space } from "antd";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import { Center, FormHolder } from "../components/signin";
import Icon from "../assets/icons";
import { BackButton, PrimaryBtn } from "../components/button";
import { useRouter } from "next/router";
import SignInTitle from "../components/signin/signin-title";
import SignUpLink from "../components/signin/signup-link";
import { H4 } from "../components/heading";

const { Content } = Layout;
const { Item } = Form;

interface HomeProps {
  data?: any;
}

const SignIn: NextPage<HomeProps> = () => {
  const router = useRouter();

  const onFinishHandler = () => {
    //values fix later
    router.push("/search");
  };

  return (
    <AppLayout background="./img/background-2.png" className="background-half">
      <AppHeader mode="guest" />
      <Content>
        <FormHolder>
          <Space size="small" direction="vertical">
            <BackButton
              type="link"
              onClick={() => {
                router.push("/");
              }}
            >
              <Icon icon="arrow-left" />
              Back
            </BackButton>
            <SignInTitle>
              <img src="./img/login-inst.png" alt="Log in to atlas account" />
            </SignInTitle>
            <Form
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              layout="vertical"
              initialValues={{ size: "large" }}
              onFinish={onFinishHandler}
            >
              <Item
                name="email"
                label={<H4>Email / Phone number</H4>}
                rules={[
                  {
                    required: true,
                    message: "email is required",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Type in email / number..."
                  className="dark"
                />
              </Item>
              <Item
                name="password"
                label={<H4>Password</H4>}
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                ]}
                extra={
                  <div className="forgot-pwd">
                    <Button type="link">Forgot Password</Button>
                  </div>
                }
              >
                <Input
                  size="large"
                  placeholder="Type in password..."
                  className="dark"
                  type="password"
                />
              </Item>
              <Item>
                <Center>
                  <PrimaryBtn htmlType="submit" type="primary" size="middle">
                    log in
                  </PrimaryBtn>
                </Center>
              </Item>
              <Item>
                <SignUpLink>
                  <p>Don't have am account?</p>
                  <Button
                    type="link"
                    onClick={() => {
                      router.push("/signup");
                    }}
                  >
                    Sign up
                  </Button>
                </SignUpLink>
              </Item>
            </Form>
          </Space>
        </FormHolder>
      </Content>
    </AppLayout>
  );
};

export default SignIn;
