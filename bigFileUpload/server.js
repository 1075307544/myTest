//app.js
const http = require('http')
const multiparty = require('multiparty')// 中间件，处理FormData对象的中间件
const path = require('path')
const fse = require('fs-extra')//文件处理模块

const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian')// 读取根目录，创建一个文件夹qiepian存放切片

server.on('request', async (req, res) => {
    // 处理跨域问题，允许所有的请求头和请求源
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    if (req.url === '/upload') { //前端访问的地址正确
        const multipart = new multiparty.Form() // 解析FormData对象
        multipart.parse(req, async (err, fields, files) => {
            if (err) { //解析失败
                return
            }
            console.log('fields=', fields);
            console.log('files=', files);
            const [file] = files.file
            const [fileName] = fields.fileName
            const [chunkName] = fields.chunkName
            
            const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)//在qiepian文件夹创建一个新的文件夹，存放接收到的所有切片
            if (!fse.existsSync(chunkDir)) { //文件夹不存在，新建该文件夹
                await fse.mkdirs(chunkDir)
            }
            // 把切片移动进chunkDir
            await fse.move(file.path, `${chunkDir}/${chunkName}`)
            res.end(JSON.stringify({ //向前端输出
                code: 0,
                message: '切片上传成功'
            }))
        })
    }
})
server.listen(3000, () => {
    console.log('服务已启动');
})