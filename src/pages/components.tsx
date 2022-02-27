import React from "react";
import { NextPage } from "next";
import AppLayout from "../layouts";
import Container from "../components/paper/container";
import {
  Row,
  Col,
  Divider,
  Input,
  Space,
  Checkbox,
  TreeSelect,
  Select,
} from "antd";
import { H1, H2, H3, H4 } from "../components/heading";
import { P1, P2, P3, P4 } from "../components/paragraph";
import { BtnTxt1, BtnTxt2, BtnTxt3 } from "../components/btn-txt";
import {
  BackButton,
  DoubleCircleButton,
  EraseBtn,
  IconButton,
  IconButtonDisabled,
  LoadMoreBtn,
  PrimaryBtn,
  SecondaryBtn,
  UnavailableBtn,
} from "../components/button";
import Icon from "../assets/icons";
import { ImageBox } from "../components";
import ShipAddressInput from "../components/search/ship-address";
import SingleSelect from "../components/search/single-select";
import RangeSlider from "../components/search/range-slider";
const { Option } = Select;

const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1",
  },
];

const Components: NextPage = () => {
  return (
    <AppLayout>
      <Container>
        <Row gutter={[24, 12]}>
          <Col md={{ span: 6 }} span={24}>
            <H3>Character Styles</H3>
            <Divider />
            <Space direction="vertical" size={60}>
              <Space direction="vertical" size={20}>
                <div>
                  <H1>Left</H1>
                  <p>Roboto - Bold - 48</p>
                </div>
                <div>
                  <H2>Left</H2>
                  <p>Roboto - Bold - 36</p>
                </div>
                <div>
                  <H3>Left</H3>
                  <p>Roboto - Bold - 18</p>
                </div>
                <div>
                  <H4>Left</H4>
                  <p>Roboto - Bold - 14</p>
                </div>
              </Space>
              <Space direction="vertical" size={20}>
                <div>
                  <P1>Body 1</P1>
                  <p>Roboto - Regular -18</p>
                </div>
                <div>
                  <P2>Body 2</P2>
                  <p>Roboto - Regular -14</p>
                </div>
                <div>
                  <P3>Body 3</P3>
                  <p>Roboto - Regular -13</p>
                </div>
                <div>
                  <P4>Body 4</P4>
                  <p>Roboto - Regular -10</p>
                </div>
              </Space>
              <Space direction="vertical" size={20}>
                <div>
                  <BtnTxt1>Button 1</BtnTxt1>
                  <p>Roboto - Bold -18</p>
                </div>
                <div>
                  <BtnTxt2>Button 2</BtnTxt2>
                  <p>Roboto - Bold -14</p>
                </div>
                <div>
                  <BtnTxt3>Button 3</BtnTxt3>
                  <p>Roboto - Bold -13</p>
                </div>
              </Space>
            </Space>
          </Col>
          <Col md={{ span: 18 }} span={24}>
            <H3>Components</H3>
            <Divider />
            <Space direction="vertical" size={20}>
              <Row>
                <Col>
                  <PrimaryBtn type="primary" size="large">
                    log in
                  </PrimaryBtn>
                </Col>
              </Row>
              <Row gutter={15}>
                <Col span="12">
                  <PrimaryBtn size="middle">schedule</PrimaryBtn>
                </Col>
                <Col span="12">
                  <SecondaryBtn size="middle">schedule</SecondaryBtn>
                </Col>
              </Row>
              <Row>
                <Col span="6">
                  <PrimaryBtn size="small">sign up</PrimaryBtn>
                </Col>
                <Col span="6">
                  <SecondaryBtn size="small">log in</SecondaryBtn>
                </Col>
                <Col span="6">
                  <BackButton type="link">
                    <Icon icon="arrow-left" />
                    Back
                  </BackButton>
                </Col>
                <Col span="6">
                  <UnavailableBtn size="small" disabled>
                    Unavailable
                  </UnavailableBtn>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Space size={6}>
                    <IconButton
                      size="middle"
                      icon={<Icon icon="bicycle" color="white" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="car" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="van" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="smart-car" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="bus" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="drone" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="truck" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="rocket" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="empty-truck-side" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="full-truck-side" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="helicopter" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="plane" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="ship" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="subway" />}
                    />
                    <IconButtonDisabled
                      size="middle"
                      icon={<Icon icon="train" />}
                    />
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Space direction="vertical" size={20}>
                    <Input
                      size="large"
                      placeholder="Ship to"
                      prefix={<Icon icon="location" />}
                      className="dark"
                    />
                    <Input
                      size="large"
                      placeholder="Ship From"
                      prefix={<Icon icon="location" color="#000" />}
                      className="light"
                    />
                    <DoubleCircleButton
                      type="primary"
                      shape="circle"
                      icon={<Icon icon="bicycle" color="white" />}
                      size="middle"
                    />
                    <div>
                      <Checkbox checked />
                      <Checkbox />
                    </div>
                    <TreeSelect
                      treeData={treeData}
                      style={{ width: "100%" }}
                      treeCheckable
                      treeIcon={false}
                      showArrow
                      showSearch={false}
                      suffixIcon={<Icon icon="arrow-key-up" />}
                      removeIcon={<Icon icon="remove" />}
                    />
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <ShipAddressInput />
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <SingleSelect
                    showArrow
                    suffixIcon={<Icon icon="arrow-key-up" />}
                    placeholder="Select item..."
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </SingleSelect>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <RangeSlider initValue={20} marks={{ 0: "0$", 100: "$" }} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ImageBox />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <IconButtonDisabled size="middle" icon={<span>$30</span>} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <LoadMoreBtn />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <EraseBtn size="small">
                    <Icon icon="backspace" />
                    &nbsp;Clear All Filters
                  </EraseBtn>
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
};

export default Components;
