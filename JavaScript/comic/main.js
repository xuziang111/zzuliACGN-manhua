(function(){

let xxx= new Vue({
    el:'#body-container',
    // router,
    data:{
        manhuadata:[{img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'}],
        querys:{}
    },
    methods:{
        searchmanhua:function(manhua){
            console.log(manhua)
            this.querys = manhua
            let temp = this
            let url='?'
            for(let i=0;i<manhua.length;i++){
                url = url+`${manhua[i].par}=${manhua[i].val}&`
            }
            console.log(url)
            url=url.slice(0,url.length-1)
            url = window.location.origin+window.location.pathname+url
            // this.$router.push(url)
            window.history.pushState(null,null,url)
            console.log(url)
            this.querys = this.getQueryArgs()
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
        },
        getQueryArgs:function(){
            var qs = (location.search.length > 0 ? location.search.substr(1) : ''),
                //保存每一项
                args = {},
                //得到每一项
                items = qs.length ? qs.split('&') : [],
                item = null,
                name = null,
                value = null,
                i = 0,
                len = items.length;
        
                for(i = 0;i<len ;i++){
                    item = items[i].split('='),
                    name = decodeURIComponent(item[0])
                    value = decodeURIComponent(item[1])
                    if(name.length){
                        args[name] = value;
                    }
                }
                return args;
        },
    },
    mounted:function(){
        this.querys = this.getQueryArgs()
    }

}).$mount('#body-container')

}())