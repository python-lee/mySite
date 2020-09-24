<template>
  <div>
    <div class="headBox">
      <div class="leftHead">HC.Lee</div>
      <div class="rightHead">
        <p>注册</p>
        <p>登录</p>
      </div>
    </div>
    <div class="menuBox">
        <ul class="menuTab">
            <li v-for="(item,index) in menuList" :key="index">
                <a href="#" class="menuLink">{{item}}</a>
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
export default {
    data () {
        return {
            topDivImg: require('@/assets/image/topDiv1.png'),
            menuList: ['网站首页', '前端技术', '好文推荐', '前端在线资源', '后台管理']
        }
    }
}
</script>

<style lang="stylus" scoped>
.headBox {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 15px;
    position: relative;
    height: 67px;
    .leftHead {
        display: flex;
        align-items: center;
        font-family: isabel;
        font-size: 40px;
        padding-left: 40px
    }
    .rightHead {
        position: absolute;
        right: 15px;
        vertical-align: middle
        p:first-child {
            margin-right:10px;
        }
        >p {
            line-height: 8vh
            margin: 0px
            display: inline-block
            font-size: 12px
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
        margin-left: 100px;
        .menuLink {
            text-decoration: none;
            color: black;
        }
        > li {
            float: left;
            font-size: 14px;
            padding: 0 16px;
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
            border-radius:15px;
        }
    }
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
