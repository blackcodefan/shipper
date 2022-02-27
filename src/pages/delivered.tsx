import React, { useState } from "react";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import Container from "../components/paper/container";
import { Content } from "antd/lib/layout/layout";
import { Collapse, Divider, Modal, Space, Steps } from "antd";
import MainContent from "../components/review/main-content";
import { P2, P3, Span2, Span3 } from "../components/paragraph";
import { H2, H3, H4, H5 } from "../components/heading";
import { AppAvatar, BotAvatar, ImageBox, ToggleBotBtn } from "../components";
import StatusBox from "../components/pickup/status-box";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { AppStep } from "../components/review/step";
import { AppMap } from "../components/search/map";
import CourierDetail from "../components/pickup/courier-detail";
import { ChatRoom, ChatRoomHeader } from "../components/pickup/chat-room";
import Layer from "../components/pickup/layer";
import {
  UserItem,
  UserItemDetail,
  UserItemMain,
} from "../components/pickup/chat-user-item";
import UserListBox from "../components/pickup/chat-user-list";
import Icon from "../assets/icons";
import { PlaceHolder } from "../components/search/order-item";
import DetailLink from "../components/delivered/DetailLink";
import { useRouter } from "next/router";

const { Panel } = Collapse;

interface PickupProps {
  data?: any;
}

const Delivered: NextPage<PickupProps> = () => {
  const router = useRouter();
  const breakpoints = useBreakpoint();

  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const [detailModal, setDetailModal] = useState(false);

  const showDetailModal = () => {
    setDetailModal(true);
  };

  const handleDetailModalCancel = () => {
    setDetailModal(false);
  };

  return (
    <AppLayout background="./img/background-3.png">
      <AppHeader actions />
      <Content>
        <Container className="remove-header-space">
          <Layer presentChat={isChatOpen}>
            <MainContent>
              <CourierDetail>
                {breakpoints.xs && !breakpoints.sm ? (
                  <ImageBox style={{ marginTop: -20 }} />
                ) : (
                  <ImageBox border={false} />
                )}
                <div className="courier-summary">
                  <H3>Jessica Smith</H3>
                  <P2 color="#aaa">Delivermate</P2>
                  <P2
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    color="#20A5F5"
                    onClick={showDetailModal}
                  >
                    Driver Details
                  </P2>
                </div>
              </CourierDetail>
              <Divider style={{ border: "none" }} />
              <P3 color="#aaa">
                Shipment number: <Span2 color="white">ABC-123</Span2>
              </P3>
              <Divider style={{ border: "none" }} />
              <H5 color="#aaa">From:</H5>
              <H4>ABC Company</H4>
              <P3 color="#737373">
                2301-2399 Bancroft PI NW Washington, DC 20008, USA
              </P3>
              <Divider style={{ border: "none" }} />
              <H5 color="#aaa">To:</H5>
              <H4>Acme Inc.</H4>
              <P3 color="#737373">
                1614-1612 New Hampshire Washington, DC 20009, USA
              </P3>
              <Divider style={{ border: "none" }} />
              <StatusBox status="delivered">
                <p className="title">Delivered:</p>
                <p className="time">October 5th 2021 10:38am</p>
              </StatusBox>
              <PlaceHolder />
              <StatusBox status="picked">
                <p className="title">Picked Up:</p>
                <p className="time">October 5th 2021 9:20am</p>
              </StatusBox>
              <PlaceHolder />
              <DetailLink>
                <Icon icon="eye" />
                <Span3 style={{ textDecoration: "underline" }}>
                  View Photo
                </Span3>
              </DetailLink>
              <PlaceHolder />
              <DetailLink>
                <Icon icon="eye" />
                <Span3 style={{ textDecoration: "underline" }}>
                  View Singnature{" "}
                </Span3>
              </DetailLink>
              {breakpoints.sm && (
                <>
                  <Divider style={{ border: "none" }} />
                  <Span3
                    style={{
                      textDecoration: "underline",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => setChatOpen(!isChatOpen)}
                  >
                    {isChatOpen ? "Close" : "Open"} Communication Panel
                  </Span3>
                </>
              )}
            </MainContent>
            {breakpoints.xs && !breakpoints.sm && (
              <Collapse
                defaultActiveKey={isChatOpen ? 1 : 0}
                ghost
                style={{ marginBottom: 10 }}
                onChange={() => setChatOpen(!isChatOpen)}
              >
                <Panel
                  header={<H4>Open Communication panel</H4>}
                  key="1"
                  showArrow={false}
                  style={{ padding: 0 }}
                >
                  <ChatRoom>
                    <ChatRoomHeader>
                      <div className="left-part">
                        <H3>Messages</H3>
                      </div>
                    </ChatRoomHeader>
                    <UserListBox>
                      <UserItem style={{ alignItems: "flex-start" }}>
                        <AppAvatar
                          image="./img/recipient.png"
                          badge={false}
                          hasBorder={false}
                          size={55}
                        />
                        <div style={{ marginTop: 5 }}>
                          <UserItemMain>
                            <H3>Bella Levi</H3>
                            <P3 color="#737373">Recipient</P3>
                          </UserItemMain>
                          <Divider style={{ border: "none", margin: 2 }} />
                          <UserItemDetail>
                            <Icon icon="phone" />
                            <Span3>(814) 972-0456</Span3>
                          </UserItemDetail>
                          <UserItemDetail>
                            <Icon icon="envelope" />
                            <Span3>bellalevi@gmail.com</Span3>
                          </UserItemDetail>
                        </div>
                      </UserItem>
                      <UserItem>
                        <AppAvatar
                          image="./avatar/avatar1.png"
                          badge={false}
                          size={55}
                        />
                        <UserItemMain>
                          <H3>Jessica Smith</H3>
                          <P3 color="#737373">Courier</P3>
                        </UserItemMain>
                      </UserItem>
                    </UserListBox>
                  </ChatRoom>
                </Panel>
              </Collapse>
            )}
            <MainContent>
              <Space direction="vertical" size={5} align="center">
                <P3>Status</P3>
                <H2>Delivered</H2>
              </Space>
              <Steps current={1} style={{ maxWidth: 700, margin: "auto" }}>
                <AppStep
                  status="finish"
                  className="justify-tail"
                  tailcolor="#20A5F5"
                />
                <AppStep
                  status="finish"
                  className="justify-tail"
                  tailcolor="#20A5F5"
                />
              </Steps>
              <Divider style={{ border: "none" }} />
              <div style={{ height: 500 }}>
                <AppMap />
              </div>
            </MainContent>
            {isChatOpen && !breakpoints.xs && (
              <ChatRoom>
                <ChatRoomHeader>
                  <div className="left-part">
                    <H3>Messages</H3>
                  </div>
                </ChatRoomHeader>
                <UserListBox>
                  <UserItem style={{ alignItems: "flex-start" }}>
                    <AppAvatar
                      image="./img/recipient.png"
                      badge={false}
                      hasBorder={false}
                      size={55}
                    />
                    <div style={{ marginTop: 5 }}>
                      <UserItemMain>
                        <H3>Bella Levi</H3>
                        <P3 color="#737373">Recipient</P3>
                      </UserItemMain>
                      <Divider style={{ border: "none", margin: 2 }} />
                      <UserItemDetail>
                        <Icon icon="phone" />
                        <Span3>(814) 972-0456</Span3>
                      </UserItemDetail>
                      <UserItemDetail>
                        <Icon icon="envelope" />
                        <Span3>bellalevi@gmail.com</Span3>
                      </UserItemDetail>
                    </div>
                  </UserItem>
                  <UserItem>
                    <AppAvatar
                      image="./avatar/avatar1.png"
                      badge={false}
                      size={55}
                    />
                    <UserItemMain>
                      <H3>Jessica Smith</H3>
                      <P3 color="#737373">Courier</P3>
                    </UserItemMain>
                  </UserItem>
                </UserListBox>
              </ChatRoom>
            )}
          </Layer>
        </Container>
        <ToggleBotBtn onClick={() => router.push("/delivered2")}>
          <BotAvatar size={88}>
            <img src="./img/bot.png" />
          </BotAvatar>
        </ToggleBotBtn>
      </Content>
      <Modal
        width={breakpoints.md ? 618 : 300}
        className="cancel-modal"
        centered
        visible={detailModal}
        closeIcon={<Icon icon="cancel" />}
        onCancel={handleDetailModalCancel}
        footer="none"
      >
        <UserItemDetail>
          <Icon icon="phone" />
          <Span3>(814) 972-0456</Span3>
        </UserItemDetail>
        <Divider style={{ border: "none" }} />
        <P2 color="rgb(137, 137, 137)">
          Max weight: <Span2 className="value">20 lbs</Span2>
        </P2>
        <PlaceHolder />
        <P2 color="rgb(137, 137, 137)">
          Completed deliveries: <Span2 className="value">35</Span2>
        </P2>
        <PlaceHolder />
        <P2 color="rgb(137, 137, 137)">
          Model: <Span2 className="value">Toyota Prius</Span2>
        </P2>
        <PlaceHolder />
        <P2 color="rgb(137, 137, 137)">
          Year: <Span2 className="value">2018</Span2>
        </P2>
        <PlaceHolder />
        <P2 color="rgb(137, 137, 137)">
          Rating:{" "}
          <Span2 className="value" color="#7EDB5D">
            95% positive
          </Span2>
        </P2>
        <PlaceHolder />
        <P2 color="rgb(137, 137, 137)">
          List of equipment:{" "}
          <Span2 className="value">Dolly/Hand-truck, Temp Control</Span2>
        </P2>
      </Modal>
    </AppLayout>
  );
};

export default Delivered;
