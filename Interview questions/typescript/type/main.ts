// console.log('sss!');
let decLiteral: number = 1;
// decLiteral = '22222';
let hexLiteral: number = 0xf00d;

let user_name: string = 'xdvfdv'
let sentence: string = `hello,my name is ${name}`;

let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

function div(x) {
  if (isFinite(1000/x)) {
    return 'Number is NOT infinity'
  };
  return 'Number is Infinity';
}
console.log(div(0));