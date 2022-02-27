import React from "react";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import Container from "../components/paper/container";
import { Content } from "antd/lib/layout/layout";
import {
  Checkbox,
  Col,
  Collapse,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Steps,
  Tabs,
} from "antd";
import MainContent from "../components/review/main-content";
import { P2, P3, P4 } from "../components/paragraph";
import Timer from "../components/review/timer";
import Icon from "../assets/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { H3, H4, H5 } from "../components/heading";
import { AppStep, Dot, StepsWrapper } from "../components/review/step";
import { AppMap } from "../components/search/map";
import {
  CourierDetails,
  CourierEquipment,
  CourierInfo,
  CourierItem,
  CourierItemHalfFirst,
  CourierItemHalfLast,
  CourierItemWrapper,
  PlaceHolder,
} from "../components/search/order-item";
import { ImageBox } from "../components";
import { IconButton, PrimaryBtn, SecondaryBtn } from "../components/button";
import Optional from "../components/review/optional";
import SuggestionWrapper from "../components/review/suggestion-wrapper";
import SuggestionBtn from "../components/review/suggestion-btn";
import FeeBadge from "../components/review/fee-badge";
import { useRouter } from "next/router";

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Item } = Form;
const { Option } = Select;

interface ReviewProps {
  data?: any;
}

const Review: NextPage<ReviewProps> = () => {
  const router = useRouter();
  const breakpoints = useBreakpoint();

  return (
    <AppLayout background="./img/background-3.png">
      <AppHeader actions />
      <Content>
        <Container className="remove-header-space">
          <Row gutter={[15, 15]}>
            <Col span={6} xs={24} sm={12} md={8} lg={10} xl={8}>
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
                            icon={<Dot />}
                          />
                          <AppStep
                            title={<H4 color="#737373">Checkout</H4>}
                            description="This is a description."
                          />
                        </Steps>
                      ) : (
                        <Steps current={1}>
                          <AppStep status="finish" />
                          <AppStep status="process" />
                          <AppStep status="wait" />
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
            <Col span={18} xs={24} sm={12} md={16} lg={14} xl={16}>
              <MainContent>
                <div style={{ height: 300 }}>
                  <AppMap />
                </div>
                <Divider style={{ border: "none" }} />
                <H4>Courier details</H4>
                <Divider style={{ border: "none" }} />
                <CourierItemWrapper accordion>
                  <Panel
                    header={
                      <CourierItem>
                        <CourierItemHalfFirst>
                          <ImageBox style={{ marginTop: -20 }} />
                          <CourierInfo>
                            <div>
                              <H3>Matt Franklin</H3>
                              <P4>Delivermate</P4>
                            </div>
                          </CourierInfo>
                        </CourierItemHalfFirst>
                        <CourierItemHalfFirst
                          style={{ justifyContent: "center" }}
                        >
                          <H4>On Demand</H4>
                        </CourierItemHalfFirst>
                        <CourierItemHalfLast>
                          <CourierEquipment>
                            <Icon icon="bicycle" width={54} color="#20A5F5" />
                            <P4>Car</P4>
                          </CourierEquipment>
                          <IconButton
                            size="middle"
                            icon={<span style={{ color: "#fff" }}>$30</span>}
                          />
                        </CourierItemHalfLast>
                      </CourierItem>
                    }
                    key="1"
                    showArrow={false}
                  >
                    <CourierDetails>
                      <Row gutter={5}>
                        <Col span={20} xs={16} md={20}>
                          <Row gutter={5}>
                            <Col span={6} xs={24} md={12} xl={6}>
                              <PlaceHolder />
                              <P2 color="rgb(137, 137, 137)">
                                Max Weight:{" "}
                                <span className="value">20 lbs</span>
                              </P2>
                              <PlaceHolder />
                              <P2 color="rgb(137, 137, 137)">
                                Completed deliveries:{" "}
                                <span className="value">35</span>
                              </P2>
                            </Col>
                            <Col span={6} xs={24} md={12} xl={6}>
                              <PlaceHolder />
                              <P2 color="rgb(137, 137, 137)">
                                Model:{" "}
                                <span className="value">Toyota Prius</span>
                              </P2>
                              <PlaceHolder />
                              <P2 color="rgb(137, 137, 137)">
                                Year: <span className="value">2018</span>
                              </P2>
                            </Col>
                            <Col span={12} xs={24} md={24} xl={12}>
                              <PlaceHolder />
                              <P2 color="rgb(137, 137, 137)">
                                Rating:{" "}
                                <span className="value">95% positive</span>
                              </P2>
                              <PlaceHolder />
                              <P2 color="rgb(137, 137, 137)">
                                List of equipment:{" "}
                                <span className="value">
                                  Dolly/Hand-truck, Temp Control
                                </span>
                              </P2>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={4} xs={8} md={4}>
                          <P3 color="rgb(126, 219, 93)">Available:</P3>
                          <H4 color="rgb(126, 219, 93)">23min away</H4>
                        </Col>
                      </Row>
                    </CourierDetails>
                  </Panel>
                </CourierItemWrapper>
                <Divider style={{ border: "none" }} />
                <Tabs defaultActiveKey="1" type="card" size="small">
                  <TabPane tab="Pickup Information" key="1">
                    <Form
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      initialValues={{ size: "large" }}
                    >
                      <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} sm={12}>
                          <Item name="fullname" label={<H4>Full name</H4>}>
                            <Input
                              size="large"
                              placeholder="Enter Full Name"
                              className="dark"
                            />
                          </Item>
                        </Col>
                        <Col span={12} xs={24} sm={12}>
                          <Item
                            name="business"
                            label={
                              <H4>
                                Business name <Optional>(Optional)</Optional>
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
                      <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} sm={12}>
                          <Item name="address" label={<H4>Full address</H4>}>
                            <Input
                              size="large"
                              placeholder="Enter Full Address"
                              className="dark"
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
                                  Business Floor #
                                  <Optional>(Optional)</Optional>
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
                      <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} sm={12}>
                          <Item
                            name="comments"
                            label={
                              <H4>
                                Special comments <Optional>(Optional)</Optional>
                              </H4>
                            }
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
                        <Col span={12} xs={24} sm={12}>
                          <Item name="phone" label={<H4>Phone number</H4>}>
                            <Input
                              size="large"
                              placeholder="(555) 555-5555"
                              className="dark"
                            />
                          </Item>
                          <Item name="email" label={<H4>Email address</H4>}>
                            <Input
                              size="large"
                              placeholder="Enter Email Address"
                              className="dark"
                            />
                          </Item>
                        </Col>
                      </Row>
                      <Space size={10}>
                        <Checkbox />
                        <P3>Receive SMS Updates and tracking link</P3>
                      </Space>
                      <Divider style={{ border: "none", margin: 5 }} />
                      <Space size={10}>
                        <Checkbox />
                        <P3>Send SMS updates and tracking link to recipient</P3>
                      </Space>
                      <Divider style={{ border: "none" }} />
                      <H4>Courier details</H4>
                      <Divider style={{ marginTop: 5 }} />
                      <Row gutter={[10, 5]}>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="lbs"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="lbs">lbs</Option>
                                <Option value="kg">kg</Option>
                                <Option value="g">g</Option>
                              </Select>
                            }
                            placeholder="Weight"
                          />
                        </Col>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="inch"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="inch">inches</Option>
                                <Option value="kg">cm</Option>
                                <Option value="g">mm</Option>
                              </Select>
                            }
                            placeholder="Length"
                          />
                        </Col>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="inch"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="inch">inches</Option>
                                <Option value="kg">cm</Option>
                                <Option value="g">mm</Option>
                              </Select>
                            }
                            placeholder="Width"
                          />
                        </Col>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="inch"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="inch">inches</Option>
                                <Option value="kg">cm</Option>
                                <Option value="g">mm</Option>
                              </Select>
                            }
                            placeholder="Height"
                          />
                        </Col>
                      </Row>
                      <Row gutter={10}>
                        <Col span={6} xs={24} sm={6}>
                          <Item
                            name="item-number"
                            label={<H4>Number of items</H4>}
                          >
                            <Input
                              size="large"
                              placeholder="Enter number of items"
                              className="dark"
                            />
                          </Item>
                        </Col>
                        <Col span={18} xs={24} sm={18}>
                          <Item
                            name="item-desc"
                            label={<H4>Item description</H4>}
                          >
                            <Input
                              size="large"
                              placeholder="Number item description"
                              className="dark"
                            />
                          </Item>
                        </Col>
                      </Row>
                      <Space direction="vertical">
                        <H4>Proof of Delivery</H4>
                        <Space>
                          <Checkbox />
                          <P3 color="#aaa">
                            Take a photo of item after delivery
                          </P3>
                          <FeeBadge>$1.00</FeeBadge>
                        </Space>
                        <Space>
                          <Checkbox />
                          <P3 color="#aaa">Require signature upon delivery</P3>
                          <FeeBadge>$1.00</FeeBadge>
                        </Space>
                      </Space>
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
                          <PrimaryBtn size="small">confirm</PrimaryBtn>
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
                              router.push("/checkout");
                            }}
                            size="middle"
                          >
                            confirm
                          </PrimaryBtn>
                        </Space>
                      )}
                    </Form>
                  </TabPane>
                  <TabPane tab="Delivery Information" key="2">
                    <Form
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      initialValues={{ size: "large" }}
                    >
                      <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} sm={12}>
                          <Item name="fullname" label="Full name">
                            <Input
                              size="large"
                              placeholder="Enter Full Name"
                              className="dark"
                            />
                          </Item>
                        </Col>
                        <Col span={12} xs={24} sm={12}>
                          <Item
                            name="business"
                            label={
                              <H4>
                                Business name <Optional>(Optional)</Optional>
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
                      <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} sm={12}>
                          <Item name="address" label="Full addess">
                            <Input
                              size="large"
                              placeholder="Enter Full Address"
                              className="dark"
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
                                  Business Floor #
                                  <Optional>(Optional)</Optional>
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
                      <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} sm={12}>
                          <Item
                            name="comments"
                            label={
                              <H4>
                                Special comments <Optional>(Optional)</Optional>
                              </H4>
                            }
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
                        <Col span={12} xs={24} sm={12}>
                          <Item name="phone" label="Phone number">
                            <Input
                              size="large"
                              placeholder="(555) 555-5555"
                              className="dark"
                            />
                          </Item>
                          <Item name="email" label="Email address">
                            <Input
                              size="large"
                              placeholder="Enter Email Address"
                              className="dark"
                            />
                          </Item>
                        </Col>
                      </Row>
                      <Space size={10}>
                        <Checkbox />
                        <P3>Receive SMS Updates and tracking link</P3>
                      </Space>
                      <Divider style={{ border: "none", margin: 5 }} />
                      <Space size={10}>
                        <Checkbox />
                        <P3>Send SMS updates and tracking link to recipient</P3>
                      </Space>
                      <Divider style={{ border: "none" }} />
                      <H4>Courier details</H4>
                      <Divider style={{ marginTop: 5 }} />
                      <Row gutter={[10, 5]}>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="lbs"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="lbs">lbs</Option>
                                <Option value="kg">kg</Option>
                                <Option value="g">g</Option>
                              </Select>
                            }
                            placeholder="Weight"
                          />
                        </Col>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="inch"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="inch">inches</Option>
                                <Option value="kg">cm</Option>
                                <Option value="g">mm</Option>
                              </Select>
                            }
                            placeholder="Length"
                          />
                        </Col>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="inch"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="inch">inches</Option>
                                <Option value="kg">cm</Option>
                                <Option value="g">mm</Option>
                              </Select>
                            }
                            placeholder="Width"
                          />
                        </Col>
                        <Col span={6} xs={24} md={12} lg={12} xl={6}>
                          <Input
                            addonAfter={
                              <Select
                                defaultValue="inch"
                                style={{ width: 100 }}
                                suffixIcon={<Icon icon="up-down-arrow" />}
                              >
                                <Option value="inch">inches</Option>
                                <Option value="kg">cm</Option>
                                <Option value="g">mm</Option>
                              </Select>
                            }
                            placeholder="Height"
                          />
                        </Col>
                      </Row>
                      <Row gutter={10}>
                        <Col span={6} xs={24} sm={6}>
                          <Item name="item-number" label="Number of items">
                            <Input
                              size="large"
                              placeholder="Enter number of items"
                              className="dark"
                            />
                          </Item>
                        </Col>
                        <Col span={18} xs={24} sm={18}>
                          <Item name="item-desc" label="Item description">
                            <Input
                              size="large"
                              placeholder="Number item description"
                              className="dark"
                            />
                          </Item>
                        </Col>
                      </Row>
                      <Space direction="vertical">
                        <P3>Proof of Delivery</P3>
                        <Space>
                          <Checkbox />
                          <P3 color="#aaa">
                            Take a photo of item after delivery
                          </P3>
                          <FeeBadge>$1.00</FeeBadge>
                        </Space>
                        <Space>
                          <Checkbox />
                          <P3 color="#aaa">Require signature upon delivery</P3>
                          <FeeBadge>$1.00</FeeBadge>
                        </Space>
                      </Space>
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
                          <PrimaryBtn size="small">confirm</PrimaryBtn>
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
                              router.push("/checkout");
                            }}
                            size="middle"
                          >
                            confirm
                          </PrimaryBtn>
                        </Space>
                      )}
                    </Form>
                  </TabPane>
                </Tabs>
              </MainContent>
            </Col>
          </Row>
        </Container>
      </Content>
    </AppLayout>
  );
};

export default Review;
