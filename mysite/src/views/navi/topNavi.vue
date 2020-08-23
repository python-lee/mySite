<template>
  <div class="topNaviBody">
    <div v-for="item in menu">
      <a href="" class="menuLink">{{ item }}</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //   menu: ["ABOUT", "PORTFOLIO", "HC.Lee", "BLOG", "CONTACT"]
      menu: ["关于", "简历", "我的", "博客", "联系我"]
    };
  }
};
</script>
<style scoped lang="stylus">
.topNaviBody {
    display: flex
    justify-content: space-between
    >div {
        height: 100px
    }
    .menuLink {
        text-decoration:none
        font-family: 'isabel'
        background-color: transparent
        color: #3e3e3e !important
        font-size: 25px
    }
}
</style>
