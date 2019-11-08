let topbar = Vue.component('topbar',{
    template:`
    <div id='topbar'>
    <ul class='topbartype'>
        <li v-for='(item,index3) in type'>
            <span @click='topbarclick' :data-index3='index3'>{{item.type}}</span>
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
            type:[{type:'热血',classname:''},
            {type:'恋爱',classname:''},
            {type:'百合',classname:''},
            {type:'彩虹',classname:''},
            {type:'冒险',classname:''},
            {type:'后宫',classname:''},
            {type:'悬疑',classname:''},
            {type:'推理',classname:''},
            {type:'搞笑',classname:''},
            {type:'奇幻',classname:''},
            {type:'萌系',classname:''},
            {type:'日常',classname:''},
            {type:'治愈',classname:''},
            {type:'穿越',classname:''},
        ],
        list:[{par:'area',name:'地区',type:[{type:'全部',classname:''},{type:'日漫',classname:''},{type:'国漫',classname:''},{type:'美漫',classname:''}]},
            {par:'progress',name:'进度',type:[{type:'全部',classname:''},{type:'连载',classname:''},{type:'完结',classname:''}]},
            {par:'word',name:'字母',type:[{type:'热血',classname:''},{type:'恋爱',classname:''},{type:'百合',classname:''}]}
        ],
        }
    },
    methods:{
        startsearch:function(e){
            console.log(this.list[2].type)
            let temp1 = e.currentTarget.getAttribute('data-index1')
            let temp2 = e.currentTarget.getAttribute('data-index2')

            for(let j = 0;j<this.list[temp1].type.length;j++){
                this.list[temp1].type[j].classname = ''
            }
            this.list[temp1].type[temp2].classname='active'
            this.searchmanhua()
        },
        topbarclick:function(e){
            let temp3 = e.currentTarget.getAttribute('data-index3')
            for(let j = 0;j<this.type.length;j++){
                this.type[j].classname = ''
            }
            this.type[temp3].classname='active'
            this.searchmanhua()
        },
        searchmanhua:function(){
            let temp =[]
            for(let i=0;i<this.type.length;i++){
                if(this.type[i].classname=='active'){
                    temp[0]={}
                    temp[0].par = 'type' 
                    temp[0].val = this.type[i].type
                    break
                }
            }
            for(let i=0;i<this.list.length;i++){
                for(let j=0;j<this.list[i].type.length;j++){
                    if(this.list[i].type[j].classname=='active'){
                        temp[i+1] = {}
                        temp[i+1].par = this.list[i].par
                        temp[i+1].val = this.list[i].type[j].type
                        break
                    }
                }
            }
            temp[4]={par:'page',val:1}
            console.log(temp)
            // debugger
            this.$emit('searchmanhua',temp)
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
        }
    },
    mounted:function() {
        let query = this.getQueryArgs()
        if(Object.keys(query).length === 0){
            this.type[0].classname = 'active'
            this.list[0].type[0].classname = 'active'
            this.list[1].type[0].classname = 'active'
            this.list[2].type[0].classname = 'active'
        }else{
            let chaxuncanshu = query
            let temp={}
            let i = 0
            for(let key  in chaxuncanshu){
                temp[key]=chaxuncanshu[key]
                i++
            }
    
    
            for(let i=0;i<this.type.length;i++){
                if(this.type[i].type===temp.type){
                    this.type[i].classname='active'
                    break
                }
            }
    
            console.log(temp)
            for(let key  in temp){
                for(let i=0;i<this.list.length;i++){
                    if(this.list[i].par === key){
                        for(let j=0;j<this.type.length;j++){
                            console.log(this.list[i].type[j].type)
                            if(this.list[i].type[j].type===temp[key]){
                                this.list[i].type[j].classname='active'
                                break
                            }
                        }
                        break
                    }
                }
            }
        }
    },
})