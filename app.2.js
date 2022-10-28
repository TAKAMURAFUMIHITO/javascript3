// 繰り返し処理
let max = 100;
let num = 1;
let count = 0;
// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');