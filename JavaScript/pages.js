let comic = Vue.component('comic',{
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
                prepage:'/comic/1-1-1-1-1',
                nextpage:'/comic/1-1-1-1-6'
            },
            isactive:['active','','','',''],
            article:[],
        pages:[1,2,3,4,5],
        pagess:['/comic/1-1-1-1-1','/comic/1-1-1-1-2','/comic/1-1-1-1-3','/comic/1-1-1-1-4','/comic/1-1-1-1-5'],
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
    methods:{
        creatpage:function(e){
            e = e.split('-')[4]-0
            console.log(e)
            if(e==1){
                this.isflip={
                    pre:'disabled',
                next:'',
                prepage:'',
                nextpage:'/comic/1-1-1-1-6'
                }
                this.isactive=['active','','','','']
                this.pages=[1,2,3,4,5],
                this.pagess=['/comic/1-1-1-1-1','/comic/1-1-1-1-2','/comic/1-1-1-1-3','/comic/1-1-1-1-4','/comic/1-1-1-1-5']
                console.log(this.isflip)
            }
            if(e==2){
                this.isflip={
                    pre:'',
                next:'',
                prepage:`/comic/1-1-1-1-${e-1}`,
                nextpage:`/comic/1-1-1-1-${e+1}`
                }
                this.isactive=['','active','','','']
                this.pages=[1,2,3,4,5],
                this.pagess=['/comic/1-1-1-1-1','/comic/1-1-1-1-2','/comic/1-1-1-1-3','/comic/1-1-1-1-4','/comic/1-1-1-1-5']
            }
            if(e >= 3 ){
                this.isflip={
                    pre:'',
                next:'',
                prepage:`/comic/1-1-1-1-${e-1}`,
                nextpage:`/comic/1-1-1-1-${e+1}`
                }
                this.pages=[e-2,e-1,e,e+1,e+2]
                this.isactive=['','','active','','']
                this.pagess=[`/comic/1-1-1-1-${this.pages[0]}`,`/comic/1-1-1-1-${this.pages[1]}`,`/comic/1-1-1-1-${this.pages[2]}`,`/comic/1-1-1-1-${this.pages[3]}`,`/comic/1-1-1-1-${this.pages[4]}`]
            }
            // console.log(e.target.getAttribute('data-page'))
            // console.log(e.target)
            // this.$emit('loadpage',{page:'comic',part:'article',num:e.target.getAttribute('data-page')})
        },
        getrouter:function(){
            let temp = this.$route.params.page.split('-')
            console.log(temp)
            let type,area,state,word,num
            type = temp[0]
            area = temp[1]
            state = temp[2]
            word = temp[3]
            num = temp[4]
            return {
                type,area,state,word,num
            }
        }
    },
    mounted:function(){
        //进入组建时触发
        console.log(this.$route.query)
        console.log(this.$route.params)
            this.$emit('loadpage',{page:'cv',part:'article',num:this.$route.params.id})
            this.creatpage(this.$route.params.page)
        },
        beforeRouteUpdate (to, from, next) {
            //每次同组件间跳转触发
            this.$emit('loadpage',{page:'cv',part:'article',num:to.params.id})
            this.creatpage(to.params.page)
            next()
          },
})