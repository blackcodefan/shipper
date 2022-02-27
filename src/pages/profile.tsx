import React from "react";
import {
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Row,
  Select,
  Space,
  Upload,
} from "antd";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import { PrimaryBtn, SecondaryBtn } from "../components/button";
import ProfileWrapper from "../components/profile/profile-wrapper";
import ProfileImage from "../components/profile/profile-img";
import Optional from "../components/review/optional";
import { P3, Span3 } from "../components/paragraph";
import SuggestionWrapper from "../components/review/suggestion-wrapper";
import SuggestionBtn from "../components/review/suggestion-btn";
import { PlaceHolder } from "../components/search/order-item";
import Icon from "../assets/icons";
import SingleSelect from "../components/search/single-select";
import { Center } from "../components/signin";
import { H4 } from "../components/heading";

const { Content } = Layout;
const { Item } = Form;
const { Option } = Select;

interface Props {
  data?: any;
}

const Profile: NextPage<Props> = () => {
  return (
    <AppLayout background="./img/background-1.png">
      <AppHeader actions />
      <Content>
        <ProfileWrapper>
          <Form layout="vertical">
            <Row gutter={15}>
              <Col span={14} xs={24} sm={24} md={14}>
                <P3>Edit Profile Details:</P3>
                <PlaceHolder />
                <Row gutter={10}>
                  <Col span={12} xs={24} sm={24} md={12}>
                    <ProfileImage>
                      <div className="upload-btn">
                        <Upload
                          name="logo"
                          action="/upload.do"
                          listType="picture"
                        >
                          <P3>Change Profile Image</P3>
                        </Upload>
                      </div>
                    </ProfileImage>
                  </Col>
                  <Col span={12} xs={24} sm={24} md={12}>
                    <Item name="name" label={<H4>Full Name</H4>}>
                      <Input
                        size="large"
                        placeholder="Enter Full Name"
                        className="dark"
                      />
                    </Item>
                    <Item
                      name="businessName"
                      label={
                        <H4>
                          Business name <Optional>(optional)</Optional>
                        </H4>
                      }
                    >
                      <Input
                        size="large"
                        placeholder="Enter Business Name"
                        className="dark"
                      />
                    </Item>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col span={12} xs={24} sm={24} md={12}>
                    <Item name="address" label={<H4>Full Address</H4>}>
                      <Input
                        size="large"
                        placeholder="Enter Full Address"
                        className="dark"
                      />
                    </Item>
                  </Col>
                  <Col span={12} xs={24} sm={24} md={12}>
                    <Item
                      name="defaultComments"
                      label={<H4>Default Special Comments</H4>}
                    >
                      <Input
                        size="large"
                        placeholder="ring the doorbell"
                        className="dark"
                      />
                    </Item>
                    <div style={{ position: "relative" }}>
                      <SuggestionWrapper horizontal={true}>
                        <SuggestionBtn>
                          leave in front of the side door
                        </SuggestionBtn>
                        <SuggestionBtn>Delivery in Morning</SuggestionBtn>
                        <SuggestionBtn>Delivery in Morning</SuggestionBtn>
                        <SuggestionBtn>Delivery in Morning</SuggestionBtn>
                      </SuggestionWrapper>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} xs={24} sm={24} md={12}>
                    <Space
                      size={10}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <Item
                        name="apartment"
                        label={
                          <H4>
                            Apt # <Optional>(Optional)</Optional>
                          </H4>
                        }
                      >
                        <Input
                          size="large"
                          placeholder="Enter Apt #"
                          className="dark"
                        />
                      </Item>
                      <Item
                        name="floor"
                        label={
                          <H4>
                            Business Floor #<Optional>(Optional)</Optional>
                          </H4>
                        }
                      >
                        <Input
                          size="large"
                          placeholder="Enter Floor #"
                          className="dark"
                        />
                      </Item>
                    </Space>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col span={12} xs={24} sm={24} md={12}>
                    <Item name="phone" label={<H4>Phone number</H4>}>
                      <Input
                        size="large"
                        placeholder="(555) 555-5555"
                        className="dark"
                      />
                    </Item>
                  </Col>
                  <Col span={12} xs={24} sm={24} md={12}>
                    <Item name="email" label={<H4>Email address</H4>}>
                      <Input
                        size="large"
                        placeholder="enter Email Address"
                        className="dark"
                      />
                    </Item>
                  </Col>
                </Row>
              </Col>
              <Col span={10} xs={24} sm={24} md={10}>
                <Space style={{ justifyContent: "space-between" }}>
                  <P3>Payment Details:</P3>
                  <Span3
                    style={{ textDecoration: "underline" }}
                    color="#20A5F5"
                  >
                    Add bank account
                  </Span3>
                </Space>
                <PlaceHolder />
                <Item name="paymentEmail" label={<H4>Email</H4>}>
                  <Input
                    size="large"
                    placeholder="Enter Email"
                    className="dark"
                  />
                </Item>
                <Item name="cardName" label={<H4>Name on card</H4>}>
                  <Input
                    size="large"
                    placeholder="Enter Name on the card"
                    className="dark"
                  />
                </Item>
                <Item name="cardNumber" label={<H4>Card number</H4>}>
                  <Input
                    size="large"
                    placeholder="1234 1234 1234 1234"
                    className="dark"
                    suffix={<Icon icon="payments" />}
                  />
                </Item>
                <Space
                  size={10}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <Item name="expire">
                    <Input
                      size="large"
                      placeholder="MM / YY"
                      className="dark"
                    />
                  </Item>
                  <Item name="cvc">
                    <Input
                      size="large"
                      placeholder="cvc"
                      className="dark"
                      suffix={<Icon icon="card" />}
                    />
                  </Item>
                </Space>
                <Item name="state" label={<H4>State</H4>}>
                  <SingleSelect
                    showArrow
                    suffixIcon={<Icon icon="arrow-key-up" />}
                    placeholder="Select state..."
                  >
                    <Option value="jack">CA</Option>
                    <Option value="lucy">AU</Option>
                    <Option value="tom">WS</Option>
                  </SingleSelect>
                </Item>
                <Item name="zipcode">
                  <Input size="large" placeholder="Zip code" className="dark" />
                </Item>
              </Col>
            </Row>
            <Center>
              <SecondaryBtn size="middle">Cancel</SecondaryBtn>
              <Divider type="vertical" />
              <PrimaryBtn htmlType="submit" type="primary" size="middle">
                save
              </PrimaryBtn>
            </Center>
          </Form>
        </ProfileWrapper>
      </Content>
    </AppLayout>
  );
};

export default Profile;
