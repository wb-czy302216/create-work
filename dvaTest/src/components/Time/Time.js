import React from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import style from './Time.css';

class IndexPage extends React.Component {
    render() {
        return (
          <div className={style.normal}>
             <div className={style.timeList}>
                <DatePicker onChange={this.props.onChange} />
                <br />
                <MonthPicker onChange={this.props.onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={this.props.onChange} />
              </div>
          </div>
        );
    }
}

export default IndexPage;
