class RequestControl {
  max = 0;
  pending = 0;
  waiting = [];
  constructor(max = 3) {
    this.max = max;
  }
  request(data,delay) {
    if (this.pending < this.max) {
      this.pending++;
      new Promise((resolve, reject) => {
        // console.log('xixi',data);
        setTimeout(() => {
          console.log(data);
          resolve(data);
        }, delay);
      })
        .then((res) => {
          this.pending--;
          this.pushRequest();
          return res;
        })
    } else {
      this.waiting.push({data,delay});
    }
  }
  pushRequest() {
    if (this.waiting.length > 0) {
      this.request(this.waiting[0].data,this.waiting[0].delay);
      this.waiting.shift()
    } else {
      return;
    }
  }
}
let requestControl = new RequestControl();
requestControl.request(1,1000);
requestControl.request(2,4000);
requestControl.request(3,10000);
requestControl.request(4,6000);
requestControl.request(5,2000);
requestControl.request(6,2000);
