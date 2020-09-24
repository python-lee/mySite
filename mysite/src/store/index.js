import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentActiveMenu: ''
    },
    mutations: {
        changeActiveMenu (state, menu) {
            state.currentActiveMenu = menu
        }
    }
})

export {store}