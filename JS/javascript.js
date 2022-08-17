// //سوال اول
// //روش اول
// // let array = [99,18,21,"mohammad sohrabi", true ,{age :20}];
// // let total =array.length;
// // console.log(total);
// //روش دوم
// let array = [99,18,21,8,10,12,13,"mohammad sohrabi", true ,{age :20}];
// let totalLength =0;
// const myLength =(arrey)=>{
//     for(let i in array){
//         if ( Array.isArray(array[i])) {
//            myLength(array[i]);
//         }else{
//             totalLength++;
//         }
//     }
// }
// myLength(array);
// console.log(totalLength);

// //سوال دوم
// var obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     name:"mohammad",
//     last_name:"sohrabi",
//     age:20,

// };
// var result = Object.entries(obj);

// console.log(result);

// //سوال سوم

// function array_sum(array1 , array2) {
//     let array_3 =[];
//     let Counter = 0;
//     let i =0 ;
//     if (array1.length === 0) {
//         return "array1 is empty";
//     }
//     else if(array2.length ===0){
//         return "array2 is empty";
//     }

//     while (Counter < array1.length && Counter < array2.length) {
//         array_3.push(array1[Counter] + array2[Counter]);
//         Counter++;
//     }
//     if (Counter === array1.length) {
//         for (x = Counter;  x < array2.leng ;x++){
//           array_3.push(array2[x]);
//         }
//     }
//     else{
//         for (x = Counter;  x < array1.leng ;x++){
//             array_3.push(array1[x]);
//           }
//     }
//     return array_3;
// }
// console.log(array_sum([5,6,1,2,36] ,[6,8,9,1,5]));

// // سوال چهارم
// String.prototype.substring = function(){
//     let subset =[];
//     for (let i = 0; i< this.length; i++) {
//       for (let z = i+1; z < this.length+1; z++) {
//        subset.push(this.slice(i,z));
//       }
//     }
//     return subset;
// };
// console.log("mohammad sohrabi".substring());

// سوال پنجم
let number =prompt("لطفا عدد مورد نظر را وارد کنید :");
let str = number.toString();
const result =[str[0]];
let Counter =1;
while (Counter < str.length) {
   if (str[Counter-1] % 2 === 0 && str[Counter] % 2 === 0) {
    result.push('-',str[Counter]);
   }
   else{
    result.push(str[Counter]);
   }
   Counter++;
}

console.log(result.join(''));

// //سوال ششم




// let nestedObject = {
//    firs_name:'mohammad',
//    last_name:'sohrabi',
//    age:20,
//    number:16,
//    obj:{
//      a:98,
//      b:56,
//      c:78,
//      obg_2:{
//         d:78,
//         s:25,
//         y:42,
//      }
//    }
// }





// let  array_3 = [];

// function findInt(obj , arr) {
//     let array = [];
//     let array1 =[] , array2 = [];
//     for (let key in obj){
//         if(obj[key] === 'object'){
//             array1 = Object.values(obj);
//         }else {
//             array2 = Object.values(obj);
            
//         }
//     }
  
//     array = Object.values(array2);
    

//     let array_4 = [];
//     let array_5 = [];
//     for (let i = 0 ; i < array.length ; i++){

//         if (typeof array[i] === 'object'){
//             array_4 = Object.values(array[i]);
//             array_5 = array_4.concat(array_5);
            
//         }
//     }
//     array = array_5.concat(array);

//     array = arr.concat(array);

//     for (let i = 0 ; i < array.length ; i++){
//         if (Number.isInteger(array[i]) === true){
//             console.log(array[i]);
//         }
//     }
// }
// findInt(nestedObject , array_3);



