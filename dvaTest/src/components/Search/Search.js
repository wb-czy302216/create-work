import React from 'react';
import { Select, Input } from 'antd';
import style from './Search.css';

const Option = Select.Option;
const Search = Input.Search;

class IndexPage extends React.Component {
    render() {
        return (
          <div className={style.normal}>
            <div>
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.props.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Lili">Lili</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
            <div style={{ padding: 20 }}>
              <Search placeholder="input search text" style={{ width: 200 }} onSearch={this.props.searchType}></Search>
            </div>
          </div>
        );
    }
}
export default IndexPage;
