<script setup>
const demo = [
  {
    name: "基于vitepress的博客搭建",
    description:
      "使用vitepress基于vue3和vite搭建一个简单的个人博客页面并且同步到Git Pages",
    tags: ["vue3", "vite", "vitepress", "博客"],
    link: "https://github.com/aiai0603/aiai0603.github.io",
    href: "/articles/other/vitepress/01.vitepress的搭建",
    img: "/vitepress.jpg",
  },
  {
    name: "简答的一个游戏大厅",
    description:
      "使用用Jquery和node做一个游戏大厅,附带5款游戏教程",
    tags: ["nodejs", "express", "jquery"],
    link: "https://github.com/aiai0603/aiai0603.github.io",
    href: "/articles/other/vitepress/01.vitepress的搭建",
    img: "/vitepress.jpg",
  },
];
</script>

<template>
  <div class="container">
    <div class="list">
      <a :href="item.href" v-for="item in demo" :key="item.name" class="card">
        <div class="img-pic">
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="card-word">
         
          <div class="card-name">{{ item.name }}</div>
          <div class="card-desc">{{ item.description }}</div>
          <div class="card-tag">
            <div v-for="tag in item.tags" :key="tag" class="card-tag-item">
              {{ tag }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  max-width: 1440px;
  margin: 24px auto;
  padding: 48px;
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
}
.card {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  background-color:var(--vp-c-bg-soft);
 
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

  &-pic{

    width: 100%;
    object-fit: contain;
  }
  &-word{
    padding: 16px 36px 36px;
    display: flex;
    flex-flow: column;
  }
  &-name {
    font-size: 24px;
    font-weight: 600;
  }
  &-desc {
    margin-top: 16px;
    font-size: 16px;
    color: grey;
  }

  &-tag {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    &-item {
      margin-top: 16px;
      padding: 2px 12px;
      background: var(--vp-c-brand);
      margin-right: 12px;
      font-size: 14px;
      color: white;
      border-radius: 12px;
    }
  }
}
</style>