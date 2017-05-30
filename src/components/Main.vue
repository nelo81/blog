<template>
    <div id="main">
        <div id="side">
            <div id="title">
                <div id="maintitle">我的学习博客</div>
                <div id="subtitle">交流学习</div>
            </div>
            <div id="list">
                <ul>
                    <li><img src="../assets/home.png"/><a>主页</a></li>
                    <li><img src="../assets/person.png"/><a>关于</a></li>
                    <li><img src="../assets/tag.png"/><a>标签</a></li>
                    <li><img src="../assets/file.png"/><a>归档</a></li>
                </ul>
            </div>
            <div id="head">
                <img src="../assets/head.jpg"/>
                <p id="name">一叶知秋</p>
                <p id="sign">无聊死啦</p>
            </div>
        </div>
        <div id="content">
            <div class="article">
                <p class="title">标题：我的第一篇文章</p>
                <p class="subtitle">2016-01-05</p>
                <p class="summary">本文介绍</p>
                <button>阅读全文</button>
            </div>
            <hr>
            <div class="article">
                <p class="title">标题：我的第一篇文章</p>
                <p class="subtitle">2016-01-05</p>
                <p class="summary">本文介绍</p>
                <button>阅读全文</button>
            </div>
            <hr>
            <div class="article">
                <p class="title">标题：我的第一篇文章</p>
                <p class="subtitle">2016-01-05</p>
                <p class="summary">本文介绍</p>
                <button>阅读全文</button>
            </div>
            <hr>
            <div class="article">
                <p class="title">标题：我的第一篇文章</p>
                <p class="subtitle">2016-01-05</p>
                <p class="summary">本文介绍</p>
                <button>阅读全文</button>
            </div>
        </div>
        <div id="go-top" @click="gotop"><img src="../assets/up.png"></div>
    </div>
</template>

<script>
export default {
  methods:{
      gotop () {
          var anim = setInterval(()=>{
              if(document.body.scrollTop>50){
                  document.body.scrollTop -= 50;
              }
              else if (document.body.scrollTop<=50 && document.body.scrollTop>0) {
                  document.body.scrollTop = 0;
              }
              else{
                  clearInterval(anim);
              }
          },10)
          
      }
  }
}
</script>

<style scope>
#main{
    height: 100%;
    margin: 10px 130px;
    display: flex;
    align-items: stretch;
}

#side{
    width: 300px;
    display: flex;
    flex-direction: column;
}

#title{
    background: #202020;
    color: white;
    text-align: center;
    padding: 10px;
}

#maintitle{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
}

#subtitle{
    height: 30px;
    line-height: 20px;
    font-size: 13px;
}

#list{
    background: #fff;
}

#list ul{
    padding: 0 30px;
}

#list li{
    line-height: 13px;
    font-size: 13px;
    margin: 25px 0;
    list-style-type: none;
    color: #505050;
    cursor: pointer;
}

#list li img{
    width: 13px;
    height: 13px;
    margin-right: 20px;
    float: left;
}

#list li:hover{
    color: #000000
}

#head{
    margin: 10px 0;
    padding: 30px 0;
    text-align: center;
    background: #fff;
}

#head img{
    width: 120px;
    height: 120px;
}

#head #name{
    font-size: 15px;
    font-weight: bold;
}

#head #sign{
    font-size: 10px;
    color: gray;
}

#content{
    width: 80%;
    height: 100%;
    text-align: center;
    margin-left: 30px;
    background: #fff;
}

.article{
    margin: 80px 0;
}

.article button{
    border: 2px solid #202020;
    border-radius: 2px;
    outline: none;
    width: 120px;
    height: 35px;
    font-size: 13px;
    background: white;
    color: #202020;
    font-weight: 570;
    transition: all 0.5s ease;
}

.article button:hover{
    background: #202020;
    color: white;
}

.article .title{
    color: #202020;
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: 300;
}

.article .subtitle{
    color: #888888;
    font-size: 15px;
}

.article .summary{
    color: #202020;
    font-size: 17px;
    text-align: left;
    margin: 50px 50px;
}

#go-top{
    position: fixed;
    bottom: 20px;
    right: 50px;
}

#go-top img{
    width: 50px;
    height: 50px;
}
</style>
