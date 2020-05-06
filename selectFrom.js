let creatMysql =require('./module')
creatMysql.connect()
function selectFromInfoSql(){
    let selectsql = 'SELECT * FROM conpany_list'
    creatMysql.query(selectsql,function(err,result){
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        if(result){
            console.log(result);
            return result
        }
    })
    creatMysql.end()
}
module.exports = selectFromInfoSql