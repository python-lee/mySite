/* 侧边栏导航 */
<template>
  <div>
    <el-menu
      :default-active="activeSideBar"
      class="el-menu-vertical-demo"
      background-color="#e3eff5"
      :router="true"
      @open="handleOpen"
    >
      <el-submenu v-for="(item, index) in menuList" :key="index" :index="index+''">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(oneItem, oneIndex) in item.childrends" :key="oneIndex">
          <span slot="title">{{oneItem.title}}</span>
          <el-menu-item
            v-for="(twoItem, twoIndex) in oneItem.subChildrends"
            :key="twoIndex"
            :index="twoItem.index"
          >{{twoItem.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    activeSideBar () {
      return this.$store.state.activeSideBar
    }
  },
  data() {
    return {
    };
  },
  methods: {
    /* 点击菜单的触发事件 */
    handleOpen (index) {
      console.log(index)
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-menu-vertical-demo .el-submenu .el-menu-item {
  min-width: 150px;
  padding-left: 52px !important;
}
</style>