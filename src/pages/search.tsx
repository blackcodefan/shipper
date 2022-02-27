import React, { useState } from "react";
import {
  Col,
  Divider,
  Layout,
  Row,
  Space,
  Carousel,
  TreeSelect,
  Select,
  Collapse,
  Modal,
} from "antd";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import { Center } from "../components/signin";
import { LeftSide } from "../components/search";
import Container from "../components/paper/container";
import ShipAddressInput from "../components/search/ship-address";
import DatePickerBtn from "../components/search/data-piceker-btn";
import LabeledWidget from "../components/search/label-widget";
import CarouselItem from "../components/signin/carousel";
import Icon from "../assets/icons";
import {
  EraseBtn,
  IconButton,
  IconButtonDisabled,
  LoadMoreBtn,
  SecondaryBtn,
} from "../components/button";
import RangeSlider from "../components/search/range-slider";
import SingleSelect from "../components/search/single-select";
import {
  CourierItemWrapper,
  CourierEquipment,
  CourierInfo,
  CourierItem,
  CourierItemHalfFirst,
  CourierItemHalfLast,
  CourierDetails,
  PlaceHolder,
} from "../components/search/order-item";
import { ImageBox } from "../components";
import { H3, H4 } from "../components/heading";
import { P2, P3, P4 } from "../components/paragraph";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { MapWrapper, AppMap } from "../components/search/map";
import { useRouter } from "next/router";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import TimePicker from "components/time-picker";
import { PickerHeader } from "../components/time-picker/navigator";
import { SortWidget } from "../components/search/sort-widget";
import { array, string } from "prop-types";

const { Option } = Select;
const { Content } = Layout;
const { Panel } = Collapse;

interface SearchProps {
  data?: any;
}

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

const defaultValue = {
  year: 2021,
  month: 11,
  day: 3,
};

const Search: NextPage<SearchProps> = () => {
  const router = useRouter();
  const breakpoints = useBreakpoint();

  const [dtPicker, setDtPicker] = useState(false);
  const [currentPickerTarget, setCurrentPickerTarget] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<object>(defaultValue);
  const [pickUpDate, setPickupDate] = useState<object>();
  const [deliveryDate, setDeliveryDate] = useState<object>();
  const [pickUpTime, setPickupTime] = useState<object>();
  const [deliveryTime, setDeliveryTime] = useState<object>();
  const [time, setTime] = useState<object>();
  const [deliveryTypes, setDeliveryTypes] = useState<string[]>([]);

  const [sort, setSort] = useState<boolean>(true);

  const openPickUpDTPicker = () => {
    setCurrentPickerTarget(true);
    setDtPicker(true);
  };

  const openDeliveryDTPicker = () => {
    setCurrentPickerTarget(false);
    setDtPicker(true);
  };

  const onConfirm = () => {
    if (currentPickerTarget) {
      setPickupTime(time);
      setPickupDate(selectedDate);
    } else {
      setDeliveryTime(time);
      setDeliveryDate(selectedDate);
    }
    setDtPicker(false);
  };

  const toggleDeliveryType = (type: string) => {
    if (deliveryTypes.includes(type)) {
      const newTypes = [...deliveryTypes];
      newTypes.splice(deliveryTypes.indexOf(type), 1);
      setDeliveryTypes(newTypes);
    } else {
      setDeliveryTypes([...deliveryTypes, type]);
    }
  };

  return (
    <AppLayout background="./img/background-3.png">
      <AppHeader actions />
      <Content>
        <Container className="remove-header-space">
          <Center>
            <Divider style={{ border: "none" }} />
            <ShipAddressInput />
            <Container>
              <Divider />
            </Container>
          </Center>
          <Row gutter={[10, 10]}>
            <Col span={8} xs={24} sm={12} md={10}>
              <LeftSide>
                <Space size={5} direction="vertical">
                  <Row gutter={6}>
                    <Col span={12}>
                      <DatePickerBtn
                        onClick={openPickUpDTPicker}
                        pos="left"
                        active={!pickUpDate && !pickUpTime}
                        date={
                          pickUpDate &&
                          `${pickUpDate["day"]}.${pickUpDate["month"]}.${
                            pickUpDate["year"] - 2000
                          }`
                        }
                        time={
                          pickUpTime &&
                          `${pickUpTime["time"]} ${pickUpTime["aa"]}`
                        }
                        title="Pickup"
                      />
                    </Col>
                    <Col span={12}>
                      <DatePickerBtn
                        onClick={openDeliveryDTPicker}
                        pos="right"
                        active={!deliveryDate && !deliveryTime}
                        date={
                          deliveryDate &&
                          `${deliveryDate["day"]}.${deliveryDate["month"]}.${
                            deliveryDate["year"] - 2000
                          }`
                        }
                        time={
                          deliveryTime &&
                          `${deliveryTime["time"]} ${deliveryTime["aa"]}`
                        }
                        title="Delivery"
                      />
                    </Col>
                  </Row>
                  <LabeledWidget label="Delivery Type">
                    <Carousel
                      variableWidth={true}
                      slidesToScroll={1}
                      dots={false}
                      draggable
                      infinite={false}
                      arrows
                      prevArrow={
                        <span
                          className="slick-arrow slick-prev"
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <Icon icon="next" />
                        </span>
                      }
                      nextArrow={
                        <span className="slick-arrow slick-prev">
                          <Icon icon="next" />
                        </span>
                      }
                    >
                      <CarouselItem
                        onClick={() => toggleDeliveryType("bicycle")}
                      >
                        <Space direction="vertical" size={9}>
                          {deliveryTypes.includes("bicycle") ? (
                            <IconButton
                              size="middle"
                              icon={<Icon icon="bicycle" color="white" />}
                            />
                          ) : (
                            <IconButtonDisabled
                              size="middle"
                              icon={<Icon icon="bicycle" color="white" />}
                            />
                          )}
                          <span>Bike</span>
                        </Space>
                      </CarouselItem>
                      <CarouselItem onClick={() => toggleDeliveryType("car")}>
                        <Space direction="vertical" size={9}>
                          {deliveryTypes.includes("car") ? (
                            <IconButton
                              size="middle"
                              icon={<Icon icon="car" color="white" />}
                            />
                          ) : (
                            <IconButtonDisabled
                              size="middle"
                              icon={<Icon icon="car" color="white" />}
                            />
                          )}
                          <span>Car</span>
                        </Space>
                      </CarouselItem>
                      <CarouselItem onClick={() => toggleDeliveryType("van")}>
                        <Space direction="vertical" size={9}>
                          {deliveryTypes.includes("van") ? (
                            <IconButton
                              size="middle"
                              icon={<Icon icon="van" color="white" />}
                            />
                          ) : (
                            <IconButtonDisabled
                              size="middle"
                              icon={<Icon icon="van" color="white" />}
                            />
                          )}
                          <span>Van</span>
                        </Space>
                      </CarouselItem>
                      <CarouselItem
                        onClick={() => toggleDeliveryType("smart-car")}
                      >
                        <Space direction="vertical" size={9}>
                          {deliveryTypes.includes("smart-car") ? (
                            <IconButton
                              size="middle"
                              icon={<Icon icon="smart-car" color="white" />}
                            />
                          ) : (
                            <IconButtonDisabled
                              size="middle"
                              icon={<Icon icon="smart-car" color="white" />}
                            />
                          )}
                          <span>Self-driving</span>
                        </Space>
                      </CarouselItem>
                      <CarouselItem onClick={() => toggleDeliveryType("truck")}>
                        <Space direction="vertical" size={9}>
                          {deliveryTypes.includes("truck") ? (
                            <IconButton
                              size="middle"
                              icon={<Icon icon="truck" color="white" />}
                            />
                          ) : (
                            <IconButtonDisabled
                              size="middle"
                              icon={<Icon icon="truck" color="white" />}
                            />
                          )}
                          <span>Truck</span>
                        </Space>
                      </CarouselItem>
                      <CarouselItem onClick={() => toggleDeliveryType("drone")}>
                        <Space direction="vertical" size={9}>
                          {deliveryTypes.includes("drone") ? (
                            <IconButton
                              size="middle"
                              icon={<Icon icon="drone" color="white" />}
                            />
                          ) : (
                            <IconButtonDisabled
                              size="middle"
                              icon={<Icon icon="drone" color="white" />}
                            />
                          )}
                          <span>Drone</span>
                        </Space>
                      </CarouselItem>
                    </Carousel>
                  </LabeledWidget>
                  <LabeledWidget label="How many Items?" hasInfo>
                    <RangeSlider
                      max={50}
                      initValue={25}
                      marks={{ 0: "0", 50: "50" }}
                    />
                  </LabeledWidget>
                  <LabeledWidget label="Item weight" hasInfo>
                    <RangeSlider
                      max={70}
                      initValue={47}
                      marks={{ 0: "0", 70: "70lb" }}
                    />
                  </LabeledWidget>
                  <LabeledWidget label="Price" hasInfo>
                    <RangeSlider initValue={30} marks={{ 0: "$", 100: "$" }} />
                  </LabeledWidget>
                  <LabeledWidget label="Price" hasInfo>
                    <TreeSelect
                      placeholder="Select type..."
                      treeData={treeData}
                      style={{ width: "100%" }}
                      treeCheckable
                      treeIcon={false}
                      showArrow
                      showSearch={false}
                      suffixIcon={
                        <Icon icon="arrow-key-down" color="#20A5F5" />
                      }
                      removeIcon={<Icon icon="remove" />}
                    />
                  </LabeledWidget>
                  <Row>
                    <Col span={12}>
                      <LabeledWidget label="Equipment" hasInfo>
                        <SingleSelect
                          showArrow
                          suffixIcon={
                            <Icon icon="arrow-key-down" color="#20A5F5" />
                          }
                          placeholder="Select item..."
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="tom">Tom</Option>
                        </SingleSelect>
                      </LabeledWidget>
                    </Col>
                    <Col span={12}>
                      <LabeledWidget label="Fleets" hasInfo>
                        <SingleSelect
                          showArrow
                          suffixIcon={
                            <Icon icon="arrow-key-down" color="#20A5F5" />
                          }
                          placeholder="Select item..."
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="tom">Tom</Option>
                        </SingleSelect>
                      </LabeledWidget>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <SortWidget onClick={() => setSort(!sort)}>
                        <H4>Sort by:</H4>
                        <P2>{sort ? `High - Low` : `Low - High`}</P2>
                        {sort ? (
                          <Icon icon="arrow-key-down" />
                        ) : (
                          <Icon icon="arrow-key-up" color="#fff" />
                        )}
                      </SortWidget>
                    </Col>
                  </Row>
                </Space>
              </LeftSide>
            </Col>
            <Col span={16} xs={24} sm={12} md={14}>
              <Space align="end" direction="vertical">
                <EraseBtn size="small">
                  <Icon icon="backspace" />
                  &nbsp;Clear All Filters
                </EraseBtn>
              </Space>
              <Space direction="vertical" size="large">
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
                          <IconButtonDisabled
                            size="middle"
                            icon={<span>$30</span>}
                          />
                          <SecondaryBtn
                            onClick={() => {
                              router.push("/review");
                            }}
                            size={breakpoints.xs ? "small" : "middle"}
                          >
                            Confirm
                          </SecondaryBtn>
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
                          <IconButtonDisabled
                            size="middle"
                            icon={<span>$30</span>}
                          />
                          <SecondaryBtn
                            onClick={() => {
                              router.push("/review");
                            }}
                            size={breakpoints.xs ? "small" : "middle"}
                          >
                            Confirm
                          </SecondaryBtn>
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
              </Space>
              <Center style={{ margin: 10 }}>
                <LoadMoreBtn>Load more</LoadMoreBtn>
              </Center>
            </Col>
          </Row>
        </Container>
        <MapWrapper>
          <AppMap />
        </MapWrapper>
      </Content>
      <Modal
        width={breakpoints.md ? 610 : 300}
        className="dt-picker-modal"
        centered
        onCancel={() => setDtPicker(false)}
        visible={dtPicker}
        closeIcon={<Icon icon="cancel" />}
        footer={[
          <SecondaryBtn size="small" onClick={onConfirm}>
            Confirm
          </SecondaryBtn>,
        ]}
      >
        <Row gutter={[5, 5]}>
          <Col span={12} xs={24} sm={24} md={12}>
            <PickerHeader>Date</PickerHeader>
            <Calendar
              colorPrimary="#fff"
              calendarSelectedDayClassName="calendar-selected"
              value={defaultValue}
              onChange={setSelectedDate}
            />
          </Col>
          <Col span={12} xs={24} sm={24} md={12}>
            <PickerHeader>
              Time
              <div className="asap">ASAP</div>
            </PickerHeader>
            <TimePicker onChange={setTime} />
          </Col>
        </Row>
      </Modal>
    </AppLayout>
  );
};

export default Search;
