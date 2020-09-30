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
      component: home,
      meta: ['home']
    },
    {
      path: "/home",
      name: "home",
      component: home,
      meta: ['home']
    },
    {
      path: "/manage",
      name: "manage",
      component: manage,
      meta: ['manage'],
      children: [
        {
          path: "goodArticleManage",
          name: "goodArticleManage",
          // component: resolve => (require(["@/views/manage/goodArticle/articleAdmin"], resolve))
          component: goodArticleManage,
          meta: ['manage']
        },
        {
          path: "articlePublish",
          name: "articlePublish",
          component: resolve => (require(["@/views/manage/goodArticle/articlePublish"], resolve)),
          meta: ['manage']
        }
      ]
    }
  ]
});



router.beforeEach((to, from, next) => {
  store.commit('changeActiveMenu', to.meta[0])
  store.commit('changeActiveSideBar', to.path)
  next()
})

export default router
