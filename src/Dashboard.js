import React from "react";

import {
  Button,
  Card,
  Col,
  Row,
  Divider,
  Tooltip,
  Input,
  Popover,
  Tag,
  Collapse,
  Layout,
  Menu,
  Icon
} from "antd";

import { LineChart, Line, ResponsiveContainer } from "recharts";

import "./index.css";

import {} from "antd";

const Panel = Collapse.Panel;
const Search = Input.Search;

const {  Content, Sider } = Layout;

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];


const gridStyle = {
  width: "50%",
  height: "80px",
  textAlign: "center"
};

export class Dashboard extends React.Component {
  state = {
    activeDrop: ["1"],
    selectedKey: "1",
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
          padding: "2%",
          maxWidth: "1400px",
          margin: "auto",
          width: "100%"
        }}
      >
        <div
          style={{
            padding: "10px 20px 0px",
            margin: "0",
            background: "#fff"
          }}
        >
          <Row type="flex" align="middle">
            <Col span={12}>
              <h2
                style={{
                  //textTransform: "uppercase",
                  fontWeight: 400,
                  color: "#42464b"
                }}
              >
                Dashboard
              </h2>
            </Col>
            <Col span={12} style={{ textAlign: "right" }} />
          </Row>
        </div>

        <Divider style={{ marginTop: "0px", marginBottom: "0px", top: 0 }} />
        <Layout style={{ padding: "0px 0", background: "#fff", border: 0 }}>
          <Sider
            collapsed={this.state.collapsed}
            breakpoint="md"
            trigger={null}
            collapsedWidth="0"
            width={200}
            style={{ background: "#fff" }}
            onCollapse={(collapsed, type) => {
              if (type === "responsive") {
                this.setState({
                  showMenu: collapsed ? true : false,
                  collapsed: collapsed
                });
              }
              this.props.triggerMenu(collapsed, type);
            }}
          >
            <div style={{ borderRight: "1px solid #e8e8e8", height: "100%" }}>
              <Row
                style={{
                  padding: 20

                  //borderRight: "1px solid #e8e8e8"
                  //borderBottom: "1px solid #e8e8e8"
                }}
              >
                <Col style={{ textAlign: "center" }}>
                  <Button
                    onClick={() => this.props.history.push("/dashboard/create")}
                    type="primary"
                    style={{
                      background: "#FF6178",
                      border: "1px solid #FF6178",
                      width: "95%"
                    }}
                  >
                    Create Campaign
                  </Button>
                </Col>
              </Row>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ margin: 0, padding: 0, border: 0 }}
              >
                <Menu.Item key="1">
                  <Icon type="mail" />
                  Campaigns
                </Menu.Item>

                {/*

                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="paper-clip" />
                      <span>Assets</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">
                    <Icon type="ordered-list" />
                    Lists
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="picture" />
                    Creatives
                  </Menu.Item>
                </SubMenu>
*/}
                <Menu.Item key="4">
                  <Icon type="book" />
                  Docs
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="smile" />
                  Chat Support
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          <Content
            style={{
              padding: "2% 3%",
              minHeight: 280,
              heightx: "100"
            }}
          >
            <Row style={{ display: "flex", alignItems: "center" }} gutter={16}>
              <Col md={12} sm={12} xs={12}>
                <h2 style={{ color: "black", fontSize: 20 }}>Campaigns</h2>
              </Col>
              <Col md={12} sm={12} xs={12} style={{ textAlign: "right" }}>
                <Search
                  placeholder="Search Campaigns"
                  size="small"
                  onSearch={value => console.log(value)}
                  style={{ width: "100%", marginBottom: 10 }}
                />
              </Col>
            </Row>
            <Divider dashed style={{ marginTop: 0, marginBottom: "3%" }} />

            <Collapse
              accordion
              bordered={false}
              style={{}}
              activeKey={this.state.activeDrop}
              onChange={keys => this.setState({ activeDrop: keys })}
            >
              <style>
                {`
                  .ant-collapse-content-box {
                    padding:0px!important;
                   border-bottom:0px solid black !important; 
                 
                  }

                  .ant-collapse-item {
                    border:0px solid black !important;
                    
                  }

                  .ant-collapse-header{
                    border:1px solid #e8e8e8;
                  }
                  `}
              </style>
              <Panel
                key={"1"}
                header={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ flex: 1 }}>drop_name_whatever_eh_here</span>
                    <Icon
                      type={this.state.activeDrop === "1" ? "up" : "down"}
                      style={{ marginRight: 12 }}
                    />
                  </div>
                }
                showArrow={false}
                style={{ marginBottom: 12 }}
              >
                <Card
                  size="small"
                  hoverable
                  style={{
                    width: "100%",
                    borderTop: "0px solid black",
                    pointerEvents: "auto"
                  }}
                  id="dropcard"
                  bodyStyle={{ padding: 0 }}
                  actions={[
                    <span onClick={this.props.goToDetail}>View Detail</span>,
                    "Conversion Match",
                    <Popover
                      placement="top"
                      title="Tools"
                      content="Clone / Archive / etc"
                      trigger="click"
                    >
                      Tools
                    </Popover>
                  ]}
                >
                  <Row style={{}}>
                    <Col
                      md={14}
                      sm={14}
                      xs={24}
                      style={{
                        padding: 10,
                        //marginBottom: 10,
                        background: "#fcfcfc"
                        //borderBottom: "1px solid #fbfbfb"
                      }}
                    >
                      <Tag color="blue">Postcard</Tag>
                      <Tag color="blue">4x6</Tag>
                      <Tag color="green">User 1</Tag>
                      <Tag color="green">User 2</Tag>
                    </Col>
                    <Col
                      md={10}
                      sm={10}
                      xs={24}
                      style={{
                        textAlign: "right",
                        padding: 10,

                        background: "#fcfcfc"
                        //borderBottom: "1px solid #eee"
                      }}
                    >
                      <span className="minititle">Mailed</span> 12/24/1988
                    </Col>
                  </Row>

                  <Row gutter={32} style={{ margin: 0 }}>
                    <Col md={12} style={{ margin: "12px 0 12px 0" }}>
                      <Card.Grid style={gridStyle} className="stat1">
                        <span className="minititle">Mail Sent</span>
                        <div className="stat">750,000</div>
                      </Card.Grid>
                      <Card.Grid style={gridStyle} className="stat2">
                        {" "}
                        <span className="minititle">Delivered</span>
                        <div className="stat">700,000</div>
                      </Card.Grid>
                      <Card.Grid style={gridStyle} className="stat3">
                        {" "}
                        <span className="minititle">
                          <Tooltip
                            title="Reported Conversions"
                            mouseEnterDelay={1}
                          >
                            RCon %
                          </Tooltip>
                        </span>
                        <div className="stat">10%</div>
                      </Card.Grid>
                      <Card.Grid style={gridStyle} className="stat4">
                        <span className="minititle">
                          <Tooltip
                            title="Reported Conversions per Day"
                            mouseEnterDelay={1}
                          >
                            RCon / Day
                          </Tooltip>
                        </span>
                        <ResponsiveContainer width="100%" height={32}>
                          <LineChart
                            data={data}
                            margin={{
                              top: 20
                            }}
                          >
                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="green"
                              strokeWidth={1}
                              dot={false}
                            />
                            <Tooltip />
                          </LineChart>
                        </ResponsiveContainer>
                      </Card.Grid>
                    </Col>
                    <Col md={12}>
                      <Row gutter={16} style={{ paddingTop: 10 }}>
                        <Col
                          md={12}
                          sm={24}
                          style={{
                            textAlign: "center"
                          }}
                        >
                          <img
                            width="100%"
                            src="https://process.filestackapi.com/AvjuTaDycQUCvaQb419Roz/rotate=deg:270/resize=height:1024/cache=expiry:31536000/quality=value:70/compress/https://pebblepost.io/img/PPMQT2_1.jpg"
                            alt=""
                            style={{
                              border: "1px solid #f9f9f9"
                            }}
                          />
                          <span className="">Front</span>
                        </Col>
                        <Col
                          md={12}
                          sm={24}
                          style={{
                            textAlign: "center"
                          }}
                        >
                          <img
                            width="100%"
                            src="https://process.filestackapi.com/AvjuTaDycQUCvaQb419Roz/resize=height:1024/cache=expiry:31536000/quality=value:70/compress/https://pebblepost.io/img/PPMQT2_HINT.jpg"
                            alt=""
                            style={{ border: "1px solid #f9f9f9" }}
                          />
                          <span className="">Back</span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Panel>

              <Panel
                key={"2"}
                header={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ flex: 1 }}>drop_name_whatever_eh_here</span>
                    <Icon
                      type={this.state.activeDrop === "2" ? "up" : "down"}
                      style={{ marginRight: 12 }}
                    />
                  </div>
                }
                showArrow={false}
                style={{ marginBottom: 12 }}
              >
                <Card
                  size="small"
                  hoverable
                  style={{
                    width: "100%",
                    borderTop: "0px solid black",
                    pointerEvents: "auto"
                  }}
                  id="dropcard"
                  bodyStyle={{ padding: 0 }}
                  actions={[
                    "View Detail",
                    "Conversion Match",
                    <Popover
                      placement="top"
                      title="Tools"
                      content="Clone / Archive / etc"
                      trigger="click"
                    >
                      Tools
                    </Popover>
                  ]}
                >
                  <Row>
                    <Col
                      span={12}
                      style={{
                        padding: 10,
                        marginBottom: 10,
                        background: "#fcfcfc"
                        //borderBottom: "1px solid #fbfbfb"
                      }}
                    >
                      <div>
                        <Tag color="blue">Postcard</Tag>
                        <Tag color="blue">4x6</Tag>
                        <Tag color="green">User 1</Tag>
                        <Tag color="green">User 2</Tag>
                      </div>
                    </Col>
                    <Col
                      span={4}
                      style={{
                        textAlign: "right",
                        padding: 10,
                        marginBottom: 10,
                        background: "#fcfcfc"
                        //borderBottom: "1px solid #eee"
                      }}
                    >
                      <span className="minititle">Mailed</span> 12/24/1988
                    </Col>
                  </Row>

                  <Row
                    gutter={16}
                    style={{ padding: 10, paddingTop: 0, paddingRight: 15 }}
                  >
                    <Col md={12}>
                      <Card.Grid style={gridStyle} className="stat1">
                        <span className="minititle">Mail Sent</span>
                        <div className="stat">750,000</div>
                      </Card.Grid>
                      <Card.Grid style={gridStyle} className="stat2">
                        {" "}
                        <span className="minititle">Delivered</span>
                        <div className="stat">700,000</div>
                      </Card.Grid>
                      <Card.Grid style={gridStyle} className="stat3">
                        {" "}
                        <span className="minititle">
                          <Tooltip
                            title="Reported Conversions"
                            mouseEnterDelay="1"
                          >
                            RCon %
                          </Tooltip>
                        </span>
                        <div className="stat">10%</div>
                      </Card.Grid>
                      <Card.Grid style={gridStyle} className="stat4">
                        <span className="minititle">
                          <Tooltip
                            title="Reported Conversions per Day"
                            mouseEnterDelay="1"
                          >
                            RCon / Day
                          </Tooltip>
                        </span>
                        <ResponsiveContainer width="100%" height={32}>
                          <LineChart
                            data={data}
                            margin={{
                              top: 20
                            }}
                          >
                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="green"
                              strokeWidth={1}
                              dot={false}
                            />
                            <Tooltip />
                          </LineChart>
                        </ResponsiveContainer>
                      </Card.Grid>
                    </Col>
                    <Col md={11} offset={1}>
                      <Row gutter={16} style={{ paddingTop: 10 }}>
                        <Col md={12} style={{ textAlign: "center" }}>
                          <img
                            width="100%"
                            src="https://process.filestackapi.com/AvjuTaDycQUCvaQb419Roz/rotate=deg:270/resize=height:1024/cache=expiry:31536000/quality=value:70/compress/https://pebblepost.io/img/PPMQT2_1.jpg"
                            alt=""
                            style={{ border: "1px solid #f9f9f9" }}
                          />
                          <span className="">Front</span>
                        </Col>
                        <Col md={12} style={{ textAlign: "center" }}>
                          <img
                            width="100%"
                            src="https://process.filestackapi.com/AvjuTaDycQUCvaQb419Roz/resize=height:1024/cache=expiry:31536000/quality=value:70/compress/https://pebblepost.io/img/PPMQT2_HINT.jpg"
                            alt=""
                            style={{ border: "1px solid #f9f9f9" }}
                          />
                          <span className="">Back</span>
                        </Col>
                      </Row>
                      <Row gutter={16} style={{ paddingTop: 5 }}>
                        <Col style={{ textAlign: "center" }}>
                          <Button size="small" className="xsmall">
                            <Icon type="zoom-in" /> Preview
                          </Button>
                          <div className="v-md" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Panel>
            </Collapse>
          </Content>
          <Sider
            breakpoint="lg"
            trigger={null}
            collapsedWidth="0"
            width={250}
            style={{ background: "white" }}
          >
            <div
              className="guide"
              style={{
                borderLeft: "1px solid #f3f3f3",
                padding: 24,
                height: "100%"
              }}
            >
              Inline Docs / Promo. This only shows in large screen.
            </div>
          </Sider>
        </Layout>
      </Content>
    );
  }
}
