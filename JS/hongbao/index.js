// let ran_num = Math.random();
const hongbao = () =>{
    const arr =[];//待分配金额的数组
    // 定义计算量
    let restAmount = total;
    reatNum = num;
    for (let i = 0;i<num -1;i++){
        // 前n-1发随机
        // 20*Math.random() 19X

        let amount = parseFloat(Math.random()*((restAmount/restNum)*2-0)).toFixed(2);
        restAmount -= amount;
        restNum --;
        arr.push(amount);
        }
        arr.push(restAmount.toFixed(2));
        return arr;
    }
    console.log(hongbao(20,40));