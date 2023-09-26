const fs = require('fs')
const http = require('http')
// function sleep(time) {
//     return new Promise(function(res) {
//       setTimeout(() => {
//         res()
//       }, time);
//     })
//   }
http.createServer((req, res) => {
    const { url } = req

    if (url == '/') {
        const file = fs.readFileSync('./script-async-defer.html')
        res.end(file)
        return
    }
    if (/^\/public/.test(url)) {
        if(/3000/.test(url)){
            console.log(url);
            setTimeout(() =>{
                const file = fs.readFileSync('.' + url)
                res.end(file.toString())
                return
            },3000)
        }else {
            const file = fs.readFileSync('.' + url)
            res.end(file.toString())
            return
        }
        
    }
}).listen(3001, () => {
    console.log('server start')
})