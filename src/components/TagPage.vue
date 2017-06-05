<template>
<div id="content">
    <div class="inner-block">
        <div class="tag-title">生活</div>
        <ul class="article-list">
            <li @click="$parent.goPage('/article/1')"><span>2017-01-06</span>&nbsp;&nbsp;如何养生?</li>
            <li @click="$parent.goPage('/article/1')"><span>2017-01-04</span>&nbsp;&nbsp;如何报名?</li>
            <li @click="$parent.goPage('/article/1')"><span>2016-12-06</span>&nbsp;&nbsp;如何做一个好人?</li>
            <li @click="$parent.goPage('/article/1')"><span>2016-11-06</span>&nbsp;&nbsp;吃什么?</li>
            <li @click="$parent.goPage('/article/1')"><span>2016-01-06</span>&nbsp;&nbsp;生命的起源</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style scope>
.tag-title{
    width: 150px;
    height: 50px;
    line-height: 50px;
    background-size: 100% 100%;
    background-image: url(../assets/tag-unit.png);
    background-repeat: no-repeat;
    color: white;
    margin: 50px 0;
}

.tag-title::before{
    position: relative;
    float: left;
    content: '';
    display: block;
    height: 70px;
    border-left: 1px dashed #A8A8A8;
    left: 25px;
    top: 30px;
}
</style>
