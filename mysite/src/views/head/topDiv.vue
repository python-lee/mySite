<template>
  <div>
    <div class="headBox">
      <div class="leftHead">HC.Lee</div>
      <div class="rightHead">
        <p>
          <a class="menuLink">注册</a>
        </p>
        <p>
          <a class="menuLink">登录</a>
        </p>
      </div>
    </div>
    <div class="menuBox">
      <ul class="menuTab">
        <li v-for="(item,index) in menuList" :key="index" :class="isActive(item.name)">
          <a class="menuLink" @click.stop="jumpPage(item.path)">{{item.title}}</a>
        </li>
      </ul>
      <div class="menuSearch">
        <div class="menuSearchInput">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="menuSearchButton">
          <el-button size="small">搜索</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { topMenu } from "@/config.js";
export default {
  computed: {
    isActive(name) {
      return name => {
        return this.$store.state.currentActiveMenu === name ? "active" : "";
      };
    }
  },
  data() {
    return {
      input: "",
      topDivImg: require("@/assets/image/topDiv1.png"),
      menuList: topMenu
    };
  },
  methods: {
    /*
     *跳转到某个页面
     * @path {String} 另一个页面的路径
     */
    jumpPage(toPath) {
      this.$router.push({ path: toPath });
    }
  }
};
</script>

<style lang="stylus" scoped>
.active {
  background: white;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
  background: linear-gradient(to bottom, #e0e0e0, #fff 6px);
}

.headBox {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 15px;
  position: relative;
  height: 67px;

  .leftHead {
    display: flex;
    cursor: default;
    align-items: center;
    font-family: isabel;
    font-size: 40px;
    padding-left: 40px;
  }

  .rightHead {
    position: absolute;
    right: 15px;
    vertical-align: middle;

    p:first-child {
      margin-right: 10px;
    }

    >p {
      line-height: 8vh;
      margin: 0px;
      display: inline-block;
      font-size: 12px;
    }
  }
}

.menuBox {
  position: relative;
  background-color: #D8E5F7;
  border-top: 3px solid #8BA7E3;
  border-bottom: 2px solid #B4C9F5;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #D8E5F7, #BCD3F5);
  height: 48px;

  .menuTab {
    display: block;
    list-style-type: none;
    margin: 0px 0px 0px 100px;

    > li {
      float: left;
      font-size: 14px;
      padding: 0 16px;
      height: 48px;
      line-height: 48px;
      margin-right: 5px;
    }
  }

  .menuSearch {
    display: flex;
    position: absolute;
    right: 50px;
    top: 15%;

    >div {
      display: inline-block;
    }
  }
}

.menuSearchInput {
  .el-input {
    .el-input__inner {
      height: 35px;
      border-radius: 15px;
    }
  }
}

.menuLink {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
<style type="text/css">
.menuSearchInput .el-input .el-input__inner {
  height: 35px;
  border: 1px solid #86a0d6;
  border-radius: 2px;
}
.menuSearchButton .el-button {
  height: 35px;
  /* width: 50px; */
  border: 1px solid #86a0d6;
  background: #f8f8f8;
  border-radius: 2px;
  color: #555;
  font-size: 12px;
}
</style>
