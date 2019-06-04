(function(){
    let topbar = new Vue({
        el:'#topbar',
        data:{
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
                {name:'字母',type:[{type:'全部',href:'#',classname:''},{type:'A',href:'#',classname:''},{type:'B',href:'#',classname:''},{type:'C',href:'#',classname:''},{type:'D',href:'#',classname:''},{type:'E',href:'#',classname:''},{type:'F',href:'#',classname:''},{type:'G',href:'#',classname:''},{type:'H',href:'#',classname:''},{type:'I',href:'#',classname:''},{type:'J',href:'#',classname:''},{type:'K',href:'#',classname:''},{type:'L',href:'#',classname:''},{type:'M',href:'#',classname:''},{type:'N',href:'#',classname:''},{type:'O',href:'#',classname:''},{type:'P',href:'#',classname:''},{type:'Q',href:'#',classname:''},{type:'R',href:'#',classname:''},{type:'S',href:'#',classname:''},{type:'T',href:'#',classname:''},{type:'U',href:'#',classname:''},{type:'V',href:'#',classname:''},{type:'W',href:'#',classname:''},{type:'X',href:'#',classname:''},{type:'Y',href:'#',classname:''},{type:'Z',href:'#',classname:''}]}
            ],
        },
        methods:{
            startsearch:function(e){
                console.log(e.currentTarget)
                let temp =e.currentTarget.getAttribute('data-index')
            }
        },
    })


}())