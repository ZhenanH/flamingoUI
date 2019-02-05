import React from "react";

import { Drawer, Avatar } from "antd";

import { Layout, Menu, Icon } from "antd";
import { StyledAppContainer } from "./StyledAppContainer";
import { Dashboard } from "../Dashboard";
import {CreateCampaign} from '../CreateCampaign/CreateCampaign'
import { BrowserRouter as Router, Route } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

export class AppContainer extends React.Component {
  state = {
    visible: false,
    showMenu: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  render() {
    return (
      <StyledAppContainer>
        <Drawer
          title={
            <div
              className="logo"
              style={{ float: "none", margin: "6px 0 6px 0" }}
            />
          }
          destroyOnClose={true}
          placement={"top"}
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ padding: 0 }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ margin: 0, padding: 0, border: 0 }}
          >
            <Menu.Item key="1">
              <Icon type="mail" />
              Mail Drops
            </Menu.Item>

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

            <Menu.Item key="4">
              <Icon type="book" />
              Docs
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="smile" />
              Chat Support
            </Menu.Item>
          </Menu>
        </Drawer>

        <Layout>
          <Header style={{ padding: 0, background: "white" }}>
            <div className="center-container">
              <div className="logo" />

              <div
                style={{
                  float: "right",
                  marginLeft: 24,
                  display: this.state.showMenu ? "block" : "none",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div style={{ verticalAlign: "middle" }}>
                  <Icon
                    type={this.state.collapsed ? "menu" : "menu"}
                    style={{ fontSize: 20 }}
                    onClick={() => {
                      this.setState({ visible: true });
                    }}
                  />
                </div>
              </div>
              <div style={{ float: "right" }}>
                <Avatar icon="user" />
              </div>
            </div>
          </Header>

          <Router>
          <Content>
            <Route exact path="/dashboard" render={(props)=><Dashboard {...props}
              triggerMenu={(collapsed, type) => {
                console.log(collapsed, type);
                if (type === "responsive") {
                  this.setState({
                    showMenu: collapsed ? true : false
                  });
                }
              }}
            />} />
            <Route exact path="/dashboard/create" component={CreateCampaign} />
            
          </Content>
          </Router>

          <Footer style={{ textAlign: "center" }}>Flamingo@2019</Footer>
        </Layout>
      </StyledAppContainer>
    );
  }
}
