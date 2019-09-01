import Vue from "vue";
import Router from "vue-router";

import CatBreeds from '@/views/CatBreeds.vue';
import FavouriteCats from '@/views/FavouriteCats';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path:'',
      name:'cat-breeds',
      component: CatBreeds,
      props: true
    },
    {
      path:'/favourites',
      name:'favourite-cats',
      component:FavouriteCats
    }
  ]
});

export default router;
