import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    // user:'',
    // content:''
    list: [
      {
          id: Date.now(),
          user: "张三",
          content: "我是张三,我是张三,我是张三.重要的事情说三遍！"
      },
      {
          id: Date.now(),
          user: "李四",
          content: "我是李四,我是李四,我是李四.重要的事情说三遍！"
      },
      {
          id: Date.now(),
          user: "王五",
          content: "我是王五,我是王五,我是王五.重要的事情说三遍！"
      },
      {
          id: Date.now(),
          user: "赵六",
          content: "我是赵六,我是赵六,我是赵六.重要的事情说三遍！"
      }
  ]
  },
  mutations:{
    postComment(state ,data) {
      state.list.unshift(data.a);
    },
  },
  getters:{
    read:function(state){
      return state.list
    }
  }
})

export default store;