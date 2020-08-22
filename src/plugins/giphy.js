import { GiphyFetch } from '@giphy/js-fetch-api'

export default {
  install(Vue) {
    const gf = new GiphyFetch('XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o')
    Vue.prototype.$gf = gf
  }
}