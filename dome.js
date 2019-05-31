//简单的回调
function aa(){
    var a =1;
    var b = 2;
    return c = a+b
}
//  console.log(aa())
bb(aa)
function bb(callback){
    callback()
    console.log(callback())
}

