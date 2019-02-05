import React from "react";
import { Table, Tooltip, Icon } from "antd";

const columns = [
  {
    title: "#",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Tools",
    dataIndex: "tools",
    key: "tools",
    render: () => <Icon type="ellipsis" />
  }
];

const data = [
  {
    status: "1",
    key: "1",
    date: "1/15/2019",
    tools: "..."
  },
  {
    status: "2",
    key: "1",
    date: "1/20/2019",
    tools: "..."
  }
];

export class TableView extends React.Component {
  render() {
    return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        size="small"
        id="addresses"
        style={{ marginBottom: 24 }}
      />
    );
  }
}
