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
        creatpage:function(){
            let page = this.$route.query.page
            // e = e.split('-')[4]-0
            console.log(page)
            // if(e==1){
            //     this.isflip={
            //         pre:'disabled',
            //     next:'',
            //     prepage:'',
            //     nextpage:'/comic/1-1-1-1-6'
            //     }
            //     this.isactive=['active','','','','']
            //     this.pages=[1,2,3,4,5],
            //     this.pagess=['/comic/1-1-1-1-1','/comic/1-1-1-1-2','/comic/1-1-1-1-3','/comic/1-1-1-1-4','/comic/1-1-1-1-5']
            //     console.log(this.isflip)
            // }
            // if(e==2){
            //     this.isflip={
            //         pre:'',
            //     next:'',
            //     prepage:`/comic/1-1-1-1-${e-1}`,
            //     nextpage:`/comic/1-1-1-1-${e+1}`
            //     }
            //     this.isactive=['','active','','','']
            //     this.pages=[1,2,3,4,5],
            //     this.pagess=['/comic/1-1-1-1-1','/comic/1-1-1-1-2','/comic/1-1-1-1-3','/comic/1-1-1-1-4','/comic/1-1-1-1-5']
            // }
            // if(e >= 3 ){
            //     this.isflip={
            //         pre:'',
            //     next:'',
            //     prepage:`/comic/1-1-1-1-${e-1}`,
            //     nextpage:`/comic/1-1-1-1-${e+1}`
            //     }
            //     this.pages=[e-2,e-1,e,e+1,e+2]
            //     this.isactive=['','','active','','']
            //     this.pagess=[`/comic/1-1-1-1-${this.pages[0]}`,`/comic/1-1-1-1-${this.pages[1]}`,`/comic/1-1-1-1-${this.pages[2]}`,`/comic/1-1-1-1-${this.pages[3]}`,`/comic/1-1-1-1-${this.pages[4]}`]
            // }
            // console.log(e.target.getAttribute('data-page'))
            // console.log(e.target)
            // this.$emit('loadpage',{page:'comic',part:'article',num:e.target.getAttribute('data-page')})
        },
        creatpage:function(page){
            let temppage = `/comic?type=${page.type}&area=${page.area}&progress=${page.progress}&word=${page.word}&page=${page.page}`
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
        jiazai:function(){
            let temp = this.getrouter()
        this.$emit('searchmanhua',temp)
        }
        
    },
    mounted:function(){
        //进入组建时触发
        // this.jiazai()
        },
        beforeRouteUpdate (to, from, next) {
            //每次同组件间跳转触发
            this.jiazai()
            next()
          },
})