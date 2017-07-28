import React from 'react';
import { connect } from 'dva';
import Time from "../components/Time/Time"

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            time: props.time || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.onChange = this.onChange.bind(this);
    }
    onChange(date, dateString) {
      this.props.dispatch({
        type: "time/CommitTime",
        payload: {
          id: 1,
          checked: dateString
        }
      })
      console.log(`提交的时间为：${date}   ${dateString}`);
    }

    render() {
        return (
          <div>
            <Time onChange= {this.onChange}/>
          </div>
        );
    }
}


// const IndexPage = React.createClass({
//   getInitialState:function(){
//     return {
//       index: 1,
//       id: 0,
//       checked: "lucy"
//     }
//   },
//   handleChange: function(value) {
//     this.props.dispatch({
//       type: "search/find",
//       payload: {
//         id: 1,
//         checked: value
//       }
//     })
//     console.log("routes查找"+value);
//   },
//   render: function(){
//     return(
//         <div className={style.normal}>
//           <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
//             <Option value="jack">Jack</Option>
//             <Option value="lucy">Lucy</Option>
//             <Option value="disabled" disabled>Disabled</Option>
//             <Option value="Yiminghe">yiminghe</Option>
//           </Select>
//           <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
//             <Option value="lucy">Lucy</Option>
//           </Select>
//         </div>
//       )
//   }
// })

IndexPage.propTypes = {
};
function mapStateToProps(state){
  return {...state}
}

export default connect(mapStateToProps)(IndexPage);
