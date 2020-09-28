<template>
  <div>
    <div class="leftMenu">
      <sideBarMenu :menuList="leftList"></sideBarMenu>
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
.leftMenu {
  height: calc(100vh - 120px);
  width: 150px;
  background-color: #e3eff5;
  border-right: 1px solid;
}
</style>
