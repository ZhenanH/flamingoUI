import React from "react";
import { StyledLogin } from "./StyledLogin";

import {
  Button,
  Col,
  Row,
  Input,
  Form,
  Icon
} from "antd";
import { Link } from "react-router-dom";


export class Login extends React.Component {
  render() {
    return (
      <StyledLogin >
       <Row type="flex" style={{height:"100%"}}>
           <Col md={16} sm = {24} className="homepageSider">
         
            <Row
              gutter={64}
              type="flex"
              justify="space-around"
              align="middle"
              style={{ height: "100%",margin:0}}
            >
              <Col md={14} style={{ display:"flex",alignItems:"center" }}>
               <div style={{padding:24, width:320, marginLeft:"auto",marginRight:"auto" }}>
                <div className="mktgCopy">Project</div>
                <img
                  style={{  maxWidth:"300px", minWidth:"250px", width:"70%"}}
                  src="https://pebblepost.io/img/flamingoLogo.png"
                  alt=""
                />
                <div className="v-lg" />
                <div className="mktgCopy">
                  Simple & Measurable Direct Mail for Digital Marketers.
                </div>
                <div className="v-lg" />
                <img
                  src="https://pebblepost.io/img/imb.png"
                  alt=""
                  style={{ width:"70%"}}
                />
                </div>
              </Col>
              <Col md={10} style={{textAlign:"center"}}>
                <img
                  style={{paddingBottom:24}}
                  src="https://process.filestackapi.com/AvjuTaDycQUCvaQb419Roz/https://pebblepost.io/img/flamingoStampLogo.png"
                  alt=""
                  width="70%"
                />
               
              </Col>
            </Row>
          
           
          </Col>

          <Col md={8} sm={24} style={{ background: "#fff" }}>
            <Row
              type="flex"
              justify="space-around"
              align="middle"
              style={{ height: "100%" }}
            >
              <Col span={14}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item>
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Row>
                      <Col md={10}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                        >
                          Log in
                        </Button>
                      </Col>
                      <Col md={12}>
                        Or  <Link to="/dashboard">{"  "} join our Alpha</Link>!
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledLogin>
    );
  }
}



