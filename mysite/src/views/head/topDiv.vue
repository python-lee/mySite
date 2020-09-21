<template>
    <div>
        <div class="headBox">
            <!-- <img :src='topDivImg' > -->
            <div class="leftHead">

            </div>
            <div class="rightHead">
                <p>注册</p>
                <p>登录</p>
            </div>
        </div>
        <div class="menuBox">
            <ul class="menuTab">
                <li v-for="(item,index) in menuList" :key="index">{{item}}</li>
            </ul>
            <div class="menuSearch">
                <div class="menuSearchInput">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="menuSearchButton">
                    <el-button disabled>搜索</el-button>
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
            menuList: ['网站首页', '前端技术', '好文推荐', '前端在线资源']
        }
    }
}
</script>

<style lang="stylus" scoped>
.headBox {
    height: 8vh
    .leftHead {

    }
    .rightHead {
        float: right
        padding-right: 10px
        vertical-align: middle
        height: 100%
        >p {
            line-height: 8vh
            margin: 0px
            display: inline-block
            font-size: 12px
        }
    }
    /* >img {
        width: 100%
        height: 100%
    } */
}
.menuBox {
    position: relative;
    background-color: #D8E5F7;
    border-top: 3px solid #8BA7E3;
    border-bottom: 2px solid #B4C9F5;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #D8E5F7, #BCD3F5);
    height: 6vh
    .menuTab {
        display: block;
        list-style-type: none;
        margin-left: 100px;
        > li {
            float: left;
            font-size: 14px;
            padding: 0 16px;
        }
    }
    .menuSearch {
        position: absolute;
        right: 5px;
        top: 10%;
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
    border-radius: 0px;
}
.menuSearchButton .el-button {
    height: 35px;
    width: 50px;
    border-radius: 0px
}
</style>