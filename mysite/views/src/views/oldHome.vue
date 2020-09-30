<template>
  <div class="bodyDiv" :class="'bodyHight'">
    <div class="myName">
      <h1>HC.Lee</h1>
    </div>
    <topNavi class="topNavi"></topNavi>
    <div class="homeBox">
      <div class="leftBox">
        <img :src="portrait" />
      </div>
      <div class="rightBox">
        <h1>MEET HC.Lee</h1>
        <div class="contentBox">
          <p>
            我叫李洪昌，今年28岁，是一名前端开发工程师，从业两年多。我是电子专业出身，
            以前写过python，前端是一门很有趣的学问，本人打算深耕于此！
          </p>
          <p>
            本人业余喜欢历史、读书、爬山、静坐，有志同道合的同志请一定联系本人！
          </p>
        </div>
      </div>
    </div>
    <div class="qrCode">
      <div class="wechat">
        <img :src="weChat" />
      </div>
    </div>
  </div>
</template>

<script>
import topNavi from "./navi/topNavi";
export default {
  name: "home",
  components: {
    topNavi
  },
  data() {
    return {
      portrait: require("@/assets/image/portrait.png"),
      weChat: require("@/assets/image/weChat.png"),
      tikTok: require("@/assets/image/tikTok.png")
    };
  }
};
</script>

<style scoped lang="stylus">
.bodyDiv {
  box-sizing: border-box;
  background: url('~/static/image/background.png') no-repeat
  background-size:100% 100%
  background-color: #80808017
  border-top: 5px solid
  .myName {
    height: 30%
    margin-top: 20px
    box-sizing: border-box
    font-size: 25px
    display: flex
    justify-content: center
    align-items: center
    >h1 {
      font-family: isabellight-italic, serif;
      color: #3e3e3e;
    }
  }
  .topNavi {
    height: 15%
    padding: 0 30%
  }
  .homeBox {
    display: flex
    padding: 0 25%
    min-height: 300px
    .leftBox {
      height: 250px
      width: 250px
      >img {
        border-radius: 50%
        height: 100%
        width: 100%
      }
    }
    .rightBox {
      width: calc(100% - 250px)
      padding: 0px 0px 0px 50px
      font-family: 'isabel'
      .contentBox {
        >p {
          text-indent: 32px
        }
      }
    }
  }
}
.qrCode {
  position: fixed
  bottom: 20px
  right: 20px
  height: 100px
  width: 100px
  >div>img {
    height: 100%
    width: 100%
  }
}
.bodyHight {
  min-height: 100vh
}
</style>
