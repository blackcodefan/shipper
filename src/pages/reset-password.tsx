import React from "react";
import { Divider, Form, Input, Layout, Space } from "antd";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import { PrimaryBtn, SecondaryBtn } from "../components/button";
import FormWrapper from "../components/reset-password/form-wrapper";
import { H4 } from "../components/heading";

const { Content } = Layout;
const { Item } = Form;

interface Props {
  data?: any;
}

const ResetPassword: NextPage<Props> = () => {
  return (
    <AppLayout background="./img/background-1.png">
      <AppHeader actions />
      <Content>
        <FormWrapper>
          <H4>Reset Password:</H4>
          <Divider />
          <Form
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
            initialValues={{ size: "large" }}
          >
            <Item
              name="oldPassword"
              label={<H4>Old Password</H4>}
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Old Password"
                className="dark"
                type="password"
              />
            </Item>
            <Item
              name="newPassword"
              label={<H4>New Password</H4>}
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Confirm New Password"
                className="dark"
                type="password"
              />
            </Item>
            <Item
              name="confirmPassword"
              label={<H4>Confirm New Password</H4>}
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="confirm New Password"
                className="dark"
                type="password"
              />
            </Item>
            <Item>
              <Space size="small" style={{ justifyContent: "space-around" }}>
                <SecondaryBtn size="middle">Cancel</SecondaryBtn>
                <PrimaryBtn htmlType="submit" type="primary" size="middle">
                  save
                </PrimaryBtn>
              </Space>
            </Item>
          </Form>
        </FormWrapper>
      </Content>
    </AppLayout>
  );
};

export default ResetPassword;
