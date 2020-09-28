import Vue from "vue";
import Router from "vue-router";
import { store } from "../store";
import HelloWorld from "@/components/HelloWorld";
import home from "@/views/home";
import manage from "@/views/manage/manage"
import goodArticleManage from "@/views/manage/goodArticle/articleAdmin"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/manage",
      name: "manage",
      component: manage,
      children: [
        {
          path: "goodArticleManage",
          name: "goodArticleManage",
          // component: resolve => (require(["@/views/manage/goodArticle/articleAdmin"], resolve))
          component: goodArticleManage
        }
      ]
    }
  ]
});



router.beforeEach((to, from, next) => {
  store.commit('changeActiveMenu', to.matched[0].name)
  next()
})

export default router
