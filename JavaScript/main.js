(function(){

    // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/comic', component: comic },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
let xxx= new Vue({
    el:'#body-container',
    router,
    data:{
        manhuadata:[{img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'}]
        // type:[{type:'热血',href:'#'},
        //     {type:'恋爱',href:'#'},
        //     {type:'百合',href:'#'},
        //     {type:'彩虹',href:'#'},
        //     {type:'冒险',href:'#'},
        //     {type:'后宫',href:'#'},
        //     {type:'悬疑',href:'#'},
        //     {type:'推理',href:'#'},
        //     {type:'搞笑',href:'#'},
        //     {type:'奇幻',href:'#'},
        //     {type:'萌系',href:'#'},
        //     {type:'日常',href:'#'},
        //     {type:'治愈',href:'#'},
        //     {type:'穿越',href:'#'},
        // ],
        // list:[{name:'地区',type:[{type:'全部',href:'#',classname:''},{type:'日漫',href:'#',classname:''},{type:'国漫',href:'#',classname:''},{type:'美漫',href:'#',classname:''}]},
        //     {name:'进度',type:[{type:'全部',href:'#',classname:''},{type:'连载',href:'#',classname:''},{type:'完结',href:'#',classname:''}]},
        //     {name:'类别',type:[{type:'热血',href:'#'},
        //     {type:'恋爱',href:'#'},
        //     {type:'百合',href:'#'},
        //     {type:'彩虹',href:'#'},
        //     {type:'冒险',href:'#'},
        //     {type:'后宫',href:'#'},
        //     {type:'悬疑',href:'#'},
        //     {type:'推理',href:'#'},
        //     {type:'搞笑',href:'#'},
        //     {type:'奇幻',href:'#'},
        //     {type:'萌系',href:'#'},
        //     {type:'日常',href:'#'},
        //     {type:'治愈',href:'#'},
        //     {type:'穿越',href:'#'},]}
        // ],
    },
    methods:{
        // startsearch:function(e){
        //     console.log(e.currentTarget)
        //     let temp1 = e.currentTarget.getAttribute('data-index1')
        //     let temp2 = e.currentTarget.getAttribute('data-index2')
        //     for(let j = 0;j<this.list[temp1].type.length;j++){
        //         this.list[temp1].type[j].classname = ''
        //     }
        //     this.list[temp1].type[temp2].classname='active'

        // }
        searchmanhua:function(manhua){
            console.log(manhua)
            let temp = this
            let url='/comic?'
            for(let i=0;i<manhua.length;i++){
                url = url+`${manhua[i].par}=${manhua[i].val}&`
            }
            url=url.slice(0,url.length-1)
            this.$router.push(url)
            console.log(url)
            axios.get(url)
            .then(function (response) {
                response = [{img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'}]
                temp.manhuadata = response
                console.log(temp.manhuadata)
            })
            .catch(function (error) {
                console.log(error);
                let response = [{img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'}]
                temp.manhuadata = response
                console.log(temp.manhuadata)
            });
        }
    },

}).$mount('#body-container')

}())