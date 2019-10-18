let comic = Vue.component('comic',{
    props:['manhuadata'],
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
        <router-link :to='isflip.prepage' aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      
      <li v-for="(item3,index) in pages" :class='isactive[index]'><router-link :to="pagess[index]"><span :data-page="item3">{{item3}}</span></router-link></li>
      <li :class='isflip.next'>
        <router-link :to='isflip.nextpage' aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
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
                prepage:'/comic?type=热血&area=国漫&progress=全部&word=热血&page=1',
                nextpage:'/comic?type=热血&area=国漫&progress=全部&word=热血&page=2'
            },
            isactive:['active','','','',''],
            article:[],
        pages:[1,2,3,4,5],
        pagess:['/comic?type=热血&area=国漫&progress=全部&word=热血&page=1','/comic?type=热血&area=国漫&progress=全部&word=热血&page=2','/comic?type=热血&area=国漫&progress=全部&word=热血&page=3','/comic?type=热血&area=国漫&progress=全部&word=热血&page=4','/comic?type=热血&area=国漫&progress=全部&word=热血&page=5'],
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
                console.log('xxx')
                console.log(this.manhuadata)
                this.manhuaList = this.manhuadata
            },
            // immediate: true,
            deep:true,
        }
        
    },
    methods:{
        creatpages:function(to){
            console.log(to)
            let page = to.query
            // e = e.split('-')[4]-0
            let temp = this.creatpage(page)
            console.log(temp)
            let currentpage = to.query.page - 0
            console.log(currentpage)
            if(currentpage==1){
                this.isflip={
                    pre:'disabled',
                next:'',
                prepage:'',
                nextpage:'${temp}2'
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
            let temppage = `/comic?type=${page.type}&area=${page.area}&progress=${page.progress}&word=${page.word}&page=`
            return temppage
        },
        getrouter:function(){
            console.log(this.$route.query)
            let chaxuncanshu = this.$route.query
            let temp=[]
            let i = 0
            for(let key  in chaxuncanshu){
                temp[i]={}
                temp[i].par=key
                temp[i].val=chaxuncanshu[key]
                i++
            }
            return temp
            // let temp = this.$route.params.page.split('-')
            // console.log(temp)
            // let type,area,state,word,num
            // type = temp[0]
            // area = temp[1]
            // state = temp[2]
            // word = temp[3]
            // num = temp[4]
            // return {
            //     type,area,state,word,num
            // }
        },
        jiazai:function(to){
            let temp = this.getrouter()
        this.$emit('searchmanhua',temp)
        this.creatpages(to)
        }
        
    },
    mounted:function(){
        //进入组建时触发
        // this.jiazai()
        },
        beforeRouteUpdate (to, from, next) {
            //每次同组件间跳转触发
            console.log(to)
            this.jiazai(to)
            this.creatpages(to)
            next()
          },
})