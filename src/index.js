// let val2 = "let変数";
// console.log(val2);

// letは上書きが可能だが、再宣言ができない
// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// //constは上書きも再宣言も不可
// val3 = "const変数を上書き"
// console.log(val3);

// //constで定義したオブジェクトや配列は変更可能
// const val4 = {
//   name: "maru",
//   age: "23",
// };
// val4.name = "maruyu";
// val4.address = "Tokyo";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "innu";
// val5.push("nekko");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "まる";
// const age = "23";

//従来は"" + "";を用いていた

// const message1 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message1)

/**
 * アロー関数
 */

//従来の関数
//  function func1(str) {
//    return(str);
//  }
// const func1 = function(str) {
//   return str;
// };

//  console.log(func1("func1です"));

//アロー関数
//(str)は()なしのstrでも良い
// const func2 = (str) => {
//   return str;
// }
//一行の場合は省略できる
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 23));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "maru",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['maru', 23];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値 =
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("maru");

/**
 * スプレット構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[1], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
