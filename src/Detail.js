import React from "react";
import {
  Col,
  Row,
  Divider,
  Avatar,
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Tabs,
  Tag
} from "antd";

import "./index.css";

import { TableView } from "./tableView";

import { TransactionMatch } from "./transactionMatch";
//import { Map } from "./map";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;
export class Detail extends React.Component {
  state = {
    selectedKey: "3",
    collapsed: false,
    showMenu: false
  };
  onMenuSelect = item => {
    this.setState({
      selectedKey: item.key,
      collapsed: this.state.showMenu ? true : false
    });
  };

  render() {
    return (
      <Content
        style={{
          padding: "20px",
          maxWidth: "1400px",
          margin: "auto",
          width: "100%"
        }}
      >
        <Content
          style={{
            margin: "0 0 0 0",
            background: "#f7f7f9"
          }}
        >
          <Row
            type="flex"
            align="middle"
            style={{
              padding: "0 24px 0 24px",
              borderBottom: "1px solid #e8e8e8"
            }}
          >
            <Col lg={14} md={12} xs={14} sm={14}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0px",
                  position: "relative"
                }}
              >
                <a
                  class="link-block"
                  onClick={this.props.goToDashboard}
                  style={{
                    position: "absolute",
                    color: "gray",
                    height: "100%",

                    display: "flex",
                    alignItems: "center",

                    width: "36px",
                    marginLeft: "-24px",
                    justifyContent: "center"
                  }}
                >
                  <Icon type="left" style={{ fontSize: 12 }} />
                </a>
                <h2 style={{ margin: "0 0 0 12px" }}>
                  Drop_name_whatever_eh_here{" "}
                </h2>
              </div>
            </Col>
            <Col lg={6} md={8} xs={0} sm={0}>
              <Tag color="blue">Postcard</Tag>
              <Tag color="blue">4x6</Tag>
              <Tag color="green">User 1</Tag>
              <Tag color="green">User 2</Tag>
            </Col>
            <Col lg={4} md={4} xs={10} sm={10} style={{ textAlign: "right" }}>
              <b>Mailed</b> 12/25/2018
            </Col>
          </Row>
        </Content>
        <Layout style={{ padding: "4px 0", background: "#fff" }}>
          <Content class="detail" style={{ padding: "0 24px", minHeight: 280 }}>
            <style>
              {`
                 .detail .ant-tabs-nav-scroll{
                   display:block;
                 }

                 .detail .ant-tabs-bar{
                   margin-bottom:16px;
                 }
                  `}
            </style>

            <Tabs
              size="large"
              activeKey={this.state.selectedKey}
              onChange={selectedKey => this.setState({ selectedKey })}
            >
              <TabPane tab="Recent Activity" key="1">
                <Row gutter={48}>
                  <Col md={14} sm={24} xs={24}>
                    <h3>Lorem Ipsum</h3>
             
                  </Col>
                  <Col md={10} sm={24} xs={24}>
                    {/* <Map /> */}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Campaign Info" key="2">
                Campaign Info
              </TabPane>
              <TabPane tab="Transaction Match" key="3">
                <TransactionMatch />
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Content>
    );
  }
}
