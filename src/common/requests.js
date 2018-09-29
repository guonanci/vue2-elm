import fetch from './fetch'
import { getStore } from './mUtils'

// get homepage default address
export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
})
// get homepage hot-cites
export const hotcity = () => fetch('/v1/cities', {
  type: 'hot'
})
// get homepage all cities
export const groupcity = () => fetch('/v1/cities', { type: 'group' })
// get curr-city
export const currentcity = number => fetch(`/v1/cities${number}`)
// get search address
export const searchplace = (cityid, value) => fetch('/v1/pois', { type: 'search', city_id: cityid, keyword: value })
