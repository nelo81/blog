<template>
    <div id="content">
        <div class="inner-block">
            <div class="year">2017</div>
            <ul class="article-list">
                <li><span>2017-01-06</span>&nbsp;&nbsp;如何养生?</li>
            </ul>
            <div class="year">2016</div>
            <ul class="article-list">
                <li @click="$parent.goPage('/article/1')"><span>2017-01-04</span>&nbsp;&nbsp;如何报名?</li>
                <li @click="$parent.goPage('/article/1')"><span>2016-12-06</span>&nbsp;&nbsp;如何做一个好人?</li>
                <li @click="$parent.goPage('/article/1')"><span>2016-11-06</span>&nbsp;&nbsp;吃什么?</li>
                <li @click="$parent.goPage('/article/1')"><span>2016-01-06</span>&nbsp;&nbsp;生命的起源</li>
            </ul>
        </div>
        <div class="side-nav">
            <ul>
                <li>2017</li>
                <li>2016</li>
                <li>2013</li>
                <li>2012</li>
                <li>1995</li>
                <li>1992</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
.year{
    margin-left: 20px;
    color: gray;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
}
</style>
