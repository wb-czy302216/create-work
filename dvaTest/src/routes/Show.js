import React from 'react';
import { connect } from 'dva';
import List from '../components/Show/List';
class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };
        // ES6 类中函数必须手动绑定
    }
    render() {
        return (
          <div>
            <List />
          </div>
        );
    }
}

IndexPage.propTypes = {
};
function mapStateToProps(state){
  return {...state}
}

export default connect(mapStateToProps)(IndexPage);
