//爬https://hahamx.cn/
//1.发送https请求 获取到需要的字符串
const https = require("https")
const cheerio = require("cheerio")
const download = require("download")
const startPage = 1   //下载当前起始页
const endPage = 3   //下载到最后一页结束

//先用循环写
for (let i = startPage; i <= endPage; i++) {
    //异步请求 一起下载   事件队列
    console.log("正在下载第"+i+"页的数据")
    const options = {
        hostname: 'hahamx.cn',
        port: 443,
        path: '/good/day/'+i,//网站不在是根路径"/"
        method: 'GET'
    };
    const req = https.request(options, (res) => {
        // console.log('状态码:', res.statusCode);
        // console.log('请求头:', res.headers);
        let bufferArr = []
        res.on('data', (chunk) => {
            //chunk是buffer数据流  二进制图片
            //process.stdout.write(chunk);//把二进制转换成字符串
            bufferArr.push(chunk)
            // console.log(chunk);
        });

        res.on('end', () => {
            // Buffer.concat(bufferArr) //获取一个大的Buffer对象
            // console.log(Buffer.concat(bufferArr).toString())
            let htmlStr = Buffer.concat(bufferArr).toString()
            //将HTML字符串解析为类似jQuery对象
            let $ = cheerio.load(htmlStr)
            // $(".joke-list-item .joke-main-img-suspend ").attr("src")
            // console.log( $(".joke-list-item .joke-main-img-suspend ").attr("src"))
            //循环前  需要获取数组
            let urlS = []
            $(".joke-list-item .joke-main-img-suspend ").each((index, item) => {
                // console.log(index,$(item).attr("data-original"))
                // console.log(index,'https:'+$(item).data("original"))//获取data方法
                urlS.push('https:' + $(item).data("original"))
            })
            console.log(urlS)
            Promise.all(urlS.map(x => download(x, ' dist '))).then(() => {
                console.log(' files downloaded！')
            })
        })
    });

    req.on('error', (e) => {
        console.error(e);
    });
    //发送请求
    req.end();
}
// const options = {
//     hostname: 'hahamx.cn',
//     port: 443,
//     path: '/good/day/1',//网站不在是根路径"/"
//     method: 'GET'
//   };
//   const req = https.request(options, (res) => {
//     // console.log('状态码:', res.statusCode);
//     // console.log('请求头:', res.headers);
//     let bufferArr = []
//     res.on('data', (chunk) => {
//         //chunk是buffer数据流  二进制图片
//         //process.stdout.write(chunk);//把二进制转换成字符串
//         bufferArr.push(chunk)
//         // console.log(chunk);
//     });

//     res.on('end',()=>{
//         // Buffer.concat(bufferArr) //获取一个大的Buffer对象
//         // console.log(Buffer.concat(bufferArr).toString())
//         let htmlStr = Buffer.concat(bufferArr).toString()
//         //将HTML字符串解析为类似jQuery对象
//         let $ = cheerio.load(htmlStr)
//         // $(".joke-list-item .joke-main-img-suspend ").attr("src")
//         // console.log( $(".joke-list-item .joke-main-img-suspend ").attr("src"))
//         //循环前  需要获取数组
//         let urlS = []
//         $(".joke-list-item .joke-main-img-suspend ").each((index,item)=>{
//             // console.log(index,$(item).attr("data-original"))
//             // console.log(index,'https:'+$(item).data("original"))//获取data方法
//                 urlS.push('https:'+$(item).data("original"))  
//         })
//         console.log(urlS)
//          Promise.all(urlS.map (x =>  download ( x ,' dist '))).then(() =>  {
//                 console.log (' files downloaded！')
//             })
//     })
//   });

//   req.on('error', (e) => {
//     console.error(e);
//   });
//   //发送请求
//   req.end();

  //2.使用cheerio 提取需要的字符串  img:src  把字符串 转换成jq对象

  //3.下载文件  使用download包下载