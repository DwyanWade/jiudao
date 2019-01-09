const axios = {
  get(url, options){
    let { headers } = options
    headers = headers ? headers : null;
    return this.request({
      url: url,
      method: 'GET',
      headers: headers
    })
  },
  post(url, options){
    let { headers, data} = options;
    headers = headers ? headers : null;
    data = data ? data : null;
    return this.request({
      url: url,
      method: 'POST',
      headers: headers,
      data: data
    })
  },
  all(promiseList){
    return Promise.all(promiseList);
  },
  request(options){
    return new Promise((resolve, reject) => {
      let {url, method, headers, data} = options;
      let xhr = new XMLHttpRequest();
      if(!method){
        method = 'GET'
      }
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json')
      if(headers && typeof headers == 'object'){
        for(let attr in headers){
          if(headers.hasOwnProperty(attr)){
            let val = headers[attr]
            xhr.setRequestHeader(attr, val)
          }
        }
      }
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status.toString().startsWith('2')){
            resolve(JSON.parse(xhr.responseText))
          }else{
            reject('httpError')
          }
        }
      }
      data = data ? JSON.stringify(data) : null;
      xhr.send(data)
    })
  }
}

export default axios;