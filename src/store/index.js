import { createStore } from 'vuex'

export default createStore({
  state: {
    "user":{
      "username":'',
      "password":'',
      "phone":'',
      "email":'',
      "type":''
    },
    "requestUrl":'http://localhost:8080/',
    address1:0,
    address2:1

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
