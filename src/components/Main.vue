<template>
    <div id="main">
        <div id="side">
            <div id="title">
                <div id="maintitle">我的学习博客</div>
                <div id="subtitle">交流学习</div>
            </div>
            <div id="list">
                <ul>
                    <li @click="goPage('/')"><img src="../assets/home.png"/><a>主页</a></li>
                    <li @click="goPage('/about')"><img src="../assets/person.png"/><a>关于</a></li>
                    <li @click="goPage('/tag')"><img src="../assets/tag.png"/><a>标签</a></li>
                    <li @click="goPage('/table')"><img src="../assets/file.png"/><a>归档</a></li>
                </ul>
            </div>
            <div id="head">
                <img src="../assets/head.jpg"/>
                <p id="name">一叶知秋</p>
                <p id="sign">无聊死啦</p>
            </div>
        </div>
        <router-view></router-view>
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
      },
      goPage (page) {
          this.$router.push(page);
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

.side-nav{
    position: fixed;
    width: 60px;
    top: 50px;
    right: 50px;
}

.side-nav ul{
    margin: 0;
    padding: 0;
    border-radius: 5px;
    background: #fff;
}

.side-nav li{
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    list-style-type: none;
    color: #787878;
    margin: 0px 0;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    transition: all 0.5s ease;
}

.side-nav li:hover{
    background: #787878;
    color: #fff;
    height: 50px;
    line-height: 50px;
}

.side-nav li:first-child{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 1px solid #fff;
}

.side-nav li:last-child{
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: 1px solid #fff;
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

#content{
    width: 80%;
    height: 100%;
    text-align: center;
    margin-left: 30px;
    background: #fff;
}

.inner-block{
    margin: 50px;
    height: 100%;
}

.article-list{
    margin-bottom: 100px;
}

.article-list li{
    height: 30px;
    line-height: 30px;
    text-align: left;
    list-style-type: none;
    margin: 30px 0;
    border-bottom:1px dashed #666666;
    color: #787878;
}

.article-list li:hover{
    color: #000;
}

.article-list li span{
    font-size: 12px;
}

.article-list li::before{
    content: '●';
    position: relative;
    left: -20px;
}

.article-list li::after{
    position: relative;
    float: left;
    content: '';
    display: block;
    height: 60px;
    border-left: 1px dashed #A8A8A8;
    left: -15px;
}
</style>
