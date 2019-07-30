function render(tpl,data) {
  return tpl.replace(/\{\{(.+?)\}\}/g,function ($1,$2){
    console.log($1,$2);
    return data[$2]
  })
}
let tmpl = `
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
`
console.log(render(tmpl,{name: '李玮',age: 18}));
//1.找到搜有的{{}},regExp /{\{\(.+)\}\}/ /g