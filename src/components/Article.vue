<template>
    <div id="content">
        <div class="inner-block">
            <h2 class="title">如何做一个好人?</h2>
            <h6 class="subtitle">发表于2016-12-06&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <router-link :to="{path:'/tag/1'}">生活</router-link>，<router-link :to="{path:'/tag/2'}">学习</router-link>
            </h6>
            <p class="textbody">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                在我们生活的世界中，善良、谦卑及同情心等基本价值经常没有得到应有的重视。
                媒体常美化傲慢、自私的行为模式。人们普遍上过分注重日常职责及个人的不安全感，
                而忽略了个人发展的目标。从确定你的个人价值观开始，重拾自己的诚信意识或善良的本性。
                我们可以寻求宗教的指引，但终需自己学习定义本身的道德观。其中一个最简单的方法是爱他人，
                正如你希望被对待的那样去对待他们。试着在想到自己前先为他人着想。
                即使是每天做些小事也能大大地充实及提升你和周围的人的生活。做一个好人并不容易，因为你必须相信别人以及你看不见的人。</p>
            <div class="arrow last"><img src="../assets/left-arrow.png">上一篇：吃什么</div>
            <div class="arrow next">下一篇：如何报名<img src="../assets/right-arrow.png"></div>
        </div>
    </div>
</template>

<script>
export default {
 
}
</script>

<style scope>
#main

.title{
    color: #505050;
    font-weight: 500;
    margin: 0;
}

.subtitle{
    font-size: 10px;
    font-weight: 400;
    color: #A8A8A8;
    margin-top: 10px;
    margin-bottom: 60px;
}

.textbody{
    font-size: 15px;
    text-align: left;
    color: #000;
    line-height: 30px;
    margin-bottom: 150px;
}

.arrow:hover{
    color: #000;
}

.last{
    height: 15px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;
    color: #505050;
    float: left;
}

.last img{
    float: left;
}

.next{
    height: 15px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;
    color: #505050;
    float: right;
}

.next img{
    float: right;
}
</style>
