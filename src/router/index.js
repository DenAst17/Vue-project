import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/calculator",
      name: "calculator",
      component: () => import("../views/CalcView.vue"),
    },
    {
      path: "/starwars/people",
      name: "starwars_people",
      component: () => import("../views/StarWarsPeopleView.vue"),
    },
    {
      path: "/starwars/planets",
      name: "starwars_planets",
      component: () => import("../views/StarWarsPlanetsView.vue"),
    },
    {
      path: "/starwars/starships",
      name: "starwars_starships",
      component: () => import("../views/StarWarsStarshipsView.vue"),
    },
  ],
});

export default router;
