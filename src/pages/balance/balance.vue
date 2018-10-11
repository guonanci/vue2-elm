<template>
  <div class='page'>
    <head-top title='我的余额' :back='true' />
    <section class='content-container'>
      <section class="content">
          <header class="content-header">
              <span class="content-title-style">当前余额</span>
              <section class="contetn-description">
                  <img src="../../images/description.png" height="24" width="24">
                  <router-link to="/balance/detail" class="content-title-style">余额说明</router-link>
              </section>
          </header>
          <p class="content-num">
              <span>0.00</span>
              <span>元</span>
          </p>
          <div class="promit-button">提现</div>
      </section>
    </section>
    <p class="deal-detail">交易明细</p>
    <div class="no-log">
        <img src="../../images/no-log.png">
        <p>暂无明细记录</p>
    </div>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import headTop from 'components/header/head'
  import alertTip from 'components/common/alertTip'
  export default {
    data () {
      return {
        showAlert: false,
        alertText: null,
      }
    },
    components: {
      headTop, alertTip
    },
  }
</script>

<style scoped lang='scss'>
  .page {
    padding-top: 1.95rem;
    p, span {
      font-family: Helvetica Neue, Tahoma, Arial;
    }
  }
  .content-container {
    padding: .3rem;
    background-color: $blue;
    .content {
      padding: .4rem;
      background-color: $fc;
      border-radius: .15rem;
      .header {
        @include fj;
        font-size: .55rem;
        .description {
          display: flex;
          align-items: center;
          img {
            @include wh(.6rem, .6rem);
            margin-right: .2rem;
          }
          .title-style{
            color: $blue;
          }
        }
        .title-style {
          color: $c666;
        }
      }
      .num {
        span:nth-of-type(1) {
          @include sc(1.8rem, #333);
        }
        span:nth-of-type(2) {
          @include sc(.7rem, #333);
        }
      }
      .promit-button {
        @include wh(100%, 2rem);
        @include sc(.8rem, #fff);
        border-radius: 0.15rem;
        line-height: 2rem;
        margin-top: 1rem;
        text-align: center;
        background-color: #ccc;

      }
    }
  }
  .deal-detail{
      @include sc(.6rem, #999);
      line-height: 2rem;
      padding-left: .5rem;
  }
  .no-log{
      text-align: center;
      margin-top: 1rem;
      img{
          @include wh(8rem, 5rem);
      }
      p{
          margin-top: .5rem;
          @include sc(.7rem, #666);
      }
  }
  .router-slid-enter-active, .router-slid-leave-active {
      transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-to {
      transform: translate3d(2rem, 0, 0);
      opacity: 0;
  }
</style>
