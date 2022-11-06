---
title: 开源项目
layout: home
---

<div class="test"> {{a}} </div>
<div class="test"> {{ 1+ 1}} </div>
<TheProject />


<script setup>
import TheProject from '../../compoment/TheProject.vue'
const a = "hahha"
</script>

<style>
.test{
    color:red
}
</style>