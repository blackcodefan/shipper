import React from "react";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import Container from "../components/paper/container";
import { Content } from "antd/lib/layout/layout";
import {
  Col,
  Collapse,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Steps,
} from "antd";
import MainContent from "../components/review/main-content";
import { P2, P3 } from "../components/paragraph";
import Timer from "../components/review/timer";
import Icon from "../assets/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { H4, H5 } from "../components/heading";
import { AppStep, Dot, StepsWrapper } from "../components/review/step";
import { AppMap } from "../components/search/map";
import { PrimaryBtn, SecondaryBtn } from "../components/button";
import {
  DetailPad,
  DetailWrapper,
} from "../components/checkout/detail-wrapper";
import SingleSelect from "../components/search/single-select";
import { useRouter } from "next/router";

const { Item } = Form;
const { Option } = Select;
const { Panel } = Collapse;

interface CheckoutProps {
  data?: any;
}

const Checkout: NextPage<CheckoutProps> = () => {
  const router = useRouter();
  const breakpoints = useBreakpoint();

  return (
    <AppLayout background="./img/background-3.png">
      <AppHeader actions />
      <Content>
        <Container className="remove-header-space">
          <Row gutter={[15, 15]}>
            <Col span={6} xs={24} sm={12} md={8} lg={8} xl={8}>
              <MainContent>
                <Row>
                  <Col
                    span={24}
                    xs={{ order: 2, span: 12 }}
                    md={{ order: 1, span: 24 }}
                  >
                    <Space direction="vertical" align="center">
                      {breakpoints.md && (
                        <P3 className="sm-hide">Estimated delivery time</P3>
                      )}
                      <Timer>
                        <Icon icon="clock" color="#fff" />
                        30 min
                      </Timer>
                    </Space>
                  </Col>
                  <Col
                    span={24}
                    xs={{ order: 3, span: 24 }}
                    md={{ order: 2, span: 24 }}
                  >
                    <StepsWrapper>
                      {breakpoints.md ? (
                        <Steps direction="vertical" current={1}>
                          <AppStep
                            status="finish"
                            className="justify-tail"
                            description={
                              <Space direction="vertical" size="large">
                                <div>
                                  <H5 color="#aaa">From:</H5>
                                  <H4>ABC Company</H4>
                                  <P3 color="#737373">
                                    2301-2399 Bancroft PI NW Washington, DC
                                    20008, USA
                                  </P3>
                                </div>
                                <div>
                                  <H5 color="#aaa">To:</H5>
                                  <H4>Acme Inc.</H4>
                                  <P3 color="#737373">
                                    1614-1612 New Hampshire Washington, DC
                                    20009, USA
                                  </P3>
                                </div>
                              </Space>
                            }
                          />
                          <AppStep
                            title={<H4 color="#20A5F5">Review</H4>}
                            className="justify-tail"
                            icon={<Dot />}
                          />
                          <AppStep
                            title={<H4 color="#737373">Checkout</H4>}
                            className="justify-tail"
                            description="This is a description."
                          />
                        </Steps>
                      ) : (
                        <Steps current={1}>
                          <AppStep status="finish" className="justify-tail" />
                          <AppStep status="process" className="justify-tail" />
                          <AppStep status="wait" className="justify-tail" />
                        </Steps>
                      )}
                    </StepsWrapper>
                  </Col>
                  <Col
                    span={24}
                    xs={{ order: 1, span: 12 }}
                    md={{ order: 3, span: 24 }}
                  >
                    <Space
                      direction="vertical"
                      size={5}
                      style={{ height: "100%", justifyContent: "center" }}
                    >
                      <P2>Have Questions?</P2>
                      <H4 color="#20A5F5;">Contact Us</H4>
                    </Space>
                  </Col>
                </Row>
              </MainContent>
            </Col>
            {(breakpoints.xs || breakpoints.sm) && !breakpoints.xl ? (
              <Col span={18} xs={24} sm={12} md={16} lg={16} xl={16}>
                <MainContent>
                  <div style={{ height: 300 }}>
                    <AppMap />
                  </div>
                  <Divider style={{ border: "none" }} />
                </MainContent>
                <Collapse
                  defaultActiveKey={["1"]}
                  ghost
                  style={{ marginBottom: 10 }}
                >
                  <Panel
                    header={<H4>See shipping details</H4>}
                    key="1"
                    showArrow={false}
                    style={{ padding: 0 }}
                  >
                    <MainContent>
                      <DetailWrapper>
                        <DetailPad>
                          <H4>Courier details</H4>
                          <Divider style={{ border: "none", margin: 10 }} />
                          <P3>Name & Company:</P3>
                          <P3 color="#737373">Jessica Smith,</P3>
                          <P3 color="#737373">Delivermate</P3>
                          <Divider style={{ border: "none", margin: 10 }} />
                          <P3>Model & Year:</P3>
                          <P3 color="#737373">Toyota Prius</P3>
                          <P3 color="#737373">2018</P3>
                        </DetailPad>
                        <DetailPad>
                          <H4>Shipping Details</H4>
                          <Divider style={{ border: "none", margin: 10 }} />
                          <Row gutter={10}>
                            <Col span={12} xs={24} sm={12}>
                              <P3 color="#737373">From:</P3>
                              <P3>ABC Company</P3>
                              <P3 color="#737373">
                                2301-2399 Bancroft PI NW Washington, DC 20008,
                                USA
                              </P3>
                              <Divider style={{ border: "none", margin: 10 }} />
                              <P3>Name:</P3>
                              <P3 color="#737373">John Doe</P3>
                            </Col>
                            <Col span={12} xs={24} sm={12}>
                              <P3 color="#737373">To:</P3>
                              <P3>Acme Inc.</P3>
                              <P3 color="#737373">
                                1214-1512 New Hampshire Washington, DC 20009,
                                USA
                              </P3>
                              <Divider style={{ border: "none", margin: 10 }} />
                              <P3>Special comments:</P3>
                              <P3 color="#737373">
                                Leave in front of the side door
                              </P3>
                            </Col>
                          </Row>
                        </DetailPad>
                        <DetailPad>
                          <H4>Item details</H4>
                          <Divider style={{ border: "none", margin: 10 }} />
                          <P3>Weight & Dimensions:</P3>
                          <P3 color="#737373">12kg</P3>
                          <P3 color="#737373">15*15*15cm</P3>
                          <Divider style={{ border: "none", margin: 10 }} />
                          <P3>Number & Description:</P3>
                          <P3 color="#737373">2</P3>
                          <P3 color="#737373">chairs</P3>
                        </DetailPad>
                      </DetailWrapper>
                      <Divider style={{ border: "none" }} />
                    </MainContent>
                  </Panel>
                </Collapse>
                <MainContent>
                  <Form
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ size: "large" }}
                  >
                    <Row gutter={[10, 10]}>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="email" label={<H4>Email</H4>}>
                          <Input
                            size="large"
                            placeholder="Enter Email address"
                            className="dark"
                          />
                        </Item>
                      </Col>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="cardName" label={<H4>Name on card</H4>}>
                          <Input
                            size="large"
                            placeholder="Enter name on the card as written"
                            className="dark"
                          />
                        </Item>
                      </Col>
                    </Row>
                    <Row gutter={[10, 10]}>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="cardNumber" label={<H4>Card number</H4>}>
                          <Input
                            size="large"
                            placeholder="1234 1234 1234 1234"
                            className="dark"
                            suffix={<Icon icon="payments" />}
                          />
                        </Item>
                      </Col>
                      <Col span={12} xs={24} sm={12}>
                        <Space
                          size={10}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                          }}
                        >
                          <Item name="expire" label={<H4>Expiration</H4>}>
                            <Input
                              size="large"
                              placeholder="MM / YY"
                              className="dark"
                            />
                          </Item>
                          <Item name="cvc" label={<H4>CVC</H4>}>
                            <Input
                              size="large"
                              placeholder="cvc"
                              className="dark"
                              suffix={<Icon icon="card" />}
                            />
                          </Item>
                        </Space>
                      </Col>
                    </Row>
                    <Row gutter={[10, 10]}>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="state" label={<H4>State</H4>}>
                          <SingleSelect
                            showArrow
                            suffixIcon={<Icon icon="arrow-key-up" />}
                            placeholder="Select item..."
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </SingleSelect>
                        </Item>
                      </Col>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="postalCode" label={<H4>Postal code</H4>}>
                          <Input
                            size="large"
                            placeholder="Enter Postal code"
                            className="dark"
                          />
                        </Item>
                      </Col>
                    </Row>
                  </Form>
                  <Divider style={{ border: "none" }} />
                  {breakpoints.xs ? (
                    <Space style={{ justifyContent: "space-between" }}>
                      <SecondaryBtn size="small">Back</SecondaryBtn>
                      <PrimaryBtn size="small">confirm & pay $30.00</PrimaryBtn>
                    </Space>
                  ) : (
                    <Space style={{ justifyContent: "space-between" }}>
                      <SecondaryBtn size="middle">Back</SecondaryBtn>
                      <PrimaryBtn size="middle">
                        confirm & pay $30.00
                      </PrimaryBtn>
                    </Space>
                  )}
                </MainContent>
              </Col>
            ) : (
              <Col span={18} xs={24} sm={12} md={16} lg={16} xl={16}>
                <MainContent>
                  <div style={{ height: 300 }}>
                    <AppMap />
                  </div>
                  <Divider style={{ border: "none" }} />
                  <DetailWrapper>
                    <DetailPad>
                      <H4>Courier details</H4>
                      <Divider style={{ border: "none", margin: 10 }} />
                      <P3>Name & Company:</P3>
                      <P3 color="#737373">Jessica Smith,</P3>
                      <P3 color="#737373">Delivermate</P3>
                      <Divider style={{ border: "none", margin: 10 }} />
                      <P3>Model & Year:</P3>
                      <P3 color="#737373">Toyota Prius</P3>
                      <P3 color="#737373">2018</P3>
                    </DetailPad>
                    <DetailPad>
                      <H4>Shipping Details</H4>
                      <Divider style={{ border: "none", margin: 10 }} />
                      <Row gutter={10}>
                        <Col span={12} xs={24} sm={12}>
                          <P3 color="#737373">From:</P3>
                          <P3>ABC Company</P3>
                          <P3 color="#737373">
                            2301-2399 Bancroft PI NW Washington, DC 20008, USA
                          </P3>
                          <Divider style={{ border: "none", margin: 10 }} />
                          <P3>Name:</P3>
                          <P3 color="#737373">John Doe</P3>
                        </Col>
                        <Col span={12} xs={24} sm={12}>
                          <P3 color="#737373">To:</P3>
                          <P3>Acme Inc.</P3>
                          <P3 color="#737373">
                            1214-1512 New Hampshire Washington, DC 20009, USA
                          </P3>
                          <Divider style={{ border: "none", margin: 10 }} />
                          <P3>Special comments:</P3>
                          <P3 color="#737373">
                            Leave in front of the side door
                          </P3>
                        </Col>
                      </Row>
                    </DetailPad>
                    <DetailPad>
                      <H4>Item details</H4>
                      <Divider style={{ border: "none", margin: 10 }} />
                      <P3>Weight & Dimensions:</P3>
                      <P3 color="#737373">12kg</P3>
                      <P3 color="#737373">15*15*15cm</P3>
                      <Divider style={{ border: "none", margin: 10 }} />
                      <P3>Number & Description:</P3>
                      <P3 color="#737373">2</P3>
                      <P3 color="#737373">chairs</P3>
                    </DetailPad>
                  </DetailWrapper>
                  <Divider style={{ border: "none" }} />
                  <Form
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ size: "large" }}
                  >
                    <Row gutter={[10, 10]}>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="email" label={<H4>Email</H4>}>
                          <Input
                            size="large"
                            placeholder="Enter Email address"
                            className="dark"
                          />
                        </Item>
                      </Col>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="cardName" label={<H4>Name on card</H4>}>
                          <Input
                            size="large"
                            placeholder="Enter name on the card as written"
                            className="dark"
                          />
                        </Item>
                      </Col>
                    </Row>
                    <Row gutter={[10, 10]}>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="cardNumber" label={<H4>Card number</H4>}>
                          <Input
                            size="large"
                            placeholder="1234 1234 1234 1234"
                            className="dark"
                            suffix={<Icon icon="payments" />}
                          />
                        </Item>
                      </Col>
                      <Col span={12} xs={24} sm={12}>
                        <Space
                          size={10}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                          }}
                        >
                          <Item name="expire" label={<H4>Expiration</H4>}>
                            <Input
                              size="large"
                              placeholder="MM / YY"
                              className="dark"
                            />
                          </Item>
                          <Item name="cvc" label={<H4>CVC</H4>}>
                            <Input
                              size="large"
                              placeholder="cvc"
                              className="dark"
                              suffix={<Icon icon="card" />}
                            />
                          </Item>
                        </Space>
                      </Col>
                    </Row>
                    <Row gutter={[10, 10]}>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="state" label={<H4>State</H4>}>
                          <SingleSelect
                            showArrow
                            suffixIcon={<Icon icon="arrow-key-up" />}
                            placeholder="Select item..."
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </SingleSelect>
                        </Item>
                      </Col>
                      <Col span={12} xs={24} sm={12}>
                        <Item name="postalCode" label={<H4>Postal code</H4>}>
                          <Input
                            size="large"
                            placeholder="Enter Postal code"
                            className="dark"
                          />
                        </Item>
                      </Col>
                    </Row>
                  </Form>
                  <Divider style={{ border: "none" }} />
                  {breakpoints.xs ? (
                    <Space style={{ justifyContent: "space-between" }}>
                      <SecondaryBtn
                        onClick={() => {
                          router.back();
                        }}
                        size="small"
                      >
                        Back
                      </SecondaryBtn>
                      <PrimaryBtn
                        onClick={() => {
                          router.push("/pickup");
                        }}
                        size="small"
                      >
                        confirm & pay $30.00
                      </PrimaryBtn>
                    </Space>
                  ) : (
                    <Space style={{ justifyContent: "space-between" }}>
                      <SecondaryBtn
                        onClick={() => {
                          router.back();
                        }}
                        size="middle"
                      >
                        Back
                      </SecondaryBtn>
                      <PrimaryBtn
                        onClick={() => {
                          router.push("/pickup");
                        }}
                        size="middle"
                      >
                        confirm & pay $30.00
                      </PrimaryBtn>
                    </Space>
                  )}
                </MainContent>
              </Col>
            )}
          </Row>
        </Container>
      </Content>
    </AppLayout>
  );
};

export default Checkout;
