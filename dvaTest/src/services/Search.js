import request from '../utils/request';

export async function finds() {
  return {
  	message: "请求成功"
  }
}

export async function changeType(value){
	return {
		message: value.type
	}
}