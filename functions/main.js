// //1ci
// function isEven(numbers) {
//   if (numbers / 2 === 0) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(isEven(6));


// //2ci
// function findlargest(a,b,c) {
//     if (a>b && a>c) {
//         return a;
//     } else if (b>a && b>c){
//         return b;
//     } else if(c>a && c>b) {
//         return c;
//     }
// }
// console.log(findlargest(5,6,9));


// //3cu
// function countVowels(words){
//     let word=words.split('');
//     let sum=0;
//     for (let i = 0; i < words.length; i++) {
//         if (word[i]=== 'a' || word[i]=== 'i' || word[i]=== 'o' || word[i]=== 'u' || word[i]=== 'a' || word[i]=== 'ı' || word[i]=== 'e' || word[i]=== 'ə' || word[i]=== 'ö' || word[i]=== 'ü' ) {
//             sum ++;
//         }
//     }
//     return sum;
// }
// console.log(countVowels('qargidali'));


// //4cu
// function reverse(array) {
//     let newArray = [];
//     let arrayy=array.split('');
//     for (let i = arrayy.length - 1; i >= 0; i--) { 
//         newArray.push(arrayy[i]); 
//     }
//     return newArray.join('');
// }
// console.log(reverse('JavaScript'));


// //5ci
// function multiplicationTable(numbers) {
//     let array ='';
//     for (let i = 1; i <=10; i++) {
//         array = array + `${numbers} * ${i} = ${numbers * i}\n`;
//     }
//     return array;
// }
// console.log(multiplicationTable(5));


// //6ci
// function Faktorial(eded) {
//     let hasil=1;
//     for (let i = 1; i <= eded; i++) {
//         hasil=hasil*i;
//     }
//     return hasil;
// }
// console.log(Faktorial(5)); 