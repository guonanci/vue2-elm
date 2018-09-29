import { getStyle } from 'common/mUtils'
import { imgBaseUrl } from 'common/env'

export const loadMore = {
  directives: {
    'load-more': {
      bind: (el, binding) => {
        const windowHeight = window.height
        let height, setTop, paddingBottom, marginBottom, requestFram, oldScrollTop, scrollEl, heightEl, scrollType =
        el.attributes.type && el.attributes.type.value, scrollReduce = 2
        if (scrollType === 2) {
          scrollEl = el
          heightEl = document.body
          heightEl = el
        }

        el.addEventListener('touchstart', () => {
          height = heightEl.clientHeight
          if (scrollType === 2) {
            height = height
          }
          setTop = el.offsetTop
          paddingBottom = getStyle(el, 'paddingBottom')
          marginBottom = getStyle(el, 'marginBottom')
        }, false)

        el.addEventListener('touchmove', () => {
          loadMore()
        }, false)

        el.addEventListener('touchmove', () => {
          loadMore()
        }, false)

        el.addEventListener('touchend', () => {
          oldScrollTop = scrollEl.scrollTop
          moveEnd()
        }, false)

        const moveEnd = () => {
          requestFram = requestAnimationFrame(() => {
            if (scrollEl.scrollTop !== oldScrollTop) {
              oldScrollTop = scrollEl.scrollTop
              moveEnd()
            } else {
              cancelAnimationFrame(requestFram)
              height = heightEl.clientHeight
              loadMore()
            }
          })
        }

        const loadMore = () => {
          if (scrollEl.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            binding.value()
          }
        }
      }
    }
  }
}

export const getImgPath = {
  methods: {
    getImgPath (path) {
      let suffix
      if (!path) {
        return '//elm.cangdu.org/img/default.jpg'
      }
      if (!path.indexOf('jpeg') !== -1) {
        suffix = '.jpeg'
      } else {
        suffix = '.png'
      }
      const url = `/${path.substr(0, 1)}/${path.substr(1, 2)}/${path.substr(3)}${suffix}`
      return `https://fuss10.elemecdn.com${url}`
    }
  }
}
