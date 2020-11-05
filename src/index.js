// var vaｌ1 = "var変数";
// console.log(vaｌ1);

// // var変数は上書き可能
// val1 = "上書き可能";
// console.log(vaｌ1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "再宣言"

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// // val3 = "上書き"

// //const変数は再宣言負荷
// const val3 = "再宣言"

// const val4 = {
//   name: "ゆうきち",
//   age: 22
// };
// val4.age = 23;
// console.log(val4);
// //constで定義したオブジェクトの中身は変更できる
// val4.address = "栃木";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);
//配列もconstで宣言していても変更可能

/**
 * テンプレート文字列
 */
// const name = "yuuki";
// const age = 22;

// const message = `私の名前は${name}です。年齢は、${age}です。`;
// console.log(message);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = function (str) {
//   console.log(str);
// };
// func2("あああ");
// //アロー関数ver

// const func3 = (str) => {
//   return str;
// };
// const func4 = (str) => str;
// //処理が一行の場合、波括弧とreturnを省略できる

// console.log(func3("func3です"));
// console.log(func4("func4です"));

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func5(10, 23));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "yuuki",
//   age: 22
// };
// const message1 = `名前は${myProfile.name}、年齢は${myProfile.age}です`;
// console.log(message1);

// //分割代入を利用
// const { name, age } = myProfile;

// const message2 = `名前は${name}、年齢は${age}です`;
// console.log(message2);

const myProfile = ["yuuki", 22];

const message3 = `なまえは${myProfile[0]},年齢は${myProfile[1]}です`;
console.log(message3);

//分割代入を使うと
//配列は配列で受け取り、順番に値が渡ってくる
const [name, age] = myProfile;
const message4 = `名前は${name}。年齢は${age}`;
console.log(message4);

/**
 * デフォルト値
 */
const sayhello = (name = "ゲスト") => {
  console.log(`こんにちは${name}さん`);
};
sayhello();

// /**
//  * スプレッド構文
//  */
// //配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1); //1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); //3
// sumFunc(...arr1); //3

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3); //[3, 4, 5] 残りの配列を受け取れる

//コピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
//arr4を展開して配列にした
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7); //[10, 20, 30, 40] 配列の結合

// イコールでコピーはだめ
const arr8 = arr4;
arr8[0] = 100;
console.log(arr8); //[100, 20]
console.log(arr4); //[100, 20]
//参照が保持されるので、参照元にも影響が出る
