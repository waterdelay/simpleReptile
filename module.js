/*
 * @Author       : daiwei
 * @Date         : 2019-07-17 17:26:10
 * @LastEditors  : daiwei
 * @LastEditTime : 2020-04-30 14:51:33
 * @FilePath     : \simpleReptile\module.js
 */
let mysql = require('mysql')
let creatMysql = mysql.createConnection({
    host : 'localhost', //服务器IP地址
    user : 'root', //用户名
    port : '3306', //端口号   默认3306
    password : 'root', //用户密码
    database : 'testsql', //数据库名称
    useConnectionPooling: true
})
module.exports =creatMysql    //导出mysql数据库层

