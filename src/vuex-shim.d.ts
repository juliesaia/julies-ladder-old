// vuex-shim.d.ts

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    user: { 
        name: String, 
        id: String, 
        steam: Object, 
        ready: Boolean 
    }
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}