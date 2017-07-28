import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from "dva/router";
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    //console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Link to="search"><Icon type="mail">search</Icon></Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="commitTime"><Icon type="appstore">commitTime</Icon></Link>
          </Menu.Item>
          <Menu.Item key="show">
            <Link to="show"><Icon type="appstore">show</Icon></Link>
          </Menu.Item>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}
export default connect()(App);