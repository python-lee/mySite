import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentActiveMenu: '',
        activeSideBar: ''
    },
    mutations: {
        changeActiveMenu (state, menu) {
            state.currentActiveMenu = menu
        },
        changeActiveSideBar (state, sideBar) {
            state.activeSideBar = sideBar
        }
    }
})

export {store}