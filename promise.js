
function promiseClick() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('随机数生成的值：', num)
            if (num <= 10) {
                console.log(num+1,"aaa")
                resolve(num);
            }
            else {
                console.log(num+2,"bbb")
                reject('数字太于10了即将执行失败回调');
            }
        }, 2000);
    })
    .then(
        function (resolve) {
                console.log('resolved成功回调');
                console.log('成功回调接受的值：', resolve);
            }
        )
        .catch(function (reject, data) {
            console.log('catch到rejected失败回调');
            console.log('catch失败执行回调抛出失败原因：', reject);
        });	
}
promiseClick()
    
