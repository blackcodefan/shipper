import React, { useState } from "react";
import { NextPage } from "next";
import AppLayout from "../layouts";
import AppHeader from "../layouts/header";
import Container from "../components/paper/container";
import { Content } from "antd/lib/layout/layout";
import { Button, Collapse, Divider, Input, Space, Steps } from "antd";
import MainContent from "../components/review/main-content";
import { P2, P3, Span2, Span3 } from "../components/paragraph";
import { H2, H3, H4, H5 } from "../components/heading";
import { AppAvatar, ImageBox } from "../components";
import StatusBox from "../components/pickup/status-box";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { AppStep, Dot } from "../components/review/step";
import { AppMap } from "../components/search/map";
import CourierDetail from "../components/pickup/courier-detail";
import {
  AddUserBtn,
  ChatBox,
  ChatRoom,
  ChatRoomHeader,
  ChatScrollArea,
} from "../components/pickup/chat-room";
import Layer from "../components/pickup/layer";
import Icon from "../assets/icons";
import { PlaceHolder } from "../components/search/order-item";
import DetailLink from "../components/delivered/DetailLink";
import { IconButton } from "../components/button";
import MessageItem from "../components/pickup/chat-message-item";
import MessageAvatar from "../components/pickup/message-avatar";
import MessageBody from "../components/pickup/chat-message";
import MileStoneItem from "../components/pickup/milestone-item";
import { MessageInput } from "../components/pickup/message-input";
import { RateCourierBtn } from "../components/delivered/RateCourierBtn";

const { Panel } = Collapse;

interface PickupProps {
  data?: any;
}

const Delivered1: NextPage<PickupProps> = () => {
  const breakpoints = useBreakpoint();

  const [isChatOpen, setChatOpen] = useState<boolean>(false);

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
                  <P2 style={{ textDecoration: "underline" }} color="#20A5F5">
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
                        <Button type="link" size="small">
                          <Icon icon="arrow-left" color="#fff" width={20} />
                        </Button>
                        <AppAvatar size={55} badge={false} hasBorder={false} />
                        <div>
                          <H3>Jessica Smith</H3>
                          <P3>Courier</P3>
                        </div>
                      </div>
                      <AddUserBtn>
                        <Icon icon="add-user" />
                      </AddUserBtn>
                    </ChatRoomHeader>
                    <ChatBox>
                      <ChatScrollArea>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar show>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" last>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MileStoneItem>Monday, Jul 3</MileStoneItem>
                        <MessageItem owner="other">
                          <MessageAvatar show>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first last>
                            Lorem ipsum dolor sit amet
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="me">
                          <div className="placeholder" />
                          <MessageBody owner="me" first last>
                            Ut enim ad minim veniam, quis
                          </MessageBody>
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" first>
                            Duis aute irure dolor in reprehe
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                        <MessageItem owner="other">
                          <MessageAvatar show>
                            <img src="./avatar/avatar1.png" />
                          </MessageAvatar>
                          <MessageBody owner="other" last>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit
                          </MessageBody>
                          <div className="placeholder" />
                        </MessageItem>
                      </ChatScrollArea>
                    </ChatBox>
                    <RateCourierBtn>
                      <div>
                        <H3 color="#7EDB5D">Delivery Complete!</H3>
                        <P3 color="#7EDB5D">give your courier a rating</P3>
                      </div>
                      <Icon icon="arrow-right" width={60} />
                    </RateCourierBtn>
                    <MessageInput>
                      <Input
                        size="large"
                        placeholder="Type in email / number..."
                        className="dark"
                      />
                      <IconButton
                        size="middle"
                        icon={<Icon icon="telegram" />}
                      />
                    </MessageInput>
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
                  status="process"
                  className="justify-tail"
                  icon={<Dot />}
                />
                <AppStep status="wait" icon={<span />} />
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
                    <Button type="link" size="small">
                      <Icon icon="arrow-left" color="#fff" width={20} />
                    </Button>
                    <AppAvatar size={55} badge={false} hasBorder={false} />
                    <div>
                      <H3>Jessica Smith</H3>
                      <P3>Courier</P3>
                    </div>
                  </div>
                  <AddUserBtn>
                    <Icon icon="add-user" />
                  </AddUserBtn>
                </ChatRoomHeader>
                <ChatBox>
                  <ChatScrollArea>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar show>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" last>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MileStoneItem>Monday, Jul 3</MileStoneItem>
                    <MessageItem owner="other">
                      <MessageAvatar show>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first last>
                        Lorem ipsum dolor sit amet
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="me">
                      <div className="placeholder" />
                      <MessageBody owner="me" first last>
                        Ut enim ad minim veniam, quis
                      </MessageBody>
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" first>
                        Duis aute irure dolor in reprehe
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                    <MessageItem owner="other">
                      <MessageAvatar show>
                        <img src="./avatar/avatar1.png" />
                      </MessageAvatar>
                      <MessageBody owner="other" last>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit
                      </MessageBody>
                      <div className="placeholder" />
                    </MessageItem>
                  </ChatScrollArea>
                </ChatBox>
                <RateCourierBtn>
                  <div>
                    <H3 color="#7EDB5D">Delivery Complete!</H3>
                    <P3 color="#7EDB5D">give your courier a rating</P3>
                  </div>
                  <Icon icon="arrow-right" width={60} />
                </RateCourierBtn>
                <MessageInput>
                  <Input
                    size="large"
                    placeholder="Type in email / number..."
                    className="dark"
                  />
                  <IconButton size="middle" icon={<Icon icon="telegram" />} />
                </MessageInput>
              </ChatRoom>
            )}
          </Layer>
        </Container>
      </Content>
    </AppLayout>
  );
};

export default Delivered1;
