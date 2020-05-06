let creatMysql = require('./module')
creatMysql.connect()
function delInfoSql(){
    //这里的删除应该是由前台调接口发过来想传的参数
    let delsql = 'DELETE FROM conpany_list where id=2';
    creatMysql.query(delsql,function(err,result){
        if(err){
            console.log('[DELETE ERROR] - ',err.message);
            return
        }        
        console.log('DELETE affectedRows',result.affectedRows);
        if(result){
            return result
        }
    })
    creatMysql.end()
}
module.exports = delInfoSql