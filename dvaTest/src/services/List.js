import request from '../utils/request';

export async function getlists() {
  return {
  	message: {
      columns: [{
        title: 'Name',
        dataIndex: 'name',
      }, {
        title: 'Age',
        dataIndex: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
      }],
      data: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }, {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      }]
    }
  }
}

export async function changeType(value){
	return {
		message: value.type
	}
}