let creatMysql = require('./module')
creatMysql.connect()
function updataInfoSql(){
    let updatasql = 'UPDATA conpany_list SET conpany_id = ?,address = ?,title =?,salary =? WHERE id =1';
    let updatasqlParams = ['小米','https://www.xiaomi.com','前端','15k',6]
    creatMysql.query(updatasql,updatasqlParams,function(err,result){
        if(err){
            console.log('[UPDATE ERROR] - ',err.message);
            return
        }
        if(result){
            console.log('UPDATE affectedRows',result.affectedRows);
            return result
        }
    })
    creatMysql.end()
}
module.exports = updataInfoSql