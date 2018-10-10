export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

// get final style
export const getStyle = (element, attr, NumberMode = 'int') => {
  let target
  // scrollTop 获取方式不同，不属于style，˙而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) { // ie
    target = element.currentStyle[attr]
  } else { // standard
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

// 显示返回顶部按钮，开始，结束，运动；三个过程中国年调用函数判断是否到达目标点
export const showBack = callback => {
  let requestFram, oldScrollTop

  document.addEventListener('scroll', () => {
    showBackFun()
  }, false)
  document.addEventListener('touchstart', () => {
    showBackFun()
  }, { passive: true })
  document.addEventListener('touchmove', () => {
    showBackFun()
  }, { passive: true })

  document.addEventListener('touchend', () => {
    oldScrollTop = document.body.scrollTop
    moveEnd()
  }, { passive: true })

  const moveEnd = () => {
    requestFram = requestAnimationFrame(() => {
      if (document.body.scrollTop !== oldScrollTop) {
        oldScrollTop = document.body.scrollTop
        moveEnd()
      } else {
        cancelAnimationFrame(requestFram)
      }
      showBackFun()
    })
  }

  const showBackFun = () => {
    if (document.body.scrollTop > 500) {
      callback(true)
    } else {
      callback(false)
    }
  }
}

/**
  * sports effects
  * @param {HTMLElement} element sports object, required
  * @param {JSON} target property: target value, required
  * @param {number} duration sports time, optional
  * @param {string} mode sports mode, optional
  * @param {function} callback callback function, chaining animation, optional
   */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => { // we can pass callback parameter at the third place
  clearInterval(element.timer)

  // only pass three parameters
  // judge the third parameter
  if (duration instanceof Function) {
    callback = duration
    duration = 400
  } else if (duration instanceof String) {
    mode = duration
    duration = 400
  }

  // only pass four parameters
  // judge the forth parameter
  if (mode instanceof Function) {
    callback = mode
    mode = 'ease-out'
  }

  const attrStyle = attr => {
    if (attr === 'opacity') {
      return Math.round(getStyle(element, attr, 'float') * 100)
    } else {
      return getStyle(element, attr)
    }
  }
  const rootSize = parseFloat(document.documentElement.style.fontSize)

  const unit = {}
  const initState = {}

  // get target attribute unit and initial style
  Object.keys(target).forEach(attr => {
    if (/[^\d^.]+/gi.test(target[attr])) {
      unit[attr] = target[attr].match(/[^\d.]+/gi)[0] || 'px'
    } else {
      unit[attr] = 'px'
    }
    initState[attr] = attrStyle(attr)
  })

  // delete suffix unit
  Object.keys(target).forEach(attr => {
    if (unit[attr] === 'rem') { // how about %, em, vw, vh, vmin, vmax, these units??
      target[attr] = Math.ceil(parseInt(target[attr]) * rootSize)
    } else {
      target[attr] = parseInt(target[attr])
    }
  })

  let flag = true // image all sports arrive at the ending
  const remberSpeed = {} // record last speed value, needed under `ease-in` mode
  element.timer = setInterval(() => {
    Object.keys(target).forEach(attr => {
      let iSpeed = 0 // step length
      let status = false // whether needs going sports
      let iCurrent = attrStyle(attr) || 0 // current element attribute value
      let speedBase = 0 // base value target spot needs to decrease, differents among three sports
      let intervalTime // steps to divide target value, the bigger its, the smaller iSpeed is, longer the sports time is
      switch (mode) {
        case 'ease-out':
          speedBase = iCurrent
          intervalTime = duration * 5 / 400
          break
        case 'linear':
          speedBase = initState[attr]
          intervalTime = duration * 20 / 400
          break
        case 'ease-in':
          let oldSpeed = remberSpeed[attr] || 0
          iSpeed = oldSpeed + (target[attr] - initState[attr]) / duration
          remberSpeed[attr] = iSpeed
          break
        default:
          speedBase = iCurrent
          intervalTime = duration * 5 / 400
      }
      if (mode !== 'ease-in') {
        iSpeed = (target[attr] - speedBase) / intervalTime
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
      }
      // judge whether in step length error-distance, if in it means arrive at target point
      switch (mode) {
        case 'ease-out':
          status = iCurrent !== target[attr]
          break
        case 'linear':
          status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed)
          break
        default:
          status = iCurrent !== target[attr]
      }

      if (status) {
        flag = false
        // opacity, scrollTop needs special operation
        if (attr === 'opacity') {
          element.style.filter = 'alpha(opacity:' + (iCurrent + iSpeed) + ')'
          element.style.opacity = (iCurrent + iSpeed) / 100
        } else if (attr === 'scrollTop') {
          element.scrollTop = iCurrent + iSpeed
        } else {
          element.style[attr] = iCurrent + iSpeed + 'px'
        }
      } else {
        flag = true
      }

      if (flag) {
        clearInterval(element.timer)
        if (callback) {
          callback()
        }
      }
    })
  }, 20)
}
