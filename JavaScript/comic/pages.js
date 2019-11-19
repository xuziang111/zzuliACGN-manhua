let comic = Vue.component('comic',{
    props:['manhuadata','querys'],
    template:`
    <main>
    <div>

    </div>
    <div class="manhua" id='manhua-container'>
        <div class='item-container text-left'>
            <div class='manhua-item' v-for='item in manhuaList'>
                <div><a :href="item.src"><img :src='item.img'></a></div>
                <div><a :href="item.src"><span>{{item.name}}</span></a></div>
                <div><span>评分:</span><span>{{item.score}}</span></div>
                <div><span>最新:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.Ep}}</span></div>
            </div>
        </div>
    </div>
    <nav aria-label="Page navigation">
    <ul class="pagination">
      <li :class='isflip.pre'>
        <span aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </span>
      </li>
      
      <li v-for="(item3,index) in pages" @click="pageclick($event)" :class='isactive[index]'><span :data-page="item3" :data-pages='pagess[index]'>{{item3}}</span></li>
      <li :class='isflip.next'>
        <span aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </span>
      </li>
    </ul>
    </nav>
</main>
    `,
    data:function(){
        return {
            isflip:{
                pre:'disabled',
                next:'disabled',
                prepage:'?type=热血&area=国漫&progress=全部&word=热血&page=1',
                nextpage:'?type=热血&area=国漫&progress=全部&word=热血&page=2'
            },
            isactive:['active','','','',''],
            article:[],
        pages:[1,2,3,4,5],
        pagess:['?type=热血&area=国漫&progress=全部&word=热血&page=1','?type=热血&area=国漫&progress=全部&word=热血&page=2','?type=热血&area=国漫&progress=全部&word=热血&page=3','?type=热血&area=国漫&progress=全部&word=热血&page=4','?type=热血&area=国漫&progress=全部&word=热血&page=5'],
        manhuaList:[{img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'},
        {img:'/Images/1.jpg',src:'#',name:'擅长捉弄的高木同学',Ep:'第76话',score:'5'}],
        }
    },
    watch:{
        manhuadata:{
            handler:function(val){
                console.log(decodeURI(window.location.search))
                this.manhuaList = this.manhuadata
            },
            // immediate: true,
            deep:true,
        },
        querys:{
            handler:function(val){
                this.creatpages(val)
            },
            // immediate: true,
            deep:true,
        }
        
    },
    methods:{
        creatpages:function(to){
            // let to = this.getQueryArgs()
            console.log(to)
            // let page = to.query
            // e = e.split('-')[4]-0
            // console.log(to)
            let temp = this.creatpage(to)
            let currentpage = to.page - 0
            console.log(currentpage)
            if(currentpage==1){
                this.isflip={
                    pre:'disabled',
                next:'',
                prepage:'',
                nextpage:`${temp}2`
                }
                this.isactive=['active','','','','']
                this.pages=[1,2,3,4,5],
                this.pagess=[`${temp}1`,`${temp}2`,`${temp}3`,`${temp}4`,`${temp}5`]
                console.log(this.isflip)
            }
            if(currentpage==2){
                this.isflip={
                    pre:'',
                next:'',
                prepage:`${temp}1`,
                nextpage:`${temp}3`
                }
                this.isactive=['','active','','','']
                this.pages=[1,2,3,4,5],
                this.pagess=[`${temp}1`,`${temp}2`,`${temp}3`,`${temp}4`,`${temp}5`]
            }
            if(currentpage >= 3 ){
                this.isflip={
                    pre:'',
                next:'',
                prepage:`${temp}${currentpage-1}`,
                nextpage:`${temp}${currentpage+1}`
                }
                this.pages=[currentpage-2,currentpage-1,currentpage,currentpage+1,currentpage+2]
                this.isactive=['','','active','','']
                this.pagess=[`${temp}${this.pages[0]}`,`${temp}${this.pages[1]}`,`${temp}${this.pages[2]}`,`${temp}${this.pages[3]}`,`${temp}${this.pages[4]}`]
            }
            // this.$emit('loadpage',{page:'comic',part:'article',num:e.target.getAttribute('data-page')})
        },
        creatpage:function(page){
            let temppage = `?type=${page.type}&area=${page.area}&progress=${page.progress}&word=${page.word}&page=`
            return temppage
        },
        getQueryArgs:function(e){
            if(!e){
                e = location.search
            }
            console.log(e)
            console.log(e.length)
            var qs = (e.length > 0 ? e.substr(1) : ''),
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
        getrouter:function(){
            console.log(this.getQueryArgs())
            let chaxuncanshu = this.getQueryArgs()
            let temp=[]
            let i = 0
            for(let key  in chaxuncanshu){
                temp[i]={}
                temp[i].par=key
                temp[i].val=chaxuncanshu[key]
                i++
            }
            return temp
        },
        pageclick:function(e){
            let temp = this.getQueryArgs(e.target.getAttribute("data-pages"))
            console.log(temp)
            let tempquery = []
            let i = 0
            for(let key  in temp){
                tempquery[i]={}
                tempquery[i].par=key
                tempquery[i].val=temp[key]
                i++
            }
            
            this.$emit('searchmanhua',tempquery)
            this.creatpages(this.querys)
        }
        
    },
    mounted:function(){

    },

})