const {name} = require("./name");
const age = require("./age");
import './index.css'
console.log("en3try文件打ddddd5印作者fff2信2息1", name, age);
function heshui() {
    console.log('heshui');
}
// heshui()
if(module.hot){
    module.hot.accept('./name.js'),function(){
        console.log('-------');
    }
}
