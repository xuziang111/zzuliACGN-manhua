let topbar = Vue.component('topbar',{
    template:`
    <div id='topbar'>
    <ul class='topbartype'>
        <li v-for='item in type'>
            <a :href='item.href'>{{item.type}}</a>
        </li>
    </ul>
    <hr>
    <ul class='text-left'>
        <li v-for='(item2,index1) in list'>
            <dl :data-index='index1'>
                <dt>{{item2.name}}</dt>
                <dd v-for='(item3,index2) in item2.type' :class='item3.classname' :data-index1='index1' :data-index2='index2' :data-param='item3.type' @click='startsearch'>{{item3.type}}</dd>
            </dl>
        </li>
    </ul>
</div>
    `,
//type area progress word
    data:function(){
        return {
            type:[{type:'热血',href:'#',classname:'active'},
            {type:'恋爱',href:'#',classname:''},
            {type:'百合',href:'#',classname:''},
            {type:'彩虹',href:'#',classname:''},
            {type:'冒险',href:'#',classname:''},
            {type:'后宫',href:'#',classname:''},
            {type:'悬疑',href:'#',classname:''},
            {type:'推理',href:'#',classname:''},
            {type:'搞笑',href:'#',classname:''},
            {type:'奇幻',href:'#',classname:''},
            {type:'萌系',href:'#',classname:''},
            {type:'日常',href:'#',classname:''},
            {type:'治愈',href:'#',classname:''},
            {type:'穿越',href:'#',classname:''},
        ],
        list:[{par:'area',name:'地区',type:[{type:'全部',href:'#',classname:'active'},{type:'日漫',href:'#',classname:''},{type:'国漫',href:'#',classname:''},{type:'美漫',href:'#',classname:''}]},
            {par:'progress',name:'进度',type:[{type:'全部',href:'#',classname:'active'},{type:'连载',href:'#',classname:''},{type:'完结',href:'#',classname:''}]},
            {par:'word',name:'字母',type:[{type:'热血',classname:'active'},{type:'恋爱',classname:''},
            {type:'百合',classname:''},]}
        ],
        }
    },
    methods:{
        startsearch:function(e){
            let temp1 = e.currentTarget.getAttribute('data-index1')
            let temp2 = e.currentTarget.getAttribute('data-index2')
            for(let j = 0;j<this.list[temp1].type.length;j++){
                this.list[temp1].type[j].classname = ''
            }
            this.list[temp1].type[temp2].classname='active'
            let temp ={}
            for(let i=0;i<this.type.length;i++){
                if(this.type[i].classname=='active'){
                    temp.type = this.type[i].type
                    break
                }
            }
            for(let i=0;i<this.list.length;i++){
                for(let j=0;j<this.list[i].type.length;i++){
                    if(this.list[i].type[j].classname=='active'){
                        temp[this.list[i].par]= this.list[i].type[j].type
                        break
                    }
                }
            }
            console.log(temp)
            // debugger
            this.$emit('searchmanhua',temp)
        }
    },
})