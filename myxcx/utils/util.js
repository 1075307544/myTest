function axios(method){
  return function request(params){
    return new Promise((resolve,reject)=>{
      wx.request({
        ...params,
        method,
        url:'http://localhost:3000' + params.url,
        success(res){
          resolve(res.data)
        },
        fail(err){
          reject(err)
        }
      })
    })
  }
}
const request = {
  get:axios("GET"),
  post:axios("POST"),
  put:axios("PUT"),
  delete:axios("DELETE")
}

export { request }