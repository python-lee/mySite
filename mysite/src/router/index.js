import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import home from "@/views/home";
import manage from "@/views/manage/manage"

Vue.use(Router);

export default new Router({
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
