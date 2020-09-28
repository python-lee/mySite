/* 侧边栏导航 */
<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#e3eff5"
      :router="true"
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
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.el-menu-vertical-demo .el-submenu .el-menu-item {
  min-width: 150px;
}
</style>