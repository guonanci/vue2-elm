<template>
  <div>

  </div>
</template>

<script>

  import { mapState } from 'vuex'
  import { shopList } from 'common/requests'
  import { imgBaseUrl } from 'common/env'
  import { showBack, animate } from 'common/mUtils'
  import { loadMore, getImgPath } from './mixin'
  import loading from './loading'
  import ratingStar from './ratingStar'

  export default {
    data () {
      return {
        offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
        shopListArr: [],
        preventRepeatRequest: false, // 到达底部加载数据，防止重复加载
        showBackStatus: false, // 显示返回底部按钮
        showLoading: true, // 显示加载动画
        touchend: false, // 没有更多数据
        imgBaseUrl,
      }
    },
    mounted () {
      this.initData()
    },
    components: {
      loading,
      ratingStar,
    },
    props: ['restaurantCategoryId', 'restaurantCategoryIds', 'sortByType', 'deliveryMode', 'supportIds', 'confirmSelect',
    'geohash'],
    mixins: [loadMore, getImgPath],
    computed: { ...mapState(['latitude', 'longtitude']) },
    methods: {
      async initData () {
        const res = await shopList(this.latitude, this.longtitude, this.offset, this.restaurantCategoryId)
        this.shopListArr = [ ...res ]
        if (res.length < 20) {
          this.touchend = true
        }
        this.hideLoading()
        // 开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
        showBack(status => {
          this.showBackStauts = status
        })
      },
      async loaderMore () {
        if (this.touchend) {
          return
        }
        if (this.preventRepeatRequest) {
          return
        }
        this.showLoading = true
        this.preventRepeatRequest = false

        this.offset += 20
        const res = await shopList(this.latitude, this.longtitude, this.offset, this.restaurantCategoryId)
        this.hideLoading()
        this.shopListArr = [ ...this.shopListArr, ...res]
        if (res.length < 20) {
          this.touchend = true
          return
        }
        this.preventRepeatRequest = false
      },
      backTop () {
        animate(document.body, { scrollTop: '0' }, 400, 'ease-out')
      }


    }
  }
</script>

<style scoped>

</style>
