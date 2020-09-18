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

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            topDivImg: require('@/assets/image/topDiv1.png')
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
    background-color: #D8E5F7;
    border-top: 3px solid #8BA7E3;
    border-bottom: 2px solid #B4C9F5;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #D8E5F7, #BCD3F5);
    height: 6vh
}
</style>