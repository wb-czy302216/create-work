import React from 'react';
import { connect } from 'dva';
import Search from "../components/Search/Search"

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
        this.searchType = this.searchType.bind(this);
    }

    handleChange(value) {
      this.props.dispatch({
        type: "search/find",
        payload: {
          id: 1,
          checked: value
        }
      })
      console.log("routes查找"+value);
    }
    searchType(value){
      this.props.dispatch({
        type: "search/type",
        payload: {
          id: 2,
          type: value
        }
      })
    }

    render() {
        return (
          <div>
            <Search handleChange = {this.handleChange} searchType = {this.searchType}/>
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
