let data = [
    {value:'好听！',time:5,color:'green',speed:1,fontSize:22},
    {value:'特好听！',time:10,color:'pink',speed:1,fontSize:32},
    {value:'非常好听！',time:12,color:'red',speed:1,fontSize:42},
]

//获取页面上所有的dom 元素
let doc = document;
let canvas = doc.getElementById('canvas')
let video = doc.getElementById('video')
let $txt = doc.getElementById('text')
let $btn = doc.getElementById('btn')
let $color = doc.getElementById('color')
let $range = doc.getElementById('range')

class CanvasBarrage{
    constructor(canvas,video,opts={}){
        if(!canvas || !video){
            return;
        }
        console.log(this)
        this.video = video;//前面是属性，后面是参数
        this.canvas = canvas;
        this.canvas.width = video.width;
        this.canvas.height = video.height;

        this.ctx = canvas.getContext('2d')//创建一个2D的画布

        // 设置一下默认值，如果后面没有传入参数就使用默认参数值
        let defOpts = {
            color:'#e91e63',
            speed:1.5,
            opacity:0.5,
            fontSize:20,
            data:[]
        }

        //合并对象，全部挂载到this实例上
        Object.assign(this,defOpts,opts)
        //合并对象assign()

        //添加一个属性用来判断播放状态，默认true是暂停
        this.isPaused = true
        //得到所有的弹幕消息
        this.barrages = this.data.map(item => new Barrage(item,this))
        //渲染到页面上去
        this.render()

        //取到this 后，给构造函数挂载东西
    }
    //function render(){}
    render(){
        this.clear()
        //渲染弹幕
        this.renderBarrage()
        //如果没有暂停就继续渲染
        if(this.isPaused === false){
            //通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this))
        }
    }
    clear(){
        //清除整个画布
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    renderBarrage(){
        //根据时间来和弹幕要展示的时间作比较，为了判断是否展示弹幕
        let time = this.video.currentTime    //video标签自带的属性，判断video是否播放


        //遍历所有弹幕，每一个barrage都是Barrage的实例
        this.barrages.forEach(barrage =>{
            //只有在视频播放的时间大于或等于当前弹幕的展示时间才做处理
            if (!barrage.flag && time >= barrage.time){
                //判断当前弹幕是否已经初始化过
                if(!barrage.isInit){
                    barrage.init()
                    barrage.isInit = true
                }
                //弹幕需要从右往左渲染，所以需要将X轴坐标减去当前弹幕的speed 即可
                barrage.x -= barrage.speed
                barrage.render()
                //如果弹幕的X轴坐标小于自身的宽度，代表渲染结束了
                if(barrage.x < -barrage.width){
                    barrage.flag = true
                }
            }
        });
    }
}

//创建Barrage类，用来实例化每一个弹幕元素
class Barrage{
    constructor(obj,ctx){
        this.value = obj.value //弹幕的内容
        this.time = obj.time //弹幕出现的时间

        //把obj和ctx 都 挂载到this上，目的是为了方便获取
        this.obj = obj
        this.ctx = ctx
    }
    //初始化弹幕
    init(){
        //如果数据没有涉及到下面4种参数，就直接取默认参数
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize

        //为了计算每一个弹幕的宽度，我们来创建一个新的元素P，然后计算文字的宽度
        let p = docuent.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        document.body.apppendChild(p) //在列表中添加该元素

        this.width = p.clientWidth
        document.body.removeChild(p)

        //设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.rando

        //做一下超出范围的处理
        if(this.y < this.fontSize){
            this.y = this.fontSize
        }else if (this.y > this.contect.canvas.height - this.fontSize){

        }
    }
    //渲染每一条弹幕
    render(){
        //设置画布文字的字号和字体
        this.context.ctx.font = `${this.fontSize}px Arial`;
        //设置画布的文字颜色
        this.context.ctx.fillstyle = this.color
        //绘制文字
        this.context.ctx.fillText(this.value,this.x,this.y)

    }
}
//创建canvasBarrage的实例
let canvasBarrage = new CanvasBarrage(canvas,video,{data});
//设置video 的play 事件来调用canvasBarrage里面的render
video.addEventListener('play',()=>{
    canvasBarrage.isPaused = false
    canvasBarrage.render();//触发弹幕
})
