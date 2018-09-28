export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorate.setItem(name, content)
}

export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const getStyle = (element, attr, NumberMode = 'int') => {
  let target
  // scrollTop 获取方式不同，不属于style，˙而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }
  // when getting opacity, needs parseFloat
  return NumberMode === 'float' ? parseFloat(target) : parseInt(target)
}

export const loadMore = (element, callback) => {
  const windowHeight = window.screen.height
  let height, setTop, paddingBottom, marginBottom, requestFram, oldScrollTop

  document.body.addEventListener('scroll', () => {
    loadMore()
  }, false)
  // 运动开始时获取元素高度和offsetTop，padding，margin
  element.addEventListener('touchstart', () => {
    height = element.offsetHeight
    setTop = element.offsetTop
    paddingBottom = getStyle(element, 'paddingBottom')
    marginBottom = getStyle(element, 'marginBottom')
  }, { passive: true })

  // 运动过程中保持监听scrollTop的值判断是否到达底部
  element.addEventListener('touchmove', () => {
    loadMore()
  }, { passive: true })

  // 运动结束时判断是否有惯性运动，惯性运动结束判断是否到达底部
  element.addEventListener('touchend', () => {
    oldScrollTop = document.body.scrollTop
    moveEnd()
  }, { passive: true })

  const moveEnd = () => {
    requestFram = requestAnimationFrame(() => {
      if (document.body.scrollTop !== oldScrollTop) {
        oldScrollTop = document.body.scrollTop
        loadMore()
        moveEnd()
      } else {
        cancelAnimationFrame(requestFram)
        // 为了防止鼠标抬起时已经渲染好数据从而导致从新获取数据，应该重新获取dom高度
        height = element.offsetHeight
        loadMore()
      }
    })
  }

  const loadMore = () => {
    if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
      callback()
    }
  }
}
