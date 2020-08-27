import { GiphyFetch } from '@giphy/js-fetch-api'

export default {
  install(Vue) {
    const gf = new GiphyFetch(process.env.VUE_APP_GIPHY_API_KEY)
    Vue.prototype.$gf = gf
  }
}