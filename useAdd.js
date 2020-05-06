let addInfoSql = require('./addSql') 
// let delInfoSql = require('./delSql')
// let updataInfoSql = require('./updataSql')
// let selectFromInfoSql = require('./selectFrom')
let data =[{ conpany_id: '中安股份',
address: 'https://www.lagou.com/gongsi/277136.html',
title: '前端开发工程师',
salary: '6k-10k' },
{ conpany_id: '非凡心教育',
address: 'https://www.lagou.com/gongsi/746171.html',
title: '前端开发工程师',
salary: '10k-20k' },
{ conpany_id: '羿娲科技',
address: 'https://www.lagou.com/gongsi/243838.html',
title: '前端开发工程师',
salary: '10k-20k' }]
addInfoSql(data)