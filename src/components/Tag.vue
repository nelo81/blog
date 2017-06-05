<template>
   <div id="content">
       <h3>共有 <span>4</span> 个标签</h3>
       <ul class="tag-list">
           <li @click="$parent.goPage('/tag/1')">生活</li>
           <li @click="$parent.goPage('/tag/1')">程序</li>
           <li @click="$parent.goPage('/tag/1')">java</li>
           <li @click="$parent.goPage('/tag/1')">javascript</li>
       </ul>
   </div>
</template>

<script>
export default {
  
}
</script>

<style scope>
h3 span{
    color: red;
}

.tag-list{
    display: flex;
    flex-wrap: wrap;
}

.tag-list li{
    width: 150px;
    height: 50px;
    line-height: 50px;
    background-size: 100% 100%;
    background-image: url(../assets/tag-unit.png);
    background-repeat: no-repeat;
    margin: 20px 30px;
    color: white;
    text-align: center;
}
</style>
 
