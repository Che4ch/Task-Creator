import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../View/HomeView.vue"),
    },
  ],
  scrollBehavior(to) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(to.hash ? { el: to.hash, behavior: "smooth" } : { top: 0 })
      }, 500)
    })
  },
})

export default router
