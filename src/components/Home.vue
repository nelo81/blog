<template>
    <div id="content">
        <div class="article">
            <p class="title">标题：我的第一篇文章</p>
            <p class="subtitle">2016-01-05</p>
            <p class="summary">本文介绍</p>
            <button @click="$parent.goPage('/article/1')">阅读全文</button>
        </div>
        <hr>
        <div class="article">
            <p class="title">标题：我的第一篇文章</p>
            <p class="subtitle">2016-01-05</p>
            <p class="summary">本文介绍</p>
            <button @click="$parent.goPage('/article/1')">阅读全文</button>
        </div>
        <hr>
        <div class="article">
            <p class="title">标题：我的第一篇文章</p>
            <p class="subtitle">2016-01-05</p>
            <p class="summary">本文介绍</p>
            <button @click="$parent.goPage('/article/1')">阅读全文</button>
        </div>
        <hr>
        <div class="article">
            <p class="title">标题：我的第一篇文章</p>
            <p class="subtitle">2016-01-05</p>
            <p class="summary">本文介绍</p>
            <button @click="$parent.goPage('/article/1')">阅读全文</button>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>


<style scope>
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
</style>

