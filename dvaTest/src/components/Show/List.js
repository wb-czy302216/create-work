import React from 'react';
import { connect } from 'dva';
import { Modal, Table, Input, Icon, Button, Popconfirm } from "antd";
import FromAction from "../utils/From";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class EditableCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Add</Button>
        <Table rowSelection={rowSelection} columns={(this.props.list.data.data||{}).columns} dataSource={(this.props.list.data.data||{}).data} />
        <FromAction
          title="Basic Modal"
          visible={this.state.visible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        >
        </FromAction>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {...state}
}

export default connect(mapStateToProps)(EditableCell);
