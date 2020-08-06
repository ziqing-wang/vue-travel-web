import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/brazil",
    name: "brazil",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "brazil" */ "../views/Brazil.vue")
  },
  {
    path: "/panama",
    name: "panama",
    props: true,
    component: () =>
      import( /* webpackChunkName: "panama" */ "../views/Panama.vue")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    props: true,
    component: () =>
      import( /* webpackChunkName: "hawaii" */ "../views/Hawaii.vue")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    props: true,
    component: () =>
      import( /* webpackChunkName: "jamaica" */ "../views/Jamaica.vue")
  },
  {
    path: "/destination/:slug",
    name: "destinationDetails",
    props: true,
    component: () =>
      import( /* webpackChunkName: "destination-details" */ "../views/DestinationDetails.vue"),
    children: [{
      path: ":experienceSlug",
      name: "experienceDetails",
      props: true,
      component: () =>
        import( /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue")

    }],
    // check if the destination exist before go to the page
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({
          name: "notFound"
        })
      }
    }
  },

  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import( /* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if(to.hash === "#experience"){
          position.offset = {y:140};
        }
        return false;
      }
    }
  },
  routes
});

export default router;