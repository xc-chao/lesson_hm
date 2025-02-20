import axios from "axios";
// 重zarm里解构出来的Toast
// Toast 是一个组件
import { Toast } from "zarm";

axios.defaults.baseURL = '/api'

export default axios