<template>
  <div class='page'>
    <head-top title='我的余额' :back='true' />
    <section class='content-container'>

    </section>

  </div>
</template>

<script>
  import headTop from 'components/header'
  import alert from 'components/common/alert'
  export default {
    data () {
      return {
        showAlert: false,
        alertText: null,
      }
    },
    components: {
      headTop, alert
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
      .promit_button {
        @include wh(100%, 2rem);
        @include sc(.8rem, #fff);
      }
    }
  }
</style>
