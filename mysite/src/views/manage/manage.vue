<template>
  <div class="manageBox">
    <div class="leftMenu">
      <sideBarMenu :menuList="leftList"></sideBarMenu>
    </div>
    <div class="rightBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBarMenu from "@/components/sideBarMenu";
import { manageSideBarMenu } from "@/config.js";
export default {
  components: {
    sideBarMenu
  },
  data() {
    return {
      leftList: manageSideBarMenu
    };
  }
};
</script>

<style lang="stylus" scoped>
.manageBox {
  display: flex;

  .leftMenu {
    height: calc(100vh - 120px);
    min-width: 150px;
    width: 150px;
    background-color: #e3eff5;
    border-right: 1px solid;
  }
  .rightBox {
      box-sizing: border-box
      width: 100%
      padding: 20px 20px 10px 10px
  }
}
</style>
