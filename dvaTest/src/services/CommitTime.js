import request from '../utils/request';

export async function commit(value) {
  return {
  	message: "上传的时间为：" + value
  }
}
