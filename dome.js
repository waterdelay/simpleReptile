// //简单的回调
// function aa(){
//     var a =1;
//     var b = 2;
//     return c = a+b
// }
// //  console.log(aa())
// bb(aa)
// function bb(callback){
//     callback()
//     console.log(callback())
// }
// var yan =[5,10,100,200,1000]
// var ss = yan[0];
// for(var i =0;i<yan.length;i++){
//     if(ss<yan[i]){
//         ss=yan[i]
//     }
// }
// console.log(ss)

// let str = '门店1 ,门店2 ,门店3';
// let strARR = str.split(',');
// console.log(strARR);



//数组分隔成多个数组
// function chunk(arr, size) {
//     var arr1=new Array();
// 	for (var i = 0; i < Math.ceil(arr.length/size); i++) {
// 	   arr1[i]=new Array();
// 	}
// 	var j=0;
// 	var x=0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if(!((i%size==0)&&(i!=0))){
// 			arr1[j][x]=arr[i];
// 			x++;
// 			console.log("j="+j+"  "+"x="+x);
// 		}else{
// 			j++;
// 			x=0;
// 			console.log("else:"+"j="+j+"  "+"x="+x);
// 			arr1[j][x]=arr[i];
// 			console.log(arr1);
// 			x++;
// 		}
// 	}
// 	return arr1;
// }
// chunk(["a", "b", "c", "d"], 2);

//质数1-100
// function zhishu(){
// 	var arr =[]
// 	for(var i =1;i<=100;i++){
// 		//
// 		if(i == 1){
// 			continue
// 		}
// 		if(i ==2 || i ==3 || i==5 ||i ==7){
// 			arr.push(i)
// 		}
// 		if(i%2 !=0 && i%3 !=0 && i%5 !=0 && i%7!=0){
// 			arr.push(i)
// 		}
// 	}
// 	console.log('1-100的质数有'+arr.length+'个')
// 	console.log('质数分别为'+arr.join())
// }
// zhishu()

// var first  = [
// 	{id:"1",name:'zs'},
// 	{id:"2",name:'ls'},
// 	{id:"3",name:'dm'},
// 	{id:"4",name:'ss'},
// 	{id:"5",name:'aa'},
// ]
// var delMap = ["1","2","3"]
// for(var i = 0;i<delMap.length;i++){
// 	var index = first.findIndex( item =>{
// 		if(item.id ===delMap[i]){
// 			return true
// 		}
// 	})
// 	console.log(index)
// 	first.splice(index,1)
// 	console.log(first)
// }
// var json = [{dd:'SB',AA:'东东',re1:123}, {cccc:'dd',lk:'1qw'}];
 
// for(var i=0,l=json.length;i<l;i++){
//     for(var key in json[i]){
//         console.log(key+':'+json[i][key]);
//     }
// }
console.log("Dome")

