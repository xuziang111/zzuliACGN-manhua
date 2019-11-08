let comic = Vue.component('comic',{
    props:['manhuadata'],
    template:`
    <main>
        <section></section>
        <section></section>
    </main>
    `,
    data:function(){
        return {

        }
    },
    watch:{

        
    },
    methods:{

        
    },
    mounted:function(){
        //进入组建时触发
        // this.jiazai()
    },
        beforeRouteUpdate (to, from, next) {
            //每次同组件间跳转触发

          },
})