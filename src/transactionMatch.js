import React from "react";

import {
  Layout,
  Row,
  Col,
  Table,
  Upload,
  Collapse,
  Icon,
  message,
  Divider,
  Steps
} from "antd";

import { TableView } from "./tableView";
const Step = Steps.Step;
const { Header, Content, Footer, Sider } = Layout;
const Panel = Collapse.Panel;
const Dragger = Upload.Dragger;
const props = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

export class TransactionMatch extends React.Component {
  state = {
    includeOffer: false,
    visible: false
  };

  render() {
    return (
      <Content style={{ padding: "12px 12px" }}>
        <Row gutter={64}>
          <Col lg={12} md={24}>
            <h2>Gauge Campaign Performance with Transaction Match</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <img
              src="./image.png"
              style={{ width: "100%", marginBottom: 24 }}
            />
            <div class="code-box">
              <h3>File Format</h3>
              <pre>
                <span>Customer ID, Order Amount, Order Date, Order ID</span>
                <span>12315,$500,12/24/1987,7998</span>
                <span>89072,$1500,12/26/1987,7999</span>
              </pre>
            </div>
          </Col>
          <Col lg={6} md={24}>
            <div style={{ background: "#fafafa", marginBottom: 24 }}>
              <Dragger {...props} style={{ padding: 20 }}>
                <p className="ant-upload-drag-icon">
                  <Icon type="file-add" />
                </p>
                <p className="ant-upload-text">Click or drag to upload</p>
                <p className="ant-upload-hint">
                  Select and upload a CSV file that follows the format shown to
                  the left.
                </p>
              </Dragger>
            </div>
            <h3>Previous Transaction Match</h3>
            <TableView />
            <div />
          </Col>

          <Col lg={6} md={24}>
            <h3 style={{}}>FAQs</h3>
            <Divider style={{ marginBottom: 10 }} />
            <Collapse bordered={false}>
              <Panel header="The Question" key="1" />
              <Panel header="The Question" key="2" />
              <Panel header="The Question" key="3" />
            </Collapse>
          </Col>
        </Row>
      </Content>
    );
  }
}
