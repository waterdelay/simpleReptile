const {Builder, By, Key, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/chrome');
let URL = 'https://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF?labelWords=sug&fromSearch=true&suginput=%E5%89%8D%E7%AB%AF';
let currentPage = 1;
const maxPage = 10;
let driver =null;

let options =new Options();
options.addArguments('--headless'); //这里还可以设置请求头
(async function example() {
//   let driver = await new Builder().forBrowser('chrome').build(); //使用什么浏览器爬  驱动器
//   driver = await new Builder().forBrowser('chrome').build(); //使用什么浏览器爬  驱动器   有头浏览器
  driver = await new Builder().setChromeOptions(options).forBrowser('chrome').build();
  await driver.get(URL); 
  await getData(); 
})();
async function getData(){
    while(true){  //这里的死循环是为了得到第二页以后的数据  打印错误 
        let flag = true;
    try {
        let webElement = await driver.findElements(By.css('.item_con_list .con_list_item')); // 查找元素   findElement返回的是一个promise对象     所有的li
        // console.log(webElement);  
        // webElement.getText(); //返回的是一个promise(string)  坑一
        // webElement.getText().then(string =>{
        //     console.log(string)
        // })
        // console.log(await webElement.getText());
        let results = [];
        for(var i = 0;i<webElement.length;i++){
            let li = webElement[i];
            //查找h3
            let jobName = await li.findElement(By.css('.list_item_top h3')).getText();
            let companyName = await li.findElement(By.css('.company a')).getText();
            let money = await li.findElement(By.css('.list_item_top .money')).getText();
            let companyLink = await li.findElement(By.css('.company a')).getAttribute('href');
            let result = {
                jobName,
                companyName,
                money,
                companyLink
            }
            results.push(result)
            // console.log(jobName);
            console.log(results);
        }
        await driver.findElement(By.css('.pager_next')).click();
        //递归调用函数
        currentPage++;
        if(currentPage<maxPage){
            await getData();
        }
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);  //判断请求头   延迟一秒执行  
      }catch(e){
        if(e){
            flag = false; 
        }
      } finally {
        // await driver.quit();  //自动关闭浏览器
        if(flag){
            break;
        } 
      }
    }
}