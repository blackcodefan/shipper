import React from "react";
import { Col, Divider, Input, Layout, Row, Select } from "antd";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import DashboardWrapper from "../components/dashboard/dashboard-wrapper";
import { H4 } from "../components/heading";
import Icon from "../assets/icons";
import SingleSelect from "../components/search/single-select";
import { PrimaryBtn, SecondaryBtn } from "../components/button";
import InfoBtn from "../components/dashboard/info-btn";
import { CourierEquipment, PlaceHolder } from "../components/search/order-item";
import { Center } from "../components/signin";
import { P3, P4 } from "../components/paragraph";
import { useRouter } from "next/router";

const { Content } = Layout;
const { Option } = Select;

interface Props {
  data?: any;
}

const Dashboard: NextPage<Props> = () => {
  const router = useRouter();
  return (
    <AppLayout background="./img/background-1.png">
      <AppHeader actions />
      <Content>
        <DashboardWrapper>
          <Row justify="space-between" gutter={[12, 20]}>
            <Col>
              <Row align="middle" gutter={12}>
                <Col>
                  <H4>Stats overview</H4>
                </Col>
                <Col>
                  <Icon icon="upload" />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" gutter={[12, 20]}>
                <Col md={{ span: 4 }} span={6}>
                  <H4>Filter for:</H4>
                </Col>
                <Col md={{ span: 6 }} span={10}>
                  <SingleSelect
                    showArrow
                    size="small"
                    suffixIcon={<Icon icon="arrow-key-up" />}
                    placeholder="Filter"
                  >
                    <Option value="jack">CA</Option>
                    <Option value="lucy">AU</Option>
                    <Option value="tom">WS</Option>
                  </SingleSelect>
                </Col>
                <Col md={{ span: 4 }} span={8}>
                  <SecondaryBtn
                    block
                    size="small"
                    onClick={() => router.push("/signin")}
                  >
                    Api
                  </SecondaryBtn>
                </Col>
                <Col md={{ span: 10 }} span={24}>
                  <PrimaryBtn
                    block
                    type="primary"
                    size="small"
                    onClick={() => router.push("/signup")}
                  >
                    create new shipment
                  </PrimaryBtn>
                </Col>
              </Row>
            </Col>
          </Row>
          <PlaceHolder />
          <Row gutter={[20, 20]}>
            <Col span={12} xs={24} lg={24} xl={12}>
              <Row gutter={5}>
                <Col span={8}>
                  <InfoBtn>
                    <p className="info">5</p>
                    <p className="label">Total Shipments</p>
                  </InfoBtn>
                </Col>
                <Col span={8}>
                  <InfoBtn>
                    <p className="info">85%</p>
                    <p className="label">Positive rating</p>
                  </InfoBtn>
                </Col>
                <Col span={8}>
                  <InfoBtn>
                    <p className="info">#300.00</p>
                    <p className="label">Spent</p>
                  </InfoBtn>
                </Col>
              </Row>
            </Col>
            <Col span={12} xs={24} lg={24} xl={12}>
              <Input
                size="large"
                placeholder="Search..."
                className="light"
                suffix={
                  <PrimaryBtn
                    size="middle"
                    onClick={() => router.push("/search")}
                  >
                    search
                  </PrimaryBtn>
                }
              />
            </Col>
          </Row>
          <Divider style={{ border: "none" }} />
          <H4>Currently Shipping</H4>
          <Divider style={{ border: "none" }} />
          <Row gutter={[12, 20]} align="middle">
            <Col span={21} xs={24} md={24} lg={19} xl={21}>
              <Row gutter={[12, 20]} align="middle">
                <Col span={14}>
                  <Row gutter={[12, 20]} align="middle">
                    <Col span={8} xs={24} sm={24} md={8}>
                      <H4>Matt Franklin</H4>
                      <P4>Delivermate</P4>
                    </Col>
                    <Col span={8} xs={24} sm={24} md={8}>
                      <P3 color="#737373">From:</P3>
                      <P3>ABC Company</P3>
                      <P3 color="#737373">
                        2301-2399 Bancroft PI NW Washington, DC 20008, USA
                      </P3>
                    </Col>
                    <Col span={8} xs={24} sm={24} md={8}>
                      <P3 color="#737373">To:</P3>
                      <P3>Acme Inc.</P3>
                      <P3 color="#737373">
                        1214-1512 New Hampshire Washington, DC 20009, USA
                      </P3>
                    </Col>
                  </Row>
                </Col>
                <Col span={10}>
                  <Row gutter={[12, 20]} align="top">
                    <Col span={6} xs={0} sm={0} md={6}>
                      <P3>Status:</P3>
                      <P3 color="#20A5F5">Picked Up</P3>
                      <P3 color="#aaa">2:53am 3/14/21</P3>
                    </Col>
                    <Col span={6} xs={24} sm={24} md={6}>
                      <P3>delivery in:</P3>
                      <CourierEquipment
                        style={{
                          flexDirection: "row",
                          justifyContent: "start",
                        }}
                      >
                        <Icon icon="clock" color="#20A5F5" />
                        <P3 color="#20A5F5"> 30 min</P3>
                      </CourierEquipment>
                    </Col>
                    <Col span={8} xs={0} sm={0} md={8}>
                      <P3>Shipment number:</P3>
                      <P3 color="#aaa">ABC-123</P3>
                    </Col>
                    <Col span={4} xs={24} sm={24} md={4}>
                      <CourierEquipment>
                        <Icon
                          icon="car"
                          width={42}
                          height={42}
                          color="#20A5F5"
                        />
                        <P3>Car</P3>
                      </CourierEquipment>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={3} xs={24} md={24} lg={5} xl={3}>
              <Center>
                <SecondaryBtn
                  size="middle"
                  onClick={() => router.push("/pickup")}
                >
                  live tracking
                </SecondaryBtn>
              </Center>
            </Col>
          </Row>
          <Divider style={{ border: "none" }} />
          <H4>Past Shipments</H4>
          <Divider />
          <Row gutter={[12, 20]} align="middle">
            <Col span={21} xs={24} md={24} lg={19} xl={21}>
              <Row gutter={[12, 20]} align="middle">
                <Col span={14}>
                  <Row gutter={[12, 20]} align="middle">
                    <Col span={8} xs={24} sm={24} md={8}>
                      <H4>Matt Franklin</H4>
                      <P4>Delivermate</P4>
                    </Col>
                    <Col span={8} xs={24} sm={24} md={8}>
                      <P3 color="#737373">From:</P3>
                      <P3>ABC Company</P3>
                      <P3 color="#737373">
                        2301-2399 Bancroft PI NW Washington, DC 20008, USA
                      </P3>
                    </Col>
                    <Col span={8} xs={24} sm={24} md={8}>
                      <P3 color="#737373">To:</P3>
                      <P3>Acme Inc.</P3>
                      <P3 color="#737373">
                        1214-1512 New Hampshire Washington, DC 20009, USA
                      </P3>
                    </Col>
                  </Row>
                </Col>
                <Col span={10}>
                  <Row gutter={[12, 20]} align="top">
                    <Col span={6} xs={0} sm={0} md={6}>
                      <P3>Status:</P3>
                      <P3 color="#7EDB5D">Delivered</P3>
                    </Col>
                    <Col span={6} xs={24} sm={24} md={6}>
                      <P3>Delivered on:</P3>
                      <P3 color="#7EDB5D">October 5th 2021 10:38am</P3>
                    </Col>
                    <Col span={8} xs={0} sm={0} md={8}>
                      <P3>Shipment number:</P3>
                      <P3 color="#aaa">ABC-123</P3>
                    </Col>
                    <Col span={4} xs={24} sm={24} md={4}>
                      <CourierEquipment>
                        <Icon
                          icon="car"
                          width={42}
                          height={42}
                          color="#20A5F5"
                        />
                        <P3>Car</P3>
                      </CourierEquipment>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={3} xs={24} md={24} lg={5} xl={3}>
              <Row gutter={[12, 20]} align="bottom">
                <Col span={12} xs={0} sm={0} md={0} lg={12}>
                  <P3>Rating:</P3>
                  <P3 color="#7EDB5D">Positive</P3>
                </Col>
                <Col span={12} xs={24} sm={24} md={24} lg={12}>
                  <Center>
                    <P3
                      color="#20A5F5"
                      style={{ textDecoration: "underline" }}
                      onClick={() => router.push("/delivered2")}
                    >
                      Details
                    </P3>
                  </Center>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[12, 20]} align="middle">
            <Col span={21} xs={24} md={24} lg={19} xl={21}>
              <Row gutter={[12, 20]} align="middle">
                <Col span={14}>
                  <Row gutter={[12, 20]} align="middle">
                    <Col span={8} xs={24} sm={24} md={8}>
                      <H4>Matt Franklin</H4>
                      <P4>Delivermate</P4>
                    </Col>
                    <Col span={8} xs={24} sm={24} md={8}>
                      <P3 color="#737373">From:</P3>
                      <P3>ABC Company</P3>
                      <P3 color="#737373">
                        2301-2399 Bancroft PI NW Washington, DC 20008, USA
                      </P3>
                    </Col>
                    <Col span={8} xs={24} sm={24} md={8}>
                      <P3 color="#737373">To:</P3>
                      <P3>Acme Inc.</P3>
                      <P3 color="#737373">
                        1214-1512 New Hampshire Washington, DC 20009, USA
                      </P3>
                    </Col>
                  </Row>
                </Col>
                <Col span={10}>
                  <Row gutter={[12, 20]} align="top">
                    <Col span={6} xs={0} sm={0} md={6}>
                      <P3>Status:</P3>
                      <P3 color="#7EDB5D">Delivered</P3>
                    </Col>
                    <Col span={6} xs={24} sm={24} md={6}>
                      <P3>Delivered on:</P3>
                      <P3 color="#7EDB5D">October 5th 2021 10:38am</P3>
                    </Col>
                    <Col span={8} xs={0} sm={0} md={8}>
                      <P3>Shipment number:</P3>
                      <P3 color="#aaa">ABC-123</P3>
                    </Col>
                    <Col span={4} xs={24} sm={24} md={4}>
                      <CourierEquipment>
                        <Icon
                          icon="car"
                          width={42}
                          height={42}
                          color="#20A5F5"
                        />
                        <P3>Car</P3>
                      </CourierEquipment>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={3} xs={24} md={24} lg={5} xl={3}>
              <Row gutter={[12, 20]} align="bottom">
                <Col span={12} xs={0} sm={0} md={0} lg={12}>
                  <P3>Rating:</P3>
                  <P3
                    color="#20A5F5"
                    style={{ textDecoration: "underline" }}
                    onClick={() => router.push("./delivered")}
                  >
                    Give a review
                  </P3>
                </Col>
                <Col span={12} xs={24} sm={24} md={24} lg={12}>
                  <Center>
                    <P3
                      color="#20A5F5"
                      style={{ textDecoration: "underline" }}
                      onClick={() => router.push("/delivered2")}
                    >
                      Details
                    </P3>
                  </Center>
                </Col>
              </Row>
            </Col>
          </Row>
        </DashboardWrapper>
      </Content>
    </AppLayout>
  );
};

export default Dashboard;
