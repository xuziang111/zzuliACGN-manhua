(function(){

//     // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// // 1. 定义 (路由) 组件。
// // 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }

// // 2. 定义路由
// // 每个路由应该映射一个组件。 其中"component" 可以是
// // 通过 Vue.extend() 创建的组件构造器，
// // 或者，只是一个组件配置对象。
// // 我们晚点再讨论嵌套路由。
// const routes = [
// //   { path: '/comic', component: comic },
// //   { path: '/index', component: index },
// ]

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes // (缩写) 相当于 routes: routes
// })

// // 4. 创建和挂载根实例。
// // 记得要通过 router 配置参数注入路由，
// // 从而让整个应用都有路由功能
let xxx= new Vue({
    el:'#body-container',
    // router,
    data:{
        manhuadata:[{img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'}],
    },
    methods:{
        searchmanhua:function(manhua){
            console.log(manhua)
            let temp = this
            let url='?'
            for(let i=0;i<manhua.length;i++){
                url = url+`${manhua[i].par}=${manhua[i].val}&`
            }
            url=url.slice(0,url.length-1)
            url = window.location.origin+window.location.pathname+url
            // this.$router.push(url)
            window.history.pushState(null,null,url)
            console.log(url)
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