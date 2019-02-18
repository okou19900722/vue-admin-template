import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import app from '@/store/modules/app.ts'
import user from '@/store//modules/user.ts'
import getters from '@/store/getters.ts'
import {StateInfo} from "@/store/types";

Vue.use(Vuex);

const store: Store<StateInfo> = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
});

export default store
