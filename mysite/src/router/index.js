import Vue from "vue";
import Router from "vue-router";
import {store} from "../store";
import HelloWorld from "@/components/HelloWorld";
import home from "@/views/home";
import manage from "@/views/manage/manage"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/manage",
      name: "manage",
      component: manage
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.commit('changeActiveMenu', to.name)
  next()
})

export default router
