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

    data:function(){
        return {
            type:[{type:'热血',href:'#'},
            {type:'恋爱',href:'#'},
            {type:'百合',href:'#'},
            {type:'彩虹',href:'#'},
            {type:'冒险',href:'#'},
            {type:'后宫',href:'#'},
            {type:'悬疑',href:'#'},
            {type:'推理',href:'#'},
            {type:'搞笑',href:'#'},
            {type:'奇幻',href:'#'},
            {type:'萌系',href:'#'},
            {type:'日常',href:'#'},
            {type:'治愈',href:'#'},
            {type:'穿越',href:'#'},
        ],
        list:[{name:'地区',type:[{type:'全部',href:'#',classname:''},{type:'日漫',href:'#',classname:''},{type:'国漫',href:'#',classname:''},{type:'美漫',href:'#',classname:''}]},
            {name:'进度',type:[{type:'全部',href:'#',classname:''},{type:'连载',href:'#',classname:''},{type:'完结',href:'#',classname:''}]},
            {name:'字母',type:[{type:'热血',href:'#'},
            {type:'恋爱',href:'#'},
            {type:'百合',href:'#'},
            {type:'彩虹',href:'#'},
            {type:'冒险',href:'#'},
            {type:'后宫',href:'#'},
            {type:'悬疑',href:'#'},
            {type:'推理',href:'#'},
            {type:'搞笑',href:'#'},
            {type:'奇幻',href:'#'},
            {type:'萌系',href:'#'},
            {type:'日常',href:'#'},
            {type:'治愈',href:'#'},
            {type:'穿越',href:'#'},]}
        ],
        }
    },
    methods:{
        startsearch:function(e){
            console.log(e.currentTarget)
            let temp1 = e.currentTarget.getAttribute('data-index1')
            let temp2 = e.currentTarget.getAttribute('data-index2')
            for(let j = 0;j<this.list[temp1].type.length;j++){
                this.list[temp1].type[j].classname = ''
            }
            this.list[temp1].type[temp2].classname='active'

        }
    },
})