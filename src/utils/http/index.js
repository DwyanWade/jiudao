import axios from './axios'
const baseUrl = 'http://bl.7yue.pro/v1/'
const headers = {'appkey': '6ywqG4caNqUBoLaG'}
const http = {
  get(url){
    let reqUrl = baseUrl + url
    return axios.get(reqUrl, {headers: headers})
  },
  post(url, data){
    let reqUrl = baseUrl + url
    return axios.post(reqUrl, {
      data: data,
      headers: headers
    })
  }
}

export default http