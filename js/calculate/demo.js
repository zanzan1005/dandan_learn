//面向对象 的世界，创建对象，很多个单独的策略对象
// 实现了同样的接口，caculate,可以互换使用
function PerformanceS(){

}
PerformanceS.prototype.caculate = function(salary){
    return salary * 5;
}
function PerformanceA(){

}
PerformanceA.prototype.caculate = function(salary){
    return salary * 3;
}
function PerformanceB(){

}
PerformanceB.prototype.caculate = function(salary){
    return salary * 2;
}
function PerformanceC(){

}
PerformanceC.prototype.caculate = function(salary){
    return salary *1;
}

var Bounce = function(salary){
    this.salary = salary;
}
Bounce.prototype.setStrategy  = function(strategy){
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function(){
    return this.strategy.caculate(this.salary);
}

const bounce = new Bounce(10000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());

const bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformanceA());
console.log(bounce2.getBounce());
