let creatMysql = require('./module')
creatMysql.connect();
//新增
var  addSql = 'INSERT INTO conpany_list(conpany_id,address,title,salary) VALUES(?,?,?,?)';
var  addSqlParams = ['模块化封装第一步', 'https://c.runoob.com','前端', '1000'];
//增
function addInfoSql(data){
    console.log(data)
    //这个是参数处理
    if(data && data.length){
        for(let i =0;i<data.length;i++){
            // implement(data[i])
            setTimeout(() => {
                implement(data[i])
            }, 2000);   
        }  
    }
    //这个是数据库层处理
    function implement(datainfo){
        let addSqlParams=[datainfo.conpany_id,datainfo.address,datainfo.title,datainfo.salary]
        creatMysql.query(addSql,addSqlParams,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }        
            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);        
            console.log('INSERT ID:',result);
        });
        // creatMysql.end()
    }
    
}
module.exports=addInfoSql