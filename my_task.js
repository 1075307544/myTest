// my_task.js中的代码 
var i = 0;
function timedCount(){
    i = i+1;
    console.log(i);
    postMessage(i);
    setTimeout(timedCount, 1000);
}
timedCount();
onmessage = function (e) {
    var data = e.data;
    console.log('form sync', data); // worker: [1, 2, 3, "hello"]
};
